import { useState } from "react";
import { BsShuffle, BsPlayFill, BsRepeat } from "react-icons/bs";
import { MdSkipPrevious, MdSkipNext } from "react-icons/md";
import { formatTime } from "../../../Utils/formatTime";
import { Typography } from "../../index";

export const PlayControls = () => {
  const [progress, setProgress] = useState(0);

  const handleProgressChange = (e) => {
    setProgress(e.target.value);
  };

  const buttonsClassName = "text-white text-2xl";

  return (
    <div className="flex flex-col w-full sm:w-auto items-center justify-center">
      <div className="flex gap-4 mb-4">
        <BsShuffle className={buttonsClassName} />
        <MdSkipPrevious className={buttonsClassName} />
        <BsPlayFill className={buttonsClassName} />
        <MdSkipNext className={buttonsClassName} />
        <BsRepeat className={buttonsClassName} />
      </div>

      <div className="flex gap-4 w-3/4 sm:w-auto">
        <Typography text={formatTime(progress)} type="p2" />
        <input
          type="range"
          value={progress}
          onChange={handleProgressChange}
          className="muze-range w-full sm:w-[40vw]"
        />
        <Typography text="02:34" type="p2" />
      </div>
    </div>
  );
};
