/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
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

export default function Model({ ...props }: JSX.IntrinsicElements['group'] & HasPhase) {
  const group = useRef<THREE.Group>()
  const { nodes, materials } = useGLTF('/react.gltf') as GLTFResult

  useFrame(({clock}) => {
    if (!group?.current) return

    const time = clock.getElapsedTime() / 4
    const {phase} = props
    const x = RADIUS * Math.sin(time + phase)
    const y = RADIUS * Math.cos(time + phase)
    const z = RADIUS * Math.sin(time + phase) / 4

    group.current.position.set(x, z, y)
  })

  return (
      <group ref={group} {...props} dispose={null}>
      <mesh geometry={nodes.Curve.geometry} material={materials['SVGMat.003']} scale={[14.52, 10, 14.52]} />
      <mesh geometry={nodes.Curve002.geometry} material={materials['SVGMat.005']} scale={[14.52, 2.5, 14.52]} />
    </group>
  )
}

useGLTF.preload('/react.gltf')