import React from "react";
import { useNavigate } from "react-router-dom";

export const DropdownElement = ({ text, path, playNext }) => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(path);
  };

  const isPlayNextButton = !path;
  return (
    <li>
      {!isPlayNextButton ? (
        <p
          className="block px-4 py-2  hover:bg-gray-600"
          onClick={handleNavigate}
        >
          {text}
        </p>
      ) : (
        <button
          className="block px-4 py-2 w-full  hover:bg-gray-600 text-left"
          onClick={playNext}
        >
          {text}
        </button>
      )}
    </li>
  );
};
