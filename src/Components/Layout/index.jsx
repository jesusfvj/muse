import { useUI } from "../../Context/UI/UIContext";

import { MusicPlayer } from "../MusicPlayer";
import { Navbar } from "../Navbar";
import { RxHamburgerMenu } from "react-icons/rx";

export const Layout = ({ children }) => {
  const {isNavOpen, setIsNavOpen} = useUI();

  const handleToggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };
  const handleHideNav = () => {
    setIsNavOpen(false);
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      {!isNavOpen && (
        <RxHamburgerMenu
          className="text-white text-3xl fixed top-5 left-10 cursor-pointer z-50"
          onClick={handleToggleNav}
        />
      )}
      <div className="grow mb-[10vh]" onClick={handleHideNav}>
        {children}
      </div>
      <div className="fixed w-screen bottom-0 min-h-[10vh] z-50 p-[1vh] bg-black">
        <MusicPlayer />
      </div>
    </div>
  );
};
