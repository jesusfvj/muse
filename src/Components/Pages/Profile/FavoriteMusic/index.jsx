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
import { getFollowedUsers } from "../../../../API/UserApi/UserApi";
import { useUser } from "../../../../Context/UserContext/UserContext";

const skeletonData = ["", "", "", "", "", "", "", "", "", "", ""];

export const FavoriteMusic = ({
  handleToggleModal,
  isLoggedUserProfile,
  userProfile,
}) => {
  const { playlists, followedPlaylists, albums, tracks } = userProfile;

  const {
    data: artists,
    isLoading: isLoadingArtists,
    error: errorArtists,
  } = useQuery({
    queryKey: ["artists".userProfile?._id],
    queryFn: () => getFollowedUsers(userProfile?._id),
  });
  console.log(artists);
  return (
    <div className="flex flex-col gap-[5rem] min-h-screen bg-gradient-to-b from-[#02040C] to-[#0A4148] xs:ml-[1rem] sm:ml-[3rem] lg:ml-[5rem] pt-[4rem] mt-[8rem] xs:rounded-tl-[3rem] sm:pl-[4rem] sm:pr-[3rem]">
      <div>
        <TitleSection titleSection="Following" />
        {!errorArtists ? (
          <FollowingSection
            section="following"
            datatype1={!isLoadingArtists ? "artist" : "skeletonArtist"}
            object1={
              !isLoadingArtists
                ? artists.length &&
                  artists.filter(
                    (artist) =>
                      artist.followedBy.includes(userProfile?._id) &&
                      artist.role === "artist"
                  )
                : skeletonData
            }
            title1="Artists"
            datatype2={"playlist"}
            object2={followedPlaylists}
            title2="Playlists"
            isLoggedUserProfile={isLoggedUserProfile}
            datatype3={!isLoadingArtists ? "user" : "skeletonArtist"}
            object3={
              !isLoadingArtists
                ? artists.filter(
                    (artist) =>
                      artist.followedBy.includes(userProfile?._id) &&
                      artist.role === "user"
                  )
                : skeletonData
            }
            title3="Users"
          />
        ) : (
          <EmptyDefault error={true} text="Following" />
        )}
      </div>

      <div>
        <TitleSection titleSection="Loved ones" />

        <LovedSection
          isOwner={isLoggedUserProfile}
          datatype1={"album"}
          datatype2={"song"}
          object1={albums}
          object2={tracks}
        />
      </div>
      <div>
        <TitleSection
          titleSection={`${
            isLoggedUserProfile ? "Your playlists" : "Playlists"
          }`}
        />
        {isLoggedUserProfile ? (
          <FollowingSection
            section="playlists"
            title1="Public"
            datatype1={"playlist"}
            object1={playlists.filter(
              (playlist) => playlist.isPrivate === false
            )}
            datatype2={"playlist"}
            object2={playlists.filter(
              (playlist) => playlist.isPrivate === true
            )}
            title2="Private"
            isOwner={isLoggedUserProfile}
          />
        ) : (
          <UserFollowingSection
            isOwner={isLoggedUserProfile}
            title="Public"
            datatype={"playlist"}
            object={playlists.filter(
              (playlist) => playlist.isPrivate === false
            )}
          />
        )}
      </div>

      <div>
        <TitleSection titleSection="Loved songs" />
        <AlbumTracks
          songs={tracks}
          styles="sm:pr-[3rem]"
          handleToggleModal={handleToggleModal}
        />
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
