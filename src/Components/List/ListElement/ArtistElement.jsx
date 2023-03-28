import { useState } from "react";
import { FaPlay } from "react-icons/fa";
import { RiUserFollowFill, RiUserFollowLine } from "react-icons/ri";
import { Typography, RoundButton } from "../../index";

export const ArtistElement = ({ object }) => {
  const [clicked, setClicked] = useState(false);
  const [hovered, setHovered] = useState(false);
  const { name, photoUrl } = object;
  return (
    <div className="relative flex my-4 mx-2 select-none"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}>
      <div
        className={
          " bg-slate-900 rounded-[0.5rem] flex flex-col  place-content-between items-center p-2  w-full h-full "
        }
      >
        <img
          src={photoUrl}
          className="sm:w-[6rem] sm:h-[6rem] lg:w-[8rem] lg:h-[8rem] w-[4rem] h-[4rem] rounded-full bg-cover bg-center bg-no-repeat lg:min-h-[8rem] m-4 pointer-events-none select-none"
        />
        <div className="w-full mb-5 px-3 text-center">
          <Typography
            text={name}
            type="p1"
            color="white"
            family="lato"
            styles="sm:leading-6 line-clamp-2 text-ellipsis truncate"
          />
        </div>
      </div>
      <div className="absolute top-2 right-2 cursor-pointer flex justify-center items-center" onClick={() => (clicked ? setClicked(false) : setClicked(true))}>
        <Typography
          text={!clicked ? <RiUserFollowLine /> : <RiUserFollowFill />}
          type="p0"
          color={!clicked ? 'secondary': 'white'}
          styles="hidden xs:flex"
        />
      </div>
      <div className={`absolute -bottom-2 -right-2 w-[2.5rem] h-[2.5rem] flex items-center justify-center rounded-full
      ${hovered ? 'flex animation-pop-glow' : 'hidden'}`}>
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
