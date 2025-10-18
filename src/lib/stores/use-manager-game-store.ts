import { create } from "zustand";
import { persist } from "zustand/middleware";

type ManagerGameStoreState = {
  isFirstAccess: boolean;
};

type ManagerGameStoreActions = {
  setIsFirstAccess: (
    isFirstAccess: ManagerGameStoreState["isFirstAccess"]
  ) => void;
  handleResetGame: () => void;
};

type ManagerGameStore = ManagerGameStoreState & ManagerGameStoreActions;

const INITIAL_STATE = {
  isFirstAccess: true,
};

export const useManagerGameStore = create<ManagerGameStore>()(
  persist(
    (set) => ({
      ...INITIAL_STATE,
      setIsFirstAccess: (isFirstAccess: boolean) => set({ isFirstAccess }),
      handleResetGame: () => {
        // Limpa todos os dados do localStorage
        localStorage.clear();
        // Recarrega a página
        window.location.reload();
      },
    }),
    {
      name: "manager-game-store",
    }
  )
);
