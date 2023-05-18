import { useState } from "react";
import { AlbumTrackElements } from "./AlbumTrackElements";
import { Typography } from "../Typography";

export const AlbumTracks = ({ songs, styles, artist }) => {
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
      {songs?.length ? (
        songs.map((song, idx) => {
          const { _id, name, duration, followedBy } = song;
          return (
            <AlbumTrackElements
              key={`${name}-${idx}`}
              id={_id}
              nombre={name}
              artist={artist}
              duration={duration}
              idx={idx}
              activeDropdown={activeDropdown}
              handleToggleDropdown={handleToggleDropdown}
              track={song}
              trackList={songs}
              followedBy={followedBy}
            />
          );
        })
      ) : (
        <div className="pl-8 pt-2">
          <Typography text="Not following any song" />
        </div>
      )}
    </div>
  );
};
