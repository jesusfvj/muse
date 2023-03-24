import { PlaylistsElements } from "./PlaylistsElements";

export const PlaylistsTracks = ({ songs, styles }) => {
  console.log(songs);
  return (
    <div className={`flex flex-col ${styles}`}>
      {songs.map((songs, idx) => {
        const { id, name, duration, artist} = songs;
        return (
          <PlaylistsElements
            key={`${name}-${idx}`}
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
