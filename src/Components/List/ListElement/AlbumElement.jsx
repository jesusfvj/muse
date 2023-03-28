import { useState } from "react";
import { Typography, RoundButton } from "../../index";
import { FaPlay } from "react-icons/fa";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

export const AlbumElement = ({ object }) => {
  const [clicked, setClicked] = useState(false);
  const [hovered, setHovered] = useState(false);
  const { name, imageUrl, artist } = object;
  return (
    <div className="relative flex my-4 mx-2 shadow-md"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}>
      <div
        className={
          " bg-slate-900 rounded-[0.5rem] flex flex-col  place-content-between items-center p-2 w-full h-full select-none"
        }
      >
        <div className="w-full mt-2 px-3">
          <Typography
            text={name}
            type="p1"
            color="white"
            family="lato"
            styles="max-w-[200px] sm:leading-6 line-clamp-2 text-ellipsis truncate"
          />
          <Typography
            text={artist}
            type="p2"
            color="white"
            family="lato"
            styles="truncate"
          />
        </div>
        {/* <div className={`w-[4rem] h-[4rem] sm:w-[6rem] sm:h-[6rem] lg:w-[8rem] lg:h-[8rem] ${bgImage} bg-cover bg-center bg-no-repeat lg:min-h-[8rem] m-4`}>
                    </div> */}
        <img
          src={imageUrl}
          className="w-[4rem] h-[4rem] sm:w-[6rem] sm:h-[6rem] lg:w-[8rem] lg:h-[8rem]  bg-cover bg-center bg-no-repeat lg:min-h-[8rem] m-4 pointer-events-none"
        />
      </div>
      <div className="absolute bottom-1 left-2 cursor-pointer flex justify-center items-center" onClick={() => (clicked ? setClicked(false) : setClicked(true))}>
        <Typography
          text={!clicked ? <AiOutlineHeart /> : <AiFillHeart />}
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
