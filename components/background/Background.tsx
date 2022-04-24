import React from "react";
import styles from "./Background.module.css"
import {BackgroundContent} from "./BackgroundContent";
import {Canvas} from "@react-three/fiber";

export const Background = () => {

    return (
        <div className={styles.canvasContainer}>
            <Canvas>
                <BackgroundContent/>
            </Canvas>
        </div>
    )
}