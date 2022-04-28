import React from "react";
import {Canvas} from "@react-three/fiber";

import Room from "./Room";

export const MainModel = () => {
    return (
        <Canvas
          className={"canvasContainer"}
          camera={{
                position: [-2.14, 3.6, 3.6],
                rotation: [-.7, .5, .4]
            }}
        >
            {/*<directionalLight*/}
            {/*  rotation={[Math.PI / 2, 0, 0]}*/}
            {/*  position={[1, -5, -5]}*/}
            {/*  intensity={1}*/}
            {/*/>*/}
            {/*<directionalLight intensity={1}/>*/}
            <Room/>
            {/*<Stats/>*/}
        </Canvas>
    )
}