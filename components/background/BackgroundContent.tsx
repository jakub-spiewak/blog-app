import {Stars} from "../models/Stars";
import React, {Fragment, Suspense} from "react";
import {Html, useProgress} from "@react-three/drei";

import loaderStyles from "./AstronautLoader.module.css"
import gradientStyles from "../../css/GradientText.module.css"
import Astronaout from "../models/Astronout";

const AstronautLoader = () => {
    const {progress} = useProgress()
    return (
        <Html center
              className={loaderStyles.htmlContainer}>
            <div className={loaderStyles.container}>
                <h1 className={`${gradientStyles.gradient} ${loaderStyles.text}`}>
                    {progress.toFixed(0)}%
                </h1>
            </div>
        </Html>
    )
}


export const BackgroundContent = () => {

    return (
        <Fragment>
            <directionalLight
                position={[-2, 5, 2]}
                intensity={0.8}
            />
            <Suspense fallback={<AstronautLoader/>}>
                <Astronaout/>
            </Suspense>
            <Suspense fallback={null}>
                <Stars/>
            </Suspense>
        </Fragment>
    )
}