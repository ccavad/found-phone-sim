import { create } from "zustand";

export const useGameStore = create((set) => ({
  modalVisible: false,
  setModalVisible: (value) => set({ modalVisible: value }),
  progression: "",
  isLocked: false,
  setIsLocked: (value) => set({ isLocked: value }),
  enteredPin: "",
}));
