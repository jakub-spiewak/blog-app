import React, {Fragment, lazy, Suspense} from "react";
import {ModelLoader} from "./ModelLoader";

const Astronaut = lazy(() => import("./models/Astronaut"))
const Stars = lazy(() => import("./models/Stars"))
const Clouds = lazy(() => import("./models/Clouds"))
const Lights = lazy(() => import("./models/Lights"))

export const SceneContent = () => {
    return (
        <Fragment>
            <directionalLight
                position={[-2, 5, 2]}
                intensity={0.8}
            />
            <Suspense fallback={<ModelLoader/>}>
                <Astronaut/>
            </Suspense>
            <Suspense fallback={null}>
                <Stars/>
                <Clouds/>
                <Lights/>
            </Suspense>
        </Fragment>
    )
}