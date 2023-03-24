import { PlaylistsElements } from "./PlaylistsElements";

export const PlaylistsTracks = ({ songs, styles }) => {
  return (
    <div className={`flex flex-col ${styles}`}>
      {songs.map((songs, idx) => {
        const { id, nombre, duration } = songs;
        return (
          <PlaylistsElements
            key={`${nombre}-${idx}`}
            id={id}
            nombre={nombre}
            duration={duration}
            idx={idx}
          />
        );
      })}
    </div>
  );
};
