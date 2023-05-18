import { useRef, useState } from "react";
import { BsShuffle, BsPlayFill, BsRepeat, BsPauseFill } from "react-icons/bs";
import { MdSkipPrevious, MdSkipNext } from "react-icons/md";
import { formatTime } from "../../../Utils/formatTime";
import { Typography } from "../../index";

export const PlayControls = ({
  playAudio,
  isPlaying,
  setIsPlaying,
  currentTrack,
  setCurrentTrack,
  track,
  progress,
  handleProgressChange,
  setProgress,
}) => {
  const clickRef = useRef();

  const PlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const skipBack = () => {
    const index = track.findIndex((x) => x.name == currentTrack.name);
    if (index == 0) {
      setCurrentTrack(track[track.length - 1]);
    } else {
      setCurrentTrack(track[index - 1]);
    }
    playAudio.current.currentTime = 0;
    setProgress(0);
  };

  const skiptoNext = () => {
    const index = track.findIndex((x) => x.name == currentTrack.name);

    if (index == track.length - 1) {
      setCurrentTrack(track[0]);
    } else {
      setCurrentTrack(track[index + 1]);
    }
    playAudio.current.currentTime = 0;
    setProgress(0);
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
          value={progress}
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
