import { useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { Typography, DropDownMenu } from "../../index";

import { TrackInfo } from "./TrackInfo";
import { BsThreeDots } from "react-icons/bs";
import { useUser } from "../../../Context/UserContext/UserContext";
import {
  likeTracks,
  toggleFollowPlaylist,
} from "../../../API/MusicApi/MusicApi";

export const AlbumTrackElements = ({
  id,
  duration,
  nombre,
  artist,
  idx,
  activeDropdown,
  handleToggleDropdown,
  track,
}) => {
  const { user, toggleFollowTrack } = useUser();

  const [isFollowed, setIsFollowed] = useState(user.tracks.includes(id));
  const [hovered, setHovered] = useState(false);

  const artistId = track.artist?._id || track.artist;

  const dropdownItems = [
    {
      text: "Play Next",
      path: null,
    },
    {
      text: "Go to Artist",
      path: `/artist/${artistId}`,
    },
  ];

  const hadleMouseOut = () => {
    setHovered(false);
    handleToggleDropdown(null);
  };

  const handleAddToFavorites = async () => {
    await toggleFollowTrack(user._id, track, !isFollowed);
    setIsFollowed(!isFollowed);
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
        artist={artist}
        duration={duration}
      />
      <div className="flex flex-row gap-2 sm:gap-10 pr-[6vw]">
        <div className="cursor-pointer flex justify-center items-center">
          <Typography
            text={
              !isFollowed ? (
                <AiOutlineHeart onClick={handleAddToFavorites} />
              ) : (
                <AiFillHeart onClick={handleAddToFavorites} />
              )
            }
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
