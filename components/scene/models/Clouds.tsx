import React from "react";
import {Cloud} from "@react-three/drei";

const Clouds = () => {
    return (
        <group position={[0, 0, -13]}>
            <Cloud
                depth={2}
                opacity={0.3}
            />
        </group>
    )
}

export default Clouds