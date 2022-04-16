import * as THREE from 'three'
import React, {useEffect, useRef, useState} from 'react'
import {useAnimations, useGLTF} from '@react-three/drei'
import {GLTF} from 'three-stdlib'
import {LogoOrbit} from "./LogoOrbit";

type GLTFResult = GLTF & {
    nodes: {
        Object_99: THREE.SkinnedMesh
        Object_100: THREE.SkinnedMesh
        Object_103: THREE.SkinnedMesh
        Object_106: THREE.SkinnedMesh
        GLTF_created_0_rootJoint: THREE.Bone
    }
}

// export const ASTRONAUT_COLOR = "#232e44"
export const ASTRONAUT_COLOR = "#232e44"

// type ActionName = 'wave' | 'floating' | 'idle' | 'moon_walk'
const material = new THREE.MeshLambertMaterial({color: ASTRONAUT_COLOR})

const Astronaut = () => {
    const group = useRef<THREE.Group>(null)
    const [isWaving, setIsWaving] = useState(false)
    const {nodes, animations} = useGLTF('/models/astronaut.gltf') as GLTFResult
    const {actions} = useAnimations(animations, group)

    useEffect(() => {
        actions.moon_walk?.reset().fadeIn(0.5).play()
        const onObjectClick = () => {
            setIsWaving(true)
        }
        window.addEventListener("click", onObjectClick, false)
    })

    useEffect(() => {
        if (!isWaving) return;
        actions.wave?.reset().fadeIn(0.5).play()
        actions.moon_walk?.fadeOut(2.5)
        const timeoutId = setTimeout(() => {
            actions.wave?.fadeOut(1)
            actions.moon_walk?.reset().fadeIn(1)
            setIsWaving(false)

            clearTimeout(timeoutId)
        }, 3000)
    }, [actions.moon_walk, actions.wave, isWaving])

    return (
        <group ref={group} dispose={null}>
            <group rotation={[0, 0, 0]} position={[0, -1.5, 0]} scale={0.015}>
                <primitive object={nodes.GLTF_created_0_rootJoint}/>
                <skinnedMesh
                    geometry={nodes.Object_99.geometry}
                    material={material}
                    skeleton={nodes.Object_99.skeleton}
                />
                <skinnedMesh
                    geometry={nodes.Object_100.geometry}
                    material={material}
                    skeleton={nodes.Object_100.skeleton}
                />
                <skinnedMesh
                    geometry={nodes.Object_103.geometry}
                    material={material}
                    skeleton={nodes.Object_103.skeleton}
                />
                <skinnedMesh
                    geometry={nodes.Object_106.geometry}
                    material={material}
                    skeleton={nodes.Object_106.skeleton}
                />
            </group>
        </group>
    )
}

useGLTF.preload('/models/astronaut.gltf')

export default Astronaut