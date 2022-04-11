import {Canvas} from "@react-three/fiber";
import Astronaut from "../models/Astronaut";
import {Stars} from "../models/Stars";
import React, {Suspense} from "react";
import {Clouds} from "../models/Clouds";
import {LogoOrbit} from "../models/LogoOrbit";

export const BackgroundAnimation = () => {
    return (
        <Canvas>
            <ambientLight intensity={0.5}/>
            <directionalLight position={[-2, 5, 2]} intensity={0.5}/>
            <Suspense fallback={null}>
                <Astronaut/>
            </Suspense>
            <Suspense fallback={null}>
                <Stars/>
            </Suspense>
            <Suspense fallback={null}>
                <Clouds/>
            </Suspense>
            {/*<Suspense fallback={null}>*/}
            {/*    <LogoOrbit/>*/}
            {/*</Suspense>*/}
        </Canvas>
    )
}