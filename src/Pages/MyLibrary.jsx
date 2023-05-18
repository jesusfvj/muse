import { MosaicElements } from "../Components/Pages/MyLibrary/MosaicElements";
import { CreateListButton, Typography } from "../Components";
import logo from "../../public/logoWhite.png"
import { getAlbums, getPlaylists, getSongs } from "../API/MusicApi/MusicApi";

import { EmptyDefault } from "../Components/EmptyDefault";
import { getUserById } from "../API/UserApi/UserApi";
import { useUser } from "../Context/UserContext/UserContext";
import { useEffect, useState } from "react";
import { ProfileLoader } from "../Components/Pages/Profile/ProfileLoader";
import { ProfileNotFound } from "../Components/Pages/Profile/ProfileNotFound";
import { useQuery } from "@tanstack/react-query";

export const MyLibrary = () => {
  const {
    user: { _id },
  } = useUser();

  const {
    data: userProfile,
    isLoading,
  } = useQuery({
    queryKey: ["user"._id],
    queryFn: () => getUserById(_id),
    refetchInterval: 1000,
  });

  const zStyles = "z-3 relative";
  return (
    <>
      {isLoading ? (
        <ProfileLoader />
      ) : userProfile.user ? (
        <>
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
            {userProfile.user.following?.filter(
              (user) => user.role === "artist"
            ).length ? (
              <section id="Artists">
                <Typography
                  type="big"
                  text="Artists"
                  color="white"
                  styles={zStyles}
                />
                <MosaicElements
                  object={userProfile.user.following.filter(
                    (user) => user.role === "artist"
                  )}
                  dataType="artist"
                />
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
            {userProfile.user.albums?.length ? (
              <section id="Albums">
                <Typography
                  type="big"
                  text="Albums"
                  color="white"
                  styles={zStyles}
                />
                <MosaicElements
                  object={userProfile.user.albums}
                  dataType="album"
                />
              </section>
            ) : (
              <EmptyDefault text="Albums" styles={zStyles} />
            )}

            {userProfile.user.tracks?.length ? (
              <section id="Songs">
                <Typography
                  type="big"
                  text="Songs"
                  color="white"
                  styles={zStyles}
                />
                <MosaicElements
                  object={userProfile.user.tracks}
                  dataType="song"
                />
              </section>
            ) : (
              <EmptyDefault text="Songs" styles={zStyles} />
            )}

            {userProfile.user.followedPlaylists?.length ? (
              <section id="Playlists">
                <Typography
                  type="big"
                  text="Playlists"
                  color="white"
                  styles={zStyles}
                />
                <MosaicElements
                  object={userProfile.user.followedPlaylists}
                  dataType="playlist"
                />
              </section>
            ) : (
              <EmptyDefault text="Playlists" styles={zStyles} />
            )}

            <section id="Your public lists">
              {userProfile.user.playlists.filter(
                (playlist) => !playlist.isPrivate
              ).length ? (
                <section id="Playlists">
                  <div className="flex items-center gap-3">
                    <Typography
                      type="big"
                      text="Your public lists"
                      color="white"
                      styles={zStyles}
                    />
                    <CreateListButton />
                  </div>
                  <MosaicElements
                    list="yes"
                    object={userProfile.user.playlists?.filter(
                      (playlist) => !playlist.isPrivate
                    )}
                    dataType="playlist"
                  />
                </section>
              ) : (
                <EmptyDefault text="Your public lists" styles={zStyles} />
              )}
            </section>

            <section id="Your private lists">
              {userProfile.user.playlists.filter(
                (playlist) => playlist.isPrivate
              ).length ? (
                <section id="Playlists">
                  <div className="flex items-center gap-3">
                    <Typography
                      type="big"
                      text="Your private lists"
                      color="white"
                      styles={zStyles}
                    />
                    <CreateListButton />
                  </div>
                  <MosaicElements
                    list="yes"
                    object={userProfile.user.playlists.filter(
                      (playlist) => playlist.isPrivate
                    )}
                    dataType="playlist"
                  />
                </section>
              ) : (
                <EmptyDefault text="Your public lists" styles={zStyles} />
              )}
            </section>
          </div>
        </>
      ) : (
        <ProfileNotFound message="We could not find your library" />
      )}
    </>
  );
};
