import { TrackInfo } from "./TrackInfo";
import { PlayControls } from "./PlayControls";
import { VolumeControls } from "./VolumeControls";
import { useEffect, useRef, useState } from "react";
import { tracks } from "../../data/SongsData/SongsData";


export const MusicPlayer = () => {
  const [track, setTracks] = useState(tracks);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(tracks[1]);

  const playAudio = useRef();

  useEffect(() => {
    
    if (isPlaying) {
      playAudio.current.play();
    }
    else {
      playAudio.current.pause();
    }
  }, [isPlaying, currentTrack])

  const onPlaying = () => {
    const duration = playAudio.current.duration;
    const ct = playAudio.current.currentTime;

    setCurrentTrack({ ...currentTrack, "progress": ct, "length": duration })
  }

  return (
    <div className="h-full flex flex-col sm:flex-row items-center justify-between">
      <audio src={currentTrack.url} ref={playAudio} onTimeUpdate={onPlaying} />
      <TrackInfo />
      <PlayControls track={track} setTracks={setTracks} currentTrack={currentTrack} setCurrentTrack={setCurrentTrack} isPlaying={isPlaying} setIsPlaying={setIsPlaying} playAudio={playAudio} />
      <VolumeControls playAudio={playAudio}/>
    </div>
  );
};
