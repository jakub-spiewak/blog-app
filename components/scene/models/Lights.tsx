import {useRef} from "react";
import {PointLight} from "three";
import {useFrame} from "@react-three/fiber";

const RADIUS = 16
const PHASE_1 = 2 * Math.PI / 3
const PHASE_2 = 4 * Math.PI / 3

const Lights = () => {
    const light1 = useRef<PointLight>(null)
    const light2 = useRef<PointLight>(null)
    const light3 = useRef<PointLight>(null)

    useFrame(({clock}) => {
        if (!light1.current || !light2.current || !light3.current) return;

        const time = clock.getElapsedTime()
        light1.current.position.set(
            RADIUS * Math.sin(time),
            RADIUS * Math.cos(time),
            Math.sin(time)
        )
        // light2.current.position.set(
        //     RADIUS * Math.sin(time + PHASE_1),
        //     RADIUS * Math.cos(time + PHASE_1),
        //     Math.sin(time)
        // )
        // light3.current.position.set(
        //     RADIUS * Math.sin(time + PHASE_2),
        //     RADIUS * Math.cos(time + PHASE_2),
        //     Math.sin(time)
        // )
    })

    return (
        <group>
            <pointLight ref={light1} intensity={.9} color={'red'}/>
            {/*<pointLight ref={light1} intensity={.9} color={'#ff9200'}/>*/}
            {/*<pointLight ref={light2} intensity={.5} color={'green'}/>*/}
            {/*<pointLight ref={light3} intensity={.5} color={'blue'}/>*/}
        </group>
    )
}

export default Lights