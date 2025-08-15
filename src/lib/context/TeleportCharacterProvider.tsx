import { NAME_ISLAND, POSITIONS_ISLAND_DATA } from "@/lib/constants/island";
import { useManagerCharacterStore } from "@/lib/stores/useManagerCharacterStore";
import { useManagerIslandStore } from "@/lib/stores/useManagerIslandStore";
import { calculateWorldPosition } from "@/lib/utils/calculateWorldPosition";
import { SpringValue } from "@react-spring/three";
import { useSpring } from "@react-spring/three";
import { createContext, useCallback } from "react";
import { Vector3 } from "three";

type TeleportCharacterContext = {
  animationTeleport: { scale: SpringValue<number> };
  handleTeleportCharacter: (
    nameMap: (typeof NAME_ISLAND)[number],
    positionTeleport?: Vector3
  ) => void;
};

export const TeleportCharacterContext =
  createContext<TeleportCharacterContext | null>(null);

type TeleportCharacterProviderProps = {
  children: React.ReactNode;
};

export const TeleportCharacterProvider = ({
  children,
}: TeleportCharacterProviderProps) => {
  const character = useManagerCharacterStore((state) => state.character);

  const handleVisitIsland = useManagerIslandStore(
    (state) => state.handleVisitIsland
  );
  const setCurrentIsland = useManagerIslandStore(
    (state) => state.setCurrentIsland
  );

  const [animationTeleport] = useSpring(() => ({
    scale: 0.5,
    config: { duration: 500 },
  }));

  const handleTeleportCharacter = useCallback(
    (nameMap: (typeof NAME_ISLAND)[number], positionTeleport?: Vector3) => {
      const position = calculateWorldPosition({
        basePosition: positionTeleport || POSITIONS_ISLAND_DATA[nameMap],
        relativeOffset: new Vector3(0, 2, 0),
      });

      if (character) {
        character.setTranslation(position, true);
        handleVisitIsland(nameMap);
        setCurrentIsland(nameMap);
      }
    },
    [character, handleVisitIsland, setCurrentIsland]
  );

  return (
    <TeleportCharacterContext.Provider
      value={{ handleTeleportCharacter, animationTeleport }}
    >
      {children}
    </TeleportCharacterContext.Provider>
  );
};
