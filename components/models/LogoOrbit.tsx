import React from "react";
import Docker from "./logos/Docker"
import Git from "./logos/Git"
import Html from "./logos/Html"
import Java from "./logos/Java"
import Kotlin from "./logos/Kotlin"
import ReactLogo from "./logos/React"
import Spring from "./logos/Spring"
import Typescript from "./logos/Typescript"
// import {Euler, MathUtils, Vector3} from "three";

// const LOGOS_AMOUNT = 8
// const SCALE_VALUE = 0.3
// const SCALE: Vector3 = new Vector3(SCALE_VALUE, SCALE_VALUE, SCALE_VALUE)
// const ROTATION: Euler = new Euler(MathUtils.degToRad(90), 0, 0)
// const phases: number[] = Array(LOGOS_AMOUNT).fill(0).map((_, index) => {
//     return (index / LOGOS_AMOUNT) * 2 * Math.PI
// })

export const LogoOrbit = () => {
    return (
        <>
            <Docker/>
            <Git/>
            <Html/>
            <Java/>
            <Kotlin/>
            <ReactLogo/>
            <Spring/>
            <Typescript/>
        </>
    )
}