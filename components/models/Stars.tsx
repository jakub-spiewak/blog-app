import {Group} from "three";
import {Stars as DreiStars} from "@react-three/drei";
import React, {useEffect, useRef, useState} from "react";
import {useFrame} from "@react-three/fiber";


const RADIUS = 120

export const Stars = () => {
    const starsRef = useRef<Group>();

    useFrame(({clock}) => {
        if (!starsRef.current) return;

        const time = clock.getElapsedTime() / 32
        starsRef.current.rotation.set(time, time, time)
    })

    return (
        <group ref={starsRef}>
            <DreiStars fade />
        </group>
    )
}