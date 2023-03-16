import { NavLink } from "react-router-dom";
import { Typography } from "../../Typography";

export const NavItem = ({ path, text, icon }) => {
  return (
    <NavLink
      to={path}
      className={({ isActive }) =>
        ` ${isActive ? "text-white font-bold" : "text-gray-400"}`
      }
    >
      <p className="text-2xl flex items-center gap-2 lato">
        {icon}
        {text}
      </p>
    </NavLink>
  );
};
