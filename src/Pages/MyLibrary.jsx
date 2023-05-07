import { Layout } from "../Components/Layout";
import { arrayTodaysHits } from "../../src/data/Profile/Profile";
import { MosaicElements } from "../Components/Pages/MyLibrary/MosaicElements";
import { Typography } from "../Components";
import logo from "../assets/logo/logowhite.png";
import { getAlbums, getPlaylists, getSongs } from "../API/MusicApi/MusicApi";
import { useQuery } from "@tanstack/react-query";
import { EmptyDefault } from "../Components/EmptyDefault";
import { getArtists } from "../API/UserApi/UserApi";
import { useUser } from "../Context/UserContext/UserContext";

const skeletonData = [
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
];

export const MyLibrary = () => {
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

  const zStyles = "z-3 relative";
  return (
    <Layout>
      <div className="z-0 fixed top-0 left-0 right-0 h-screen bg-gradient-to-b from-[#02040C] to-[#0A4148]"></div>
      <div className="absolute right-[-25vw] top-[-15vw] hidden md:block">
        <img src={logo} className="z-50 w-[70vw] mix-blend-overlay" />
      </div>
      <div className="p-[1rem] sm:p-[4rem] lg:p-[5rem] flex flex-col gap-[2rem]">
        <Typography
          type="important"
          text="Following"
          color="white"
          styles={zStyles}
        />
        {isLoadingArtists ? (
          <section id="Artists">
            <Typography
              type="big"
              text="Artists"
              color="white"
              styles={zStyles}
            />
            <MosaicElements object={skeletonData} dataType="skeletonArtist" />
          </section>
        ) : !isLoadingArtists && errorArtists ? (
          <section id="Artists">
            <Typography
              type="big"
              text="Artists"
              color="white"
              styles={zStyles}
            />
            <Typography
              text="Ooops... Something bad happened..."
              color="secondary"
              styles={`${zStyles} p-4`}
            />
          </section>
        ) : artists?.length && !isLoadingArtists ? (
          <section id="Artists">
            <Typography
              type="big"
              text="Artists"
              color="white"
              styles={zStyles}
            />
            <MosaicElements object={artists} dataType="artist" />
          </section>
        ) : (
          <EmptyDefault text="Artists" styles={zStyles} />
        )}
        <Typography
          type="important"
          text="Loved ones"
          color="white"
          styles={zStyles}
        />
        {isLoadingAlbums ? (
          <section id="Albums">
            <Typography
              type="big"
              text="Albums"
              color="white"
              styles={zStyles}
            />
            <MosaicElements object={skeletonData} dataType="skeletonAlbum" />
          </section>
        ) : errorAlbums ? (
          <section id="Albums">
            <Typography
              type="big"
              text="Albums"
              color="white"
              styles={zStyles}
            />
            <Typography
              text="Ooops... Something bad happened..."
              color="secondary"
              styles={`${zStyles} p-4`}
            />
          </section>
        ) : albums?.length && !isLoadingAlbums ? (
          <section id="Albums">
            <Typography
              type="big"
              text="Albums"
              color="white"
              styles={zStyles}
            />
            <MosaicElements object={albums} dataType="album" />
          </section>
        ) : (
          <EmptyDefault text="Albums" styles={zStyles} />
        )}
        {isLoadingSongs ? (
          <section id="Songs">
            <Typography
              type="big"
              text="Songs"
              color="white"
              styles={zStyles}
            />
            <MosaicElements object={skeletonData} dataType="skeletonSong" />
          </section>
        ) : errorSongs ? (
          <section id="Songs">
            <Typography
              type="big"
              text="Songs"
              color="white"
              styles={zStyles}
            />
            <Typography
              text="Ooops... Something bad happened..."
              color="secondary"
              styles={`${zStyles} p-4`}
            />
          </section>
        ) : songs?.length && !isLoadingSongs ? (
          <section id="Songs">
            <Typography
              type="big"
              text="Songs"
              color="white"
              styles={zStyles}
            />
            <MosaicElements object={songs} dataType="song" />
          </section>
        ) : (
          <EmptyDefault text="Songs" styles={zStyles} />
        )}
        {isLoadingPlaylists ? (
          <section id="Playlists">
            <Typography
              type="big"
              text="Playlists"
              color="white"
              styles={zStyles}
            />
            <MosaicElements object={skeletonData} dataType="skeletonPlaylist" />
          </section>
        ) : errorPlaylists ? (
          <section id="Playlists">
            <Typography
              type="big"
              text="Playlists"
              color="white"
              styles={zStyles}
            />
            <Typography
              text="Ooops... Something bad happened..."
              color="secondary"
              styles={`${zStyles} p-4`}
            />
          </section>
        ) : playlists?.length && !isLoadingPlaylists ? (
          <section id="Playlists">
            <Typography
              type="big"
              text="Playlists"
              color="white"
              styles={zStyles}
            />
            <MosaicElements object={playlists} dataType="playlist" />
          </section>
        ) : (
          <EmptyDefault text="Playlists" styles={zStyles} />
        )}

        <section id="Your public lists">
          {isLoadingPlaylists ? (
            <section id="Your Public Lists">
              <Typography
                type="big"
                text="Your public lists"
                color="white"
                styles={zStyles}
              />
              <MosaicElements
                list="yes"
                object={skeletonData}
                dataType="skeletonPlaylist"
              />
            </section>
          ) : errorPlaylists ? (
            <section id="Playlists">
              <Typography
                type="big"
                text="Playlists"
                color="white"
                styles={zStyles}
              />
              <Typography
                text="Ooops... Something bad happened..."
                color="secondary"
                styles={`${zStyles} p-4`}
              />
            </section>
          ) : playlists?.length && !isLoadingPlaylists ? (
            <section id="Playlists">
              <Typography
                type="big"
                text="Your public lists"
                color="white"
                styles={zStyles}
              />
              <MosaicElements
                list="yes"
                object={playlists}
                dataType="playlist"
              />
            </section>
          ) : (
            <EmptyDefault text="Your public lists" styles={zStyles} />
          )}
        </section>

        <section id="Your private lists">
          {isLoadingPlaylists ? (
            <section id="Your private lists">
              <Typography
                type="big"
                text="Your private lists"
                color="white"
                styles={zStyles}
              />
              <MosaicElements
                list="yes"
                object={skeletonData}
                dataType="skeletonPlaylist"
              />
            </section>
          ) : errorPlaylists ? (
            <section id="Playlists">
              <Typography
                type="big"
                text="Playlists"
                color="white"
                styles={zStyles}
              />
              <Typography
                text="Ooops... Something bad happened..."
                color="secondary"
                styles={`${zStyles} p-4`}
              />
            </section>
          ) : playlists?.length && !isLoadingPlaylists ? (
            <section id="Your private lists">
              <Typography
                type="big"
                text="Your private lists"
                color="white"
                styles={zStyles}
              />
              <MosaicElements
                list="yes"
                object={playlists}
                dataType="playlist"
              />
            </section>
          ) : (
            <EmptyDefault text="Your private lists" styles={zStyles} />
          )}
        </section>
      </div>
    </Layout>
  );
};
