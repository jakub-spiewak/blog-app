import * as THREE from 'three'
import {Mesh, SpotLight} from 'three'
import React, {useMemo, useRef} from 'react'
import {Sparkles, useGLTF, useHelper, useNormalTexture, useTexture} from '@react-three/drei'
import {GLTF, RectAreaLightHelper, SimplexNoise} from 'three-stdlib'
import {Floor} from "./Floor";
import {useFrame, useThree} from "@react-three/fiber";
import {ReflectiveMaterial} from "./materials/ReflectiveMaterial";

type GLTFResult = GLTF & {
    nodes: {
        Walls: THREE.Mesh
        Frame: THREE.Mesh
        Floor: THREE.Mesh
        FrameContent: THREE.Mesh
        Lamp: THREE.Mesh
        Bricks: THREE.Mesh
    }
    materials: {}
}

export default function Model({...props}: JSX.IntrinsicElements['group']) {
    const ref = useRef<THREE.RectAreaLight>(null)
    const paintingRef = useRef<THREE.PlaneGeometry>(null)
    const group = useRef<THREE.Group>(null)
    const {nodes} = useGLTF('/models/room.gltf') as GLTFResult

    const material = new THREE.MeshStandardMaterial({color: "#1c1c1c"})

    const wallsNormalMap = useNormalTexture(73, {offset: [0, 0], anisotropy: 2, repeat: [16, 16]})
    const bricksNormalMap = useNormalTexture(0, {offset: [0, 0], anisotropy: 2, repeat: [4, 4]})

    const wallsMaterial = new THREE.MeshStandardMaterial({
        color: material.color,
        emissive: "#1c1c1c",
        emissiveIntensity: .7,
        normalMap: wallsNormalMap[0],
        metalness: .3,
        roughness: .2
    })
    const bricksMaterial = new THREE.MeshStandardMaterial({
        color: material.color,
        emissive: material.color,
        emissiveIntensity: .2,
        normalMap: bricksNormalMap[0],
        // metalness: .7,
        // roughness: .2
    })

    // @ts-ignore
    useHelper(ref, RectAreaLightHelper, "red")

    const texture = useTexture("/models/vangogh.jpg")

    // const noiseMaterial = new THREE.MeshStandardMaterial({color: "white"})
    const noiseMaterial = new THREE.MeshLambertMaterial({
        // color: "#653232",
        // roughness: 0.8,
        // metalness: 0.2,
        map: texture,
        // clipShadows: true
        // wireframe: true
    })

    const simplex = useMemo(() => new SimplexNoise(), [])
    useThree(({gl}) => {
        gl.outputEncoding = THREE.sRGBEncoding
        // gl.physicallyCorrectLights = true
    })

    useFrame(({clock}) => {
        if (!paintingRef.current) return;
        const timeFactor = clock.getElapsedTime() / 2
        const indexFactor = 0.6

        const position = paintingRef.current.attributes.position
        for (let i = 0; i < position.count; i++) {
            // const y = 0.5 * Math.sin(i / 5 + (time + i) / 7);
            const z = (
                simplex.noise(
                    (position.getX(i) + timeFactor) * indexFactor,
                    (position.getY(i) + timeFactor) * indexFactor
                )
                + 1) * 0.25
            position.setZ(i, z);
        }
        position.needsUpdate = true
    })


    const light = useRef<SpotLight>(null)

    useThree(({scene}) => {
        light.current?.target.position.set(-5, 2.5, 0)
        light.current?.target.updateMatrixWorld()
    })

    // const [normalMap] = useNormalTexture(70, {offset: [0, 0], anisotropy: 2, repeat: [3, 1]})
    const paintingMeshRef = useRef<Mesh>(null)

    return (
        <group
          ref={group}
          {...props}
          dispose={null}
        >
            <Floor/>
            <Sparkles
              position={[-4, 3, 0]}
              scale={[8, 2, 10]}
              opacity={0.2}
            />
            <directionalLight
              position={[1, 5, 5]}
              rotation={[0, 1.5, 0]}
            />
            <spotLight
              ref={light}
              intensity={.3}
              angle={1}
              castShadow
              position={[-3.8, 3.3, 0]}
            />
            <mesh
              geometry={nodes.Walls.geometry}
                // material={wallsMaterial}
            >
                <ReflectiveMaterial normalMap={wallsNormalMap[0]}/>
            </mesh>
            {/*<mesh*/}
            {/*  geometry={nodes.Frame.geometry}*/}
            {/*  material={material}*/}
            {/*/>*/}
            <mesh
              position={[-5 + 0.001, 2.5, 0]}
              rotation={[0, Math.PI / 2, 0]}
              material={noiseMaterial}
              castShadow
              receiveShadow
            >
                <planeGeometry
                  ref={paintingRef}
                  args={[6 - 0.4, 2 - 0.4, 240 / 2, 240 / 6]}
                />
                {/*<ReflectiveMaterial*/}
                {/*  emissive={"#32506e"}*/}
                {/*  emissiveIntensity={.9}*/}
                {/*  normalMap={normalMap}*/}
                {/*    // color={"#010101"}*/}
                {/*/>*/}
            </mesh>
            <mesh
              geometry={nodes.Lamp.geometry}
              material={material}
            />
            <mesh
              geometry={nodes.Bricks.geometry}
              material={bricksMaterial}
            />
        </group>
    )
}


useGLTF.preload('/models/room.gltf')
