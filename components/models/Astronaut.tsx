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
import {useFrame, useThree} from "@react-three/fiber";

type GLTFResult = GLTF & {
    nodes: {
        Object_99: THREE.SkinnedMesh
        Object_100: THREE.SkinnedMesh
        Object_103: THREE.SkinnedMesh
        Object_106: THREE.SkinnedMesh
        GLTF_created_0_rootJoint: THREE.Bone
    }
}

export const ASTRONAUT_COLOR = "#232e44"

type ActionName = 'wave' | 'floating' | 'idle' | 'moon_walk'
const ActionNameList: ActionName[] = ['wave', 'floating', 'idle', 'moon_walk']

interface Position {
    x: number,
    y: number
}

const material = new THREE.MeshLambertMaterial({color: ASTRONAUT_COLOR})

export default function Model({...props}: JSX.IntrinsicElements['group']) {
    const group = useRef<THREE.Group>()
    const {nodes, animations} = useGLTF('/models/astronaut.gltf') as GLTFResult
    const {actions} = useAnimations(animations, group)

    useEffect(() => {
        actions.moon_walk?.reset().fadeIn(0.5).play()
    })

    useEffect(() => {
        let isWaving = false;
        const onObjectClick = () => {
            if (isWaving) return;
            isWaving = true

            actions.wave?.reset().fadeIn(0.5).play()
            actions.moon_walk?.fadeOut(2.5)
            const timeoutId = setTimeout(() => {
                actions.wave?.fadeOut(1)
                actions.moon_walk?.reset().fadeIn(1)
                isWaving = false

                clearTimeout(timeoutId)
            }, 3000)
        }
        window.addEventListener("click", onObjectClick, false)
    })

    return (
        <group ref={group} {...props} dispose={null}>
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

