import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { FaPlay } from "react-icons/fa";
import { Typography } from "../../Typography";

const skeletonData = [
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
];

export const SkeletonTracksGroup = () => {
  return (
    <div className={`flex flex-col w-4/5`}>
      {skeletonData.map((songs, idx) => {
        return (
          <div
            className={`flex flex-row gap-3 sm:gap-5 items-center justify-between border-b-2 border-white/20 py-5 hover:bg-[#07333f] animate-pulse ${
              idx === 0 && "border-t-2"
            }`}
            key={idx}
          >
            <div className="flex items-start justify-start gap-10 md:gap-20 pl-[4vw] md:px-[5vw]">
              <div className="invisible">
                <Typography text={<FaPlay />} color="white" />
              </div>

              <Typography
                text={idx + 1}
                color="white"
                styles="hidden xs:flex"
              />
              <div className="w-[10rem] lg:w-[15rem]">
                <Typography text=". . ." color="white" styles="truncate p-1" type="subSection" />
              </div>
            </div>
            <div className="flex flex-row gap-2 sm:gap-10 pr-[6vw]">
              <div className="cursor-pointer flex justify-center items-center">
                <Typography
                  text={<AiOutlineHeart />}
                  color="white"
                  styles="hidden xs:flex"
                />
              </div>
              <div className="invisible">
                <p>...</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
