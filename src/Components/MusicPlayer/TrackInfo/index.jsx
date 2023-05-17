import { Link } from "react-router-dom";
import { Typography } from "../../Typography";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useState } from "react";
import { useUser } from "../../../Context/UserContext/UserContext";

export const TrackInfo = ({ currentTrack }) => {
  const { user, toggleFollowTrack } = useUser();
  const { artist, name, _id, thumbnailUrl } = currentTrack;
  const [isFollowed, setIsFollowed] = useState(user?.tracks.includes(_id));

  const likedClicked = () => {
    toggleFollowTrack(user._id, currentTrack, !isFollowed);
    setIsFollowed(!isFollowed);
  };

  return (
    <div className="h-full hidden sm:flex gap-4 w-[10vw]">
      <img
        className="h-[8vh] min-w-[8vh] object-cover z-40"
        src={thumbnailUrl}
      />
      <div className="flex flex-col">
        <Link to={`/player/${_id}`}>
          <div className="flex  items-start justify-between">
            <div className="flex flex-col h-full items-start justify-around">
              <div className="w-20 lg:w-44">
                <Typography color="white" text={name} styles="truncate" />
              </div>
              <Typography
                color="white"
                text={artist.fullName}
                type="p2"
                styles="truncate"
              />
            </div>
          </div>
        </Link>
        {isFollowed ? (
          <AiFillHeart
            onClick={likedClicked}
            className="text-white text-2xl cursor-pointer mb-1"
          />
        ) : (
          <AiOutlineHeart
            onClick={likedClicked}
            className="text-white text-2xl cursor-pointer mb-1"
          />
        )}
      </div>
    </div>
  );
};
