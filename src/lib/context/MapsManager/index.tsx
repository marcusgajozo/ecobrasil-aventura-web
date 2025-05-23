import { NAME_MAPS } from "@/lib/constants";
import { NameMapsType } from "@/lib/types/types";
import { createContext, ReactNode, useMemo, useState } from "react";
import { generateRandomMapsPaths } from "./functions";

type MapsManagerContextType = {
  saveMap: (nameMap: NameMapsType) => void;
  savePathName: (nameMap: NameMapsType, path: "A" | "B") => void;
  currrentMap: NameMapsType;
  savedMap: Record<
    NameMapsType,
    {
      saved: boolean;
      pathA: NameMapsType | undefined;
      pathB: NameMapsType | undefined;
    }
  >;
  setCurrentMap: (nameMap: NameMapsType) => void;
  mapsPaths: Array<{
    name: NameMapsType;
    path: {
      A: NameMapsType;
      B: NameMapsType;
    };
  }>;
};

export const MapsManagerContext = createContext({} as MapsManagerContextType);

export const MapsManagerProvider = ({
  children,
}: Readonly<{ children: ReactNode }>) => {
  const [currrentMap, setCurrentMap] = useState<NameMapsType>("amazonia");
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

  const mapsPaths = useMemo(() => generateRandomMapsPaths(), []);

  return (
    <MapsManagerContext.Provider
      value={{
        saveMap,
        savePathName,
        currrentMap,
        savedMap,
        setCurrentMap,
        mapsPaths,
      }}
    >
      {children}
    </MapsManagerContext.Provider>
  );
};
