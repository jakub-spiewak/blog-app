import React, {ForwardedRef, forwardRef} from 'react'
import * as THREE from 'three'
import {Group} from 'three'
import {useGLTF} from '@react-three/drei'
import {GLTF} from 'three-stdlib'

type GLTFResult = GLTF & {
    nodes: {
        Curve: THREE.Mesh
        Curve001: THREE.Mesh
        Curve002: THREE.Mesh
        Curve003: THREE.Mesh
    }
    materials: {
        ['SVGMat.001']: THREE.MeshStandardMaterial
        ['SVGMat.002']: THREE.MeshStandardMaterial
        ['SVGMat.003']: THREE.MeshStandardMaterial
        ['SVGMat.004']: THREE.MeshStandardMaterial
    }
}

const Model = forwardRef((props, ref: ForwardedRef<Group>) => {
    const {nodes, materials} = useGLTF('/models/logos/html.gltf') as GLTFResult

    return (
        <group
          ref={ref}
          dispose={null}
        >
            <mesh
              geometry={nodes.Curve.geometry}
              material={materials['SVGMat.001']}
              position={[0, 0, -0.01]}
            />
            <mesh
              geometry={nodes.Curve001.geometry}
              material={materials['SVGMat.002']}
              position={[0.32, 0, 0.01]}
            />
            <mesh
              geometry={nodes.Curve002.geometry}
              material={materials['SVGMat.003']}
              position={[-0.27, 0, 0.02]}
              scale={[1, 0.71, 1]}
            />
            <mesh
              geometry={nodes.Curve003.geometry}
              material={materials['SVGMat.004']}
              position={[0.25, 0, 0.03]}
              scale={[1, 0.86, 1]}
            />
        </group>)
})

useGLTF.preload('/models/logos/html.gltf')
export default Model
