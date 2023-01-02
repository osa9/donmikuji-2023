import create from 'zustand'

import { Character } from './pu'

type Scene = 'entrance' | 'main' | 'gacha' | 'result' | 'history'

interface DonmikujiState {
  scene: Scene
  setScene: (scene: Scene) => void
}

export const useStore = create<DonmikujiState>((set) => ({
  scene: 'entrance',
  setScene: (scene: Scene) => set({ scene }),
}))
