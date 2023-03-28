import { createContext, useContext, useState } from "react";

export const UIContext = createContext();

export const useUI = () => {
  const state = useContext(UIContext);
  return state;
};

export const UIProvider = ({ children }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <UIContext.Provider
      value={{
        isNavOpen,
        setIsNavOpen,
      }}
    >
      {children}
    </UIContext.Provider>
  );
};

export default UIContext;
