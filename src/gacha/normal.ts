import { Pickup } from "./models"

export const pickup: Pickup = {
	id: "normal",
	name: "恒常",
	bannerUrl: "/pu/2025_banner.png",
	puImageUrl: "/pu/2025.png",
	characters: [
		{
			id: "dirudonmi",
			luck: "星5吉",
			name: "ディルドン美",
			image: "/characters/dirudo.png",
			thumbnail: "/characters/dirudo_small.png",
			stars: 5,
		},
		{
			id: "daikichi2025",
			luck: "大吉",
			name: "ドン美(大吉)",
			image: "/characters/2025/large.png",
			thumbnail: "/characters/2025/large_small.png",
			stars: 4,
		},
		{
			id: "chukichi2025",
			luck: "中吉",
			name: "ドン美(中吉)",
			image: "/characters/2025/middle.png",
			thumbnail: "/characters/2025/middle_small.png",
			stars: 3,
		},
		{
			id: "small2025",
			luck: "小吉",
			name: "ドン美(小吉)",
			image: "/characters/2025/small.png",
			thumbnail: "/characters/2025/small_small.png",
			stars: 2,
		},
		{
			id: "bad2025",
			luck: "凶",
			name: "ドン美(凶)",
			image: "/characters/2025/bad.png",
			thumbnail: "/characters/2025/bad_small.png",
			stars: 1,
		},
	],
}
