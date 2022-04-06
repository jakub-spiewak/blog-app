import {Canvas} from "@react-three/fiber";
import {OrbitControls} from "@react-three/drei";
import React, {Suspense} from "react";
import Astronaut from "./Astronaut";

export const Background = () => {
    return (
        <Canvas style={{
            position: "absolute",
            height: "100vh",
            width: "100vw",
            background: "#232323"
        }}>
            {/*<OrbitControls/>*/}
            <ambientLight intensity={0.5}/>
            <directionalLight position={[-2, 5, 2]} intensity={0.5}/>
            <Suspense fallback={null}>
                <Astronaut position={[0, -1.5, 0]}/>
            </Suspense>
        </Canvas>

    )
}