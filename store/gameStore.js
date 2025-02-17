import { create } from "zustand";

export const gameStore = create((set) => ({
  modalVisible: false,
  setModalVisible: (value) => set({ modalVisible: value }),
  progression: "",
}));
