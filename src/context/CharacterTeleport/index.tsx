import { NAME_MAPS, POSITIONS_MAPS } from "@/constants";
import { RapierRigidBody } from "@react-three/rapier";
import { createContext, ReactNode, useRef, useState } from "react";

type CharacterTeleportContextType = {
  character: React.RefObject<RapierRigidBody>;
  teleportCharacter: (nameMap: (typeof NAME_MAPS)[number]) => void;
  currrentMap: (typeof NAME_MAPS)[number];
  saveMap: (nameMap: (typeof NAME_MAPS)[number]) => void;
  savedMap: Record<
    (typeof NAME_MAPS)[number],
    {
      saved: boolean;
    }
  >;
};

export const CharacterTeleportContext = createContext(
  {} as CharacterTeleportContextType
);

export const CharacterTeleportProvider = ({
  children,
}: Readonly<{ children: ReactNode }>) => {
  const [currrentMap, setCurrentMap] =
    useState<(typeof NAME_MAPS)[number]>("amazonia");
  const character = useRef<RapierRigidBody>(null);
  const [savedMap, setSavedMap] = useState<
    Record<(typeof NAME_MAPS)[number], { saved: boolean }>
  >(() =>
    NAME_MAPS.reduce(
      (acc, nameMap) => ({
        ...acc,
        [nameMap]: { saved: false },
      }),
      {} as Record<(typeof NAME_MAPS)[number], { saved: boolean }>
    )
  );

  const saveMap = (nameMap: (typeof NAME_MAPS)[number]) => {
    setSavedMap((prev) => ({
      ...prev,
      [nameMap]: { saved: true },
    }));
  };

  const teleportCharacter = (nameMap: (typeof NAME_MAPS)[number]) => {
    // TODO: teleportar o personagem se o mapa atual estiver salvo
    if (character.current) {
      const positionMap = POSITIONS_MAPS[nameMap];
      positionMap.y = 5;
      character.current.setTranslation(positionMap, true);
      setCurrentMap(nameMap);
    }
  };

  return (
    <CharacterTeleportContext.Provider
      value={{ character, teleportCharacter, currrentMap, saveMap, savedMap }}
    >
      {children}
    </CharacterTeleportContext.Provider>
  );
};
