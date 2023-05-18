import { TrackInfo } from "./TrackInfo";
import { PlayControls } from "./PlayControls";
import { VolumeControls } from "./VolumeControls";
import { useEffect, useRef, useState } from "react";
import { useTracks } from "../../Context/TracksContext/TracksContext";
import { useUser } from "../../Context/UserContext/UserContext";
import { useLocation } from "react-router-dom";
import { getAlbumById, getPlaylistsById } from "../../API/MusicApi/MusicApi";
import { findIndexOfObject } from "../../Utils/shuffler";

export const MusicPlayer = ({ isMusicPlayerVisible }) => {
  const {
    playerQueue,
    index,
    setCurrentPlayingSong,
    setisMusicPlaying,
    shuffleQueue,
    isShuffled,
    handleGoNextSong,
  } = useTracks();
  const {
    user: { _id },
  } = useUser();
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(null);
  const [isRepeatedModeActive, setIsRepeatedModeActive] = useState(false);

  const location = useLocation();
  const listId = location.pathname.split("/")[2];

  const playAudio = useRef();

  const handleShuffleQueue = async () => {
    if (playerQueue.length < 2) return;
    const res = await getAlbumById(listId);
    if (res) {
      if (!isShuffled) {
        const currentSong = playerQueue[index];
        shuffleQueue(_id, res.songs, index, currentSong);
      } else {
        const songIndex = findIndexOfObject(res.songs, playerQueue[index]);
        shuffleQueue(_id, res.songs, songIndex);
      }
    } else {
      const res = await getPlaylistsById(listId);
      if (res) {
        if (!isShuffled) {
          const currentSong = playerQueue[index];
          shuffleQueue(_id, res.tracks, index, currentSong);
        } else {
          const songIndex = findIndexOfObject(res.tracks, playerQueue[index]);
          shuffleQueue(_id, res.tracks, songIndex);
        }
      }
    }
  };

  useEffect(() => {
    if (!currentTrack) return;
    if (isPlaying) {
      playAudio.current.play();
      setisMusicPlaying(true);
    } else {
      playAudio.current.pause();
      setisMusicPlaying(false);
    }
  }, [isPlaying, currentTrack]);

  useEffect(() => {
    if (playerQueue[index]) {
      setCurrentTrack(playerQueue[index]);
      setCurrentPlayingSong(playerQueue[index]._id);
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

  const onTrackEnd = () => {
    if (isRepeatedModeActive) {
      playAudio.current.currentTime = 0;
      return;
    }
    if (index < playerQueue.length - 1) {
      handleGoNextSong(index, _id);
      playAudio.current.currentTime = 0;
    } else{
        setIsPlaying(false)
    }
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
            onEnded={onTrackEnd}
          />

          <TrackInfo currentTrack={currentTrack} />
          <PlayControls
            isRepeatedModeActive={isRepeatedModeActive}
            setIsRepeatedModeActive={setIsRepeatedModeActive}
            handleProgressChange={handleProgressChange}
            tracks={playerQueue}
            currentTrack={currentTrack}
            setCurrentTrack={setCurrentTrack}
            index={index}
            isPlaying={isPlaying}
            setIsPlaying={setIsPlaying}
            playAudio={playAudio}
            handleShuffleQueue={handleShuffleQueue}
          />
          <VolumeControls playAudio={playAudio} />
        </div>
      ) : null}
    </div>
  );
};
