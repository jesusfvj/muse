import { useMemo, useState } from "react";
import { FaEdit, FaPlay } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Typography, RoundButton } from "../../index";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { MdOutlinePublic, MdOutlinePublicOff } from "react-icons/md";
import { Link } from "react-router-dom";
import { useUser } from "../../../Context/UserContext/UserContext";
import { toggleFollowPlaylist } from "../../../API/MusicApi/MusicApi";
import { IoTrashOutline } from "react-icons/io5";
import { EditPlaylistModal } from "../../EditPlaylistModal";
import { useUI } from "../../../Context/UI/UIContext";

export const PlaylistElement = ({ object, isSwipping }) => {
  const { handleToggleEditPlaylistModal } = useUI();
  const {
    user: { _id: userId },
    togglePlaylistVisibility,
    deleteSinglePlaylist,
  } = useUser();
  const { name, thumbnail, _id, isPrivate, user } = object;

  const [isFollowed, setIsFollowed] = useState(
    object.followedBy.includes(userId)
  );
  const [hovered, setHovered] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const navigate = useNavigate();

  const isOwner = userId === user;

  const colors = {
    bg1: "bg-green-500",
    bg2: "bg-blue-500",
    bg3: "bg-purple-500",
    bg4: "bg-pink-500",
    bg5: "bg-red-500",
    bg6: "bg-yellow-500",
    bg7: "bg-orange-500",
  };
  function getRandomNumber() {
    return Math.floor(Math.random() * 7) + 1;
  }
  const randomColor = useMemo(() => colors[`bg${getRandomNumber()}`], []);

  const handleNavigate = () => {
    if (!isSwipping) {
      navigate(`/playlist/${_id}`);
    }
  };

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

  const handleAddToFavorites = async () => {
    if (!buttonDisabled) {
      const res = await toggleFollowPlaylist(userId, _id, !isFollowed);
      setIsFollowed(!isFollowed);
      setButtonDisabled(true);
      setTimeout(() => {
        console.log(isFollowed);
        setButtonDisabled(false);
      }, 1500);
    }
  };

  const handleTogglePlaylistVisibility = () => {
    togglePlaylistVisibility(userId, _id, isPrivate);
  };

  const handleDeletePlaylist = () => {
    deleteSinglePlaylist(userId, _id);
  };

  const handleOpenEditPlaylist = () => {
    handleToggleEditPlaylistModal(object);
  };

  return (
    <div
      className="relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleMouseLeave}
      onContextMenu={handleOpenDropdown}
    >
      <div
        className={`relative flex my-4 ${randomColor} shadow-md overflow-hidden select-none m-2 cursor-pointer`}
        onClick={handleNavigate}
      >
        <div
          className={
            " flex flex-col  place-content-between items-center p-2 w-[5rem] h-[7rem] sm:w-[9rem] sm:h-[11rem] lg:w-[12rem] lg:h-[15rem]"
          }
        >
          <Link to="/playlist" className="w-full mt-2 px-3">
            <Typography
              text={name}
              type="p1"
              color="white"
              family="lato"
              styles="max-w-[200px] line-clamp-2 text-ellipsis truncate"
            />
          </Link>

          <img
            src={thumbnail}
            className="w-[4rem] h-[4rem] sm:w-[7rem] sm:h-[7rem] lg:w-[10rem] lg:h-[10rem] bg-cover bg-center bg-no-repeat min-h-[8rem] m-4 rotate-[35deg] absolute -bottom-8 -right-8 drop-shadow-[0_15px_15px_rgba(0,0,0,0.50)] pointer-events-none object-cover"
          />
        </div>
      </div>
      <div
        className="absolute bottom-2 left-5 cursor-pointer flex justify-center items-center"
        onClick={handleAddToFavorites}
      >
        <Typography
          text={
            isFollowed ? <AiFillHeart /> : hovered ? <AiOutlineHeart /> : null
          }
          type="big"
          color="white"
          styles="hidden xs:flex"
        />
      </div>
      <div className="relative">
        <div
          className={`absolute bottom-2 -right-2 w-[2.5rem] h-[2.5rem] flex items-center justify-center rounded-full
      ${hovered ? "flex animation-pop-glow" : "hidden"}`}
        >
          <RoundButton
            color="gray"
            background="gradient"
            icon={<FaPlay />}
            margin="pl-1"
          />
        </div>
      </div>

      {isOwner && isPrivate ? (
        <MdOutlinePublic
          className="absolute top-1 right-4 text-white text-2xl cursor-pointer"
          onClick={handleTogglePlaylistVisibility}
        />
      ) : isOwner && !isPrivate ? (
        <MdOutlinePublicOff
          className="absolute top-1 right-4 text-white text-2xl cursor-pointer"
          onClick={handleTogglePlaylistVisibility}
        />
      ) : null}
      {isOwner && hovered ? (
        <>
          <IoTrashOutline
            className="text-2xl text-white absolute top-10 right-4 cursor-pointer"
            onClick={handleDeletePlaylist}
          />
          <FaEdit
            className="text-2xl text-white absolute -top-1 left-2 cursor-pointer"
            onClick={handleOpenEditPlaylist}
          />
        </>
      ) : null}
    </div>
  );
};
