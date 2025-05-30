import { createContext, ReactNode, useMemo, useState } from "react";
import { generateRandomMapsPaths } from "./functions";
import { NAME_ISLAND } from "@/lib/constants";

type NameIsland = (typeof NAME_ISLAND)[number];

type MapsManagerContextType = {
  saveMap: (nameMap: NameIsland) => void;
  savePathName: (nameMap: NameIsland, path: "A" | "B") => void;
  currrentMap: NameIsland;
  savedMap: Record<
    NameIsland,
    {
      saved: boolean;
      pathA: NameIsland | undefined;
      pathB: NameIsland | undefined;
    }
  >;
  setCurrentMap: (nameMap: NameIsland) => void;
  mapsPaths: Array<{
    name: NameIsland;
    path: {
      A: NameIsland;
      B: NameIsland;
    };
  }>;
};

export const MapsManagerContext = createContext({} as MapsManagerContextType);

export const MapsManagerProvider = ({
  children,
}: Readonly<{ children: ReactNode }>) => {
  const [currrentMap, setCurrentMap] = useState<NameIsland>("pampa");
  const [savedMap, setSavedMap] = useState<
    Record<
      NameIsland,
      {
        saved: boolean;
        pathA: NameIsland | undefined;
        pathB: NameIsland | undefined;
      }
    >
  >(() =>
    NAME_ISLAND.reduce(
      (acc, nameMap) => ({
        ...acc,
        [nameMap]: { saved: false, pathA: undefined, pathB: undefined },
      }),
      {} as Record<
        NameIsland,
        {
          saved: boolean;
          pathA: NameIsland | undefined;
          pathB: NameIsland | undefined;
        }
      >
    )
  );

  const saveMap = (nameMap: NameIsland) => {
    const attributes = savedMap[nameMap];
    setSavedMap((prev) => ({
      ...prev,
      [nameMap]: { ...attributes, saved: true },
    }));
  };

  const savePathName = (nameMap: NameIsland, path: "A" | "B") => {
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
