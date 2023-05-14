import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { FaPlay } from "react-icons/fa";
import { Typography } from "../../Typography";
import { useState } from "react";
import { DropDownMenu } from "../../Dropdown";
import { Link } from "react-router-dom";
import { likeTracks } from "../../../API/MusicApi/MusicApi";
import { useUser } from "../../../Context/UserContext/UserContext";
import { BsThreeDots } from "react-icons/bs";

export const PlaylistsElements = ({
  id,
  duration,
  nombre,
  idx,
  artist,
  activeDropdown,
  handleToggleDropdown,
  followedBy,
  track
}) => {
  const {
    user: { _id: userId },
  } = useUser();
  const [clicked, setClicked] = useState(followedBy.includes(userId));
  const [hovered, setHovered] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const dropdownItems = [
    {
      text: "Play Next",
      path: null,
    },
    {
      text: "Go to Artist",
      path: `/user/${artist._id}`,
    },
  ];

  const likeButtonClick = () => {
    if (!buttonDisabled) {
      setClicked(!clicked);

      setTimeout(() => {
        console.log(!clicked);
        likeTracks(userId, [id], !clicked);
      }, 300);
      setButtonDisabled(true);
      setTimeout(() => {
        console.log(clicked);
        setButtonDisabled(false);
      }, 1500);
    }
  };
  return (
    <div
      className={`flex flex-row gap-3 sm:gap-5 items-center justify-between border-b-2 border-white/20 py-5 hover:bg-[#07333f] ${
        idx === 0 && "border-t-2"
      }`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => {
        setHovered(false);
        handleToggleDropdown();
      }}
    >
      <div className="flex items-start justify-start gap-10 md:gap-20 pl-[4vw] md:px-[5vw]">
        <div
          className={`hidden sm:flex cursor-pointer mt-1 ${
            hovered ? "visible" : "invisible"
          }`}
        >
          <Typography text={<FaPlay />} color="white" />
        </div>
        <Link to="/player" className="w-[10rem] lg:w-[15rem]">
          <Typography text={nombre} color="white" styles="truncate" />
        </Link>
        <Link to="/artist" className="w-[10rem] lg:w-[15rem]">
          <Typography text={artist.fullName} color="white" styles="truncate" />
        </Link>
        <Typography text={duration} color="white" styles="hidden xs:flex" />
      </div>
      <div className="flex flex-row gap-2 sm:gap-10 pr-[6vw]">
        <div
          className="cursor-pointer flex justify-center items-center"
          onClick={likeButtonClick}
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
          <button
            onClick={() => handleToggleDropdown(id)}
            id="dropdownMenuIconHorizontalButton"
            className="inline-flex items-center text-sm font-medium text-center text-gray-900 rounded-lg focus:outline-none "
            type="button"
          >
            <Typography text={<BsThreeDots />} color="white" />
          </button>
          <DropDownMenu
            id={id}
            color="white"
            activeDropdown={activeDropdown}
            track={track}
            items={dropdownItems}
          />
        </div>
      </div>
    </div>
  );
};
