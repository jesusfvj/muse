import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { FaPlay } from "react-icons/fa";
import { Typography } from "../../Typography";
import { useState } from "react";
import { DropDownMenu } from "../../Dropdown";

export const PlaylistsElements = ({ id, duration, nombre, idx, artist, activeDropdown, handleToggleDropdown, handleToggleModal }) => {
  const [clicked, setClicked] = useState(false);
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`flex flex-row gap-3 sm:gap-5 items-center justify-between border-b-2 border-white/20 py-5 hover:bg-[#07333f] ${
        idx === 0 && "border-t-2"
      }`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
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
        <div className="w-[10rem] lg:w-[15rem]">
          <Typography text={artist} color="white" styles="truncate" />
        </div>
        <Typography
          text={`${Math.floor(duration / 60)}:${
            duration - Math.floor(duration / 60) * 60
          }`}
          color="white"
          styles="hidden xs:flex"
        />
      </div>
      <div className="flex flex-row gap-2 sm:gap-10 pr-[6vw]">
        <div
          className="cursor-pointer flex justify-center items-center"
          onClick={() => (clicked ? setClicked(false) : setClicked(true))}
        >
          <Typography
            text={!clicked ? <AiOutlineHeart /> : <AiFillHeart />}
            color="white"
            styles="hidden xs:flex"
          />
        </div>
        <div
          className={`cursor-pointer mt-[0.4rem] ${
            hovered ? "visible" : "sm:invisible"
          }`}
        >
          <DropDownMenu
            id={id}
            color="white"
            activeDropdown={activeDropdown}
            handleToggleDropdown={handleToggleDropdown}
            handleToggleModal={handleToggleModal}
          />
        </div>
      </div>
    </div>
  );
};