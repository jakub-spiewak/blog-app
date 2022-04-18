import {Cloud} from "@react-three/drei";
import React, {useEffect, useState} from "react";

const MIN_POSITION = -15
const MAX_POSITION = 10
const MAX_MIN_DIFF_POSITION = MAX_POSITION - MIN_POSITION

export const Clouds = () => {
    const [position, setPosition] = useState(MAX_POSITION);

    useEffect(() => {
        const landingPageContainer = document.getElementById("landingPageContainer")
        if (!landingPageContainer) return;

        window.addEventListener("scroll", () => {
            const scrollValue = window.scrollY / window.screen.height
            setPosition(MIN_POSITION + MAX_MIN_DIFF_POSITION * (1 - scrollValue))
        })
    })

    return (
        <group position={[0, -position, -position / 2]}>
            <Cloud depth={2}
              opacity={0.3}/>
        </group>
    )
}