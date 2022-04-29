import React, {useMemo, useRef} from 'react'
import {Sparkles, useNormalTexture, useTexture} from "@react-three/drei";
import {ReflectiveMaterial} from "./materials/ReflectiveMaterial";
import {PlaneGeometry} from "three";
import {useFrame} from "@react-three/fiber";
import {SimplexNoise} from "three-stdlib";

const deg90 = Math.PI / 2

export default function Model() {
    const paintingRef = useRef<PlaneGeometry>(null)

    const [backgroundNormalMap] = useNormalTexture(14, {offset: [0, 0], anisotropy: 2, repeat: [4, 4]})
    const vangoghTexture = useTexture("/models/vangogh.jpg")

    const simplex = useMemo(() => new SimplexNoise(), [])
    // useThree(({gl}) => {
    //     gl.outputEncoding = THREE.sRGBEncoding
    //     // gl.physicallyCorrectLights = true
    // })

    useFrame(({clock}) => {
        if (!paintingRef.current) return;

        const timeFactor = clock.getElapsedTime()
        const indexFactor = 0.4

        const position = paintingRef.current.attributes.position
        for (let i = 0; i < position.count; i++) {
            // const y = 0.5 * Math.sin(i / 5 + (time + i) / 7);
            const z = (
                simplex.noise(
                    (position.getX(i) + timeFactor) * indexFactor,
                    (position.getY(i) + timeFactor) * indexFactor
                )
                + 1) * 0.2
            position.setZ(i, z);
        }
        position.needsUpdate = true
    })

    return (
        <group dispose={null}>
            <Sparkles scale={[10, 10, 2]}/>
            <directionalLight
                position={[0, 0, -5]}
                intensity={1}
            />
            <mesh
                rotation={[0, Math.PI, 0]}
                position={[0, 0, 1]}
            >
                <planeGeometry args={[10, 10]}/>
                <ReflectiveMaterial
                    color={"white"}
                    emissive={"black"}
                    normalMap={backgroundNormalMap}
                />
            </mesh>
            <mesh
                rotation={[0, Math.PI, 0]}
                position={[0, 0, 0]}
            >
                <planeGeometry
                    ref={paintingRef}
                    args={[4, 2, 400, 200]}
                />
                <meshBasicMaterial
                    map={vangoghTexture}
                />
            </mesh>

        </group>
    )
}


