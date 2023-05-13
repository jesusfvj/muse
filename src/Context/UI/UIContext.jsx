import { createContext, useContext, useState } from "react";

export const UIContext = createContext();

export const useUI = () => {
  const state = useContext(UIContext);
  return state;
};

export const UIProvider = ({ children }) => {
  const [isCreatePlaylistModalOpen, setIsCreatePlaylistModalOpen] = useState(false);
  const [isAddToPlaylistModalOpen, setIsAddToPlaylistModalOpen] = useState(false);
  const [isEditPlaylistModalOpen, setIsEditPlaylistModalOpen] = useState(false);
  const [isEditAlbumModalOpen, setisEditAlbumModalOpen] = useState(false);
  const [messageSuccessToaster, setMessageSuccessToaster] = useState("");
  const [isEditSongModalOpen, setisEditSongModalOpen] = useState(false);
  const [messageErrorToaster, setMessageErrorToaster] = useState("");
  const [currentPlaylist, setCurrentPlaylist] = useState(null);
  const [loadingMessage, setLoadingMessage] = useState(false);
  const [currentAlbum, setCurrentAlbum] = useState(null);
  const [currentSong, setCurrentSong] = useState(null);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleTogglePlaylistModal = () => {
    setIsAddToPlaylistModalOpen(!isAddToPlaylistModalOpen);
  };
  const handleToggleCreatePlaylistModal = () => {
    setIsNavOpen(false)
    setIsCreatePlaylistModalOpen(!isCreatePlaylistModalOpen);
  };

  const handleToggleSongModal = (song) => {
    setCurrentSong(song);
    setisEditSongModalOpen(!isEditSongModalOpen);
  };

  const handleToggleAlbumModal = (album) => {
    setCurrentAlbum(album);
    setisEditAlbumModalOpen(!isEditAlbumModalOpen);
  };

  const handleToggleEditPlaylistModal = (playlist) => {
    setCurrentPlaylist(playlist);
    setIsEditPlaylistModalOpen(!isEditPlaylistModalOpen);
  };

  return (
    <UIContext.Provider
      value={{
        handleToggleCreatePlaylistModal,
        handleToggleEditPlaylistModal,
        isCreatePlaylistModalOpen,
        handleTogglePlaylistModal,
        isAddToPlaylistModalOpen,
        setMessageSuccessToaster,
        setisEditAlbumModalOpen,
        isEditPlaylistModalOpen,
        setMessageErrorToaster,
        handleToggleAlbumModal,
        handleToggleSongModal,
        messageSuccessToaster,
        isEditAlbumModalOpen,
        messageErrorToaster,
        isEditSongModalOpen,
        setLoadingMessage,
        currentPlaylist,
        setCurrentAlbum,
        loadingMessage,
        currentAlbum,
        setIsLoading,
        setIsNavOpen,
        currentSong,
        isNavOpen,
        isLoading,
      }}
    >
      {children}
    </UIContext.Provider>
  );
};

export default UIContext;
