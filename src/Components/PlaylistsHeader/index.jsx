import React from "react";
import { AiFillCaretRight } from "react-icons/ai";
import { RiShuffleFill } from "react-icons/ri";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { RoundButton } from "../RoundButton";
import { Typography } from "../Typography";

export const PlaylistsHeader = ({ name, thumbnail, isFollowed }) => {
  return (
    <div className="w-screen h-[30vh] sm:h-[50vh] md:h-[60vh] lg:h-[80vh] relative">
      <div className="w-full h-full relative overflow-hidden">
        <img
          src={thumbnail}
          alt={name}
          className="object-cover w-full h-full blur-md"
        />
        <img
          src={thumbnail}
          alt={name}
          className="absolute top-0 bottom-0 left-0 right-0 m-auto z-10 w-2/6"
        />
      </div>
        <Typography
          text={!isFollowed ? <AiOutlineHeart /> : <AiFillHeart />}
          color="white"
          styles="flex absolute right-10 bottom-0 z-50"
          type="title"
        />
      {/* <div className={`bg-cover bg-[url('${thumbnail}')] w-full h-full`}></div> */}
      <div className="bg-gradient-to-b from-[rgba(125,125,125,0)] to-[#02040C] w-screen h-full absolute top-0"></div>
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
              icon={<RiShuffleFill size={15} />}
              margin="pt-[0.1rem] xs:pt-0"
            />
          </div>
        </div>
        <div className="h-16 w-full flex flex-col ml-12 items-start gap-4">
          <Typography text={name} color="white" type="important" />
        </div>
      </div>
    </div>
  );
};
