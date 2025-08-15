import { NAME_ISLAND, POSITIONS_ISLAND_DATA } from "@/lib/constants/island";
import { useManagerIslandStore } from "@/lib/stores/useManagerIslandStore";
import { calculateWorldPosition } from "@/lib/utils/calculateWorldPosition";
import { SpringValue, useSpring } from "@react-spring/three";
import { RapierRigidBody } from "@react-three/rapier";
import { createContext, ReactNode, useRef, useState } from "react";
import { Vector3 } from "three";

type NameIsland = (typeof NAME_ISLAND)[number];

type CharacterTeleportContextType = {
  positionInicial: Vector3;
  character: React.RefObject<RapierRigidBody>;
  teleportCharacter: (nameMap: NameIsland, positionTeleport?: Vector3) => void;
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
  const [isTeleporting, setIsTeleporting] = useState(false);
  const currentIsland = useManagerIslandStore((state) => state.currentIsland);

  const handleVisitIsland = useManagerIslandStore(
    (state) => state.handleVisitIsland
  );
  const setCurrentIsland = useManagerIslandStore(
    (state) => state.setCurrentIsland
  );

  const [positionInicial] = useState<Vector3>(() =>
    calculateWorldPosition({
      basePosition: POSITIONS_ISLAND_DATA[currentIsland],
      relativeOffset: new Vector3(0, 10, 0),
    })
  );

  const animationTeleport = useSpring({
    scale: isTeleporting ? 0 : 1,
    config: { duration: 300 },
  });

  const teleportCharacter = (
    nameMap: NameIsland,
    positionTeleport?: Vector3
  ) => {
    const position = calculateWorldPosition({
      basePosition: positionTeleport || POSITIONS_ISLAND_DATA[nameMap],
      relativeOffset: new Vector3(0, 7, 0),
    });

    setIsTeleporting(true);
    setTimeout(() => {
      if (character.current) character.current.setTranslation(position, true);
      setIsTeleporting(false);
    }, 300);
    handleVisitIsland(nameMap);
    setCurrentIsland(nameMap);
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
