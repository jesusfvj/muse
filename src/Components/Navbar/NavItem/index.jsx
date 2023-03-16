import { NavLink } from "react-router-dom";

export const NavItem = ({ path, text, icon, isNavOpen }) => {
  return (
    isNavOpen && (
      <NavLink
        to={path}
        className={({ isActive }) =>
          `${isActive ? "text-white font-bold" : "text-gray-400"} `
        }
      >
        <p className="text-2xl flex items-center gap-4 lato">
          {icon}
          {text}
        </p>
      </NavLink>
    )
  );
};
