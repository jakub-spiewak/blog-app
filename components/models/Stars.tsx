import {Group} from "three";
import {Stars as DreiStars} from "@react-three/drei";
import React, {RefObject} from "react";

interface StarsProps {
    ref: RefObject<Group>
}

export const Stars = (props: StarsProps) => {
    const {ref} = props
    return (
        <group ref={ref}>
            <DreiStars fade/>
        </group>
    )
}