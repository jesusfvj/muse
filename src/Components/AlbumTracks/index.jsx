import { useState } from "react";
import { AlbumTrackElements } from "./AlbumTrackElements";

export const AlbumTracks = ({ songs, styles }) => {
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
        const { id, nombre, duration } = songs;
        return (
          <AlbumTrackElements
            key={`${nombre}-${idx}`}
            id={id}
            nombre={nombre}
            duration={duration}
            idx={idx}
            activeDropdown={activeDropdown}
            handleToggleDropdown={handleToggleDropdown}
          />
        );
      })}
    </div>
  );
};
