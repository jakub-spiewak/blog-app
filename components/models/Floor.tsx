import {useNormalTexture} from "@react-three/drei";
import React from "react";
import {ReflectiveMaterial} from "./materials/ReflectiveMaterial";

export const Floor = () => {
    const [normalMap] = useNormalTexture(17, {offset: [0, 0], anisotropy: 2, repeat: [2, 2]})
    return (
        <mesh
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        >
            <planeGeometry args={[10, 10]}/>
            <ReflectiveMaterial
              emissive={"black"}
              normalMap={normalMap}/>
        </mesh>
    )
}