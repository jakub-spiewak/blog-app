import {Html} from "@react-three/drei";
import loaderStyles from "./ModelLoader.module.css";
import React from "react";

export const ModelLoader = () => {
    return (
        <Html
            center
            className={loaderStyles.htmlContainer}
        >
            <div className={loaderStyles.roller}>
                <div/>
                <div/>
                <div/>
                <div/>
                <div/>
                <div/>
                <div/>
                <div/>
            </div>
        </Html>
    )
}