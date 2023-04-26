import React from "react";
import { Typography } from "../../../Typography";

export const PlayerHeader = () => {
  return (
    <div className="w-screen h-[80vh] relative">
      <div className="bg-cover bg-center bg-[url('../../../src/assets/images/headerPicture.jpeg')] w-full h-full"></div>
      <div className="bg-gradient-to-b from-[rgba(125,125,125,0)] to-[#02040C] w-screen h-[80vh] absolute top-0"></div>
    </div>
  );
};
