import React, {useRef} from 'react'
import * as THREE from 'three'
import {useGLTF} from '@react-three/drei'
import {GLTF} from 'three-stdlib'
import {HasPhase, RADIUS} from "../LogoOrbit";
import {useFrame} from "@react-three/fiber";

type GLTFResult = GLTF & {
    nodes: {
        Curve: THREE.Mesh
        Curve001: THREE.Mesh
    }
    materials: {
        SVGMat: THREE.MeshStandardMaterial
        ['SVGMat.001']: THREE.MeshStandardMaterial
    }
}

export default function Model() {
    const {nodes, materials} = useGLTF('/models/logos/typescript.gltf') as GLTFResult

    return (
        <group dispose={null}>
            <mesh geometry={nodes.Curve.geometry} material={materials.SVGMat}/>
            <mesh geometry={nodes.Curve001.geometry} material={materials['SVGMat.001']}/>
        </group>
    )
}

useGLTF.preload('/models/logos/typescript.gltf')
