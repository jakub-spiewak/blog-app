import {Canvas} from "@react-three/fiber";
import {Stars} from "../models/Stars";
import React, {lazy, Suspense} from "react";
import {Clouds} from "../models/Clouds";
import {Html, useProgress} from "@react-three/drei";

import loaderStyles from "./AstronautLoader.module.css"
import gradientStyles from "../../css/GradientText.module.css"
import {delayedPromise} from "../../utils/promise";

const AstronautLoader = () => {
    const {progress} = useProgress()
    return (
        <Html center className={loaderStyles.htmlContainer}>
            <div className={loaderStyles.container}>
                <h1 className={`${gradientStyles.gradient} ${loaderStyles.text}`}>
                    {progress.toFixed(0)}%
                </h1>
            </div>
        </Html>
    )
}

const Astronaut = lazy(() => delayedPromise(import("../models/Astronaut"), 2000))

export const BackgroundAnimation = () => {
    return (
        <Canvas>
            <ambientLight intensity={0.5}/>
            <directionalLight position={[-2, 5, 2]} intensity={0.5}/>
            <Suspense fallback={<AstronautLoader/>}>
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