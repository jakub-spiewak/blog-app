import {Html, useProgress} from "@react-three/drei";
import loaderStyles from "./ModelLoader.module.css";
import gradientStyles from "../../css/GradientText.module.css";
import React from "react";

export const ModelLoader = () => {
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