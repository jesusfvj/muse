import React from "react";
import { Typography } from "../../../Typography";
import testImage from "../../../../assets/images/headerPicture.jpeg";

export const ArtistInfo = () => {
  return (
    <div className=" w-3/4 h-[40vh] flex flex-col md:flex-row gap-6 pt-20 pb-6">
      <img src={testImage} className="h-4/5 md:h-full aspect-square object-cover rounded-sm" />
      <div>
        <Typography text="LA ROSALIA" type="title" color="white" />
        <Typography text="3.546.324 followers" color="white"/>
        <Typography text="453.546.345 plays" color="white"/>
      </div>
    </div>
  );
};
