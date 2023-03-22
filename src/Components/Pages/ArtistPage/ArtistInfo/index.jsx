import React from "react";
import { Typography } from "../../../Typography";
import testImage from "../../../../assets/images/headerPicture.jpeg";

export const ArtistInfo = () => {
  return (
    <div className=" w-3/4 flex flex-col md:flex-row gap-4 pt-12 pb-6">
      <img src={testImage} className="w-full md:w-1/2 h-full object-cover rounded-sm" />
      <div>
        <Typography text="LA ROSALIA" type="title" color="white" />
        <Typography text="3.546.324 followers" color="white"/>
        <Typography text="453.546.345 plays" color="white"/>
      </div>
    </div>
  );
};
