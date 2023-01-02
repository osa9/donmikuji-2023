import create from 'zustand'

export interface Character {
  id: string
  name: string
  luck: string
  image: string
  thumbnail: string
  stars: number
}

export const table: Character[] = [
  {
    id: 'banimiko',
    luck: '星5吉',
    name: 'バニ神子ドン美',
    image: '/characters/banimiko.png',
    thumbnail: '/characters/banimiko_small.png',
    stars: 5,
  },
  {
    id: 'dirudonmi',
    luck: '星5吉',
    name: 'ディルドン美',
    image: '/characters/dirudo.png',
    thumbnail: '/characters/dirudo_small.png',
    stars: 5,
  },
  {
    id: 'daikici',
    luck: '大吉',
    name: 'ドン美(大吉)',
    image: '/characters/large.png',
    thumbnail: '/characters/large_small.png',
    stars: 4,
  },
  {
    id: 'chukichi',
    luck: '中吉',
    name: 'ドン美(中吉)',
    image: '/characters/middle.png',
    thumbnail: '/characters/middle_small.png',
    stars: 3,
  },
  {
    id: 'chukichi',
    luck: '吉',
    name: 'ドン美(吉)',
    image: '/characters/normal.png',
    thumbnail: '/characters/normal_small.png',
    stars: 3,
  },
  {
    id: 'small',
    luck: '小吉',
    name: 'ドン美(小吉)',
    image: '/characters/small.png',
    thumbnail: '/characters/small_small.png',
    stars: 2,
  },
  {
    id: 'bottom',
    luck: '末吉',
    name: 'ドン美(末吉)',
    image: '/characters/bottom.png',
    thumbnail: '/characters/bottom_small.png',
    stars: 2,
  },
  {
    id: 'bad',
    luck: '凶',
    name: 'ドン美(凶)',
    image: '/characters/bad.png',
    thumbnail: '/characters/bad_small.png',
    stars: 1,
  },
]

export const rarityTable: Character[][] = [...Array(5)].map((_, i) =>
  table.filter((c) => c.stars === i + 1)
)

const ratio = [0.06, 0.3, 0.38, 0.24, 0.02]
const accRatio = ratio
  .slice(1)
  .reduce((acc, cur) => [...acc, acc[acc.length - 1] + cur], [ratio[0]])

export const pickup = (picks: number, history: Character[]) => {
  const result: Character[] = []
  for (let i = 0; i < picks; i++) {
    const r = Math.random()
    const star = accRatio.findIndex((v) => r < v)
    const candidates = rarityTable[star]
    const candidate = candidates[Math.floor(Math.random() * candidates.length)]
    result.push(candidate)
  }

  return result
}

export interface HistoryItem {
  character: Character
  date: string // for persistence
}

interface GachaResultState {
  history: HistoryItem[]
  startGacha: (picks: number, dryRun?: boolean) => void
  lastResult: Character[]
  lastIsMulti: boolean
  lastStars: number
  resultString: string
}

const luckText = (result: Character) => {
  return result.stars === 5 ? `星5吉(${result.name})` : result.luck
}

const getResultString = (result: Character[]) => {
  const footer = '\n\n#donmikuji'
  if (result.length === 1) {
    return `あなたの今年の運勢は${luckText(result[0])}です!` + footer
  } else {
    const monthly = result
      .map((c, idx) => `${idx + 1}月: ${luckText(c)}`)
      .join('\n')
    return `あなたの今年の運勢は\n${monthly}` + footer
  }
}

export const useGachaStore = create<GachaResultState>((set, get) => ({
  history: [],
  lastResult: [],
  lastStars: 0,
  lastIsMulti: false,
  resultString: '',
  startGacha: (picks, dryRun = false) => {
    const result = pickup(
      picks,
      get().history.map((h) => h.character)
    )
    const maxStars = Math.max(...result.map((c) => c.stars))
    set({
      lastResult: result,
      lastIsMulti: picks > 1,
      lastStars: maxStars,
      resultString: getResultString(result),
    })
    if (!dryRun) {
      set((state) => ({
        history: [
          ...state.history,
          ...result.map((item) => {
            return {
              character: item,
              date: new Date().toISOString(),
            }
          }),
        ],
      }))
    }
  },
}))

export const useGachaHistory = () => {
  const history = useGachaStore((state) => state.history)
  const senbei = history.findIndex((item) => item.character.id === 'banimiko')

  return {
    history,
    totalSenbei: history.length,
    totalPrice: history.length * 200,
    senbei: senbei + 1,
    price: senbei === -1 ? 0 : (senbei + 1) * 200,
  }
}
