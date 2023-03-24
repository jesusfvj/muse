import { useState } from "react";
import { PlaylistsElements } from "./PlaylistsElements";

export const PlaylistsTracks = ({ songs, styles, handleToggleModal }) => {
  const [activeDropdown, setActiveDropdown] = useState(null)
  const handleToggleDropdown = (id) => {
    if (activeDropdown == id) {
      setActiveDropdown(null)
    } else {
      setActiveDropdown(id)
    }
  }
  return (
    <div className={`flex flex-col ${styles}`}>
      {songs.map((songs, idx) => {
        const { id, name, duration, artist } = songs;
        return (
          <PlaylistsElements
            key={`${name}-${idx}`}
            activeDropdown= {activeDropdown}
            handleToggleDropdown= {handleToggleDropdown}
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
