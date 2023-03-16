import { NavItem } from "./NavItem";

const navItems = [
  { path: "/", text: "Landing Page" },
  { path: "/home", text: "Home" },
  { path: "/playlist", text: "Playlist" },
  { path: "/album", text: "Album" },
  { path: "/myprofile", text: "My Profile" },
  { path: "/profile", text: "Profile" },
  { path: "/artist", text: "Artist" },
  { path: "/player", text: "Player" },
  { path: "/search", text: "Search" },
  { path: "/mylibrary", text: "My Library" },
];

export const Navbar = () => {
  return (
    <div className="flex space-x-4 p-5 absolute bg-white">
      {navItems.map((navItem) => {
        const { text, path } = navItem;
        return <NavItem key={path} text={text} path={path} />;
      })}
    </div>
  );
};
