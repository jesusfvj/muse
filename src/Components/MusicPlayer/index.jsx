import { TrackInfo } from "./TrackInfo";
import { PlayControls } from "./PlayControls";
import { VolumeControls } from "./VolumeControls";
import { useRef, useState } from "react";

export const MusicPlayer = () => {
  const [currentTrack, setCurrentTrack] = useState([0]);
  const playAudio = useRef();

  const [isMusicPlaying, setIsMusicPlaying] = useState(false);

  const playMusic = () => {
    playAudio.current.play();
    setIsMusicPlaying(true);
  };
  const pauseMusic = () => {
    playAudio.current.pause();
    setIsMusicPlaying(false);
  };
  return (
    <div className="h-full flex flex-col sm:flex-row items-center justify-between">
      <audio
        className="hidden"
        src="https://res.cloudinary.com/dmkdsujzh/video/upload/v1644586627/tracks-dev/A8_MUSIC_PRODUCTIONS_-_Better_umwfkh.mp3"
        controls
        ref={playAudio}
      />
      <TrackInfo currentTrack={currentTrack} playAudio={playAudio} />
      <PlayControls
        playMusic={playMusic}
        pauseMusic={pauseMusic}
        isMusicPlaying={isMusicPlaying}
      />
      <VolumeControls />
    </div>
  );
};
