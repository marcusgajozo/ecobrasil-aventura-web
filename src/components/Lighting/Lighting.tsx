import { useMapsManager } from "@/lib/hooks/useMapsManager";
import { animated, useSpring } from "@react-spring/three";
import { useControls } from "leva";
import { useEffect, useRef } from "react";
import { DirectionalLight } from "three";

// 1. Defina as pré-configurações de iluminação para cada ilha
const lightingPresets = {
  pampa: {
    ambientIntensity: 0.8,
    directionalIntensity: 1.5,
    directionalColor: "#ffffff", // Luz solar branca e forte
  },
  amazonia: {
    ambientIntensity: 0.6,
    directionalIntensity: 1.2,
    directionalColor: "#d4ffe9", // Luz um pouco mais fraca e com um tom esverdeado
  },
  cerrado: {
    ambientIntensity: 0.9,
    directionalIntensity: 1.8,
    directionalColor: "#ffdcb3", // Luz bem forte com tom alaranjado de pôr-do-sol
  },
  // Adicione outras ilhas aqui...
  caatinga: {
    ambientIntensity: 1.0,
    directionalIntensity: 2.0,
    directionalColor: "#fff4e0", // Luz muito intensa e clara, como a do meio-dia no sertão
  },
  pantanal: {
    ambientIntensity: 0.7,
    directionalIntensity: 1.4,
    directionalColor: "#e0f8ff", // Luz clara com um tom levemente azulado de céu limpo
  },
  mataAtlantica: {
    ambientIntensity: 0.5,
    directionalIntensity: 1.1,
    directionalColor: "#e8f5e9", // Luz filtrada pela vegetação, suave e esverdeada
  },
};

export const Lighting = () => {
  const { currrentMap } = useMapsManager();
  const directionalLightRef = useRef<DirectionalLight>(null!);

  // 2. Crie controles no 'leva' para ajustes finos em tempo real
  const { ambient, directional, color, position } = useControls(
    "Iluminação da Cena",
    {
      ambient: {
        value: lightingPresets[currrentMap].ambientIntensity,
        min: 0,
        max: 2,
        step: 0.1,
        label: "Luz Ambiente",
      },
      directional: {
        value: lightingPresets[currrentMap].directionalIntensity,
        min: 0,
        max: 5,
        step: 0.1,
        label: "Luz Direcional",
      },
      color: {
        value: lightingPresets[currrentMap].directionalColor,
        label: "Cor da Luz",
      },
      position: {
        value: [10, 10, 0], // Posição X, Y, Z
        label: "Posição da Luz",
      },
    }
  );

  // 3. Use 'react-spring' para animar as mudanças de iluminação
  const [animatedProps, api] = useSpring(
    () => ({
      ambientIntensity: lightingPresets[currrentMap].ambientIntensity,
      directionalIntensity: lightingPresets[currrentMap].directionalIntensity,
      directionalColor: lightingPresets[currrentMap].directionalColor,
      config: { duration: 1000 }, // Duração da transição em milissegundos
    }),
    [currrentMap]
  );

  // 4. Dispare a animação quando o mapa atual (currrentMap) mudar
  useEffect(() => {
    const preset = lightingPresets[currrentMap] || lightingPresets.pampa; // Usa pampa como padrão
    api.start({
      ambientIntensity: preset.ambientIntensity,
      directionalIntensity: preset.directionalIntensity,
      directionalColor: preset.directionalColor,
    });

    // Se você também quiser atualizar os controles do leva para refletir a pré-configuração:
    // (Isso é opcional, mas ajuda a manter a consistência da UI do leva)
    // import { useStore } from 'leva'
    // const store = useStore()
    // store.setValueByPath('Iluminação da Cena.Luz Ambiente', preset.ambientIntensity)
    // etc...
  }, [currrentMap, api]);

  // Use as props do Leva para debug, ou as props animadas para o jogo final.
  // Aqui, usamos um misto: a animação controla a intensidade e cor, e o Leva a posição.
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
      {/* Opcional: Adicione um 'helper' para ver a posição da luz direcional durante o desenvolvimento */}
      {/* <directionalLightHelper args={[directionalLightRef.current, 2]} /> */}
    </>
  );
};
