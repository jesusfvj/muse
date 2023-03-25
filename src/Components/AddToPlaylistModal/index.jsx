import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getPlaylists } from "../../API/MusicApi/MusicApi";
import { Typography } from "../Typography";
import { AiOutlinePlus } from "react-icons/ai";

export const AddToPlaylistModal = ({ handleToggleModal }) => {
  const {
    data: playlists,
    isLoading: isLoadingPlaylists,
    error: errorPlaylists,
  } = useQuery({ queryKey: ["playlists"], queryFn: getPlaylists });

  const [hovered, setHovered] = useState(false);

  const handleAddToList = (e) => {
    e.stopPropagation();
  };

  return (
    <div
      className="fixed p-12 h-screen w-screen top-0 bg-black/50 z-[99] flex items-start justify-center flex-wrap gap-4 overflow-y-auto backdrop-filter backdrop-blur-md"
      onClick={handleToggleModal}
    >
      <div
        className="w-96 h-[40vh] flex justify-center items-center border-[0.1rem] border-gray-600 hover:border-white cursor-pointer "
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={handleAddToList}
      >
        {!hovered ? (
          <AiOutlinePlus className="text-5xl font-bold text-white" />
        ) : (
          <Typography
            color="white"
            text="Create a new list"
            styles="z-3 relative"
            type="big"
          />
        )}
      </div>

      {playlists &&
        playlists.map((playlist) => {
          const { thumbnail, name } = playlist;
          return (
            <div
              onClick={handleAddToList}
              key={name}
              className="w-96 h-[40vh] bg-white relative cursor-pointer"
            >
              <img src={thumbnail} className="w-96 h-full object-cover" />
              <div className="absolute bottom-0 bg-gradient-to-l from-[#02040C] to-[#0A4148] w-full p-4">
                <Typography text={name} color="primary" />
              </div>
            </div>
          );
        })}
    </div>
  );
};
