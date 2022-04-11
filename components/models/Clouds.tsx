import {Cloud} from "@react-three/drei";
import React, {useEffect, useState} from "react";

const MIN_POSITION = -15
const MAX_POSITION = 10

export const Clouds = () => {
    const [position, setPosition] = useState(MAX_POSITION);

    useEffect(() => {
        window.addEventListener("scroll", (ev) => {
            const scrollValue = window.scrollY / window.screen.height
            setPosition(MIN_POSITION + (MAX_POSITION - MIN_POSITION) * (1 - scrollValue))
        })
    })
    return (
        <group position={[0, -position, -position / 2]}>
            <Cloud color={'#fff3b3'} opacity={.3}/>
        </group>
    )
}