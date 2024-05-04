import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface State {
  name: string;
  joined: boolean;
  showControls: boolean;
  setShowControls: (showControls: boolean) => void;
  setName: (name: string) => void;
  setJoined: (joined: boolean) => void;
}

export const useStore = create<State>()((set) => ({
  name: "",
  joined: false,
  showControls: true,
  setName: (name) => set(() => ({ name })),
  setJoined: (joined) => set(() => ({ joined })),
  setShowControls: (showControls) => set(() => ({ showControls })),
}));
