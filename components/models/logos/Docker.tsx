import * as THREE from 'three'
import React from 'react'
import {useGLTF} from '@react-three/drei'
import {GLTF} from 'three-stdlib'

type GLTFResult = GLTF & {
    nodes: {
        Curve: THREE.Mesh
        Curve001: THREE.Mesh
        Curve003: THREE.Mesh
        Curve004: THREE.Mesh
        Curve005: THREE.Mesh
        Curve012: THREE.Mesh
        Curve013: THREE.Mesh
        Curve014: THREE.Mesh
        Curve015: THREE.Mesh
    }
    materials: {
        ['SVGMat.018']: THREE.MeshStandardMaterial
        ['SVGMat.019']: THREE.MeshStandardMaterial
        ['SVGMat.021']: THREE.MeshStandardMaterial
        ['SVGMat.022']: THREE.MeshStandardMaterial
        ['SVGMat.023']: THREE.MeshStandardMaterial
        ['SVGMat.030']: THREE.MeshStandardMaterial
        ['SVGMat.031']: THREE.MeshStandardMaterial
        ['SVGMat.032']: THREE.MeshStandardMaterial
        ['SVGMat.033']: THREE.MeshStandardMaterial
    }
}

export default function Model() {
    const {nodes, materials} = useGLTF('/models/logos/docker.gltf') as GLTFResult

    return (
        <group dispose={null}>
            <mesh
                geometry={nodes.Curve.geometry}
                material={materials['SVGMat.018']}
                position={[0.35, 0, -0.32]}
                scale={[1, 1.63, 1]}
            />
            <mesh
                geometry={nodes.Curve001.geometry}
                material={materials['SVGMat.019']}
                position={[0.03, 0, 0.03]}
                scale={[1, 1.19, 1]}/>
            <mesh
                geometry={nodes.Curve003.geometry}
                material={materials['SVGMat.021']}
                position={[-0.17, 0, 0.13]}
                scale={[1, 0.65, 1]}
            />
            <mesh
                geometry={nodes.Curve004.geometry}
                material={materials['SVGMat.022']}
                position={[-0.05, 0, 0.1]}
                scale={[1, 0.27, 1]}
            />
            <mesh
                geometry={nodes.Curve005.geometry}
                material={materials['SVGMat.023']}
                position={[0.11, 0, -0.42]}
            />
            <mesh
                geometry={nodes.Curve012.geometry}
                material={materials['SVGMat.030']}
                position={[-0.02, 0, 0.07]}
                scale={[1, 0.25, 1]}
            />
            <mesh
                geometry={nodes.Curve013.geometry}
                material={materials['SVGMat.031']}
                position={[0.03, 0, 0]}
                scale={[1, 0.33, 1]}
            />
            <mesh
                geometry={nodes.Curve014.geometry}
                material={materials['SVGMat.032']}
                position={[-0.16, 0, 0.22]}
                scale={[1, 0.31, 1]}
            />
            <mesh
                geometry={nodes.Curve015.geometry}
                material={materials['SVGMat.033']}
                position={[-0.12, 0, 0.18]}
                scale={[1, 0.21, 1]}
            />
        </group>
    )
}

useGLTF.preload('/models/logos/docker.gltf')
