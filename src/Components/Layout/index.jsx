import React from "react";
import { MusicPlayer } from "../MusicPlayer";
import { Navbar } from "../Navbar";

export const Layout = ({ children }) => {
  return (
    <div className="flex relative min-h-screen">
      <Navbar />
      <div className="grow mb-[10vh]">{children}</div>
      <div className="fixed w-screen bottom-0 min-h-[10vh] z-50 p-[1vh] bg-black ">
        <MusicPlayer />
      </div>
    </div>
  );
};
