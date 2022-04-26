import React, {Fragment} from "react";
import {Html, useProgress} from "@react-three/drei";

import loaderStyles from "./AstronautLoader.module.css"
import gradientStyles from "../../css/GradientText.module.css"
import Room from "../models/Room";
import {useFrame, useThree} from "@react-three/fiber";

const AstronautLoader = () => {
    const {progress} = useProgress()
    return (
        <Html
          center
          className={loaderStyles.htmlContainer}
        >
            <div className={loaderStyles.container}>
                <h1 className={`${gradientStyles.gradient} ${loaderStyles.text}`}>
                    {progress.toFixed(0)}%
                </h1>
            </div>
        </Html>
    )
}

export const BackgroundContent = () => {
    useThree(({camera}) => {
        // camera.type = "PerspectiveCamera"
        camera.position.set(-2.14, 3.6, 3.6)
        camera.rotation.set(-.7, .5, .4)
        console.log(camera.position)
        console.log(camera.rotation)
    })

    useFrame(({camera}) => {

        // console.log(camera.position)
        // console.log(camera.rotation)
    })

    return (
        <Fragment>
            <directionalLight position={[3, 2, 3]}/>
            <directionalLight/>
            <Room/>
        </Fragment>
    )
}