import React from 'react'
import {getMediaUrl} from "../../lib/utils";

export interface OpeningSceneProps {
  onEntered: () => void
}

export const OpeningScene: React.FC<OpeningSceneProps> = ({onEntered}) => {
  return <div className="w-full h-screen" onClick={onEntered}>
    <img className="object-cover h-full w-full object-bottom" src={getMediaUrl("/gate.jpeg")} alt="どん美くじ"/>
  </div>
}

export default OpeningScene