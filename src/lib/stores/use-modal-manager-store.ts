import { create } from 'zustand'

type Modal =
  | 'config-game'
  | 'quiz'
  | 'map-screen'
  | 'end-of-game'
  | 'tutorial'
  | 'help'
  | 'show-controls'
  | 'about-game'

type ModalManagerStoreStates = {
  modal: Modal | null
}

type ModalManagerStoreActions = {
  handleOpenModal: (modal: ModalManagerStoreStates['modal']) => void
  handleCloseModal: () => void
}

const INITIAL_STATE: ModalManagerStoreStates = {
  modal: null,
}

export const useModalManagerStore = create<
  ModalManagerStoreStates & ModalManagerStoreActions
>(set => ({
  ...INITIAL_STATE,
  handleOpenModal: modal => set({ modal }),
  handleCloseModal: () => set({ modal: null }),
}))
