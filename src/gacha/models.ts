export interface Character {
	id: string
	name: string
	luck: string
	image: string
	thumbnail: string
	stars: number
}

export interface Pickup {
	id: string
	name: string
	bannerUrl: string
	puImageUrl: string
	characters: Character[]
}
