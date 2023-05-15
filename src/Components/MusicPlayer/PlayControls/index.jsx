import { useRef, useState } from "react";
import { BsShuffle, BsPlayFill, BsRepeat, BsPauseFill } from "react-icons/bs";
import { MdSkipPrevious, MdSkipNext } from "react-icons/md";
import { formatTime } from "../../../Utils/formatTime";
import { Typography } from "../../index";
import { useTracks } from "../../../Context/TracksContext/TracksContext";

export const PlayControls = ({
  playAudio,
  isPlaying,
  setIsPlaying,
  currentTrack,
  setCurrentTrack,
  tracks,
  handleProgressChange,
}) => {
  const clickRef = useRef();
  const { handleGoNextSong, handleGoPrevSong, index } = useTracks();

  const PlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const skipBack = () => {
    if (currentTrack.progress > 5) {
      playAudio.current.currentTime = 0;
      currentTrack.progress = 0;

      return;
    } else {
      if (index > 0) {
        handleGoPrevSong(index);
      } else {
        setCurrentTrack(tracks[0]);
      }
      playAudio.current.currentTime = 0;
    }
  };

  const skiptoNext = () => {
    if (index < tracks.length - 1) {
      handleGoNextSong(index);
      playAudio.current.currentTime = 0;
    }
  };

  const buttonsClassName = "text-white text-2xl cursor-pointer";

  return (
    <div className="flex flex-col w-full sm:w-auto items-center justify-center">
      <div className="flex gap-4 mb-4">
        <BsShuffle className={buttonsClassName} />
        <MdSkipPrevious className={buttonsClassName} onClick={skipBack} />
        {isPlaying ? (
          <BsPauseFill className={buttonsClassName} onClick={PlayPause} />
        ) : (
          <BsPlayFill className={buttonsClassName} onClick={PlayPause} />
        )}

        <MdSkipNext className={buttonsClassName} onClick={skiptoNext} />
        <BsRepeat className={buttonsClassName} />
      </div>

      <div className="flex items-center justify-between gap-4 w-3/4 sm:w-auto">
        <Typography
          text={
            currentTrack.progress
              ? formatTime(Math.trunc(currentTrack.progress))
              : "0:00"
          }
          type="p2"
          color={!currentTrack.progress ? "black" : "primary"}
          styles="select-none"
        />
        <input
          type="range"
          max={currentTrack.length ? currentTrack.length : 0}
          value={currentTrack.progress || 0}
          onChange={handleProgressChange}
          className="muze-range w-full sm:w-[40vw]"
          ref={clickRef}
        />
        <Typography
          text={
            currentTrack.progress
              ? formatTime(Math.trunc(currentTrack.length))
              : "0:00"
          }
          type="p2"
          color={!currentTrack.progress ? "black" : "primary"}
          styles="select-none"
        />
      </div>
    </div>
  );
};
