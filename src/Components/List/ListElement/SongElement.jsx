import { useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { FaPlay } from "react-icons/fa";
import { BiEdit } from "react-icons/bi";
import { Link } from "react-router-dom";
import { Typography, RoundButton, DropDownMenu } from "../../index";
import { useUI } from "../../../Context/UI/UIContext";

export const SongElement = ({ object }) => {
  const { handleToggleSongModal } = useUI();
  const { name, artist, thumbnail } = object;
  const [clicked, setClicked] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [isDropdownActive, setIsDropdownActive] = useState(false);

  const handleOpenDropdown = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setIsDropdownActive(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
    setIsDropdownActive(false);
  };

  return (
    <div
      className="relative flex my-4 mx-2 select-none shadow-md"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleMouseLeave}
      onContextMenu={handleOpenDropdown}
    >
      <div
        className={
          " bg-slate-900 rounded-[0.5rem] flex flex-col  place-content-between items-center p-2 w-full h-full "
        }
      >
        <Link to="/player" className="w-full mt-2 px-3 truncate">
          <Typography
            text={name}
            type="p1"
            color="white"
            family="lato"
            styles="max-w-[200px] sm:leading-6 truncate text-ellipsis"
          />
          <Typography
            text={artist}
            type="p2"
            color="white"
            family="lato"
            styles="truncate"
          />
        </Link>
        <img
          src={thumbnail}
          className="w-[8rem] h-[8rem] rounded-full min-h-[8rem] m-4 pointer-events-none"
        />
      </div>
      <div
        className="absolute bottom-2 left-4 cursor-pointer flex justify-center items-center"
        onClick={() => (clicked ? setClicked(false) : setClicked(true))}
      >
        <Typography
          text={!clicked ? <AiOutlineHeart /> : <AiFillHeart />}
          color={!clicked ? "secondary" : "white"}
          styles="hidden xs:flex"
        />
      </div>
      <div
        className={`absolute -bottom-2 -right-2 w-[2.5rem] h-[2.5rem] flex items-center justify-center rounded-full
      ${hovered ? "flex animation-pop-glow" : "hidden"}`}
      >
        <RoundButton
          color="gray"
          background="gradient"
          icon={<FaPlay />}
          margin="pl-1"
        />
      </div>
      <div
        className={`${!isDropdownActive && "hidden"} absolute right-3 top-12`}
      >
        <DropDownMenu />
      </div>
      <BiEdit className="text-white absolute top-2 right-2 z-40" onClick={handleToggleSongModal} />
    </div>
  );
};
