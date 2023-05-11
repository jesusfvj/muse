import React from "react";
import { Typography } from "../../../Typography";

export const PlayerHeader = ({ track }) => {
  const { thumbnailUrl, name, genre, duration } = track;
  return (
    <div className="w-screen h-[80vh] relative">
      <div className={` w-full h-full`}>
        <img
          src={thumbnailUrl}
          className="w-full h-full object-cover absolute"
        />
        <div className="absolute bottom-4 z-50 right-0 left-0 m-auto text-center">
          <Typography text={name} type="title" styles="truncate" />
          <Typography text={genre} styles="truncate capitalize" />
          <Typography text={`Duration - ${duration}`} styles="truncate capitalize" />
        </div>
      </div>
      <div className="bg-gradient-to-b from-[rgba(125,125,125,0)] to-[#02040C] w-screen h-[80vh] absolute top-0"></div>
    </div>
  );
};
