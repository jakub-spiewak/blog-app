import * as THREE from 'three'
import {Group} from 'three'
import React, {ForwardedRef, forwardRef} from 'react'
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

// eslint-disable-next-line react/display-name
const Model = forwardRef((props, ref: ForwardedRef<Group>) => {
    const {nodes, materials} = useGLTF('/models/logos/git.gltf') as GLTFResult

    return (
        <group
          ref={ref}
          dispose={null}
        >
            <mesh
              geometry={nodes.Curve.geometry}
              material={materials['SVGMat.001']}
            />
        </group>
    )
})

useGLTF.preload('/models/logos/git.gltf')
export default Model
