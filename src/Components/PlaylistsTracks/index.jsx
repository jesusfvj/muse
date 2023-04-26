import { useState } from "react";
import { PlaylistsElements } from "./PlaylistsElements";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { Typography } from "../Typography";
import { Button } from "../Button";

export const PlaylistsTracks = ({
  songs,
  styles,
  handleToggleModal,
  isFollowed,
}) => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const handleToggleDropdown = (id) => {
    if (activeDropdown == id) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(id);
    }
  };
  return (
    <div className={`flex flex-col ${styles}`}>
      <div className="flex items-center justify-end m-4 gap-4">
        <div>
          <Button text="Add songs" color="gray"/>
        </div>
        <Typography
          text={!isFollowed ? <AiOutlineHeart /> : <AiFillHeart />}
          color="white"
          type="big"
        />
      </div>
      {songs.map((songs, idx) => {
        const { id, name, duration, artist } = songs;
        return (
          <PlaylistsElements
            key={`${name}-${idx}`}
            activeDropdown={activeDropdown}
            handleToggleDropdown={handleToggleDropdown}
            handleToggleModal={handleToggleModal}
            id={id}
            artist={artist}
            nombre={name}
            duration={duration}
            idx={idx}
          />
        );
      })}
    </div>
  );
};
