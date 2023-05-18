import { AiOutlinePlus } from "react-icons/ai";
import { useState } from "react";
import { Typography } from "../../../Typography";
import { useUI } from "../../../../Context/UI/UIContext";

export const CreateListButton = () => {
  const { handleToggleCreatePlaylistModal } = useUI();
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className={`relative flex overflow-hidden select-none w-12 h-12 ml-4`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={handleToggleCreatePlaylistModal}
    >
      <div className=" h-full w-full text-center text-xl sm:text-2xl flex flex-col justify-center items-center border border-gray-600 hover:border-white  cursor-pointer text-gray-600 rounded-full duration-200">
        <AiOutlinePlus className={`${hovered && "text-white"}`}/>
      </div>
    </div>
  );
};
