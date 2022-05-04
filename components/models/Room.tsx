import React, {useMemo, useRef} from 'react'
import {Stars, useNormalTexture} from "@react-three/drei";
import {SimplexNoise} from "three-stdlib";
import {Mesh, SphereGeometry} from "three";
import {useFrame} from "@react-three/fiber";

const deg90 = Math.PI / 2

export default function Model() {
    const [backgroundNormalMap] = useNormalTexture(17, {offset: [0, 0], anisotropy: 2, repeat: [8, 8]})
    const sphereGeometryRef = useRef<SphereGeometry>(null)
    const refSphere = useRef<SphereGeometry>(null)
    const starsMeshRef = useRef<Mesh>(null)

    const simplex = useMemo(() => new SimplexNoise(), [])

    useFrame(({clock}) => {
        if (!sphereGeometryRef.current || !refSphere.current) return;

        const time = clock.getElapsedTime() * 0.1

        const positions = refSphere.current.attributes.position
        const visiblePositions = sphereGeometryRef.current.attributes.position

        const NOISE_SCALE = 0.1
        const NOISE_POS_FACTOR = 1

        for (let i = 0; i < positions.count; i++) {
            const x = positions.getX(i)
            const y = positions.getY(i)
            const z = positions.getZ(i)

            const newX = x + simplex.noise((x + time) * NOISE_POS_FACTOR, y) * NOISE_SCALE
            const newY = y + simplex.noise((y + time) * NOISE_POS_FACTOR, z) * NOISE_SCALE
            const newZ = z + simplex.noise((z + time) * NOISE_POS_FACTOR, x) * NOISE_SCALE

            visiblePositions.setX(i, newX)
            visiblePositions.setY(i, newY)
            visiblePositions.setZ(i, newZ)
        }

        starsMeshRef.current?.rotation.set(0, time / 4, time / 4)

        visiblePositions.needsUpdate = true;
    })

    return (
        <group dispose={null}>
            <mesh ref={starsMeshRef}>
                <Stars/>
            </mesh>
            <mesh>
                <sphereGeometry
                    ref={sphereGeometryRef}
                    args={[1, 120, 120]}
                />
                <meshStandardMaterial
                    normalMap={backgroundNormalMap}
                    metalness={.2}
                    roughness={.4}
                />
                {/*<MeshWobbleMaterial factor={1} speed={10}/>*/}
            </mesh>
            <mesh visible={false}>
                <sphereGeometry
                    ref={refSphere}
                    args={[1, 120, 120]}
                />
            </mesh>
        </group>
    )
}


