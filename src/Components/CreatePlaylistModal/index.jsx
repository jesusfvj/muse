import React, { useState } from "react";
import { BiImageAdd } from "react-icons/bi";

import { InputWithLabel } from "../InputWithLabel";
import { Typography } from "../Typography";

export const CreatePlaylistModal = () => {
  const [playlistData, setPlaylistData] = useState({
    name: "",
    img: "",
    isPrivate: false,
  });
  const handleAddImage = (e) => {
    console.log(e.target.files[0]);
  };
  return (
    <div className="w-screen h-screen fixed top-0 flex items-center justify-center bg-black/50 backdrop-blur-md z-[999999]">
      <div className="w-1/2 h-1/2 bg-gradient-to-b from-[#4A4A4A] to-[#0A4148] flex flex-col items-center gap-8 justify-between p-6 rounded-md">
        <div className="w-full md:w-2/3">
          <InputWithLabel
            type="text"
            name="name"
            label="Name"
            value={playlistData.name}
            onInputChange={(e) =>
              setPlaylistData({ ...playlistData, name: e.target.value })
            }
          />
        </div>

        <input
          id="file"
          type="file"
          name="img"
          value={playlistData.img}
          onChange={handleAddImage}
          className="hidden"
        />
        <div className="w-64 h-64 border relative border-white flex items-center justify-center rounded-md">
          <label htmlFor="file" className="text-6xl text-white cursor-pointer">
            <BiImageAdd />
          </label>
        </div>

        <div className="flex items-center gap-4">
          <label htmlFor="file" className="text-white">
            <Typography text="Make this playlist private" />
          </label>
          <input
            id="checkbox"
            type="checkbox"
            name="isPrivate"
            onChange={() =>
              setPlaylistData({
                ...playlistData,
                isPrivate: !playlistData.isPrivate,
              })
            }
          />
        </div>
      </div>
    </div>
  );
};
