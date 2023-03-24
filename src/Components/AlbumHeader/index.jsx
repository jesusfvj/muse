import React from "react";
import { AiFillCaretRight } from "react-icons/ai";
import { RiShuffleFill } from "react-icons/ri";
import { RoundButton } from "../RoundButton";
import { Typography } from "../Typography";

export const AlbumHeader = () => {
  return (
    <div className="w-screen h-[80vh] relative">
      <div className="bg-cover bg-center bg-[url('../../../src/assets/images/headerPicture.jpeg')] w-full h-full"></div>
      <div className="bg-gradient-to-b from-[rgba(125,125,125,0)] to-[#02040C] w-screen h-[80vh] absolute top-0"></div>
      <div className="flex w-screen h-34 pl-[9.5vw]">
        <div className="flex relative">
          <div className="w-[3rem] h-[3rem] xs:w-[3.6rem] xs:h-[3.6rem] md:w-[4.5rem] md:h-[4.5rem]">
            <RoundButton
              color="white"
              background="white"
              icon={<AiFillCaretRight size={20} />}
            />
          </div>
          <div className="w-[1.8rem] h-[1.8rem] xs:w-[2.1rem] xs:h-[2.1rem] md:w-[2.3rem] md:h-[2.3rem] absolute bottom-[0.7vh] right-[-1vw] xs:bottom-[-1vh] xs:right-[-1.2vw] lg:right-[-1vw] xl:right-[-0.5vw]">
            <RoundButton
              color="white"
              background="darkgray"
              icon={<RiShuffleFill size={15}/>}
              margin="pt-[0.1rem] xs:pt-0"
            />
          </div>
        </div>
        <div className="h-16 flex flex-col ml-[1rem] sm:ml-[3rem]">
          <Typography text="LA ROSALÍA" color="white" type="important" />
          <Typography text="El Mal Querer" color="primary" type="title" />
        </div>
      </div>
    </div>
  );
};
