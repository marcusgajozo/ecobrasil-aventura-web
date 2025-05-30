import { NAME_ISLAND, POSITIONS_ISLAND_DATA } from "@/lib/constants";
import { useMapsManager } from "@/lib/hooks/useMapsManager";
import { calculateWorldPosition } from "@/lib/utils/calculateWorldPosition";
import { SpringValue, useSpring } from "@react-spring/three";
import { RapierRigidBody } from "@react-three/rapier";
import { createContext, ReactNode, useRef, useState } from "react";
import { Vector3 } from "three";

type NameIsland = (typeof NAME_ISLAND)[number];

type CharacterTeleportContextType = {
  positionInicial: Vector3;
  character: React.RefObject<RapierRigidBody>;
  teleportCharacter: (nameMap: NameIsland) => void;
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
    calculateWorldPosition({
      basePosition: POSITIONS_ISLAND_DATA[currrentMap],
      relativeOffset: new Vector3(0, 15, 0),
    })
  );

  const [isTeleporting, setIsTeleporting] = useState(false);

  const animationTeleport = useSpring({
    scale: isTeleporting ? 0 : 1,
    config: { duration: 300 },
  });

  const teleportCharacter = (nameMap: NameIsland) => {
    const position = calculateWorldPosition({
      basePosition: POSITIONS_ISLAND_DATA[nameMap],
      relativeOffset: new Vector3(0, 15, 0),
    });

    setIsTeleporting(true);
    setTimeout(() => {
      if (character.current) character.current.setTranslation(position, true);
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
