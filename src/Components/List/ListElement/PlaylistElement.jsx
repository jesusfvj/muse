import { useState } from "react";
import { FaEdit, FaPlay } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Typography, RoundButton } from "../../index";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { MdOutlinePublic, MdOutlinePublicOff } from "react-icons/md";
import { Link } from "react-router-dom";
import { useUser } from "../../../Context/UserContext/UserContext";
import { toggleFollowPlaylist } from "../../../API/MusicApi/MusicApi";
import { IoTrashOutline } from "react-icons/io5";
import { useUI } from "../../../Context/UI/UIContext";

export const PlaylistElement = ({ object, isSwipping }) => {
  const {
    handleToggleEditPlaylistModal,
    setMessageSuccessToaster,
    setMessageErrorToaster,
    setLoadingMessage,
    setIsLoading,
  } = useUI();
  const {
    user: { _id: userId, profilePhoto },
    togglePlaylistVisibility,
    deleteSinglePlaylist,
  } = useUser();
  const { name, thumbnail, _id, isPrivate, user, color } = object;

  const [isFollowed, setIsFollowed] = useState(
    object.followedBy.includes(userId)
  );
  const [hovered, setHovered] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const navigate = useNavigate();

  const isOwner = userId === user;

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
      await toggleFollowPlaylist(userId, _id, !isFollowed);
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

  const handleDeletePlaylist = async () => {
    setLoadingMessage("Deleting playlist...");
    setIsLoading(true);
    const response = await deleteSinglePlaylist(userId, _id);
    setIsLoading(false);
    if (response.ok) {
      setMessageSuccessToaster("Playlist deleted successfully");
    } else {
      setMessageErrorToaster(
        "There was an error trying to delete the playlist. Please try again."
      );
    }
  };

  const handleOpenEditPlaylist = () => {
    handleToggleEditPlaylistModal(object);
  };

  return (
    <>
      <div
        className="relative"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={handleMouseLeave}
        onContextMenu={handleOpenDropdown}
      >
        <div
          className={`relative flex my-4 shadow-md overflow-hidden select-none m-2 cursor-pointer`}
          onClick={handleNavigate}
          style={{
            background: `linear-gradient(0deg, ${color} 20%, transparent 100%)`,
          }}
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
              className="w-[4rem] h-[4rem] sm:w-[7rem] sm:h-[7rem] lg:w-[10rem] lg:h-[10rem] bg-cover bg-center bg-no-repeat min-h-[8rem] m-4 rotate-[35deg] absolute -bottom-8 -right-8 drop-shadow-[0_15px_15px_rgba(0,0,0,0.50)] pointer-events-none object-cover rounded-md"
            />
          </div>
        </div>

        <div className="relative">
          <div
            className={`absolute bottom-2 -right-2 w-[2.5rem] h-[2.5rem] flex items-center justify-center rounded-full ${
              hovered ? "flex animation-pop-glow" : "hidden"
            }`}
          >
            <RoundButton
              color="gray"
              background="gradient"
              icon={<FaPlay />}
              margin="pl-1"
            />
          </div>
        </div>

        <div
          className="absolute bottom-12 left-5 cursor-pointer flex justify-center items-center"
          onClick={handleAddToFavorites}
        >
          {isFollowed && !isOwner ? (
            <AiFillHeart className="text-white text-2xl cursor-pointer" />
          ) : hovered && !isOwner ? (
            <AiOutlineHeart className="text-white text-2xl cursor-pointer" />
          ) : null}
        </div>
        <div className="h-6">
          <div
            className="absolute bottom-12 left-5 cursor-pointer flex justify-center items-center"
            onClick={handleAddToFavorites}
          >
            {isFollowed ? (
              <AiFillHeart className="text-white text-2xl cursor-pointer" />
            ) : hovered ? (
              <AiOutlineHeart className="text-white text-2xl cursor-pointer" />
            ) : null}
          </div>
          <div className="h-6">
            <div
              className={`w-full flex h-full items-center justify-around ${
                !hovered && "hidden"
              }`}
            >
              {isOwner && isPrivate ? (
                <div className="relative tooltip-trigger">
                  <MdOutlinePublic
                    className="top-1 right-4 text-md md:text-xl text-gray-400 transition duration-500 hover:text-blue-400 cursor-pointer"
                    onClick={handleTogglePlaylistVisibility}
                  />
                  <div className="absolute -top-10 left-2 w-40 h-30 z-10 bg-gray-900/90 rounded-sm p-2 hidden tooltip">
                    <Typography text="Make the playlist public" type="p2" />
                  </div>
                </div>
              ) : isOwner && !isPrivate ? (
                <div className="relative tooltip-trigger">
                  <MdOutlinePublicOff
                    className="top-1 right-4 text-md md:text-xl text-gray-400 transition duration-500 hover:text-blue-400 cursor-pointer"
                    onClick={handleTogglePlaylistVisibility}
                  />
                  <div className="absolute -top-10 left-2 w-40 h-30 z-10 bg-gray-900/90 rounded-sm p-2 hidden tooltip">
                    <Typography text="Make the playlist private" type="p2" />
                  </div>
                </div>
              ) : null}
              {isOwner ? (
                <>
                  <div className="relative tooltip-trigger">
                    <IoTrashOutline
                      className="text-md md:text-xl text-gray-400 transition duration-500 hover:text-red-400 cursor-pointer"
                      onClick={handleDeletePlaylist}
                    />
                    <div className="absolute -top-10 left-2 w-40 h-30 z-10 bg-gray-900/90 rounded-sm p-2 hidden tooltip">
                      <Typography text="Delete this playlist" type="p2" />
                    </div>
                  </div>
                  <div className="relative tooltip-trigger">
                    <FaEdit
                      className="text-md md:text-xl text-gray-400 transition duration-500 hover:text-white cursor-pointer"
                      onClick={handleOpenEditPlaylist}
                    />
                    <div className="absolute -top-10 left-2 w-40 h-30 z-10 bg-gray-900/90 rounded-sm p-2 hidden tooltip">
                      <Typography text="Edit this playlist" type="p2" />
                    </div>
                  </div>
                </>
              ) : null}
            </div>
          </div>
          {isOwner && (
            <img
              src={profilePhoto}
              className="h-10 w-10 absolute top-2 right-4  rounded-full"
            />
          )}
        </div>
      </div>
    </>
  );
};
