import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type ManagerGameStoreState = {
  isFirstAccess: boolean
  didTheTutorial: boolean
  hitRate: number
  totalCorrect: number
  totalAttempts: number
}

type ManagerGameStoreActions = {
  setIsFirstAccess: (
    isFirstAccess: ManagerGameStoreState['isFirstAccess']
  ) => void
  setDidTheTutorial: (
    didTheTutorial: ManagerGameStoreState['didTheTutorial']
  ) => void
  handleResetGame: () => void
  handleUpdateHitRate: (isCorrect: boolean) => void
}

type ManagerGameStore = ManagerGameStoreState & ManagerGameStoreActions

const INITIAL_STATE = {
  isFirstAccess: true,
  didTheTutorial: false,
  hitRate: 0,
  totalCorrect: 0,
  totalAttempts: 0,
}

export const useManagerGameStore = create<ManagerGameStore>()(
  persist(
    set => ({
      ...INITIAL_STATE,
      setIsFirstAccess: (isFirstAccess: boolean) => set({ isFirstAccess }),
      setDidTheTutorial: (didTheTutorial: boolean) => set({ didTheTutorial }),

      handleUpdateHitRate: (isCorrect: boolean) =>
        set(state => {
          const newTotalAttempts = state.totalAttempts + 1
          const newTotalCorrect = state.totalCorrect + (isCorrect ? 1 : 0)
          const newHitRate = (newTotalCorrect / newTotalAttempts) * 100
          return {
            totalAttempts: newTotalAttempts,
            totalCorrect: newTotalCorrect,
            hitRate: Number(newHitRate.toFixed(2)),
          }
        }),

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
