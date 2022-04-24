import React, {ForwardedRef, forwardRef} from 'react'
import * as THREE from 'three'
import {Group} from 'three'
import {useGLTF} from '@react-three/drei'
import {GLTF} from 'three-stdlib'

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

// eslint-disable-next-line react/display-name
const Model = forwardRef((props, ref: ForwardedRef<Group>) => {
    const {nodes, materials} = useGLTF('/models/logos/react.gltf') as GLTFResult

    return (
        <group
          ref={ref}
          dispose={null}
        >
            <mesh geometry={nodes.Curve.geometry}
              material={materials['SVGMat.003']}
              scale={[14.52, 10, 14.52]}/>
            <mesh geometry={nodes.Curve002.geometry}
              material={materials['SVGMat.005']}
              scale={[14.52, 2.5, 14.52]}/>
        </group>
    )
})

useGLTF.preload('/models/logos/react.gltf')
export default Model
