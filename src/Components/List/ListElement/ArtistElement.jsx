import { useState, setState } from "react";
import { FaPlay } from "react-icons/fa";
import { RiUserFollowFill, RiUserFollowLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { Typography, RoundButton, DropDownMenu } from "../../index";

export const ArtistElement = ({ object }) => {
  const [clicked, setClicked] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [isDropdownActive, setIsDropdownActive] = useState(false);

  const handleOpenDropdown = (e) => {
     e.stopPropagation()
    e.preventDefault();
    setIsDropdownActive(true);
  }; 

  const handleMouseLeave = () => {
    setHovered(false); 
    setIsDropdownActive(false);
  };

  const followClicked = () => { 
    console.log(clicked);
    if (!buttonDisabled) {
      setClicked(!clicked);
 
      setButtonDisabled(true);
      setTimeout(() => {
        console.log(clicked);
        setButtonDisabled(false);
      }, 1500);
    } 
  };
  const { name, photoUrl } = object;
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
          src={photoUrl}
          className="sm:w-[6rem] sm:h-[6rem] lg:w-[8rem] lg:h-[8rem] w-[4rem] h-[4rem] rounded-full bg-cover bg-center bg-no-repeat lg:min-h-[8rem] m-4 pointer-events-none select-none"
        />
        <Link to="/artist" className="w-full mb-5 px-3 text-center">
          <Typography
            text={name}
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
        <Typography
          text={clicked ? <RiUserFollowFill /> : <RiUserFollowLine />}
          type="p0"
          color={clicked ? "white" : "secondary"}
          styles="hidden xs:flex"
        />
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
