import * as THREE from 'three'
import React, {useRef} from 'react'
import {useGLTF} from '@react-three/drei'
import {GLTF} from 'three-stdlib'
import {HasPhase, RADIUS} from "../LogoOrbit";
import {useFrame} from "@react-three/fiber";

type GLTFResult = GLTF & {
    nodes: {
        Curve: THREE.Mesh
    }
    materials: {
        ['SVGMat.001']: THREE.MeshStandardMaterial
    }
}

export default function Model() {
    const {nodes, materials} = useGLTF('/models/logos/git.gltf') as GLTFResult

    return (
        <group dispose={null}>
            <mesh geometry={nodes.Curve.geometry} material={materials['SVGMat.001']}/>
        </group>
    )
}

useGLTF.preload('/models/logos/git.gltf')
