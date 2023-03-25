import UIContext from "../../Context/UI/UIContext";
import { useContext } from "react";

import { NavItem } from "./NavItem";
import { FaHome } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { VscLibrary } from "react-icons/vsc";
import { IoClose } from "react-icons/io5";
import { BsSearch } from "react-icons/bs";
import { Typography } from "../Typography";
import { UserContext } from "../../Context/UserContext/UserContext";

const navItems = [
  /* { path: "/", text: "Landing Page" }, */
  { path: "/main", text: "Home", icon: <FaHome /> },
  /*  { path: "/playlist", text: "Playlist", icon: <RiPlayListLine /> }, */
  // { path: "/album", text: "Album" },
  { path: "/profile", text: "Profile", icon: <FiUser /> },
  // { path: "/artist", text: "Artist" },
  // { path: "/player", text: "Player" },
  { path: "/search", text: "Search", icon: <BsSearch /> },
  { path: "/mylibrary", text: "Library", icon: <VscLibrary /> },
];

export const Navbar = () => {
  const { isNavOpen, setIsNavOpen } = useContext(UIContext);
  const { logout } = useContext(UserContext);

  const handleToggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const handleLogout = () => {
    logout();
  };

  return (
    <div
      className={`bg-black/[97.5%] h-full md:pt-24 fixed  ${
        isNavOpen
          ? "w-screen md:w-1/4 flex flex-col items-center justify-center md:justify-start md:items-center fixed z-50  duration-300"
          : "w-0 md:pt-24"
      } `}
    >
      {isNavOpen && (
        <IoClose
          className="text-white text-2xl absolute top-5 right-10 cursor-pointer z-50"
          onClick={handleToggleNav}
        />
      )}
      <div className="flex flex-col gap-8 mt-8">
        {navItems.map((navItem) => {
          const { text, path, icon } = navItem;
          return (
            <NavItem
              key={path}
              text={text}
              path={path}
              icon={icon}
              isNavOpen={isNavOpen}
            />
          );
        })}
        <div
          className="fixed bottom-6 cursor-pointer border border-gray-400 p-3 rounded-md"
          onClick={handleLogout}
        >
          <Typography text="LOGOUT" />
        </div>
      </div>
    </div>
  );
};
