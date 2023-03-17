import { useRef, useState } from "react";
import { TrackInfo } from "./TrackInfo";

export const MusicPlayer = () => {
  const [progress, setProgress] = useState(0);

  const handleProgressChange = (e) => {
    setProgress(e.target.value);
  };

  return (
    <div className="h-full flex items-center justify-between">
      <TrackInfo />
      <input
        type="range"
        value={progress}
        onChange={handleProgressChange}
        className="muze-range"
      />
      <TrackInfo />
    </div>
  );
};
