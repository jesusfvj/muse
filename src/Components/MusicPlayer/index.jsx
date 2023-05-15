import { TrackInfo } from "./TrackInfo";
import { PlayControls } from "./PlayControls";
import { VolumeControls } from "./VolumeControls";
import { useEffect, useRef, useState } from "react";
import { useTracks } from "../../Context/TracksContext/TracksContext";

export const MusicPlayer = ({ isMusicPlayerVisible }) => {
  const { playerQueue, index } = useTracks();
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(null);

  const playAudio = useRef();
  
  useEffect(() => {
    if (!currentTrack) return;
    if (isPlaying) {
      playAudio.current.play();
    } else {
      playAudio.current.pause();
    }
  }, [isPlaying, currentTrack]);

  useEffect(() => {
    if (playerQueue[index]) {
      setCurrentTrack(playerQueue[index]);
    }
    if (currentTrack) {
      setIsPlaying(true);
    }
  }, [playerQueue, index]);

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
  };

  return (
    <div
      className={`${
        !isMusicPlayerVisible && "hidden"
      } fixed w-screen bottom-0 min-h-[10vh] z-40 p-[1vh] bg-black`}
    >
      {currentTrack ? (
        <div className="h-full flex flex-col sm:flex-row items-center justify-between">
          <audio
            src={currentTrack.trackUrl}
            ref={playAudio}
            onTimeUpdate={onPlaying}
          />

          <TrackInfo currentTrack={currentTrack} />
          <PlayControls
            handleProgressChange={handleProgressChange}
            tracks={playerQueue}
            currentTrack={currentTrack}
            setCurrentTrack={setCurrentTrack}
            index={index}
            isPlaying={isPlaying}
            setIsPlaying={setIsPlaying}
            playAudio={playAudio}
          />
          <VolumeControls playAudio={playAudio} />
        </div>
      ) : null}
    </div>
  );
};
