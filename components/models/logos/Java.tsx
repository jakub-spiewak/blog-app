import React, {useRef} from 'react'
import * as THREE from 'three'
import {useGLTF} from '@react-three/drei'
import {GLTF} from 'three-stdlib'
import {useFrame} from "@react-three/fiber";
import {HasPhase, RADIUS} from "../LogoOrbit";

type GLTFResult = GLTF & {
    nodes: {
        Curve: THREE.Mesh
        Curve002: THREE.Mesh
    }
    materials: {
        ['SVGMat.001']: THREE.MeshStandardMaterial
        ['SVGMat.003']: THREE.MeshStandardMaterial
    }
}

export default function Model() {
    const {nodes, materials} = useGLTF('/models/logos/java.gltf') as GLTFResult

    return (
        <group dispose={null}>
            <mesh geometry={nodes.Curve.geometry} material={materials['SVGMat.001']} position={[-0.01, 0, 0.4]}/>
            <mesh geometry={nodes.Curve002.geometry} material={materials['SVGMat.003']} position={[0.01, 0, -0.4]}/>
        </group>
    )
}

useGLTF.preload('/models/logos/java.gltf')
