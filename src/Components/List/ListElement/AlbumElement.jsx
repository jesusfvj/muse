import { useState } from "react";
import { Typography, RoundButton, DropDownMenu } from "../../index";
import { FaEdit, FaPlay } from "react-icons/fa";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useUser } from "../../../Context/UserContext/UserContext";
import { useUI } from "../../../Context/UI/UIContext";
import { IoTrashOutline } from "react-icons/io5";
import { useTracks } from "../../../Context/TracksContext/TracksContext";

export const AlbumElement = ({ object }) => {
  const {
    toggleFollowAlbum,
    deleteSingleAlbum,
    user: { _id: userId },
  } = useUser();

  const {
    setMessageSuccessToaster,
    setMessageErrorToaster,
    handleToggleAlbumModal,
    setLoadingMessage,
    setIsLoading,
  } = useUI();
  //album from profile
  const { handleCreateQueue } = useTracks();

  const { name, thumbnailUrl, artist, _id, followedBy } = object;

  const [isFollowed, setIsFollowed] = useState(followedBy.includes(userId));
  const [isDropdownActive, setIsDropdownActive] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [hovered, setHovered] = useState(false);

  const isOwner = userId === artist._id;

  const dropdownItems = [
    {
      text: "Play Next",
      path: null,
    },
    {
      text: "Go to Artist",
      path: `/user/${artist._id}`,
    },
    {
      text: "Go to Album",
      path: `/album/${_id}`,
    },
  ];

  const handleOpenDropdown = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setIsDropdownActive(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
    setIsDropdownActive(false);
  };
  const toggleFollowing = () => {
    if (!buttonDisabled) {
      setIsFollowed(!isFollowed);
      toggleFollowAlbum(_id, userId, isFollowed, object);
      setButtonDisabled(true);
      setTimeout(() => {
        setButtonDisabled(false);
      }, 1500);
    }
  };

  const handleDeleteAlbum = async () => {
    setLoadingMessage("Deleting album...");
    setIsLoading(true);
    const response = await deleteSingleAlbum(userId, _id);
    setIsLoading(false);
    if (response.ok) {
      setMessageSuccessToaster("Album deleted successfully");
    } else {
      setMessageErrorToaster(
        "There was an error trying deleting the album. Please try again."
      );
    }
  };

  const handleAddToQueue = () => {
    handleCreateQueue(userId, object.songs, 0);
  };

  return (
    <div
      className="flex flex-col my-4 mb-7 mx-2 h-52 sm:h-auto"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleMouseLeave}
      onContextMenu={handleOpenDropdown}
    >
      <div
        className={
          "relative bg-gradient-to-tl from-cyan-900 to-gray-900 rounded-[0.5rem] flex flex-col  place-content-between items-center p-2 w-full h-full select-none shadow-md"
        }
      >
        <Link to={`/album/${_id}`} className="w-full mt-2 px-3">
          <Typography
            text={name}
            type="p1"
            color="white"
            family="lato"
            styles="max-w-[200px] sm:leading-6 line-clamp-2 text-ellipsis truncate hover:underline"
          />
        </Link>
        <Link to={`/artist/${artist._id}`} className="w-full px-3">
          <Typography
            text={artist?.fullName}
            type="p2"
            color="white"
            family="lato"
            styles="truncate hover:underline"
          />
        </Link>
        <img
          src={thumbnailUrl}
          className="w-full h-[7rem] sm:w-[6rem] sm:h-[6rem] lg:w-[8rem] lg:h-[8rem]  bg-cover bg-center bg-no-repeat lg:min-h-[8rem] m-4 pointer-events-none object-cover rounded-md"
        />
        <div
          className="absolute bottom-1 left-0 sm:bottom-2 sm:left-2 cursor-pointer flex justify-center items-center m-3"
          onClick={toggleFollowing}
        >
          <Typography
            text={
              isFollowed ? <AiFillHeart /> : hovered ? <AiOutlineHeart /> : null
            }
            color={isFollowed ? "white" : "secondary"}
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
            onClick={handleAddToQueue}
          />
        </div>
      </div>
      <div className="h-6 w-full mt-4 ">
        <div
          className={`w-full flex h-full items-center justify-around ${
            !hovered && "hidden"
          }`}
        >
          {isOwner ? (
            <>
              <IoTrashOutline
                className="text-md md:text-xl text-gray-400 transition duration-500 hover:text-red-400 cursor-pointer"
                onClick={handleDeleteAlbum}
              />
              <FaEdit
                className="text-md md:text-xl text-gray-400 transition duration-500 hover:text-white cursor-pointer"
                onClick={() => handleToggleAlbumModal(object)}
              />
            </>
          ) : null}
        </div>
      </div>
      <div
        className={`${!isDropdownActive && "hidden"} absolute right-3 top-12`}
      >
        <DropDownMenu track={object.songs} items={dropdownItems} isAddToListVisible={false} />
      </div>
    </div>
  );
};
