import React, {useMemo, useRef, useState} from 'react'
import {Sparkles, useNormalTexture, useTexture} from "@react-three/drei";
import {ReflectiveMaterial} from "./materials/ReflectiveMaterial";
import {MathUtils, PlaneGeometry, Vector2} from "three";
import {useFrame} from "@react-three/fiber";
import {SimplexNoise} from "three-stdlib";

const deg90 = Math.PI / 2

export default function Model() {
    const paintingRef = useRef<PlaneGeometry>(null)
    const [mouse, setMouse] = useState<Vector2>(new Vector2(0, 0))

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
            const x = position.getX(i)
            const y = position.getY(i)
            const currentPoint = new Vector2(x,y)

            const distance = mouse.distanceTo(currentPoint)

            const z = (
                simplex.noise(
                    (x + timeFactor) * indexFactor,
                    (y + timeFactor) * indexFactor
                )
                + 1) * 0.2 -  (1 / (1 + distance))
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
                onPointerMove={(event) => setMouse(event.pointer)}
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


