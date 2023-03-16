import { NavLink } from "react-router-dom";

export const NavItem = ({ path, text }) => {
  return (
    <NavLink
      to={path}
      className={({ isActive }) =>
        ` ${isActive ? "text-red-500 font-bold" : ""}`
      }
    >
      {text}
    </NavLink>
  );
};
