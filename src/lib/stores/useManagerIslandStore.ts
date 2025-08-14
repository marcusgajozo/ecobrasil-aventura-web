import { create } from "zustand";
import { NAME_ISLAND } from "../constants/island";

type ManagerIslandStoreStates = {
  currentIsland: (typeof NAME_ISLAND)[number];
  islandsInformation: Record<
    (typeof NAME_ISLAND)[number],
    {
      saved: boolean;
      visited: boolean;
    }
  >;
};

type ManagerIslandStoreActions = {
  setCurrentIsland: (island: ManagerIslandStoreStates["currentIsland"]) => void;
  handleSaveIsland: (island: ManagerIslandStoreStates["currentIsland"]) => void;
};

const INITIAL_STATE: ManagerIslandStoreStates = {
  currentIsland: "pampa",
  islandsInformation: Object.fromEntries(
    NAME_ISLAND.map((island) => [island, { saved: false, visited: false }])
  ) as ManagerIslandStoreStates["islandsInformation"],
};

export const useManagerIslandStore = create<
  ManagerIslandStoreStates & ManagerIslandStoreActions
>((set) => ({
  ...INITIAL_STATE,
  setCurrentIsland: (island) => set({ currentIsland: island }),
  handleSaveIsland: (island) =>
    set((state) => ({
      islandsInformation: {
        ...state.islandsInformation,
        [island]: { saved: true },
      },
    })),
}));
