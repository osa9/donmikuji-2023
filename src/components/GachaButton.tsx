import React from "react"

import { getMediaUrl } from "../lib/utils"

export interface GachaButtonProps {
	onClick: (picks: number) => void
	picks: number
}

export const GachaButton: React.FC<GachaButtonProps> = ({ picks, onClick }) => {
	return (
		<button className="text-black" onClick={() => onClick(picks)}>
			<span
				style={{
					backgroundImage: `url('${getMediaUrl("/wish-button.png")}')`,
					width: "250px",
					maxWidth: "40vw",
					height: "70px",
					backgroundSize: "100% 100%",
				}}
				className="inline-block flex flex-col items-center justify-center align-middle"
			>
				<div style={{ color: "#b4a08c" }} className="font-extrabold">
					{picks}回祈願
				</div>
				<div style={{ color: "#b4a08c" }} className="font-extrabold">
					🍘 × {picks}
				</div>
			</span>
		</button>
	)
}
