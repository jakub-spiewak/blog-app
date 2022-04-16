import React, {useRef} from 'react'
import * as THREE from 'three'
import {useGLTF} from '@react-three/drei'
import {GLTF} from 'three-stdlib'
import {HasPhase, RADIUS} from "../LogoOrbit";
import {useFrame} from "@react-three/fiber";

type GLTFResult = GLTF & {
    nodes: {
        Curve: THREE.Mesh
        Curve002: THREE.Mesh
    }
    materials: {
        ['SVGMat.003']: THREE.MeshStandardMaterial
        ['SVGMat.005']: THREE.MeshStandardMaterial
    }
}

export default function Model() {
    const {nodes, materials} = useGLTF('/models/logos/react.gltf') as GLTFResult

    return (
        <group dispose={null}>
            <mesh geometry={nodes.Curve.geometry} material={materials['SVGMat.003']} scale={[14.52, 10, 14.52]}/>
            <mesh geometry={nodes.Curve002.geometry} material={materials['SVGMat.005']} scale={[14.52, 2.5, 14.52]}/>
        </group>
    )
}

useGLTF.preload('/models/logos/react.gltf')
