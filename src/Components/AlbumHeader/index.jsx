import React from "react";
import { AiFillCaretRight } from "react-icons/ai";
import { RiShuffleFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { RoundButton } from "../RoundButton";
import { Typography } from "../Typography";
import { useUser } from "../../Context/UserContext/UserContext";
import { useTracks } from "../../Context/TracksContext/TracksContext";
import { getAlbumById } from "../../API/MusicApi/MusicApi";

export const AlbumHeader = ({ album }) => {
  const { thumbnailUrl, name } = album;
  const { index, shuffleQueue, playerQueue, isShuffled } = useTracks();
  const {
    user: { _id },
  } = useUser();

  const { handleCreateQueue } = useTracks();

  const handleAddToQueue = () => {
    handleCreateQueue(_id, album.songs, 0);
  };

  const handleShuffleQueue = async () => {
    console.log(isShuffled);
    if (!isShuffled) {
      const res = await getAlbumById(album._id);
      const rand = Math.floor(Math.random() * res.songs.length);
      shuffleQueue(_id, res.songs, rand, res.songs[rand]);
    }
  };
  return (
    <div className="w-screen h-[80vh] relative">
      <div className="bg-cover bg-center w-full h-full">
        <img className="h-full w-full object-cover" src={thumbnailUrl} />
      </div>
      <div className="bg-gradient-to-b from-[rgba(125,125,125,0)] to-[#02040C] w-screen h-[80vh] absolute top-0"></div>
      <div className="flex w-screen h-34 pl-[9.5vw]">
        <div className="flex relative">
          <div className="w-[3rem] h-[3rem] xs:w-[3.6rem] xs:h-[3.6rem] md:w-[4.5rem] md:h-[4.5rem]">
            <RoundButton
              color="white"
              background="white"
              icon={<AiFillCaretRight size={20} />}
              onClick={handleAddToQueue}
            />
          </div>
          <div className="w-[1.8rem] h-[1.8rem] xs:w-[2.1rem] xs:h-[2.1rem] md:w-[2.3rem] md:h-[2.3rem] absolute bottom-[0.7vh] right-[-3vw] xs:bottom-[-1vh] xs:right-[-1.2vw] lg:right-[-1vw] xl:right-[-0.5vw]">
            <RoundButton
              color="white"
              background={`${isShuffled ? "green" : "darkgray"}`}
              icon={<RiShuffleFill size={15} />}
              margin="pt-[0.1rem] xs:pt-0"
              onClick={handleShuffleQueue}
            />
          </div>
        </div>
        <div className="h-16 flex flex-col ml-[1rem] sm:ml-[3rem]">
          <Link to={`/artist/${album?.artist?._id}`}>
            <Typography
              text={album?.artist?.fullName}
              color="white"
              type="important"
            />
          </Link>
          <Typography text={name} color="primary" type="title" />
        </div>
      </div>
    </div>
  );
};
