import React from "react";
import { FaPlay } from "react-icons/fa";
import { Typography } from "../../../Typography";

export const TrackInfo = ({hovered, id, nombre, duration}) => {
  return (
    <div className="flex items-start justify-start gap-10 md:gap-20 pl-[4vw] md:px-[5vw]">
      <div
        className={`hidden sm:flex cursor-pointer mt-1 ${
          hovered ? "visible" : "invisible"
        }`}
      >
        <Typography text={<FaPlay />} color="white" />
      </div>
      <Typography text={id} color="white" styles="hidden xs:flex" />
      <div className="w-[10rem] lg:w-[15rem]">
        <Typography text={nombre} color="white" styles="truncate" />
      </div>
      <Typography text={duration} color="white" styles="hidden xs:flex" />
    </div>
  );
};
