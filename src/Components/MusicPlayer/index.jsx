import { TrackInfo } from "./TrackInfo";
import { PlayControls } from "./PlayControls";
import { VolumeControls } from "./VolumeControls";

export const MusicPlayer = () => {
  return (
    <div className="h-full flex flex-col sm:flex-row items-center justify-between">
      <TrackInfo />
      <PlayControls />
      <VolumeControls />
    </div>
  );
};
