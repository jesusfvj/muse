import React from "react";
import { RoundButton } from "../../RoundButton";
import { Typography } from "../../Typography";
import { AiFillCaretRight } from "react-icons/ai";
import { RiShuffleFill } from "react-icons/ri";

export const AlbumHeader = () => {
  return (
    <div className="w-screen h-[80vh] relative">
      <div className="bg-cover bg-[url('../../../src/assets/images/headerPicture.jpeg')] w-full h-full"></div>
      <div className="bg-gradient-to-b from-[rgba(125,125,125,0)] to-[#02040C] w-screen h-[80vh] absolute top-0"></div>
      <div className="flex w-screen h-52 pl-[9.5vw]">
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
          <Typography text="LA ROSALÍA" color="white" type="important" />
          <Typography text="El Mal Querer" color="primary" type="title" />
        </div>
      </div>
    </div>
  );
};
