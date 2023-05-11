import { TrackInfo } from "./TrackInfo";
import { PlayControls } from "./PlayControls";
import { VolumeControls } from "./VolumeControls";
import { useEffect, useRef, useState } from "react";
import { tracks } from "../../data/SongsData/SongsData";

export const MusicPlayer = ({ isMusicPlayerVisible }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState({
      id: 1,
      name: "Better of alone",
      artist: "RXBYN",
      url: "https://res.cloudinary.com/dmufnezzd/video/upload/v1683791067/muze-song_file-folder/f88358519f64bb39e974c38e8cf90703.mp3"
    });

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
  };

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
          track={tracks}
          currentTrack={currentTrack}
          setCurrentTrack={setCurrentTrack}
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
          playAudio={playAudio}
         
        />
        <VolumeControls playAudio={playAudio} />
      </div>
    </div>
  );
};
