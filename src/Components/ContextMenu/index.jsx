import React from "react";
import { NavLink } from "react-router-dom";
import { Typography } from "../Typography";
import { AiFillHome, AiOutlineLogout } from "react-icons/ai";
import { FaSearch, FaUserAlt } from "react-icons/fa";
import { TbMicrophone2 } from "react-icons/tb";
import { BiLibrary } from "react-icons/bi";
import { useUser } from "../../Context/UserContext/UserContext";

export const ContextMenu = ({handleCloseContextMenu}) => {
  const { logout, user } = useUser();
  
  return (
    <div className="h-screen w-screen flex items-center justify-center top-0 z-[99] fixed backdrop-blur-md" onClick={handleCloseContextMenu}>
      <div className="w-[500px] grid grid-cols-12 gap-8 place-content-center place-items-center relative">
        <NavLink
          to="/main"
          className=" text-white col-span-12 h-24 w-24 flex items-center justify-center rounded-full bg-slate-300 hover:bg-gray-100 duration-300 translate-y-12"
        >
          <AiFillHome className="text-gray-600 text-4xl" />
        </NavLink>
        <NavLink
          to="/search"
          className="text-white col-span-6 h-24 w-24 flex items-center justify-center rounded-full bg-slate-300 hover:bg-gray-100 duration-300"
        >
          <FaSearch className="text-gray-600 text-4xl" />
        </NavLink>
        <NavLink
          to="/album"
          className="text-white col-span-6 h-24 w-24 flex items-center justify-center rounded-full bg-slate-300 hover:bg-gray-100 duration-300"
        >
          <TbMicrophone2 className="text-gray-600 text-4xl" />
        </NavLink>
        <NavLink
          to={`/user/${user?._id}`}
          className="text-white col-span-6 h-24 w-24 flex items-center justify-center rounded-full bg-slate-300 hover:bg-gray-100 duration-300"
        >
          <FaUserAlt className="text-gray-600 text-4xl" />
        </NavLink>
        <NavLink
          to="/mylibrary"
          className="text-white col-span-6 h-24 w-24 flex items-center justify-center rounded-full bg-slate-300 hover:bg-gray-100 duration-300"
        >
          <BiLibrary className="text-gray-600 text-4xl" />
        </NavLink>
        <button
          onClick={logout}
          className="text-white col-span-12 h-24 w-24 flex items-center justify-center rounded-full bg-slate-300 hover:bg-gray-100 duration-300 -translate-y-12"
        >
          <AiOutlineLogout className="text-gray-600 text-4xl" />
        </button>
        <div className="absolute">
          <Typography text="go to" color="white" type="big" />
        </div>
      </div>
    </div>
  );
};
