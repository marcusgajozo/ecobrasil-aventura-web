import { RapierRigidBody } from "@react-three/rapier";
import { create } from "zustand";

type ManagerCharacterStoreStates = {
  character: RapierRigidBody | null;
  isTeleporting: boolean;
};

type ManagerCharacterStoreActions = {
  setCharacter: (body: ManagerCharacterStoreStates["character"]) => void;
  setIsTeleporting: (
    isTeleporting: ManagerCharacterStoreStates["isTeleporting"]
  ) => void;
};

const INITIAL_STATE = {
  character: null,
  isTeleporting: false,
};

export const useManagerCharacterStore = create<
  ManagerCharacterStoreStates & ManagerCharacterStoreActions
>((set) => ({
  ...INITIAL_STATE,
  setCharacter: (body) => set({ character: body }),
  setIsTeleporting: (isTeleporting: boolean) => set({ isTeleporting }),
}));
