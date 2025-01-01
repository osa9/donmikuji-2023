import { Carousel } from "flowbite-react"
import React from "react"

import { getMediaUrl } from "../../lib/utils"
import { GachaButton } from "../GachaButton"

export interface MainSceneProps {
	onStartGacha: (picks: number) => void
	onHistory: () => void
	onChangePu: (pu: "normal" | "2023" | "2025") => void
	currentPu: "normal" | "2023" | "2025"
}

const getPuMediaUrl = (pu: "normal" | "2023" | "2025") => {
	switch (pu) {
		case "normal":
			return getMediaUrl("/pu/normal.png")
		case "2023":
			return getMediaUrl("/pu/2023.png")
		case "2025":
			return getMediaUrl("/pu/2025.png")
	}
}

export const OpeningScene: React.FC<MainSceneProps> = ({
	onStartGacha,
	onHistory,
	currentPu,
	onChangePu,
}) => {
	const carouselDefaultPosition =
		currentPu === "normal" ? 0 : currentPu === "2023" ? 1 : 2

	return (
		<div
			className="relative flex h-screen w-full items-center justify-center"
			style={{
				backgroundImage: `url('${getMediaUrl("/background.png")}')`,
			}}
		>
			<div className="absolute top-10 flex w-full flex-col flex-wrap items-center justify-between px-10 align-middle md:flex-row">
				<div className="font-extrabold text-2xl text-white">どんみくじ</div>
				<div className="flex max-w-full space-x-2">
					<div>
						<button onClick={() => onChangePu("normal")}>
							<img
								src={getMediaUrl("/pu/dirudo-banner.png")}
								alt=""
								className="max-w-[100px] sm:max-w-[150px] md:max-w-[200px] lg:max-w-[250px]"
							/>
						</button>
					</div>
					<div>
						<button onClick={() => onChangePu("2023")}>
							<img
								src={getMediaUrl("/pu/banimiko-banner.png")}
								alt=""
								className="max-w-[100px] sm:max-w-[150px] md:max-w-[200px] lg:max-w-[250px]"
							/>
						</button>
					</div>
					<div>
						<button onClick={() => onChangePu("2025")}>
							<img
								src={getMediaUrl("/pu/sanpei-banner.png")}
								alt=""
								className="max-w-[100px] sm:max-w-[150px] md:max-w-[200px] lg:max-w-[250px]"
							/>
						</button>
					</div>
				</div>
				<div className="font-extrabold text-white">
					<div
						style={{ backgroundColor: "rgba(0,0,0,0.4)" }}
						className="rounded-full px-5 py-1 text-xl"
					>
						🍘&nbsp;&nbsp;&nbsp;∞
					</div>
				</div>
			</div>

			<div>
				<div
					className="mt-8 max-w-[1000px]"
					style={{ aspectRatio: "1244 / 641" }}
				>
					<img src={getPuMediaUrl(currentPu)} alt="" />
				</div>
			</div>
			<div className="absolute bottom-10 flex w-full flex-wrap items-center justify-center px-10 align-middle">
				<button
					style={{
						backgroundColor: "#e1ded5",
						width: "150px",
						color: "#3b4255",
					}}
					className="rounded-full px-8 py-2 font-extrabold"
					onClick={() => onHistory()}
				>
					祈願履歴
				</button>
				<div className="flex-grow" />
				<div className="flex">
					<GachaButton
						onClick={(picks) => {
							onStartGacha(picks)
						}}
						picks={1}
					/>
					<GachaButton
						onClick={(picks) => {
							onStartGacha(picks)
						}}
						picks={12}
					/>
				</div>
			</div>
		</div>
	)
}

export default OpeningScene
