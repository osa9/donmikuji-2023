import React from 'react'

export interface SkipButtonProps {
  onClick: () => void
}

export const SkipButton: React.FC<SkipButtonProps> = ({ onClick }) => {
  return (
    <button
      className="text-xl text-white px-10 py-2 font-bold"
      style={{ backgroundColor: 'rgb(0,0,0,0.3)' }}
      onClick={() => onClick()}
    >
      スキップ
    </button>
  )
}
