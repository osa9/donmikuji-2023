import React from 'react'

import Head from 'next/head'

import SceneManager from '../components/SceneManager'
import { useCache } from '../hooks/useCache'
import { getMediaUrl } from '../lib/utils'

export interface GachaViewProps {
  onEnded: () => void
}

export const GachaView: React.FC<GachaViewProps> = ({ onEnded }) => {
  return (
    <div>
      <video
        src={getMediaUrl('/3starwish-single.mp4')}
        autoPlay
        onEnded={onEnded}
      />
    </div>
  )
}

export default function Home() {
  const _cache = useCache()
  return (
    <div>
      <Head>
        <title>どん美くじ</title>
        <meta name="description" content="運勢を占おう!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="preload"
          href={getMediaUrl('/3starwish-single.mp4')}
          type="video/mp4"
          as="video"
        />
        <meta http-equiv="content-language" content="ja" />
      </Head>
      <main>
        <div className="mx-auto">
          <SceneManager />
        </div>
      </main>
    </div>
  )
}
