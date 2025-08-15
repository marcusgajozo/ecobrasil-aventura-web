import { create } from "zustand";

type Modal = "game-setup" | "quiz" | "map-screen";

type ModalManagerStoreStates = {
  modal: Modal | null;
};

type ModalManagerStoreActions = {
  handleOpenModal: (modal: ModalManagerStoreStates["modal"]) => void;
  handleCloseModal: () => void;
};

const INITIAL_STATE: ModalManagerStoreStates = {
  modal: null,
};

export const useModalManagerStore = create<
  ModalManagerStoreStates & ModalManagerStoreActions
>((set) => ({
  ...INITIAL_STATE,
  handleOpenModal: (modal) => set({ modal }),
  handleCloseModal: () => set({ modal: null }),
}));
