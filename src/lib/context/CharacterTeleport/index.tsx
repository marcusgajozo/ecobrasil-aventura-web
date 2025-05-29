import { POSITIONS_MAPS } from "@/lib/constants";
import { useMapsManager } from "@/lib/hooks/useMapsManager";
import { NameMapsType } from "@/lib/types/types";
import { positionRelative } from "@/lib/utils/positionRelative";
import { SpringValue, useSpring } from "@react-spring/three";
import { RapierRigidBody } from "@react-three/rapier";
import { createContext, ReactNode, useRef, useState } from "react";
import { Vector3 } from "three";

type CharacterTeleportContextType = {
  positionInicial: Vector3;
  character: React.RefObject<RapierRigidBody>;
  teleportCharacter: (nameMap: NameMapsType) => void;
  animationTeleport: {
    scale: SpringValue<number>;
  };
};

export const CharacterTeleportContext = createContext(
  {} as CharacterTeleportContextType
);

// TODO: chamar uma transição para trocar o mapa
// TODO: verificar porque a animação do teleport não está funcionando

export const CharacterTeleportProvider = ({
  children,
}: Readonly<{ children: ReactNode }>) => {
  const character = useRef<RapierRigidBody>(null);
  const { setCurrentMap, currrentMap } = useMapsManager();
  const [positionInicial] = useState<Vector3>(() =>
    positionRelative({
      position: POSITIONS_MAPS[currrentMap],
      newPosition: new Vector3(0, 15, 0),
    })
  );

  const [isTeleporting, setIsTeleporting] = useState(false);

  const animationTeleport = useSpring({
    scale: isTeleporting ? 0 : 1,
    config: { duration: 300 },
  });

  const teleportCharacter = (nameMap: NameMapsType) => {
    const positionMap = POSITIONS_MAPS[nameMap];
    positionMap.y = 15;
    setIsTeleporting(true);
    setTimeout(() => {
      if (character.current)
        character.current.setTranslation(positionMap, true);
      setIsTeleporting(false);
    }, 300);
    setCurrentMap(nameMap);
  };

  return (
    <CharacterTeleportContext.Provider
      value={{
        character,
        teleportCharacter,
        animationTeleport,
        positionInicial,
      }}
    >
      {children}
    </CharacterTeleportContext.Provider>
  );
};
