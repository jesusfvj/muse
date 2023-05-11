import { AiOutlinePlus } from "react-icons/ai";
import { useState } from "react";
import { Typography } from "../../../Typography";
import { useUI } from "../../../../Context/UI/UIContext";

export const CreateListButton = () => {
  const { handleToggleCreatePlaylistModal } = useUI();
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className={`relative flex overflow-hidden select-none w-[5rem] h-[7rem] py-4`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={handleToggleCreatePlaylistModal}
    >
      <div className=" h-full w-full text-center text-3xl sm:text-6xl flex flex-col justify-center items-center border border-gray-600 hover:border-white  cursor-pointer text-gray-600">
        {!hovered ? (
          <AiOutlinePlus />
        ) : (
          <Typography
            color="white"
            text="Create a new list"
            styles="z-3 relative"
          />
        )}
      </div>
    </div>
  );
};
