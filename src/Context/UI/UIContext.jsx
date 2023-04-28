import { createContext, useContext, useState } from "react";

export const UIContext = createContext();

export const useUI = () => {
  const state = useContext(UIContext);
  return state;
};

export const UIProvider = ({ children }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isAddToPlaylistModalOpen, setIsAddToPlaylistModalOpen] =
    useState(true);

  const handleTogglePlaylistModal = () => {
    setIsAddToPlaylistModalOpen(!isAddToPlaylistModalOpen);
  };

  return (
    <UIContext.Provider
      value={{
        isNavOpen,
        setIsNavOpen,
        handleTogglePlaylistModal,
        isAddToPlaylistModalOpen
      }}
    >
      {children}
    </UIContext.Provider>
  );
};

export default UIContext;
