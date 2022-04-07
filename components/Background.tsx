import {Canvas} from "@react-three/fiber";
import React, { Suspense } from "react";
import Astronaut from "./Astronaut";
import {LoadingSpinner} from "./LoadingSpinner";

export const Background = () => {
    return (
        <div style={{
            position: "absolute",
            height: "100vh",
            width: "100vw",
            background: "#232323",
            overflow: "hidden",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }}>
            <Suspense fallback={<LoadingSpinner/>}>
                <Canvas>
                    {/*<OrbitControls/>*/}
                    <ambientLight intensity={0.5}/>
                    <directionalLight position={[-2, 5, 2]} intensity={0.5}/>
                    <Astronaut position={[0, -1.5, 0]}/>
                </Canvas>
            </Suspense>
        </div>
    )
}