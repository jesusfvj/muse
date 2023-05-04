import { createContext, useContext, useState } from "react";

export const UIContext = createContext();

export const useUI = () => {
  const state = useContext(UIContext);
  return state;
};

export const UIProvider = ({ children }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const [isAddToPlaylistModalOpen, setIsAddToPlaylistModalOpen] =
    useState(false);

  const [isCreatePlaylistModalOpen, setIsCreatePlaylistModalOpen] =
    useState(false);

  const [isEditSongModalOpen, setisEditSongModalOpen] = useState(false);

  const handleTogglePlaylistModal = () => {
    setIsAddToPlaylistModalOpen(!isAddToPlaylistModalOpen);
  };
  const handleToggleCreatePlaylistModal = () => {
    setIsCreatePlaylistModalOpen(!isCreatePlaylistModalOpen);
  };

  const handleToggleSongModal = () =>  {
    setisEditSongModalOpen(!isEditSongModalOpen);
  }; 

  return (
    <UIContext.Provider
      value={{
        isNavOpen,
        setIsNavOpen,
        handleTogglePlaylistModal,
        isAddToPlaylistModalOpen,
        handleToggleCreatePlaylistModal,
        isCreatePlaylistModalOpen,
        handleToggleSongModal,
        isEditSongModalOpen,
      }}
    >
      {children}
    </UIContext.Provider>
  );
};

export default UIContext;
