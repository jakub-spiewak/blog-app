import {Canvas} from "@react-three/fiber";
import Astronaut from "../models/Astronaut";
import {Stars} from "../models/Stars";
import {Cloud} from "@react-three/drei";
import React, {Suspense} from "react";

export const BackgroundAnimation = () => {
    return (
        <Suspense fallback={null}>
            <Canvas>
                <renderPass clearColor={"0x000000"}/>
                <ambientLight intensity={0.5}/>
                <directionalLight position={[-2, 5, 2]} intensity={0.5}/>
                <Astronaut position={[0, -1.5, 0]}/>
                <Stars/>
                <Cloud opacity={0.1}/>
            </Canvas>
        </Suspense>
    )
}