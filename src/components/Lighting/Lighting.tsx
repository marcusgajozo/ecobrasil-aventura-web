import { NAME_ISLAND } from "@/lib/constants/island";
import { useManagerIslandStore } from "@/lib/stores/useManagerIslandStore";
import { animated, useSpring } from "@react-spring/three";
import { useControls } from "leva";
import { useEffect, useRef } from "react";
import { DirectionalLight } from "three";

type NameIsland = (typeof NAME_ISLAND)[number];

type LightingPreset = {
  ambientIntensity: number;
  directionalIntensity: number;
  directionalColor: string;
};

const lightingPresets: Record<NameIsland, LightingPreset> = {
  pampa: {
    ambientIntensity: 0.8,
    directionalIntensity: 1.5,
    directionalColor: "#ffffff",
  },
  amazonia: {
    ambientIntensity: 0.6,
    directionalIntensity: 1.2,
    directionalColor: "#d4ffe9",
  },
  cerrado: {
    ambientIntensity: 0.9,
    directionalIntensity: 1.8,
    directionalColor: "#ffdcb3",
  },
  caatinga: {
    ambientIntensity: 1.0,
    directionalIntensity: 2.0,
    directionalColor: "#fff4e0",
  },
  pantanal: {
    ambientIntensity: 0.7,
    directionalIntensity: 1.4,
    directionalColor: "#e0f8ff",
  },
  "mata-atlantica": {
    ambientIntensity: 0.5,
    directionalIntensity: 1.1,
    directionalColor: "#e8f5e9",
  },
};

export const Lighting = () => {
  const currentIsland = useManagerIslandStore((state) => state.currentIsland);
  const directionalLightRef = useRef<DirectionalLight>(null!);

  const { ambient, directional, color, position } = useControls(
    "Iluminação da Cena",
    {
      ambient: {
        value: lightingPresets[currentIsland].ambientIntensity,
        min: 0,
        max: 2,
        step: 0.1,
        label: "Luz Ambiente",
      },
      directional: {
        value: lightingPresets[currentIsland].directionalIntensity,
        min: 0,
        max: 5,
        step: 0.1,
        label: "Luz Direcional",
      },
      color: {
        value: lightingPresets[currentIsland].directionalColor,
        label: "Cor da Luz",
      },
      position: {
        value: [10, 10, 0],
        label: "Posição da Luz",
      },
    }
  );

  const [animatedProps, api] = useSpring(
    () => ({
      ambientIntensity: lightingPresets[currentIsland].ambientIntensity,
      directionalIntensity: lightingPresets[currentIsland].directionalIntensity,
      directionalColor: lightingPresets[currentIsland].directionalColor,
      config: { duration: 1000 },
    }),
    [currentIsland]
  );

  useEffect(() => {
    const preset = lightingPresets[currentIsland] || lightingPresets.pampa;
    api.start({
      ambientIntensity: preset.ambientIntensity,
      directionalIntensity: preset.directionalIntensity,
      directionalColor: preset.directionalColor,
    });
  }, [currentIsland, api]);

  return (
    <>
      <animated.ambientLight intensity={animatedProps.ambientIntensity} />
      <animated.directionalLight
        ref={directionalLightRef}
        position={position}
        intensity={animatedProps.directionalIntensity}
        color={animatedProps.directionalColor}
        castShadow
      />
    </>
  );
};
