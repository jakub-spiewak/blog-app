import React from "react";
import styles from "./Background.module.css"
import {BackgroundContent} from "./BackgroundContent";
import {Canvas} from "@react-three/fiber";

export const Background = () => {


    return (
        <div className={styles.canvasContainer}>
            <Canvas
                // camera={{
                //     type: "OrthographicCamera",
                //     position: new Vector3(7.5, 7.5, 5),
                //     rotation: new Euler(MathUtils.degToRad(75), 0, MathUtils.degToRad(55)),
                // }}
            >
                {/*<OrbitControls/>*/}
                <BackgroundContent/>
            </Canvas>
        </div>
    )
}