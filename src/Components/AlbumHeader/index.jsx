import React from "react";
import { AiFillCaretRight } from "react-icons/ai";
import { RiShuffleFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { RoundButton } from "../RoundButton";
import { Typography } from "../Typography";
import { useUser } from "../../Context/UserContext/UserContext";
import { useTracks } from "../../Context/TracksContext/TracksContext";

export const AlbumHeader = ({ album }) => {
  const { thumbnailUrl, name } = album;
  const {
    user: { _id },
  } = useUser();

  const { handleCreateQueue } = useTracks();

  const handleAddToQueue = () => {
    handleCreateQueue(_id, album.songs, 0);
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
          <div className="w-[1.8rem] h-[1.8rem] xs:w-[2.1rem] xs:h-[2.1rem] md:w-[2.3rem] md:h-[2.3rem] absolute bottom-[0.7vh] right-[-1vw] xs:bottom-[-1vh] xs:right-[-1.2vw] lg:right-[-1vw] xl:right-[-0.5vw]">
            <RoundButton
              color="white"
              background="darkgray"
              icon={<RiShuffleFill size={15} />}
              margin="pt-[0.1rem] xs:pt-0"
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
