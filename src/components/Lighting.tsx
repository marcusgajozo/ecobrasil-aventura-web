import { NAME_ISLAND } from "@/lib/constants/island";
import { useManagerIslandStore } from "@/lib/stores/useManagerIslandStore";
import { useControls, button } from "leva";
import { useRef } from "react";
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
    ambientIntensity: 1.1,
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

  // Controles simples e essenciais do Leva (sem color pickers problemáticos)
  const {
    ambientIntensity,
    ambientColorPreset,
    directionalIntensity,
    directionalColorPreset,
    directionalPosition,
    hemisphereIntensity,
    skyColorPreset,
    groundColorPreset,
    enableHemisphere,
  } = useControls("🌟 Iluminação Simples", {
    // Luz Ambiente
    ambientIntensity: {
      value: lightingPresets[currentIsland].ambientIntensity,
      min: 0,
      max: 2,
      step: 0.05,
      label: "💡 Ambiente",
    },
    ambientColorPreset: {
      value: "Branco",
      options: {
        Branco: "#ffffff",
        "Azul Claro": "#e6f3ff",
        "Amarelo Suave": "#fff8dc",
        "Verde Claro": "#f0fff0",
        "Rosa Claro": "#fff0f5",
      },
      label: "💡 Cor Ambiente",
    },

    // Luz Direcional (Sol)
    directionalIntensity: {
      value: lightingPresets[currentIsland].directionalIntensity,
      min: 0,
      max: 3,
      step: 0.1,
      label: "☀️ Sol",
    },
    directionalColorPreset: {
      value: lightingPresets[currentIsland].directionalColor,
      options: {
        Branco: "#ffffff",
        "Azul Pantanal": "#e0f8ff",
        "Verde Amazônia": "#d4ffe9",
        "Dourado Cerrado": "#ffdcb3",
        "Amarelo Caatinga": "#fff4e0",
        "Verde Mata": "#e8f5e9",
      },
      label: "☀️ Cor do Sol",
    },
    directionalPosition: {
      value: [10, 15, 5],
      step: 1,
      label: "☀️ Posição do Sol",
    },

    enableHemisphere: {
      value: true,
      label: "🌍 Ativar Céu",
    },
    hemisphereIntensity: {
      value: 0.4,
      min: 0,
      max: 1,
      step: 0.1,
      label: "🌍 Intensidade do Céu",
    },
    skyColorPreset: {
      value: "Azul Céu",
      options: {
        "Azul Céu": "#87CEEB",
        "Azul Claro": "#ADD8E6",
        Branco: "#ffffff",
        "Amarelo Claro": "#FFFFE0",
        "Verde Claro": "#F0FFF0",
      },
      label: "🌍 Cor do Céu",
    },
    groundColorPreset: {
      value: "Marrom Solo",
      options: {
        "Marrom Solo": "#8B7355",
        "Verde Grama": "#228B22",
        "Amarelo Areia": "#F4A460",
        "Cinza Pedra": "#696969",
        "Marrom Escuro": "#654321",
      },
      label: "🌍 Cor do Solo",
    },
  });

  // Função para copiar configurações
  const copyValues = () => {
    const config = {
      island: currentIsland,
      ambientIntensity,
      ambientColor: ambientColorPreset,
      directionalIntensity,
      directionalColor: directionalColorPreset,
      directionalPosition,
      hemisphereIntensity,
      hemisphereSkyColor: skyColorPreset,
      hemisphereGroundColor: groundColorPreset,
      enableHemisphere,
    };
    console.log(
      "🎨 Configuração de Iluminação:",
      JSON.stringify(config, null, 2)
    );
    navigator.clipboard?.writeText(JSON.stringify(config, null, 2));
    alert("Configuração copiada! Veja o console para detalhes.");
  };

  // Botão para copiar
  useControls("📋 Copiar Config", {
    copiarConfig: button(copyValues),
  });

  return (
    <>
      {/* Luz Ambiente */}
      <ambientLight intensity={ambientIntensity} color={ambientColorPreset} />

      {/* Luz Direcional (Sol) */}
      <directionalLight
        ref={directionalLightRef}
        position={directionalPosition}
        intensity={directionalIntensity}
        color={directionalColorPreset}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-near={0.1}
        shadow-camera-far={50}
        shadow-camera-left={-15}
        shadow-camera-right={15}
        shadow-camera-top={15}
        shadow-camera-bottom={-15}
      />

      {/* Luz Hemisférica (Céu e Solo) */}
      {enableHemisphere && (
        <hemisphereLight
          args={[skyColorPreset, groundColorPreset, hemisphereIntensity]}
          position={[0, 20, 0]}
        />
      )}
    </>
  );
};
