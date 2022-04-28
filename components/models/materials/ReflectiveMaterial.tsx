import {MeshReflectorMaterial} from "@react-three/drei";
import React from "react";
import {Texture, Vector2} from "three";

interface ReflectiveMaterialProps {
    normalMap?: Texture
    color?: string,
    emissive?: string
    emissiveIntensity?: number
}

export const ReflectiveMaterial = (props: ReflectiveMaterialProps) => {
    const {normalMap, color, emissive, emissiveIntensity} = props
    return (
        <MeshReflectorMaterial
          blur={[0, 0]}
          mixBlur={0}
          mixStrength={1}
          mixContrast={1}
          resolution={512}
          mirror={1}
          depthScale={0}
          minDepthThreshold={0.9}
          maxDepthThreshold={1}
          depthToBlurRatioBias={0.25}
          distortion={1}
          color={color}
          emissive={emissive || '#1d1d1d'}
          emissiveIntensity={emissiveIntensity || 0.4}
          normalMap={normalMap || null}
          normalScale={new Vector2(0.5, 0.5)}
        />
    )
}