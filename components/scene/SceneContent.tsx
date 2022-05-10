import React, {Fragment, Suspense} from "react";
import {ModelLoader} from "./ModelLoader";
import Astronaut from "./models/Astronaut";
import Stars from "./models/Stars";
import Clouds from "./models/Clouds";
import Lights from "./models/Lights";

export const SceneContent = () => {
    return (
        <Fragment>
            <directionalLight
                position={[-2, 5, 2]}
                intensity={0.8}
            />
            <Suspense fallback={<ModelLoader/>}>
                <Astronaut/>
                <Stars/>
                <Clouds/>
                <Lights/>
            </Suspense>
        </Fragment>
    )
}