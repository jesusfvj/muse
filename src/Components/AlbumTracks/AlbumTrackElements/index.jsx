import { useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { Typography, DropDownMenu } from "../../index";

import { TrackInfo } from "./TrackInfo";

export const AlbumTrackElements = ({
  id,
  duration,
  nombre,
  idx,
  activeDropdown,
  handleToggleDropdown,
  handleToggleModal,
}) => {
  const [clicked, setClicked] = useState(false);
  const [hovered, setHovered] = useState(false);

  const hadleMouseOut = () => {
    setHovered(false);
    handleToggleDropdown(null);
  };

  return (
    <div
      className={`flex flex-row gap-3 sm:gap-5 items-center justify-between border-b-2 border-white/20 py-5 hover:bg-[#07333f] ${
        idx === 0 && "border-t-2"
      }`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={hadleMouseOut}
    >
      <TrackInfo
        hovered={hovered}
        id={id}
        nombre={nombre}
        duration={duration}
      />
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
          />
        </div>
      </div>
    </div>
  );
};
