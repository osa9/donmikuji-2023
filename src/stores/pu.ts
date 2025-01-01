import create from "zustand"
import { pickup as pickup2023 } from "../gacha/2023"
import { pickup as pickup2025 } from "../gacha/2025"
import { Character } from "../gacha/models"
import { pickup as pickupNormal } from "../gacha/normal"

export const rarityTable = (characters: Character[]): Character[][] => {
	return [...Array(5)].map((_, i) =>
		characters.filter((c) => c.stars === i + 1),
	)
}

const ratio = [0.06, 0.3, 0.38, 0.24, 0.02]
const accRatio = ratio
	.slice(1)
	.reduce((acc, cur) => [...acc, acc[acc.length - 1] + cur], [ratio[0]])

export const pickup = (
	picks: number,
	characters: Character[],
	history: Character[],
) => {
	const result: Character[] = []
	for (let i = 0; i < picks; i++) {
		const r = Math.random()
		const star = accRatio.findIndex((v) => r < v)
		const candidates = rarityTable(characters)[star]
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
	startGacha: (
		picks: number,
		pu: "2023" | "normal" | "2025",
		dryRun?: boolean,
	) => void
	lastResult: Character[]
	lastIsMulti: boolean
	lastStars: number
	resultString: string
}

const luckText = (result: Character) => {
	return result.stars === 5 ? `星5吉(${result.name})` : result.luck
}

const getResultString = (result: Character[]) => {
	const footer = "\n\n#donmikuji"
	if (result.length === 1) {
		return `あなたの今年の運勢は${luckText(result[0])}です!` + footer
	} else {
		const monthly = result
			.map((c, idx) => `${idx + 1}月: ${luckText(c)}`)
			.join("\n")
		return `あなたの今年の運勢は\n${monthly}` + footer
	}
}

export const useGachaStore = create<GachaResultState>((set, get) => ({
	history: [],
	lastResult: [],
	lastStars: 0,
	lastIsMulti: false,
	resultString: "",
	startGacha: (picks, pu: "normal" | "2023" | "2025", dryRun = false) => {
		const characters =
			pu === "normal"
				? pickupNormal.characters
				: pu === "2023"
					? pickup2023.characters
					: pickup2025.characters
		const result = pickup(
			picks,
			characters,
			get().history.map((h) => h.character),
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
	const senbei = history.findIndex((item) => item.character.id === "banimiko")

	return {
		history,
		totalSenbei: history.length,
		totalPrice: history.length * 200,
		senbei: senbei + 1,
		price: senbei === -1 ? 0 : (senbei + 1) * 200,
	}
}
