import { Link } from "react-router-dom";
import testImg from "../../../assets/images/testImages/test.jpg";
import { Typography } from "../../Typography";
import { AiOutlineHeart } from "react-icons/ai";

export const TrackInfo = ({ currentTrack }) => {
  const { artist, name, _id } = currentTrack;
  return (
    <div className="h-full hidden sm:flex gap-4 w-[10vw]">
      <img className="h-[8vh] min-w-[8vh] object-cover z-40" src={testImg} />
      <div className="flex flex-col items-start justify-between">
        <Link to={`/player/${_id}`}>
          <div>
            <Typography color="white" text={name} styles="truncate" />
            <Typography
              color="white"
              text={artist}
              type="p2"
              styles="truncate"
            />
          </div>
        </Link>
        <AiOutlineHeart className="text-white text-2xl cursor-pointer mb-1" />
      </div>
    </div>
  );
};
