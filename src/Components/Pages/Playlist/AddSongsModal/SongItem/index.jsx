import { useUser } from "../../../../../Context/UserContext/UserContext";
import { Typography } from "../../../../Typography";

export const SongItem = ({
  songName,
  artist,
  playlistId,
  trackId,
  setFollowedSongs,
  followedSongs,
  track,
}) => {
  const { addToPlaylist } = useUser();
  const handleAddToPlaylist = (e) => {
    e.stopPropagation();
    setFollowedSongs([...followedSongs, track]);
    addToPlaylist(playlistId, trackId);
  };

  return (
    <div
      className="flex items-center justify-start w-full gap-4 border-y border-gray-300 py-4 hover:bg-gray-300 cursor-pointer"
      onClick={handleAddToPlaylist}
    >
      <img src={track?.thumbnailUrl} className="h-12 w-12 rounded-full shrink-0" />
      <Typography text={songName} color="secondary" styles="truncate" />
      <span className="text-gray-500">-</span>
      <Typography text={artist} color="secondary" styles="truncate" />
    </div>
  );
};
