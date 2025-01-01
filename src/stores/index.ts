import create from "zustand"

import { Character } from "./pu"

type Scene = "entrance" | "main" | "gacha" | "result" | "history"

interface DonmikujiState {
	scene: Scene
	setScene: (scene: Scene) => void
	currentPu: "normal" | "2023" | "2025"
	setPu: (pu: "normal" | "2023" | "2025") => void
}

export const useStore = create<DonmikujiState>((set) => ({
	scene: "entrance",
	currentPu: "2025",
	setScene: (scene: Scene) => set({ scene }),
	setPu: (currentPu) => set({ currentPu }),
}))
