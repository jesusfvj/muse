import { useState } from "react";
import { formatTime } from "../../Utils/formatTime";
import { AlbumTrackElements } from "./AlbumTrackElements";
import { Typography } from "../Typography";

export const AlbumTracks = ({ songs, styles }) => {
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
      {songs.length ? (
        songs.map((songs, idx) => {
          const { id, name, duration } = songs;
          return (
            <AlbumTrackElements
              key={`${name}-${idx}`}
              id={id}
              nombre={name}
              duration={duration}
              idx={idx}
              activeDropdown={activeDropdown}
              handleToggleDropdown={handleToggleDropdown}
            />
          );
        })
      ) : (
        <div className="pb-12">
          <Typography text="You are not following any song" />
        </div>
      )}
    </div>
  );
};
