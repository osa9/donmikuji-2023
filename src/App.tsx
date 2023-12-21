import React from "react";

import SceneManager from "./components/SceneManager";
import { useCache } from "./hooks/useCache";
import { getMediaUrl } from "./lib/utils";

export interface GachaViewProps {
  onEnded: () => void;
}

export const GachaView: React.FC<GachaViewProps> = ({ onEnded }) => {
  return (
    <div>
      <video
        src={getMediaUrl("/3starwish-single.mp4")}
        autoPlay
        onEnded={onEnded}
      />
    </div>
  );
};

export default function App() {
  const _cache = useCache();
  return (
    <main>
      <div className="mx-auto">
        <SceneManager />
      </div>
    </main>
  );
}
