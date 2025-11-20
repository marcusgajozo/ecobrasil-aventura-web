import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type ManagerGameStoreState = {
  isFirstAccess: boolean
  didTheTutorial: boolean
}

type ManagerGameStoreActions = {
  setIsFirstAccess: (
    isFirstAccess: ManagerGameStoreState['isFirstAccess']
  ) => void
  setDidTheTutorial: (
    didTheTutorial: ManagerGameStoreState['didTheTutorial']
  ) => void
  handleResetGame: () => void
}

type ManagerGameStore = ManagerGameStoreState & ManagerGameStoreActions

const INITIAL_STATE = {
  isFirstAccess: true,
  didTheTutorial: false,
}

export const useManagerGameStore = create<ManagerGameStore>()(
  persist(
    set => ({
      ...INITIAL_STATE,
      setIsFirstAccess: (isFirstAccess: boolean) => set({ isFirstAccess }),
      setDidTheTutorial: (didTheTutorial: boolean) => set({ didTheTutorial }),
      handleResetGame: () => {
        localStorage.clear()
        window.location.reload()
      },
    }),
    {
      name: 'manager-game-store',
    }
  )
)
