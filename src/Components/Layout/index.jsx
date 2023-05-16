import { toastMessageError, toastMessageSuccess } from "../../Utils/toaster";
import { CreatePlaylistModal } from "../CreatePlaylistModal";
import { AddToPlaylistModal } from "../AddToPlaylistModal";
import { EditPlaylistModal } from "../EditPlaylistModal";
import EditSongForm from "../Form/EditSongs";
import { useUI } from "../../Context/UI/UIContext";
import { RxHamburgerMenu } from "react-icons/rx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ContextMenu } from "../ContextMenu";
import { MusicPlayer } from "../MusicPlayer";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { Navbar } from "../Navbar";
import { ProfileLoader } from "../Pages/Profile/ProfileLoader";
import EditAlbumForm from "../Form/EditAlbums";
import { useTracks } from "../../Context/TracksContext/TracksContext";
import { StripeModal } from "../StripeModal/StripeModal";

export const Layout = ({ children }) => {
  const {
    handleToggleCreatePlaylistModal,
    handleToggleEditPlaylistModal,
    handleTogglePlaylistModal,
    isCreatePlaylistModalOpen,
    isAddToPlaylistModalOpen,
    setMessageSuccessToaster,
    isEditPlaylistModalOpen,
    handleToggleAlbumModal,
    isStripeModalOpen,
    handleToggleStripeModal,
    setMessageErrorToaster,
    messageSuccessToaster,
    handleToggleSongModal,
    isEditAlbumModalOpen,
    isEditSongModalOpen,
    messageErrorToaster,
    currentPlaylist,
    loadingMessage,
    setIsNavOpen,
    isNavOpen,
    isLoading,
  } = useUI();
  const [isContextMenuOpen, setIsContextMenuOpen] = useState(false);
  const location = useLocation();
  const { playerQueue } = useTracks();

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
    if (messageSuccessToaster !== "") {
      toastMessageSuccess(messageSuccessToaster);
      setMessageSuccessToaster("");
    }
  }, [messageSuccessToaster]);

  useEffect(() => {
    if (messageErrorToaster !== "") {
      toastMessageError(messageErrorToaster);
      setMessageErrorToaster("");
    }
  }, [messageErrorToaster]);

  useEffect(() => {
    setIsNavOpen(false);
  }, [location]);

  const isMusicPlayerVisible = location.pathname !== "/" && location.pathname !== "/admin" && ! location.pathname.includes("resetpassword") &&
  playerQueue?.length > 0;;
  const isContextMenuVisible = location.pathname !== "/" && location.pathname !== "/admin" && ! location.pathname.includes("resetpassword");
  const isNavVisible = location.pathname !== "/" && location.pathname !== "/admin" && ! location.pathname.includes("resetpassword");

  return (
    <div className="min-h-screen" onContextMenu={handleOpenContextMenu}>
      <div
        className={`${
          !isContextMenuVisible || !isContextMenuOpen ? "hidden" : ""
        }
        `}
      >
        <ContextMenu handleCloseContextMenu={handleCloseContextMenu} />
      </div>
      {isMusicPlayerVisible ? (
        <MusicPlayer isMusicPlayerVisible={isMusicPlayerVisible} />
      ) : null}
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
      {isEditAlbumModalOpen && (
        <EditAlbumForm handleToggleAlbumModal={handleToggleAlbumModal} />
      )}
      {isStripeModalOpen && (
        <StripeModal handleToggleStripeModal={handleToggleStripeModal} />
      )}
      {isEditPlaylistModalOpen && (
        <EditPlaylistModal
          handleToggleEditPlaylistModal={handleToggleEditPlaylistModal}
          playlist={currentPlaylist}
        />
      )}
      {isLoading && <ProfileLoader modal={true} text={loadingMessage} />}
      <ToastContainer />
    </div>
  );
};
