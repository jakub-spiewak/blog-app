import React, {createRef, useEffect} from "react";
import Docker from "./logos/Docker"
import Git from "./logos/Git"
import Html from "./logos/Html"
import Java from "./logos/Java"
import Kotlin from "./logos/Kotlin"
import ReactLogo from "./logos/React"
import Spring from "./logos/Spring"
import Typescript from "./logos/Typescript"
import {Group} from "three";
import {useFrame} from "@react-three/fiber";
// import {Euler, MathUtils, Vector3} from "three";

const RADIUS = 3
// const LOGOS_AMOUNT = 8
// const SCALE_VALUE = 0.3
// const SCALE: Vector3 = new Vector3(SCALE_VALUE, SCALE_VALUE, SCALE_VALUE)
// const ROTATION: Euler = new Euler(MathUtils.degToRad(90), 0, 0)
// const phases: number[] = Array(LOGOS_AMOUNT).fill(0).map((_, index) => {
//     return (index / LOGOS_AMOUNT) * 2 * Math.PI
// })


const ease = (x: number, range: number = 1, offset: number = 0): number => {
    if (offset >= x || x >= (offset + range)) return 0;
    return Math.sin(Math.PI * ((x - offset) / range))
}

export const LogoOrbit = () => {
    const dockerRef = createRef<Group>()
    const gitRef = createRef<Group>()
    const htmlRef = createRef<Group>()
    const javaRef = createRef<Group>()
    const kotlinRef = createRef<Group>()
    const reactRef = createRef<Group>()
    const springRef = createRef<Group>()
    const tsRef = createRef<Group>()

    const logos = [dockerRef, gitRef, htmlRef, javaRef, kotlinRef, reactRef, springRef, tsRef]

    useFrame(({clock}) => {
        const time = clock.getElapsedTime()

        logos.forEach((logo, index) => {
            const phase = index / logos.length * 2 * Math.PI
            const x = RADIUS * Math.sin(phase + time / 4);
            const y = RADIUS * Math.cos(phase + time / 4);
            const z = 0
            // Math.sin(phase + time / 4);
            logo.current?.position.set(x, z, y)
            logo.current?.rotation.set(Math.PI / 2, 0, time / 2)
            // logo.current?.scale.set(0.5, 0.5, 0.5)
        })
    })

    useEffect(() => {
        logos.forEach(logo => {
            logo.current?.scale.set(0, 0, 0)
        })
        window.addEventListener("scroll", () => {
            const scrollValue = window.scrollY / window.screen.height
            console.log(scrollValue)
            console.log(window.scrollY, window.screen.height, window.scrollY / window.screen.height)
            const scale = ease(scrollValue, 1.2, 0.4) / 2
            logos.forEach(logo => {
                logo.current?.scale.set(scale, scale, scale)
            })
        }, false)
    })

    return (
        <>
            <Docker ref={dockerRef}/>
            <Git ref={gitRef}/>
            <Html ref={htmlRef}/>
            <Java ref={javaRef}/>
            <Kotlin ref={kotlinRef}/>
            <ReactLogo ref={reactRef}/>
            <Spring ref={springRef}/>
            <Typescript ref={tsRef}/>
        </>
    )
}
