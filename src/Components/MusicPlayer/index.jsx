import { TrackInfo } from "./TrackInfo";
import { PlayControls } from "./PlayControls";
import { VolumeControls } from "./VolumeControls";
import { useEffect, useRef, useState } from "react";
import { tracks } from "../../data/SongsData/SongsData";

export const MusicPlayer = ({ isMusicPlayerVisible }) => {
  const [track, setTracks] = useState(tracks);
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
    setCurrentTrack({ ...currentTrack, progress: currentTime, length: duration });
  };

  const handleProgressChange = (e) => {
    const currentTime = e.target.value;
    playAudio.current.currentTime = currentTime;
    setProgress(currentTime);
  };

  return (
    <div className="h-full flex flex-col sm:flex-row items-center justify-between">
      <audio src={currentTrack.url} ref={playAudio} onTimeUpdate={onPlaying} />
      <TrackInfo currentTrack={currentTrack} />
      <PlayControls
        handleProgressChange={handleProgressChange}
        progress={progress}
        track={track}
        setTracks={setTracks}
        currentTrack={currentTrack}
        setCurrentTrack={setCurrentTrack}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        playAudio={playAudio}
        setProgress={setProgress}
      />
      <VolumeControls playAudio={playAudio} />
    </div>
  );
};
