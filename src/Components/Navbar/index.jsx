import UIContext from "../../Context/UI/UIContext";
import { useContext } from "react";

import { NavItem } from "./NavItem";
import { FaHome } from "react-icons/fa";
import { RiPlayListLine } from "react-icons/ri";
import { FiUser } from "react-icons/fi";
import { VscLibrary } from "react-icons/vsc";
import { IoClose } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";

const navItems = [
  { path: "/", text: "Landing Page" },
  { path: "/home", text: "Home", icon: <FaHome /> },
  { path: "/playlist", text: "Playlist", icon: <RiPlayListLine /> },
  { path: "/album", text: "Album" },
  { path: "/myprofile", text: "Profile", icon: <FiUser /> },
  { path: "/profile", text: "Profile" },
  { path: "/artist", text: "Artist" },
  { path: "/player", text: "Player" },
  { path: "/search", text: "Search" },
  { path: "/mylibrary", text: "Library", icon: <VscLibrary /> },
];

export const Navbar = () => {
  const { isNavOpen, setIsNavOpen } = useContext(UIContext);

  return (
    <div
      className={`bg-black duration-300 transition-[width] ${
        isNavOpen
          ? "w-screen h-screen md:w-1/4 flex flex-col items-center justify-center md:justify-start md:items-start gap-4 z-10 absolute md:relative md:p-12 md:pt-24"
          : "w-0"
      } `}
    >
      {isNavOpen ? (
        <IoClose
          className="text-white text-5xl absolute top-5 right-10 cursor-pointer"
          onClick={() => setIsNavOpen(!isNavOpen)}
        />
      ) : (
        <RxHamburgerMenu
          className="text-white text-3xl absolute top-5 left-10 cursor-pointer"
          onClick={() => setIsNavOpen(!isNavOpen)}
        />
      )}
      {isNavOpen &&
        navItems.map((navItem) => {
          const { text, path, icon } = navItem;
          return <NavItem key={path} text={text} path={path} icon={icon} />;
        })}
    </div>
  );
};
