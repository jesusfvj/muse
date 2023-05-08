import { useState, setState } from "react";
import { FaPlay } from "react-icons/fa";
import { RiUserFollowFill, RiUserFollowLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { Typography, RoundButton } from "../../index";
import { useUser } from "../../../Context/UserContext/UserContext";

export const ArtistElement = ({ object }) => {
  const { user, toggleUserFollowing } = useUser();
  const { fullName, profilePhoto, _id, followedBy } = object;

  const [isFollowed, setIsFollowed] = useState(user.following.includes(_id));

  const [hovered, setHovered] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const handleOpenDropdown = (e) => {
    e.stopPropagation();
    e.stopPropagation();
    e.preventDefault();
  };

  const handleMouseLeave = () => {
    setHovered(false);
    setHovered(false);
  };

  const followClicked = () => {
    if (!buttonDisabled) {
      setIsFollowed(!isFollowed);
      setButtonDisabled(true);
      toggleUserFollowing(user._id, _id, !isFollowed);
      setTimeout(() => {
        setButtonDisabled(false);
      }, 1500);
    }
  };

  return (
    <div
      className="relative flex my-4 mx-2 select-none shadow-md"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleMouseLeave}
      onContextMenu={handleOpenDropdown}
    >
      <div
        className={
          " bg-slate-900 rounded-[0.5rem] flex flex-col  place-content-between items-center p-2  w-full h-full "
        }
      >
        <img
          src={profilePhoto}
          className="sm:w-[6rem] sm:h-[6rem] lg:w-[8rem] lg:h-[8rem] w-[4rem] h-[4rem] rounded-full bg-cover bg-center bg-no-repeat lg:min-h-[8rem] m-4 pointer-events-none select-none object-cover"
        />
        <Link to="/artist" className="w-full mb-5 px-3 text-center">
          <Typography
            text={fullName}
            type="p1"
            color="white"
            family="lato"
            styles="sm:leading-6 line-clamp-2 text-ellipsis truncate"
          />
        </Link>
      </div>
      <div
        className="absolute top-2 right-2 cursor-pointer flex justify-center items-center"
        onClick={followClicked}
      >
        {hovered | isFollowed ? (
          <Typography
            text={isFollowed ? <RiUserFollowFill /> : <RiUserFollowLine />}
            type="p0"
            color={isFollowed ? "white" : "secondary"}
            styles="hidden xs:flex"
          />
        ) : null}
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
        />
      </div>
    </div>
  );
};
