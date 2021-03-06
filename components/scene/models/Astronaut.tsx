import * as THREE from 'three'
import {MeshPhysicalMaterial, PMREMGenerator, TextureLoader} from 'three'
import React, {useEffect, useMemo, useRef} from 'react'
import {useAnimations, useGLTF} from '@react-three/drei'
import {GLTF} from 'three-stdlib'
import {useThree} from "@react-three/fiber";

type GLTFResult = GLTF & {
    nodes: {
        backpack: THREE.SkinnedMesh
        helmet_glass: THREE.SkinnedMesh
        suit: THREE.SkinnedMesh
        Root4: THREE.Bone
    }
    materials: {}
}

// type ActionName = 'floating' | 'idle' | 'moon_walk' | 'wave'
// type GLTFActions = Record<ActionName, THREE.AnimationAction>

export const ASTRONAUT_COLOR = "#232e44"

export default function Model() {
    const group = useRef<THREE.Group>(null)
    const {nodes, animations} = useGLTF('/astronaut.gltf') as GLTFResult

    // const {actions} = useAnimations<GLTFActions>(animations, group)
    const {actions} = useAnimations(animations, group)

    useEffect(() => {
        actions.moon_walk?.play()

        let isWaving = false
        const onClick = () => {
            if (isWaving) return
            isWaving = true

            actions.wave?.reset().fadeIn(0.5).play()
            actions.moon_walk?.fadeOut(2.5)
            const timeoutId = setTimeout(() => {
                actions.wave?.reset().fadeOut(1)
                actions.moon_walk?.reset().fadeIn(1)
                isWaving = false
                clearTimeout(timeoutId)
            }, 3000)
        }
        window.addEventListener("click", onClick, false)
        return () => {
            window.removeEventListener("click", onClick)
        }
    }, [])

    const material = useMemo(() => new THREE.MeshPhysicalMaterial({
        color: ASTRONAUT_COLOR,
        metalness: .3,
        roughness: .7,
        clearcoat: .9,
        clearcoatRoughness: .9
    }), [])

    const codeMaterial = useMemo(() => new MeshPhysicalMaterial({
        clearcoat: 1,
        clearcoatRoughness: .1,
        metalness: 1.0,
        roughness: .0,
        reflectivity: .9,
        envMapIntensity: 1,
    }), [])

    useThree(({gl}) => {
        new TextureLoader().load("/orion.jpg", loaded => {
            const envmapLoader = new PMREMGenerator(gl)
            const envmap = envmapLoader.fromEquirectangular(loaded)
            codeMaterial.envMap = envmap.texture
            codeMaterial.needsUpdate = true
        });
    })

    return (
        <group
            ref={group}
            dispose={null}
        >
            <group
                scale={0.02}
                position={[0, -2, 0]}
            >
                <primitive object={nodes.Root4}/>
                <skinnedMesh
                    material={material}
                    geometry={nodes.backpack.geometry}
                    skeleton={nodes.backpack.skeleton}
                />
                <skinnedMesh
                    material={codeMaterial}
                    geometry={nodes.helmet_glass.geometry}
                    skeleton={nodes.helmet_glass.skeleton}
                />
                <skinnedMesh
                    material={material}
                    geometry={nodes.suit.geometry}
                    skeleton={nodes.suit.skeleton}
                />
            </group>
        </group>
    )
}

useGLTF.preload('/astronaut.gltf')
