import { NAME_MAPS, POSITIONS_MAPS } from "@/constants";
import { RapierRigidBody } from "@react-three/rapier";
import { createContext, ReactNode, useRef, useState } from "react";

type NameMapsType = (typeof NAME_MAPS)[number];

type CharacterTeleportContextType = {
  character: React.RefObject<RapierRigidBody>;
  teleportCharacter: (nameMap: NameMapsType) => void;
  currrentMap: NameMapsType;
  saveMap: (nameMap: NameMapsType) => void;
  savePathName: (nameMap: NameMapsType, path: "A" | "B") => void;
  savedMap: Record<
    NameMapsType,
    {
      saved: boolean;
      pathA: NameMapsType | undefined;
      pathB: NameMapsType | undefined;
    }
  >;
};

export const CharacterTeleportContext = createContext(
  {} as CharacterTeleportContextType
);

export const CharacterTeleportProvider = ({
  children,
}: Readonly<{ children: ReactNode }>) => {
  const [currrentMap, setCurrentMap] = useState<NameMapsType>("amazonia");
  const character = useRef<RapierRigidBody>(null);
  const [savedMap, setSavedMap] = useState<
    Record<
      NameMapsType,
      {
        saved: boolean;
        pathA: NameMapsType | undefined;
        pathB: NameMapsType | undefined;
      }
    >
  >(() =>
    NAME_MAPS.reduce(
      (acc, nameMap) => ({
        ...acc,
        [nameMap]: { saved: false, pathA: undefined, pathB: undefined },
      }),
      {} as Record<
        NameMapsType,
        {
          saved: boolean;
          pathA: NameMapsType | undefined;
          pathB: NameMapsType | undefined;
        }
      >
    )
  );

  const saveMap = (nameMap: NameMapsType) => {
    const attributes = savedMap[nameMap];
    setSavedMap((prev) => ({
      ...prev,
      [nameMap]: { ...attributes, saved: true },
    }));
  };

  const savePathName = (nameMap: NameMapsType, path: "A" | "B") => {
    const attributes = savedMap[currrentMap];
    setSavedMap((prev) => {
      if (path === "A") {
        return {
          ...prev,
          [currrentMap]: { ...attributes, pathA: nameMap },
        };
      } else {
        return {
          ...prev,
          [currrentMap]: { ...attributes, pathB: nameMap },
        };
      }
    });
  };

  const teleportCharacter = (nameMap: NameMapsType) => {
    // TODO: teleportar o personagem se o mapa atual estiver salvo
    // TODO: chamar uma transição para trocar o mapa
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
        currrentMap,
        saveMap,
        savedMap,
        savePathName,
      }}
    >
      {children}
    </CharacterTeleportContext.Provider>
  );
};
