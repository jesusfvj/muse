import { useUI } from "../../Context/UI/UIContext";
import { Navbar } from "../Navbar";
import { RxHamburgerMenu } from "react-icons/rx";
import { useLocation } from "react-router";
import { useEffect, useState } from "react";
import { MusicPlayer } from "../MusicPlayer";
import { ContextMenu } from "../ContextMenu";
import { AddToPlaylistModal } from "../AddToPlaylistModal";
import { CreatePlaylistModal } from "../CreatePlaylistModal";
import EditSongForm from "../Form/EditDeleteSongs";

export const Layout = ({ children }) => {
  const {
    isNavOpen,
    setIsNavOpen,
    handleTogglePlaylistModal,
    isAddToPlaylistModalOpen,
    isCreatePlaylistModalOpen,
  } = useUI();
  const [isContextMenuOpen, setIsContextMenuOpen] = useState(false);
  const location = useLocation();

  const handleToggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };
  const handleHideNav = () => {
    setIsNavOpen(false);
  };

  const handleOpenContextMenu = (e) => {
    e.preventDefault();
    console.log(e.target);
    setIsContextMenuOpen(true);
  };

  const handleCloseContextMenu = () => {
    setIsContextMenuOpen(false);
  };

  useEffect(() => {
    setIsNavOpen(false);
  }, [location]);

  const isMusicPlayerVisible =
    location.pathname !== "/" && location.pathname !== "/player";
  const isContextMenuVisible = location.pathname !== "/";

  return (
    <div className="min-h-screen" onContextMenu={handleOpenContextMenu}>
      <div
        className={`${
          !isContextMenuVisible || (!isContextMenuOpen && "hidden")
        }`}
      >
        <ContextMenu handleCloseContextMenu={handleCloseContextMenu} />
      </div>
      <MusicPlayer isMusicPlayerVisible={isMusicPlayerVisible} />
      <Navbar />
      {!isNavOpen && (
        <RxHamburgerMenu
          className="text-white text-3xl fixed top-5 left-10 cursor-pointer z-50"
          onClick={handleToggleNav}
        />
      )}
      <div
        className={`grow ${isMusicPlayerVisible && "mb-[10vh]"}`}
        onClick={handleHideNav}
      >
        {children}
      </div>
      {isAddToPlaylistModalOpen && (
        <AddToPlaylistModal handleToggleModal={handleTogglePlaylistModal} />
      )}
      {isCreatePlaylistModalOpen && <CreatePlaylistModal />}
    </div>
  );
};
