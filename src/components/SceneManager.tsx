import React from 'react'

import { useCache } from '../hooks/useCache'
import { getMediaUrl } from '../lib/utils'
import { useStore } from '../stores'
import { useGachaStore } from '../stores/pu'
import GachaScene from './scenes/GachaScene'
import HistoryScene from './scenes/HistoryScene'
import MainScene from './scenes/MainScene'
import OpeningScene from './scenes/OpeningScene'
import ResultScene from './scenes/ResultScene'

export const SceneManager: React.FC = () => {
  const { scene, setScene } = useStore()
  const { history, lastIsMulti, lastResult, lastStars, startGacha } =
    useGachaStore()
  const onStartGacha = (picks: number) => {
    startGacha(picks)
    setScene('gacha')
  }

  React.useEffect(() => {
    // デバッグ用
    startGacha(12, true)
  }, [])

  switch (scene) {
    case 'entrance':
      return <OpeningScene onEntered={() => setScene('main')} />
    case 'main':
      return (
        <MainScene
          onStartGacha={onStartGacha}
          onHistory={() => setScene('history')}
        />
      )
    case 'gacha':
      return (
        <GachaScene
          multiPick={lastIsMulti}
          stars={lastStars}
          onEnded={(skipped) => {
            setScene('result')
          }}
        />
      )
    case 'result':
      return <ResultScene onClose={() => setScene('main')} />
    case 'history':
      return <HistoryScene onClose={() => setScene('main')} />
    default:
      return <div>Unknown scene: {scene}</div>
  }
}

export default SceneManager
