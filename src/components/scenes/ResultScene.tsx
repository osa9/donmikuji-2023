import React from 'react'

import { getMediaUrl } from '../../lib/utils'
import { Character, useGachaStore } from '../../stores/pu'
import { SkipButton } from '../SkipButton'
import TailwindIndicator from '../TailwindIndicator'

export interface ResultSceneProps {
  onClose: () => void
}

export interface SingleResultProps {
  character: Character
  onClick?: () => void
  onSkip?: () => void
  label?: string
}

export const SingleResult: React.FC<SingleResultProps> = ({
  character,
  onClick,
  onSkip,
  label,
}) => {
  return (
    <>
      <div
        className="flex flex-col items-center justify-center relative mt-10 w-full"
        onClick={onClick}
      >
        <div className="font-bold text-3xl">
          あなたの{label ?? '今年'}の運勢は…
        </div>
        <div
          style={{
            width: '800px',
            height: '800px',
            maxWidth: '90vw',
            maxHeight: '90vh',
          }}
          className="mt-4 text-center"
        >
          <img
            src={getMediaUrl(character.image)}
            alt={character.name}
            className="object-cover max-w-full max-h-full object-bottom mx-auto"
          />
        </div>
      </div>
      {onSkip && (
        <div className="absolute top-10 right-10">
          <SkipButton onClick={onSkip} />
        </div>
      )}
    </>
  )
}

export const MultiResult: React.FC<{
  characters: Character[]
  setCompleted: () => void
}> = ({ characters, setCompleted }) => {
  const [selected, setSelected] = React.useState(0)
  const set = (index: number) => {
    setSelected(index)
    if (index === characters.length) {
      setCompleted()
    }
  }

  if (selected < characters.length) {
    return (
      <SingleResult
        character={characters[selected]}
        label={`${selected + 1}月`}
        onClick={() => set(selected + 1)}
        onSkip={() => set(characters.length)}
      />
    )
  }

  return (
    <div className="flex items-center justify-center relative">
      <div className="mt-10 text-2xl">
        <div className="font-bold">あなたの今年の運勢は…</div>
        <div className="grid gap-2 mt-4 grid-cols-4 sm:grid-cols-6 xl:grid-cols-12">
          {characters.map((character, idx) => (
            <div
              key={idx}
              style={{
                width: '100px',
                height: '350px',
              }}
              className="relative flex flex-col items-center max-h-44 sm:max-h-60 xl:max-h-full overflow-hidden"
            >
              <div className="text-3xl">{idx + 1}月</div>
              <div className="flex-grow">
                <div className="flex items-stretch">
                  <img
                    className="object-cover object-top w-full h-full"
                    src={getMediaUrl(character.thumbnail)}
                    alt="どん美くじ"
                  />
                </div>
              </div>
              <div
                className="absolute bottom-0 sm:bottom-2 xl:bottom-3 font-extrabold text-cyan-50 text-2xl sm:text-4xl"
                style={
                  {
                    '-webkit-text-stroke': '1px #000000',
                  } as any
                }
              >
                {character.luck}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export const ResultScene: React.FC<ResultSceneProps> = ({ onClose }) => {
  const { lastResult, resultString } = useGachaStore()
  const [completed, setCompleted] = React.useState(lastResult.length === 1)
  return (
    <div className="w-full h-screen text-white flex flex-col items-center">
      {lastResult.length > 1 ? (
        <MultiResult
          characters={lastResult}
          setCompleted={() => setCompleted(true)}
        />
      ) : (
        <SingleResult character={lastResult[0]} />
      )}
      {completed && (
        <div className="mt-6 flex items-center justify-center flex-wrap">
          <div>
            <textarea
              defaultValue={resultString + '\nhttps://donmikuji.hansode.club/'}
              style={{
                width: '600px',
                maxWidth: '90vw',
              }}
              className="text-black text-base"
              onFocus={(e) => e.target.select()}
            ></textarea>
          </div>
          <div>
            <a
              href="https://anypost.dev/share"
              onClick={(e) => {
                window.open(
                  'https://anypost.dev/share?s=' +
                    encodeURIComponent('https://donmikuji.hansode.club/') +
                    '&t=' +
                    encodeURIComponent(resultString + '\n'),
                  '',
                  'width=500,height=750'
                )
                e.preventDefault()
                return false
              }}
              style={{ color: 'white', textDecorationLine: 'none' }}
            >
              <div
                style={{
                  display: 'inline-block',
                  background: '#000080',
                  padding: '4px',
                  margin: '4px 6px',
                  borderRadius: '5px',
                  textAlign: 'center',
                  width: '80px',
                  lineHeight: '7px',
                  fontFamily: 'Avenir,Helvetica,Arial,sans-serif',
                }}
              >
                <img
                  src="https://anypost.dev/external-assets/share.svg"
                  width="14"
                  alt="share"
                />
                Share
                <div style={{ fontSize: '0.5em' }}>via anypost.dev</div>
              </div>
            </a>
          </div>
          <button className="absolute top-10 right-10" onClick={onClose}>
            <img src={getMediaUrl('/closing-button.png')} alt="閉じる" />
          </button>
          <TailwindIndicator />
        </div>
      )}
    </div>
  )
}

export default ResultScene
