import { useQuery } from "@tanstack/react-query";
import { getAlbumById, getSongs } from "../API/MusicApi/MusicApi";
import { AlbumHeader, AlbumTracks } from "../Components";
import { useParams } from "react-router-dom";
import { ProfileLoader } from "../Components/Pages/Profile/ProfileLoader";
import { ProfileNotFound } from "../Components/Pages/Profile/ProfileNotFound";


export const Album = () => {
  const { albumId = 1 } = useParams();

  const {
    data: album,
    isLoading,
    error,
  } = useQuery({ queryKey: [`songs${albumId}`], queryFn: () => getAlbumById(albumId) });

  return (
    <>
      {isLoading ? (
        <ProfileLoader />
      ) : error ? (
        <ProfileNotFound />
      ) : (
        <>
          {album && (
            <>
              <AlbumHeader album={album} />
              <div className="flex items-start pt-[10vh] sm:pt-[20vh] pb-5 justify-center bg-gradient-to-b from-[#02040C] to-[#0A4148] w-screen min-h-[50vh]">
                <AlbumTracks
                  songs={album?.songs}
                  artist={album?.artist?.fullName}
                  styles="w-full"
                />
              </div>
            </>
          )}
        </>
      )}
    </>
  );
};
