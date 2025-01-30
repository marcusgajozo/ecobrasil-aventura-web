import { POSITIONS_MAPS } from "@/constants";
import { useMapsManager } from "@/hooks/useMapsManager";
import { NameMapsType } from "@/types/types";
import { RapierRigidBody } from "@react-three/rapier";
import { createContext, ReactNode, useRef } from "react";

type CharacterTeleportContextType = {
  character: React.RefObject<RapierRigidBody>;
  teleportCharacter: (nameMap: NameMapsType) => void;
};

export const CharacterTeleportContext = createContext(
  {} as CharacterTeleportContextType
);

// TODO: teleportar o personagem se o mapa atual estiver salvo
// TODO: chamar uma transição para trocar o mapa

export const CharacterTeleportProvider = ({
  children,
}: Readonly<{ children: ReactNode }>) => {
  const character = useRef<RapierRigidBody>(null);
  const { setCurrentMap } = useMapsManager();

  const teleportCharacter = (nameMap: NameMapsType) => {
    if (character.current) {
      const positionMap = POSITIONS_MAPS[nameMap];
      positionMap.y = 15;
      character.current.setTranslation(positionMap, true);
      setCurrentMap(nameMap);
    }
  };

  return (
    <CharacterTeleportContext.Provider
      value={{
        character,
        teleportCharacter,
      }}
    >
      {children}
    </CharacterTeleportContext.Provider>
  );
};
