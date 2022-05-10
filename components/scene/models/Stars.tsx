import {Group} from "three";
import {Stars as DreiStars} from "@react-three/drei";
import React, {useRef} from "react";
import {useFrame} from "@react-three/fiber";

const Stars = () => {
    const starsRef = useRef<Group>(null)

    useFrame(({clock}) => {
        if (!starsRef.current) return;

        const time = clock.getElapsedTime()
        const rotation = time / 32

        starsRef.current.rotation.set(rotation, rotation, rotation)
    })

    return (
        <group ref={starsRef}>
            <DreiStars fade factor={5} saturation={.1} speed={2}/>
        </group>
    )
}

export default Stars