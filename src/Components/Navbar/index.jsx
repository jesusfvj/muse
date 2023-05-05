import { useUI } from "../../Context/UI/UIContext";

import { NavItem } from "./NavItem";
import { FaHome } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { VscLibrary } from "react-icons/vsc";
import { IoClose } from "react-icons/io5";
import { BsSearch } from "react-icons/bs";
import { Typography } from "../Typography";
import { useUser } from "../../Context/UserContext/UserContext";
import { UploadSongsModal } from "../UploadSongsModal";
import { useState } from "react";
import { CreatePlaylistModal } from "../CreatePlaylistModal";
import { Button } from "../Button";

const navItems = [
  { path: "/main", text: "Home", icon: <FaHome /> },
  { path: "/user", text: "Profile", icon: <FiUser /> },
  { path: "/search", text: "Search", icon: <BsSearch /> },
  { path: "/mylibrary", text: "Library", icon: <VscLibrary /> },
];

export const Navbar = () => {
  const {
    isNavOpen,
    setIsNavOpen,
    isCreatePlaylistModalOpen,
    handleToggleCreatePlaylistModal,
  } = useUI();
  const { logout, user } = useUser();
  const [showUploadSongsModal, setShowUploadSongsModal] = useState(false);

  const handleToggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const uploadSongs = () => {
    setShowUploadSongsModal(true);
    setIsNavOpen(!isNavOpen);
  };

  const handleLogout = () => {
    logout();
  };

  return (
    <>
      <div
        className={`bg-black/[97.5%] h-full md:pt-24 fixed  ${
          isNavOpen
            ? "w-screen md:w-1/4 flex flex-col items-center justify-center md:justify-start md:items-center fixed z-50 duration-300"
            : "w-0 md:pt-24"
        } `}
      >
        {isNavOpen && (
          <IoClose
            className="text-white text-2xl absolute top-5 right-10 cursor-pointer z-50"
            onClick={handleToggleNav}
          />
        )}
        <div className="flex flex-col items-center justify-between gap-8 mt-8  h-full w-full">
          <div className="w-full flex items-center pt-24 md:pt-0 md:pr-6  flex-col gap-12">
            {navItems.map((navItem) => {
              const { text, path, icon } = navItem;
              return (
                <NavItem
                  key={path}
                  text={text}
                  path={path === "/user" ? `/user/${user._id}` : path}
                  icon={icon}
                  isNavOpen={isNavOpen}
                />
              );
            })}
          </div>
          {isNavOpen && (
            <div className="bottom-6 flex flex-col items-center gap-2 w-full bg-gradient-to-b from-[#000000] to-[#0A4148] py-20 px-16 sm:px-0 md:px-6 lg:px-14 xl:px-16">
              <div
                className="cursor-pointer border duration-200 hover:bg-gray-100/10 hover:border-transparent border-gray-400 p-3 rounded-md flex items-center justify-center w-full sm:w-1/4 md:w-full"
                onClick={handleToggleCreatePlaylistModal}
              >
                <Typography text="Create Playlist" />
              </div>
              <div
                className="cursor-pointer border duration-200 hover:bg-gray-100/10 hover:border-transparent border-gray-400 p-3 rounded-md flex items-center justify-center w-full sm:w-1/4 md:w-full"
                onClick={uploadSongs}
              >
                <Typography text="Upload songs" />
              </div>
              <div
                className="cursor-pointer border duration-200 hover:bg-gray-100/10 hover:border-transparent border-gray-400 p-3 rounded-md flex items-center justify-center w-full sm:w-1/4 md:w-full"
                onClick={handleLogout}
              >
                <Typography text="LOGOUT" />
              </div>
            </div>
          )}
        </div>
      </div>
      {showUploadSongsModal && (
        <UploadSongsModal setShowUploadSongsModal={setShowUploadSongsModal} />
      )}
      {isCreatePlaylistModalOpen && (
        <CreatePlaylistModal
          handleToggleCreatePlaylistModal={handleToggleCreatePlaylistModal}
        />
      )}
    </>
  );
};
