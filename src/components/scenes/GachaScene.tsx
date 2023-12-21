import React from "react";

import { getMediaUrl } from "../../lib/utils";

export interface GachaSceneProps {
  multiPick: boolean;
  stars: number;
  onEnded: (skipped: boolean) => void;
}

export const GachaScene: React.FC<GachaSceneProps> = ({
  multiPick,
  stars,
  onEnded,
}) => {
  let src = "/3starwish-single.mp4";
  if (multiPick && stars === 4) src = "/4starwish.mp4";
  else if (multiPick && stars === 5) src = "/5starwish.mp4";
  else if (!multiPick && stars === 4) src = "/4starwish-single.mp4";
  else if (!multiPick && stars === 5) src = "/5starwish-single.mp4";

  return (
    <div className="w-full h-screen">
      <video
        src={getMediaUrl(src)}
        autoPlay
        onEnded={() => onEnded(false)}
        className="object-cover h-full w-full object-bottom"
      />
      <button
        type="button"
        className="absolute top-10 right-10 text-xl text-white px-10 py-2 font-bold"
        style={{ backgroundColor: "rgb(0,0,0,0.3)" }}
        onClick={() => onEnded(true)}
      >
        スキップ
      </button>
    </div>
  );
};

export default GachaScene;
