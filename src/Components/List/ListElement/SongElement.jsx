import { useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { FaPlay } from "react-icons/fa";
import { BiEdit } from "react-icons/bi";
import { Link } from "react-router-dom";
import { Typography, RoundButton, DropDownMenu } from "../../index";
import { useUI } from "../../../Context/UI/UIContext";

export const SongElement = ({ object }) => {
  const { handleToggleSongModal } = useUI();
  const { name, artist, thumbnailUrl, _id } = object;
  const [clicked, setClicked] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false);
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

  const likedClicked = () => {
    console.log(clicked);
    if (!buttonDisabled) {
      setClicked(!clicked);

      setButtonDisabled(true);
      setTimeout(() => {
        console.log(clicked);
        setButtonDisabled(false);
      }, 1500);
    }
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
        <Link to={`/player/${_id}`} className="w-full mt-2 px-3 truncate">
          <Typography
            text={name}
            type="p1"
            color="white"
            family="lato"
            styles="max-w-[200px] sm:leading-6 truncate text-ellipsis"
          />
          <Typography
            text={artist?.fullName}
            type="p2"
            color="white"
            family="lato"
            styles="truncate"
          />
        <img
          src={thumbnailUrl}
          className="w-[8rem] h-[8rem] rounded-full min-h-[8rem] m-4 pointer-events-none object-cover"
        />
        </Link>
      </div>
      <div
        className="absolute bottom-2 left-2 cursor-pointer flex justify-center items-center m-3"
        onClick={likedClicked}
      >
        <Typography
          text={clicked ? <AiFillHeart /> : hovered ? <AiOutlineHeart /> : null}
          color={clicked ? "white" : "secondary"}
          styles="hidden xs:flex scale-[2]"
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
      {hovered && (
        <BiEdit
          className="text-white absolute top-2 right-2 z-40 cursor-pointer"
          onClick={() => handleToggleSongModal(object)}
        />
      )}
    </div>
  );
};
