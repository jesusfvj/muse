import UIContext from "../../Context/UI/UIContext";
import { useContext } from "react";
import { MusicPlayer } from "../MusicPlayer";
import { Navbar } from "../Navbar";

export const Layout = ({ children }) => {
  const { setIsNavOpen } = useContext(UIContext);

  const handleHideNav = () => {
    setIsNavOpen(false);
  };

  return (
    <div className="flex min-h-screen">
      <Navbar />
      <div className="grow mb-[10vh]" onClick={handleHideNav}>
        {children}
      </div>
      <div className="fixed w-screen bottom-0 min-h-[10vh] z-50 p-[1vh] bg-black">
        <MusicPlayer />
      </div>
    </div>
  );
};
