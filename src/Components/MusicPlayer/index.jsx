import { TrackInfo } from "./TrackInfo";
import { PlayControls } from "./PlayControls";
import { VolumeControls } from "./VolumeControls";
import { useRef, useState } from "react";

export const MusicPlayer = () => {
  const [currentTrack, setCurrentTrack] = useState([0]);
  const playAudio = useRef();
  return (
    <div className="h-full flex flex-col sm:flex-row items-center justify-between">
      <audio src="https://res.cloudinary.com/dmkdsujzh/video/upload/v1644586627/tracks-dev/A8_MUSIC_PRODUCTIONS_-_Better_umwfkh.mp3" controls/>
      <TrackInfo currentTrack={currentTrack} playAudio={playAudio} />
      <PlayControls playAudio={playAudio}/>
      <VolumeControls />
    </div>
  );
};
