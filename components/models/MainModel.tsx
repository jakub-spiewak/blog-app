import React from "react";
import {Canvas} from "@react-three/fiber";

import Room from "./Room";
import {Stats} from "@react-three/drei";

const deg90 = Math.PI / 2
export const MainModel = () => {
    return (
        <Canvas
            className={"canvasContainer"}
            camera={{
                position: [0, 0, -2],
            }}
        >
            {/*<directionalLight*/}
            {/*  rotation={[Math.PI / 2, 0, 0]}*/}
            {/*  position={[1, -5, -5]}*/}
            {/*  intensity={1}*/}
            {/*/>*/}
            <Stats/>
            <Room/>
            {/*<Stats/>*/}
            {/*<OrbitControls/>*/}
        </Canvas>
    )
}