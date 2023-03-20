import { createContext, useState } from "react";

export const UIContext = createContext();

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