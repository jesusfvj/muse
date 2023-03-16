import React from "react";
import { Navbar } from "../Navbar";

export const Layout = ({ children }) => {
  return (
    <div className="flex">
      <Navbar />
      <div className="grow">{children}</div>
    </div>
  );
};
