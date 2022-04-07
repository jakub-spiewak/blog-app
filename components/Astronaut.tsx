/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: LasquetiSpice (https://sketchfab.com/LasquetiSpice)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/animated-astronaut-character-in-space-suit-loop-8fe5c8d3365e4d87bb7bc253d53a64e1
title: Animated Astronaut Character in Space Suit Loop
*/

import * as THREE from 'three'
import React, {useEffect, useRef, useState} from 'react'
import {useAnimations, useGLTF} from '@react-three/drei'
import {GLTF} from 'three-stdlib'
import {useFrame} from "@react-three/fiber";

type GLTFResult = GLTF & {
    nodes: {
        Object_99: THREE.SkinnedMesh
        Object_100: THREE.SkinnedMesh
        Object_103: THREE.SkinnedMesh
        Object_106: THREE.SkinnedMesh
        GLTF_created_0_rootJoint: THREE.Bone
    }
}

export const ASTRONAUT_COLOR = "#30344b"

type ActionName = 'wave' | 'floating' | 'idle' | 'moon_walk'

interface Position {
    x: number,
    y: number
}

export default function Model({...props}: JSX.IntrinsicElements['group']) {
    const group = useRef<THREE.Group>()
    const [position, setPosition] = useState<Position>({x: 0, y: 0})
    const {nodes, animations} = useGLTF('/astronaut.gltf') as GLTFResult
    const {actions} = useAnimations(animations, group)
    useEffect(() => {
        actions.wave?.reset().fadeIn(0.5).play()
    }, [actions.wave])

    const material = new THREE.MeshLambertMaterial({color: ASTRONAUT_COLOR})

    useFrame(({clock}) => {
        if (!group?.current) return;
        const time = clock.getElapsedTime();
        const sin = Math.sin(time) / 4
        group.current.rotation.y = sin + position.x;
        group.current.rotation.x = sin + position.y;
    })


    useEffect(() => {
        const rotateMouse = (ev: MouseEvent) => {
            ev.preventDefault()
            if (!group?.current) return;
            const pos = {
                x: 2 * (ev.x / window.screen.width) - 1,
                y: 2 * (ev.y / window.screen.height) - 1
            }
            setPosition(pos)
        }
        window.addEventListener("mousemove", rotateMouse, false)
        window.addEventListener("pointermove", rotateMouse, false)
        window.addEventListener("click", rotateMouse, false)
    }, [])

    return (
        <group ref={group} {...props} dispose={null}>
            <group rotation={[0, 0, 0]} position={[0, -1, 0]} scale={0.02}>
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

useGLTF.preload('/astronaut.gltf')
