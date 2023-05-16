import { FaPlay } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Typography } from "../../../Typography";
import { useTracks } from "../../../../Context/TracksContext/TracksContext";
import { useUser } from "../../../../Context/UserContext/UserContext";

export const TrackInfo = ({
  hovered,
  id,
  nombre,
  duration,
  artist,
  trackList,
  idx,
}) => {
  const { handleCreateQueue } = useTracks();
  const {
    user: { _id },
  } = useUser();

  const handleAddToQueue = () => {
    // userId, playlist that track belongs to, index
    handleCreateQueue(_id, trackList, idx);
  };

  return (
    <div className="flex items-start justify-start gap-10 md:gap-15 pl-[4vw] md:px-[5vw]">
      <div
        className={`hidden sm:flex cursor-pointer mt-1 ${
          hovered ? "visible" : "invisible"
        }`}
      >
        <Typography
          text={<FaPlay />}
          color="white"
          onClick={handleAddToQueue}
        />
      </div>
      <Link to="/player" className="w-[10rem] lg:w-[30rem] truncate">
        <Typography text={nombre} color="white" styles="truncate w-full" />
      </Link>
      <Typography
        text={artist}
        color="white"
        styles="truncate hidden xs:flex "
      />
      <Typography text={duration} color="white" styles="hidden xs:flex" />
    </div>
  );
};
