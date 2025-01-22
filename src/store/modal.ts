import {create} from 'zustand'

export enum EnensModals {
  SEARCHBAR = 'search_bar',
  FILTERCARD = 'filter_card',
}

interface ModalState {
  [EnensModals.SEARCHBAR] : boolean,
  [EnensModals.FILTERCARD]: boolean
}
interface ModaleHandler {
  state: ModalState,
  openModal: (dialog: EnensModals) => void,
  closeModal: (dialog: EnensModals) => void,
  toggleModal: (dialog: EnensModals) => void,
  handleCloseModal: (dialog: EnensModals) => () => void,
  handleOpenModal: (dialog: EnensModals) => () => void,
  handleTogleModal: (dialog: EnensModals) => () => void,
}

export const useModalHandler = create<ModaleHandler>((set) => ({
  state: {
    [EnensModals.SEARCHBAR]: false,
    [EnensModals.FILTERCARD]: false,
  },
  openModal(dialog) {
    set((store) => ({
      ...store,
      state: {
        ...store.state,
        [dialog]: true
      }
    }))
  },
  closeModal(dialog) {
    set((store) => ({
      ...store,
      state: {
        ...store.state,
        [dialog]: false
      }
    }))
  },
  toggleModal(dialog) {
    set((store) => ({
      ...store,
      state: {
        ...store.state,
        [dialog]: !store.state[dialog]
      }
    }))
  },
  handleCloseModal(dialog: EnensModals){
    return () => {
      set((store) => ({
        ...store,
        state: {
          ...store.state,
          [dialog]: false
        }
      }))
    }
  },
  handleOpenModal(dialog: EnensModals) {
    return () => {
      set((store) => ({
        ...store,
        state: {
          ...store.state,
          [dialog]: true,
        },
      }))
    }
  },
  handleTogleModal(dialog: EnensModals) {
    return () => {
      set((store) => ({
        ...store,
        state: {
          ...store.state,
          [dialog]: !store.state[dialog]
        }
      }))
    }
  }
}))