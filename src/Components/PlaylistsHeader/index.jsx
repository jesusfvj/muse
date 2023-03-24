import React from "react";
import { AiFillCaretRight } from "react-icons/ai";
import { RiShuffleFill } from "react-icons/ri";
import { RoundButton } from "../RoundButton";
import { Typography } from "../Typography";

export const PlaylistsHeader = ({ name, thumbnail }) => {
  return (
    <div className="w-screen h-[30vh] sm:h-[50vh] md:h-[60vh] lg:h-[80vh] relative">
      <div className="w-full h-full relative overflow-hidden">
        <img src={thumbnail} alt={name} className="object-cover w-full h-full blur-md" />
        <img src={thumbnail} alt={name} className="absolute top-0 bottom-0 left-0 right-0 m-auto z-10 w-2/6" />
      </div>
      {/* <div className={`bg-cover bg-[url('${thumbnail}')] w-full h-full`}></div> */}
      <div className="bg-gradient-to-b from-[rgba(125,125,125,0)] to-[#02040C] w-screen h-full absolute top-0"></div>
      <div className="flex w-screen h-34 pl-[9.5vw]">
        <div className="relative h-24 w-29 flex">
          <div className="w-24">
            <RoundButton
              color="white"
              background="white"
              icon={<AiFillCaretRight size={55} />}
              margin="pl-1"
            />
          </div>
          <div className="h-14 w-14 absolute bottom-[-2vh] right-[-0.7vw]">
            <RoundButton
              color="white"
              background="dgray"
              icon={<RiShuffleFill size={22} />}
            />
          </div>
        </div>
        <div className="h-16 flex flex-col ml-12">
          <Typography text={name} color="white" type="important" />
        </div>
      </div>
    </div>
  );
};
