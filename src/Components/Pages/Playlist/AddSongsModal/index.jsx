import React, { useState } from "react";
import { Typography } from "../../../Typography";
import { SongItem } from "./SongItem";
import { useUser } from "../../../../Context/UserContext/UserContext";
import { useQuery } from "@tanstack/react-query";
import { getUserById } from "../../../../API/UserApi/UserApi";

export const AddSongsModal = ({ playlistId, songs }) => {
  const { user } = useUser();

  const { data: userProfile, isLoading } = useQuery({
    queryKey: ["user"._id],
    queryFn: () => getUserById(user._id),
    refetchInterval: 3000,
  });
  const [followedSongs, setFollowedSongs] = useState(songs);

  return (
    <div className="p-4 md:p-6 overflow-y-auto h-[60vh] w-[90vw] md:w-[60vw] bg-white/90 rounded-md flex flex-col items-center justify-start gap-4">
      <div className="p-4">
        <Typography
          text="Add songs to playlist name"
          color="secondary"
          type="subtitle"
        />
      </div>
      <div className="flex flex-col items-start justify-start w-full">
        {userProfile?.user?.tracks?.length &&
          userProfile?.user?.tracks?.map((track) => {
            if (
              !followedSongs.filter((song) => song._id === track._id).length
            ) {
              return (
                <SongItem
                  key={track._id}
                  songName={track.name}
                  artist={track.genre}
                  playlistId={playlistId}
                  trackId={track._id}
                  setFollowedSongs={setFollowedSongs}
                  followedSongs={followedSongs}
                  track={track}
                />
              );
            }
          })}
      </div>
    </div>
  );
};
