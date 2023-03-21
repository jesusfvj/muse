import React from "react";
import { FaPlay } from "react-icons/fa";
import { Typography, RoundButton } from "../../index";

export const SongElement = ({ object }) => {
  const { artist, songTitle, album, year, producer, genre, bgImage } = object;
  return (
    <div className="relative flex  my-4 min-w-fit">
      <div
        className={
          " bg-slate-900 rounded-[0.5rem] flex flex-col  place-content-between items-center p-2 sm:w-[12rem] sm:h-[15rem] "
        }
      >
        <div className="w-full mt-2 px-3 ">
          <Typography
            text={songTitle}
            type="p1"
            color="white"
            family="lato"
            styles="max-w-[200px] sm:leading-6 line-clamp-2 text-ellipsis"
          />
          <Typography text={artist} type="p2" color="white" family="lato" />
        </div>
        <div
          className={`w-[4rem] h-[4rem] m-1 sm:w-[8rem] sm:h-[8rem] rounded-full ${bgImage} bg-cover bg-center bg-no-repeat sm:min-h-[8rem] sm:m-4`}
        ></div>
      </div>
      <div className="absolute -bottom-2 -right-2 w-[2.5rem] h-[2.5rem] flex items-center justify-center">
        <RoundButton
          color="gray"
          background="gradient"
          icon={<FaPlay />}
          margin="pl-1"
        />
      </div>
    </div>
  );
};
