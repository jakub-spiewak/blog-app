import React from "react";
import styles from "./Scene.module.css"
import {SceneContent} from "./SceneContent";
import {Canvas} from "@react-three/fiber";

export const Scene = () => {

    return (
        <div className={styles.canvasContainer}>
            <Canvas camera={{
                near: .001,
                far: 1000
            }}>
                <SceneContent/>
            </Canvas>
        </div>
    )
}