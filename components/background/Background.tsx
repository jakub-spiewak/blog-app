import React, {Suspense} from "react";
import styles from "./Background.module.css"
import {BackgroundAnimation} from "./BackgroundAnimation";

export const Background = () => {

    return (
        <div className={styles.canvasContainer}>
            {/*<Suspense fallback={null}>*/}
                <BackgroundAnimation/>
            {/*</Suspense>*/}
        </div>
    )
}