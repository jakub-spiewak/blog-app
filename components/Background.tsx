import {Canvas, useFrame} from "@react-three/fiber";
import React, {Suspense} from "react";
import Java from "./logos/Java"
import Kotlin from "./logos/Kotlin"
import Spring from "./logos/Spring"
import Astronaut from "./Astronaut"
import {LoadingSpinner} from "./LoadingSpinner";
import {LogoOrbit} from "./LogoOrbit";
// import {MathUtils} from "three";

export const Background = () => {
    return (
        <div style={{
            position: "absolute",
            height: "100vh",
            width: "100vw",
            background: "#232323",
            // background: "url('bg.jpg')",
            // backgroundSize: "contain",
            overflow: "hidden",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }}>
            <Suspense fallback={<LoadingSpinner/>}>
                <Canvas>
                    <ambientLight intensity={0.5}/>
                    <directionalLight position={[-2, 5, 2]} intensity={0.5}/>
                    <Astronaut position={[0, -1.5, 0]}/>
                    <LogoOrbit/>
                </Canvas>
            </Suspense>
        </div>
    )
}