import React, {useMemo, useRef, useState} from 'react'
import {MathUtils, PlaneGeometry, Raycaster, Vector3} from "three";
import {useFrame, useThree} from "@react-three/fiber";
import {SimplexNoise} from "three-stdlib";

const deg90 = Math.PI / 2

export default function Model() {
    const planeRef = useRef<PlaneGeometry>(null)
    const {camera} = useThree()
    const [mouse, setMouse] = useState(new Vector3(0, 0, 0));

    const simplex = useMemo(() => new SimplexNoise(), [])
    const raycaster = useMemo(() => new Raycaster(), [])

    useFrame(({clock}) => {
        if (!planeRef.current) return;

        const timeFactor = clock.getElapsedTime()
        const indexFactor = 0.4

        const position = planeRef.current.attributes.position

        for (let i = 0; i < position.count; i++) {
            // const y = 0.5 * Math.sin(i / 5 + (time + i) / 7);
            const x = position.getX(i)
            const y = position.getY(i)

            const z = (
                simplex.noise(
                    (x + timeFactor) * indexFactor,
                    (y + timeFactor) * indexFactor
                )
                + 1
            ) * 0.2
            const distance = mouse.distanceTo(new Vector3(x, y, 0));
            position.setZ(i, z + MathUtils.smootherstep(distance, 0, 2));
        }
        position.needsUpdate = true
    })

    useThree(({camera, scene, events, pointer}) => {
        if (!events.handlers) return

        events.handlers.onPointerMove = (event) => {
            const vector = new Vector3();
            const pos = new Vector3();
            // @ts-ignore
            vector.set((event.clientX / window.innerWidth) * 2 - 1, -(event.clientY / window.innerHeight) * 2 + 1, 0);
            vector.unproject(camera);
            vector.sub(camera.position);
            // const dist = -camera.position.z / vector.z
            // pos.copy(camera.position).add(vector.multiplyScalar(dist))
            setMouse(vector)
        }
    })

    return (
        <group dispose={null}>
            <directionalLight
                position={[4, -4, -4]}
                // rotation={[0, Math.PI / 2, 0]}
                intensity={1}
            />
            <ambientLight/>
            <mesh
                rotation={[Math.PI / 2, 0, 0]}
                position={[0, 1, 0]}
            >
                <planeGeometry ref={planeRef} args={[8, 4, 50, 50]}/>
                <meshStandardMaterial
                    wireframe
                    color={'red'}
                />
            </mesh>
        </group>
    )
}


