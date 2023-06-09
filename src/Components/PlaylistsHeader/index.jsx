import React, { useState } from "react";
import { AiFillCaretRight, AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { RiShuffleFill } from "react-icons/ri";
import { RoundButton } from "../RoundButton";
import { Typography } from "../Typography";
import { MdControlPointDuplicate } from "react-icons/md";
import {
  duplicatePlaylist,
  getPlaylistsById,
  toggleFollowPlaylist,
} from "../../API/MusicApi/MusicApi";
import { useUser } from "../../Context/UserContext/UserContext";
import { useTracks } from "../../Context/TracksContext/TracksContext";

export const PlaylistsHeader = ({
  name,
  thumbnail,
  playlistId,
  followedBy,
  tracks,
}) => {
  const {
    user: { _id },
  } = useUser();

  const { handleCreateQueue, index, shuffleQueue, isShuffled } = useTracks();
  console.log(isShuffled)

  const [clicked, setClicked] = useState(followedBy.includes(_id));
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [hoverMsgAppear, sethoverMsgAppear] = useState(0);
  const [hoverMsg, sethoverMsg] = useState("");
  const [hoverMsgError, sethoverMsgError] = useState("");

  const duplicateplaylistbutton = async () => {
    try {
      const res = await duplicatePlaylist(_id, playlistId);
      sethoverMsg(res.msg);
      sethoverMsgAppear(1);
      sethoverMsgError("");
      setTimeout(() => {
        sethoverMsgAppear(0);
      }, 3000);
    } catch (error) {
      sethoverMsg(error.response.data.msg);
      sethoverMsgAppear(1);
      sethoverMsgError("border-2 border-red-600");
      setTimeout(() => {
        sethoverMsgAppear(0);
        sethoverMsgError("");
      }, 3000);
    }
  };
  const likedClicked = async () => {
    if (!buttonDisabled) {
      setClicked(!clicked);
      setTimeout(() => {
        toggleFollowPlaylist(_id, [playlistId], !clicked);
      }, 300);
      setButtonDisabled(true);
      setTimeout(() => {
        setButtonDisabled(false);
      }, 1500);
    }
  };

  const handleAddToQueue = () => {
    // userId, trackId, index
    handleCreateQueue(_id, tracks, 0);
  };

  const handleShuffleQueue = async () => {
    if (!isShuffled) {
      const res = await getPlaylistsById(playlistId);
      const rand = Math.floor(Math.random() * res.tracks.length);
      shuffleQueue(_id, res.tracks, rand, res.tracks[rand]);
    }
  };
  return (
    <div className="w-screen h-[30vh] sm:h-[50vh] md:h-[60vh] lg:h-[80vh] relative">
      <div className="w-full h-full relative overflow-hidden md:mb-10">
        <img
          src={thumbnail}
          alt={name}
          className="object-cover w-full h-full blur-md"
        />
        <img
          src={thumbnail}
          alt={name}
          className="absolute top-0 bottom-0 left-0 right-0 m-auto z-10 w-2/6 xs:my-5 sm:my-10 md:my-20"
        />
      </div>

      <div className="bg-gradient-to-b from-[rgba(125,125,125,0)] to-[#02040C] w-screen h-full absolute top-0"></div>
      <div className="flex w-screen h-34 gap-5 items-center justify-around">
        <div className="flex relative">
          <div className="w-[3rem] h-[3rem] xs:w-[3.6rem] xs:h-[3.6rem] md:w-[4.5rem] md:h-[4.5rem]">
            <RoundButton
              color="white"
              background="white"
              icon={<AiFillCaretRight size={40} />}
              onClick={handleAddToQueue}
            />
          </div>
          <div className="w-[1.8rem] h-[1.8rem] xs:w-[2.1rem] xs:h-[2.1rem] md:w-[2.3rem] md:h-[2.3rem] absolute -bottom-[0.7vh] right-[-3vw] xs:bottom-[-1vh] xs:right-[-1.2vw] lg:right-[-1vw] xl:right-[-0.5vw]">
            <RoundButton
              color="white"
              background={`${isShuffled ? "green" : "darkGray"}`}
              icon={<RiShuffleFill size={15} />}
              margin="pt-[0.1rem] xs:pt-0"
              onClick={handleShuffleQueue}
            />
          </div>
        </div>
        <div className=" flex flex-col text-center items-center justify-center">
          <Typography text={name} color="white" type="important" />
        </div>
        <div className="flex items-center gap-6">
          <div
            className="flex w-10 h-10 sm:w-[4rem] sm:h-[4rem] items-center justify-center relative group"
            onClick={duplicateplaylistbutton}
          >
            <RoundButton
              color="white"
              background="transparent"
              icon={<MdControlPointDuplicate size={25} />}
              margin=""
            />

            <div className="group-hover:block hidden absolute bottom-full left-1/2 transform -translate-x-1/2 p-2 bg-gray-800 text-white rounded-md z-10 mb-2">
              <p>Duplicate playlist</p>
            </div>
            {hoverMsgAppear == 1 ? (
              <div
                className={`absolute bottom-full w-36 left-1/2 transform -translate-x-1/2 p-2 bg-gray-800 text-white rounded-md z-20 mb-2 ${hoverMsgError}`}
              >
                <p>{hoverMsg}</p>
              </div>
            ) : null}
          </div>
          <div
            className="flex w-[2rem] h-[2rem] items-center cursor-pointer"
            onClick={likedClicked}
          >
            <Typography
              text={!clicked ? <AiOutlineHeart /> : <AiFillHeart />}
              color="white"
              type="important"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
