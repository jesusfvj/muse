import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { FaPlay } from "react-icons/fa";
import { Typography } from "../../Typography";
import { useState } from "react";
import { DropDownMenu } from "../../Dropdown";
import { Link } from "react-router-dom";
import { likeTracks } from "../../../API/MusicApi/MusicApi";
import { useUser } from "../../../Context/UserContext/UserContext";
import { BsThreeDots } from "react-icons/bs";
import { useTracks } from "../../../Context/TracksContext/TracksContext";
import { Audio } from "react-loader-spinner";

export const PlaylistsElements = ({
  id,
  duration,
  nombre,
  idx,
  artist,
  activeDropdown,
  handleToggleDropdown,
  followedBy,
  track,
  songs = { songs },
}) => {
  const {
    user: { _id: userId, tracks },
    toggleFollowTrack,
  } = useUser();
  const lastSong = songs.length -1 === idx;
  const isActiveDropdown = activeDropdown == id;
  const { currentPlayingSong, isMusicPlaying, handleCreateQueue } = useTracks();

  const [clicked, setClicked] = useState(tracks.includes(id));
  const [hovered, setHovered] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const isActive = currentPlayingSong === track._id;

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
        toggleFollowTrack(userId, track, !clicked);
      }, 300);
      setButtonDisabled(true);
      setTimeout(() => {
        setButtonDisabled(false);
      }, 1500);
    }
  };

  const handleAddToQueue = () => {
    // userId, playlist that track belongs to, index
    handleCreateQueue(userId, songs, idx);
  };

  return (
    <div
      className={`${lastSong && isActiveDropdown && 'mb-24'} flex flex-row w-full gap-3 sm:gap-5 items-center justify-between border-b-2 border-white/20 py-5 ${isActive && isMusicPlaying && 'bg-gray-800'} hover:bg-[#07333f] ${idx === 0 && "border-t-2"
        }`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => {
        setHovered(false);
        handleToggleDropdown();
      }}
    >
      <div className="flex items-center w-full justify-between gap-10 sm:gap-5 pl-[4vw] md:px-[5vw]">
        <div
          className={`hidden sm:flex cursor-pointer mt-1 ${hovered && !isActive ? "visible" : "invisible"
            }`}
        >
          <Typography
            text={<FaPlay />}
            color="white"
            onClick={handleAddToQueue}
          />
        </div>

        {isActive && isMusicPlaying && (
          <div className="hidden sm:absolute">
            <Audio
              height="20"
              width="20"
              color="white"
              ariaLabel="audio-loading"
              wrapperStyle={{}}
              wrapperClass="wrapper-class"
              visible={true}
            />
          </div>
        )}

        <Link to={`/player/${track._id}`} className="hidden sm:flex w-[10rem] sm:w-[15rem] lg:w-[40vw]">
          <Typography text={nombre} color="white" styles="truncate" />
        </Link>
        <div className="w-2/3 sm:hidden truncate"
          onClick={() => handleCreateQueue(userId, songs, idx)}
        >
          <Typography text={nombre} color="white" styles="w-[50vw] truncate" />
        </div>
        <Link to={`/artist/${artist._id}`} className="hidden sm:flex w-[10rem] sm:w-[10rem]">
          <Typography text={artist.fullName} color="white" styles="truncate" />
        </Link>

        <Typography text={duration} color="white" styles="flex" />
      </div>
      <div className="flex flex-row justify-end w-[10rem] gap-5 sm:gap-10 pr-[6vw]">
        <div
          className="cursor-pointer flex justify-center items-center"
          onClick={likeButtonClick}
        >
          <Typography
            text={!clicked ? <AiOutlineHeart /> : <AiFillHeart />}
            color="white"
            styles="flex"
          />
        </div>
        <div
          className={`cursor-pointer mt-[0.4rem] ${hovered ? "visible" : "sm:invisible"
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
