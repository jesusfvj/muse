import { useEffect, useState } from "react";
import { FaPlay } from "react-icons/fa";
import { RiUserFollowFill, RiUserFollowLine } from "react-icons/ri";
import { Typography, RoundButton } from "../../index";
import { Dropdown } from "../Dropdown";
import { Link, Navigate, useNavigate } from "react-router-dom";

export const UserElement = ({ object }) => {
  const { fullName, profilePic, id, followedBy } = object;
  const navigate = useNavigate();
  const loggedUserId = 5 // User logeado
  const [clicked, setClicked] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [isDropdownActive, setIsDropdownActive] = useState(false);
  const handleNavigate = () => {
    navigate(`/user/${id}`)
  };
  // Aparece siguiendo si le sigue el user logeado
  useEffect(() => {
    if (followedBy.includes(loggedUserId)) { setClicked(true) }
    // lo de abajo no haria falta en si
    else {
      setClicked(false)
    }
  }, [])
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

  return (
    <div
      className="relative flex my-4 mx-2 select-none shadow-md"
      >
      <div
        className={
          " bg-slate-900 rounded-[0.5rem] flex flex-col  place-content-between items-center p-2  w-full h-full cursor-pointer "
        }
        onClick={handleNavigate}
      >
        <img
          src={profilePic}
          className="sm:w-[6rem] sm:h-[6rem] lg:w-[8rem] lg:h-[8rem] w-[4rem] h-[4rem] rounded-full bg-cover bg-center bg-no-repeat lg:min-h-[8rem] m-4 pointer-events-none select-none"
        />
        <div className="w-full mb-5 px-3 text-center">
          <Typography
            text={fullName}
            type="p1"
            color="white"
            family="lato"
            styles="sm:leading-6 line-clamp-2 text-ellipsis truncate"
          />
        </div>
      </div>
      <div
        className="absolute top-2 right-2 cursor-pointer flex justify-center items-center z-10"
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
        className={`${!isDropdownActive && "hidden"} absolute right-3 top-12`}
      >
        <Dropdown />
      </div>
    </div>
  );
};
