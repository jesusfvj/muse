import { AlbumTracks } from "../../../AlbumTracks";
import {
  getAlbums,
  getPlaylists,
  getSongs,
} from "../../../../API/MusicApi/MusicApi";
import { TitleSection } from "./TitleSection";
import { FollowingSection } from "./FollowingSection";
import { LovedSection } from "./LovedSection";
import { useQuery } from "@tanstack/react-query";
import { EmptyDefault } from "../../../EmptyDefault";
import { SkeletonTracksGroup } from "../../../Skeletons";
import { UserFollowingSection } from "./UserFollowingSection";
import { getArtists } from "../../../../API/UserApi/UserApi";
import { useUser } from "../../../../Context/UserContext/UserContext";

const skeletonData = ["", "", "", "", "", "", "", "", "", "", ""];

export const FavoriteMusic = ({ handleToggleModal, isLoggedUserProfile }) => {
  const {
    user: { _id },
  } = useUser();
  const {
    data: songs,
    isLoading: isLoadingSongs,
    error: errorSongs,
  } = useQuery({ queryKey: ["songs"], queryFn: getSongs });
  const {
    data: albums,
    isLoading: isLoadingAlbums,
    error: errorAlbums,
  } = useQuery({ queryKey: ["albums"], queryFn: getAlbums });
  const {
    data: artists,
    isLoading: isLoadingArtists,
    error: errorArtists,
   } = useQuery({ queryKey: ["artists"._id], queryFn: () => getArtists(_id) });
  const {
    data: playlists,
    isLoading: isLoadingPlaylists,
    error: errorPlaylists,
  } = useQuery({ queryKey: ["playlists"], queryFn: getPlaylists });

  return (
    <div className="flex flex-col gap-[5rem] min-h-screen bg-gradient-to-b from-[#02040C] to-[#0A4148] xs:ml-[1rem] sm:ml-[3rem] lg:ml-[5rem] pt-[4rem] mt-[8rem] xs:rounded-tl-[3rem] sm:pl-[4rem] sm:pr-[3rem]">
      <div>
        <TitleSection titleSection="Following" />
        {!errorArtists ? (
          <FollowingSection
            isOwner={isLoggedUserProfile}
            datatype1={!isLoadingArtists ? "artist" : "skeletonArtist"}
            object1={!isLoadingArtists ? artists : skeletonData}
            title1="Artists"
            datatype2={!isLoadingPlaylists ? "playlist" : "skeletonPlaylist"}
            object2={!isLoadingPlaylists ? playlists : skeletonData}
            title2="Playlists"
          />
        ) : (
          <EmptyDefault error={true} text="Following" />
        )}
      </div>

      <div>
        <TitleSection titleSection="Loved ones" />
        {!errorAlbums && !errorSongs ? (
          <LovedSection
            isOwner={isLoggedUserProfile}
            datatype1={!isLoadingAlbums ? "album" : "skeletonAlbum"}
            datatype2={!isLoadingSongs ? "song" : "skeletonSong"}
            object1={!isLoadingAlbums ? albums : skeletonData}
            object2={!isLoadingSongs ? songs : skeletonData}
          />
        ) : (
          <>
            <EmptyDefault error={true} text="Albums" />
            <EmptyDefault error={true} text="Songs" />
          </>
        )}
      </div>
      <div>
        <TitleSection
          titleSection={`${
            isLoggedUserProfile ? "Your playlists" : "Playlists"
          }`}
        />
        {!errorPlaylists && isLoggedUserProfile ? (
          <FollowingSection
            title1="Public"
            datatype1={!isLoadingPlaylists ? "playlist" : "skeletonPlaylist"}
            object1={!isLoadingPlaylists ? playlists : skeletonData}
            datatype2={!isLoadingPlaylists ? "playlist" : "skeletonPlaylist"}
            object2={!isLoadingPlaylists ? playlists : skeletonData}
            title2="Private"
          />
        ) : !errorPlaylists ? (
          <UserFollowingSection
            isOwner={isLoggedUserProfile}
            title="Public"
            datatype={!isLoadingPlaylists ? "playlist" : "skeletonPlaylist"}
            object={!isLoadingPlaylists ? playlists : skeletonData}
          />
        ) : (
          <EmptyDefault error={true} />
        )}
      </div>

      <div>
        <TitleSection titleSection="Loved songs" />
        {!isLoadingSongs && songs?.length ? (
          <AlbumTracks
            songs={songs}
            styles="sm:pr-[3rem]"
            handleToggleModal={handleToggleModal}
          />
        ) : errorSongs ? (
          <EmptyDefault error={true} />
        ) : isLoadingSongs ? (
          <SkeletonTracksGroup />
        ) : (
          <EmptyDefault />
        )}
      </div>
      {/* <div className="pb-12">
        <TitleSection titleSection="Most listened songs this month" />
        {!isLoadingSongs && songs?.length ? (
          <AlbumTracks songs={songs} styles="sm:pr-[3rem]" />
        ) : errorSongs ? (
          <EmptyDefault error={true} />
        ) : isLoadingSongs ? (
          <SkeletonTracksGroup />
        ) : (
          <EmptyDefault />
        )}
      </div> */}
    </div>
  );
};
