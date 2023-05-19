import { useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { FaEdit, FaPlay } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Typography, RoundButton, DropDownMenu } from "../../index";
import { useUI } from "../../../Context/UI/UIContext";
import { useUser } from "../../../Context/UserContext/UserContext";
import { IoTrashOutline } from "react-icons/io5";
import { useTracks } from "../../../Context/TracksContext/TracksContext";

export const SongElement = ({ object }) => {
  const {
    user: { _id, tracks },
    deleteSingleSong,
    toggleFollowTrack,
  } = useUser();
  const {
    setMessageSuccessToaster,
    setMessageErrorToaster,
    handleToggleSongModal,
    setLoadingMessage,
    setIsLoading,
  } = useUI();

  const { handleCreateQueue } = useTracks();

  const { name, artist, thumbnailUrl, _id: songId } = object;
  const [clicked, setClicked] = useState(tracks.includes(songId));
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [isDropdownActive, setIsDropdownActive] = useState(false);

  const dropdownItems = [
    {
      text: "Play Next",
      path: null,
    },
    {
      text: "Go to Artist",
      path: `/artist/${artist._id}`,
    },
  ];

  const isOwner = _id === artist._id;

  const handleOpenDropdown = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setIsDropdownActive(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
    setIsDropdownActive(false);
  };

  const handleDeleteSong = async () => {
    setLoadingMessage("Deleting song...");
    setIsLoading(true);
    const response = await deleteSingleSong(_id, songId);
    setIsLoading(false);
    if (response.ok) {
      setMessageSuccessToaster("Song deleted successfully");
    } else {
      setMessageErrorToaster(
        "There was an error trying deleting the song. Please try again."
      );
    }
  };

  const likedClicked = () => {
    if (!buttonDisabled) {
      setClicked(!clicked);
      setTimeout(() => {
        toggleFollowTrack(_id, object, !clicked);
      }, 300);
      setButtonDisabled(true);
      setTimeout(() => {
        setButtonDisabled(false);
      }, 1500);
    }
  };

  const handleAddToQueue = () => {
    handleCreateQueue(_id, [songId]);
  };
  return (
    <div
      className="flex flex-col mt-4 mx-2 select-none"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleMouseLeave}
      onContextMenu={handleOpenDropdown}
    >
      <div
        className={
          " bg-slate-900 rounded-[0.5rem] flex flex-col  place-content-between items-center p-2 w-full h-full shadow-md relative"
        }
      >
        <Link to={`/player/${songId}`} className="w-full mt-2 px-3 truncate">
          <Typography
            text={name}
            type="p1"
            color="white"
            family="lato"
            styles="max-w-[200px] sm:leading-6 truncate text-ellipsis hover:underline"
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
          className="w-[8rem] h-[8rem] rounded-full min-h-[8rem] mx-auto my-4 pointer-events-none object-cover"
        />
        <div
          className="absolute bottom-2 left-2 cursor-pointer flex justify-center items-center m-3"
          onClick={likedClicked}
        >
          <Typography
            text={
              clicked ? <AiFillHeart /> : hovered ? <AiOutlineHeart /> : null
            }
            color={clicked ? "white" : "secondary"}
            styles="flex scale-[2]"
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
                onClick={handleDeleteSong}
              />
              <FaEdit
                className="text-md md:text-xl text-gray-400 transition duration-500 hover:text-white cursor-pointer"
                onClick={() => handleToggleSongModal(object)}
              />
            </>
          ) : null}
        </div>
      </div>
      <div
        className={`${!isDropdownActive && "hidden"} absolute right-3 top-12`}
      >
        <DropDownMenu track={object} items={dropdownItems} />
      </div>
    </div>
  );
};
