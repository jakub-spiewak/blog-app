import {Stars} from "./models/Stars";
import React, {Fragment, Suspense} from "react";
import {ModelLoader} from "./ModelLoader";
import Astronaut from "./models/Astronaut";
import {useFrame} from "@react-three/fiber";
import {Clouds} from "./models/Clouds";
import {Lights} from "./models/Lights";

export const SceneContent = () => {

    useFrame(({camera, clock}) => {
        const time = clock.getElapsedTime() / 4;

        // camera.position.setX((Math.sin(time)) * 2)
    })
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