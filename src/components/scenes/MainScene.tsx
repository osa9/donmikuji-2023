import React from 'react'

import { getMediaUrl } from '../../lib/utils'
import { GachaButton } from '../GachaButton'

export interface MainSceneProps {
  onStartGacha: (picks: number) => void
  onHistory: () => void
}

export const OpeningScene: React.FC<MainSceneProps> = ({
  onStartGacha,
  onHistory,
}) => {
  return (
    <div
      className="w-full h-screen flex items-center justify-center relative"
      style={{
        backgroundImage: `url('${getMediaUrl('/background.png')}')`,
      }}
    >
      <div className="absolute top-10 flex w-full align-middle justify-center items-center px-10 flex-wrap">
        <div className="text-white font-extrabold text-2xl">どんみくじ</div>
        <div className="flex-grow" />
        <div className="text-white font-extrabold">
          <div
            style={{ backgroundColor: 'rgba(0,0,0,0.4)' }}
            className="rounded-full px-5 py-1 text-xl"
          >
            🍘&nbsp;&nbsp;&nbsp;∞
          </div>
        </div>
      </div>
      <img
        className="px-4"
        src={getMediaUrl('/gacha-pu.png')}
        alt=""
        style={{ maxHeight: '500px' }}
      />
      <div className="absolute flex w-full bottom-10 align-middle justify-center items-center px-10 flex-wrap">
        <button
          style={{
            backgroundColor: '#e1ded5',
            width: '150px',
            color: '#3b4255',
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
