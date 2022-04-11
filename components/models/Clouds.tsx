import {Cloud} from "@react-three/drei";
import React, {useEffect, useState} from "react";

const MIN_OPACITY = 0.05
const MAX_OPACITY = 0.2

const MIN_POSITION = 4
const MAX_POSITION = 10

export const Clouds = () => {
    const [opacity, setOpacity] = useState(MIN_OPACITY);
    const [position, setPosition] = useState(MIN_POSITION);

    useEffect(() => {
        window.addEventListener("scroll", (ev) => {
            const scrollValue = window.scrollY / window.screen.height
            setOpacity(MIN_OPACITY + (MAX_OPACITY - MIN_OPACITY) * scrollValue)
            setPosition(MIN_POSITION + (MAX_POSITION - MIN_POSITION) * (1 - scrollValue))
        })
    })
    return (
        <group position={[0, -position, 0]}>
            <Cloud opacity={opacity} depthTest/>
        </group>
    )
}