import React from "react"
import { getMediaUrl } from "../../lib/utils"

export interface OpeningSceneProps {
	onEntered: () => void
}

export const OpeningScene: React.FC<OpeningSceneProps> = ({ onEntered }) => {
	return (
		<div className="h-screen w-full" onClick={onEntered}>
			<img
				className="h-full w-full object-cover object-bottom"
				src={getMediaUrl("/gate.jpeg")}
				alt="どん美くじ"
			/>
		</div>
	)
}

export default OpeningScene
