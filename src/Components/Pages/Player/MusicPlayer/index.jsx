import { PlayControls } from "./PlayControls";
import { VolumeControls } from "./VolumeControls";
import { useEffect, useRef, useState } from "react";
import { tracks } from "../../../../data/SongsData/SongsData";
import { Typography } from "../../../Typography";
import { Link } from "react-router-dom";

export const MusicPlayer = () => {
  const [track, setTracks] = useState(tracks);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(tracks[1]);

  const playAudioPlayer = useRef();

  useEffect(() => {
    if (isPlaying) {
      playAudioPlayer.current.play();
    } else {
      playAudioPlayer.current.pause();
    }
  }, [isPlaying, currentTrack]);

  const onPlaying = () => {
    const duration = playAudioPlayer.current.duration;
    const currentTime = playAudioPlayer.current.currentTime;
    setCurrentTrack({
      ...currentTrack,
      progress: currentTime,
      length: duration,
    });
  };

  const handleProgressChange = (e) => {
    const currentTime = e.target.value;
    playAudioPlayer.current.currentTime = currentTime;
  };

  return (
    <div className="w-screen bottom-0 min-h-[10vh] z-40 p-[1vh] flex items-center justify-center">
      <div className="h-full w-full md:w-fit flex flex-col items-center justify-between gap-6 md:gap-8 p-4">
        <div className="flex flex-col items-center">
          <Link to="/artist">
          <Typography text="LA ROSALÍA" color="white" type="important" />
          </Link>
          {/* this is the song, no the album */}
          <Typography text="El Mal Querer" color="primary" type="title" />
        </div>

        <audio
          src={currentTrack.url}
          ref={playAudioPlayer}
          onTimeUpdate={onPlaying}
        />
        <PlayControls
          handleProgressChange={handleProgressChange}
          track={track}
          setTracks={setTracks}
          currentTrack={currentTrack}
          setCurrentTrack={setCurrentTrack}
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
          playAudio={playAudioPlayer}
        />
        <VolumeControls playAudio={playAudioPlayer} />
      </div>
    </div>
  );
};
