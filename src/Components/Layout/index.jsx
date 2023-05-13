import { toastMessageError, toastMessageSuccess } from "../../Utils/toaster";
import { CreatePlaylistModal } from "../CreatePlaylistModal";
import { AddToPlaylistModal } from "../AddToPlaylistModal";
import { EditPlaylistModal } from "../EditPlaylistModal";
import EditSongForm from "../Form/EditDeleteSongs";
import { useUI } from "../../Context/UI/UIContext";
import { RxHamburgerMenu } from "react-icons/rx";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ContextMenu } from "../ContextMenu";
import { MusicPlayer } from "../MusicPlayer";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { Navbar } from "../Navbar";

export const Layout = ({ children }) => {
  const {
    handleToggleCreatePlaylistModal,
    handleToggleEditPlaylistModal,
    handleTogglePlaylistModal,
    isCreatePlaylistModalOpen,
    isAddToPlaylistModalOpen,
    setMessageSuccessToaster,
    isEditPlaylistModalOpen,
    setMessageErrorToaster,
    messageSuccessToaster,
    handleToggleSongModal,
    isEditSongModalOpen,
    messageErrorToaster,
    currentPlaylist,
    setIsNavOpen,
    isNavOpen,
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
    setIsContextMenuOpen(true);
  };

  const handleCloseContextMenu = () => {
    setIsContextMenuOpen(false);
  };

  useEffect(() => {
    if(messageSuccessToaster !== ""){
      toastMessageSuccess(messageSuccessToaster);
      setMessageSuccessToaster("")
    }
  }, [messageSuccessToaster])

  useEffect(() => {
    if(messageErrorToaster !==""){
      toastMessageError(messageErrorToaster);
      setMessageErrorToaster("")
    }
  }, [messageErrorToaster])


  useEffect(() => {
    setIsNavOpen(false);
  }, [location]);

  const isMusicPlayerVisible = location.pathname !== "/" && ! location.pathname.includes("resetpassword") ;
  const isContextMenuVisible = location.pathname !== "/" && ! location.pathname.includes("resetpassword");
  const isNavVisible = location.pathname !== "/" && ! location.pathname.includes("resetpassword");

  return (
    <div className="min-h-screen" onContextMenu={handleOpenContextMenu}>
      <div
        className={`${!isContextMenuVisible || !isContextMenuOpen ? "hidden" : ""
          }
        `}
      >
        <ContextMenu handleCloseContextMenu={handleCloseContextMenu} />
      </div>
      <MusicPlayer isMusicPlayerVisible={isMusicPlayerVisible} />
      {isNavVisible ? <Navbar /> : null}
      {!isNavOpen && isNavVisible && (
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
      {isCreatePlaylistModalOpen && (
        <CreatePlaylistModal
          handleToggleCreatePlaylistModal={handleToggleCreatePlaylistModal}
        />
      )}
      {isEditSongModalOpen && (
        <EditSongForm handleToggleSongModal={handleToggleSongModal} />
      )}
      {isEditPlaylistModalOpen && (
        <EditPlaylistModal
          handleToggleEditPlaylistModal={handleToggleEditPlaylistModal}
          playlist={currentPlaylist}
        />
      )}
      <ToastContainer />
    </div>
  );
};
