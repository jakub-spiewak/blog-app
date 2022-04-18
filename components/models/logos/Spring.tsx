import React from 'react'
import * as THREE from 'three'
import {useGLTF} from '@react-three/drei'
import {GLTF} from 'three-stdlib'

type GLTFResult = GLTF & {
    nodes: {
        Curve: THREE.Mesh
    }
    materials: {
        ['SVGMat.001']: THREE.MeshStandardMaterial
    }
}

export default function Model() {
    const {nodes, materials} = useGLTF('/models/logos/spring.gltf') as GLTFResult

    return (
        <group dispose={null}>
            <mesh geometry={nodes.Curve.geometry}
              material={materials['SVGMat.001']}/>
        </group>
    )
}

useGLTF.preload('/models/logos/spring.gltf')
