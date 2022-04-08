import Docker from "./logos/Docker"
import Git from "./logos/Git"
import Html from "./logos/Html"
import Java from "./logos/Java"
import Kotlin from "./logos/Kotlin"
import ReactLogo from "./logos/React"
import Spring from "./logos/Spring"
import Typescript from "./logos/Typescript"
import {Euler, Group, MathUtils, Vector3} from "three";
import {useFrame} from "@react-three/fiber";
import {createRef, useRef, useState} from "react";

const LOGOS_AMOUNT = 8
const SCALE_VALUE = 0.3
const SCALE: Vector3 = new Vector3(SCALE_VALUE, SCALE_VALUE, SCALE_VALUE)
const ROTATION: Euler = new Euler(MathUtils.degToRad(90), 0, 0)

export const RADIUS = 4

export interface HasPhase {
    phase: number
}

const phases: number[] = Array(LOGOS_AMOUNT).fill(0).map((_, index) => {
    return (index / LOGOS_AMOUNT) * 2 * Math.PI
})

export const LogoOrbit = () => {

    return (
        <>
            <Docker scale={SCALE} rotation={ROTATION} phase={phases[0]}/>
            <Git scale={SCALE} rotation={ROTATION} phase={phases[1]}/>
            <Html scale={SCALE} rotation={ROTATION} phase={phases[2]}/>
            <Java scale={SCALE} rotation={ROTATION} phase={phases[3]}/>
            <Kotlin scale={SCALE} rotation={ROTATION} phase={phases[4]}/>
            <ReactLogo scale={SCALE} rotation={ROTATION} phase={phases[5]}/>
            <Spring scale={SCALE} rotation={ROTATION} phase={phases[6]}/>
            <Typescript scale={SCALE} rotation={ROTATION} phase={phases[7]}/>
        </>
    )
}