import { TrackInfo } from "./TrackInfo";
import { PlayControls } from "./PlayControls";
import { VolumeControls } from "./VolumeControls";
import { useEffect, useRef, useState } from "react";
import { tracks } from "../../data/SongsData/SongsData";

export const MusicPlayer = ({ isMusicPlayerVisible }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(tracks[1]);
  const [progress, setProgress] = useState(0);

  const playAudio = useRef();

  useEffect(() => {
    if (isPlaying) {
      playAudio.current.play();
    } else {
      playAudio.current.pause();
    }
  }, [isPlaying, currentTrack]);

  useEffect(() => {
    if (!isMusicPlayerVisible) {
      setIsPlaying(false);
    }
  }, [isMusicPlayerVisible]);

  const onPlaying = () => {
    const duration = playAudio.current.duration;
    const currentTime = playAudio.current.currentTime;
    setCurrentTrack({
      ...currentTrack,
      progress: currentTime,
      length: duration,
    });
  };

  const handleProgressChange = (e) => {
    const currentTime = e.target.value;
    playAudio.current.currentTime = currentTime;
    setProgress(currentTime);
  };
  console.log(currentTrack);
  return (
    <div
      className={`${
        !isMusicPlayerVisible && "hidden"
      } fixed w-screen bottom-0 min-h-[10vh] z-40 p-[1vh] bg-black`}
    >
      <div className="h-full flex flex-col sm:flex-row items-center justify-between">
        <audio
          src={currentTrack.url}
          ref={playAudio}
          onTimeUpdate={onPlaying}
        />

        <TrackInfo currentTrack={currentTrack} />
        <PlayControls
          handleProgressChange={handleProgressChange}
          progress={progress}
          track={tracks}
          currentTrack={currentTrack}
          setCurrentTrack={setCurrentTrack}
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
          playAudio={playAudio}
          setProgress={setProgress}
        />
        <VolumeControls playAudio={playAudio} />
      </div>
    </div>
  );
};
