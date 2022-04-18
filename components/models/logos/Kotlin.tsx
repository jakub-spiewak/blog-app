import React from 'react'
import * as THREE from 'three'
import {useGLTF} from '@react-three/drei'
import {GLTF} from 'three-stdlib'

type GLTFResult = GLTF & {
    nodes: {
        XMLID_2_: THREE.Mesh
        Curve: THREE.Mesh
        Curve001: THREE.Mesh
    }
    materials: {
        ['Material.002']: THREE.MeshStandardMaterial
        ['Material.003']: THREE.MeshStandardMaterial
    }
}

export default function Model() {
    const {nodes, materials} = useGLTF('/models/logos/kotlin.gltf') as GLTFResult

    return (
        <group dispose={null}>
            <mesh geometry={nodes.XMLID_2_.geometry}
              material={materials['Material.002']}
              position={[0.29, 0, 0.72]}/>
            <mesh geometry={nodes.Curve.geometry}
              material={materials['Material.002']}
              position={[-0.38, 0, -0.58]}
              scale={[0.54, 1, 0.54]}/>
            <mesh geometry={nodes.Curve001.geometry}
              material={materials['Material.003']}
              position={[0.09, 0, -0.14]}
              scale={[0.54, 1, 0.54]}/>
        </group>
    )
}

useGLTF.preload('/models/logos/kotlin.gltf')
