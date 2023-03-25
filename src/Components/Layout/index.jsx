import { useUI } from "../../Context/UI/UIContext";
import { Navbar } from "../Navbar";
import { RxHamburgerMenu } from "react-icons/rx";
import { useLocation } from "react-router";
import { useEffect } from "react";

export const Layout = ({ children }) => {
  const { isNavOpen, setIsNavOpen } = useUI();
  const location = useLocation();

  const handleToggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };
  const handleHideNav = () => {
    setIsNavOpen(false);
  };

  useEffect(() => {
    setIsNavOpen(false);
  }, [location]);

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

    </div>
  );
};
