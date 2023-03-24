import React from "react";
import { Typography } from "../../index";

export const SkeletonSongElement = () => {
  return (
    <div className="relative flex my-4 select-none animate-pulse">
      <div
        className={
          " bg-slate-900 rounded-[0.5rem] flex flex-col  place-content-between items-center p-2 w-full h-full "
        }
      >
        <div className="w-full mt-2 px-3 truncate">
          <Typography
            text="..."
            type="p1"
            color="white"
            family="lato"
            styles="max-w-[200px] sm:leading-6 truncate text-ellipsis"
          />
          <Typography
            text="..."
            type="p2"
            color="white"
            family="lato"
            styles="truncate"
          />
        </div>
        <div className="w-[8rem] h-[8rem] rounded-full min-h-[8rem] m-4 pointer-events-none" />
      </div>
      <div className="absolute -bottom-2 -right-2 w-[2.5rem] h-[2.5rem] flex items-center justify-center"></div>
    </div>
  );
};
