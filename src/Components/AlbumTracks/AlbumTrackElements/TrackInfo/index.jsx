import { FaPlay } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Typography } from "../../../Typography";
import { useTracks } from "../../../../Context/TracksContext/TracksContext";
import { useUser } from "../../../../Context/UserContext/UserContext";
import { Audio } from "react-loader-spinner";

export const TrackInfo = ({
  hovered,
  id,
  nombre,
  duration,
  artist,
  trackList,
  idx,
  track,
}) => {
  const { handleCreateQueue } = useTracks();
  const {
    user: { _id },
  } = useUser();

  const { currentPlayingSong, isMusicPlaying } = useTracks();

  const isActive = currentPlayingSong === track._id;

  const handleAddToQueue = () => {
    // userId, playlist that track belongs to, index
    handleCreateQueue(_id, trackList, idx);
  };

  return (
    <div className="flex items-start justify-around sm:justify-between w-full sm:gap-5 pl-[4vw] md:px-[5vw]">
      <div
        className={`hidden sm:flex cursor-pointer mt-1 ${
          hovered && !isActive ? "visible" : "invisible"
        }`}
      >
        <Typography
          text={<FaPlay />}
          color="white"
          onClick={handleAddToQueue}
        />
      </div>
      {isActive && isMusicPlaying && (
        <div className="hidden sm:flex absolute">
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
      <Link to={`/player/${track._id}`} className="hidden sm:flex sm:w-[25rem] lg:w-[40rem] truncate">
        <Typography text={nombre} color="white" styles="truncate" />
      </Link>
      <div className="w-[70%] sm:hidden truncate"
        onClick={()=>handleCreateQueue(_id, trackList, idx)}
      >
        <Typography text={nombre} color="white" styles="w-[50vw] truncate" />
      </div>
      <Typography
        text={artist}
        color="white"
        styles="truncate hidden sm:flex "
      />
      <Typography text={duration} color="white" styles="flex" />
    </div>
  );
};
