import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getPlaylistsById } from "../API/MusicApi/MusicApi";

import { useEffect, useState } from "react";
import { PlaylistsHeader } from "../Components/PlaylistsHeader";
import { PlaylistsTracks } from "../Components/PlaylistsTracks";
import { useUser } from "../Context/UserContext/UserContext";

export const Playlist = () => {
  const {
    user: { _id },
  } = useUser();
  const { playlistId } = useParams();

  const {
    data: playlist,
    isLoading: isLoadingPlaylists,
    error: errorPlaylists,
  } = useQuery({
    queryKey: ["playlists", playlistId],
    queryFn: () => getPlaylistsById(playlistId),
  });
console.log(playlist);
  const isOwner = _id === playlist?.user;
  const isFollowed = playlist?.followedBy.includes(_id);
  return (
    <>
      {!isLoadingPlaylists && playlist ? (
        <>
          <PlaylistsHeader
            name={playlist.name}
            thumbnail={playlist.thumbnail}
            playlistId={playlistId}
          />
          <div className="flex items-center justify-center bg-gradient-to-b from-[#02040C] to-[#0A4148] w-screen py-20 md:py-48">
            <PlaylistsTracks
              isOwner={isOwner}
              songs={playlist.tracks}
              isFollowed={isFollowed}
              styles="w-full md:w-4/5"
              playlist={playlist}
            />
          </div>
        </>
      ) : (
        "This playlist do not exists"
      )}
    </>
  );
};
