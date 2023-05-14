import { useParams } from "react-router-dom";
import { List, Typography } from "../Components";
import { Layout } from "../Components/Layout";
import { MusicPlayer } from "../Components/Pages/Player/MusicPlayer";
import { PlayerHeader } from "../Components/Pages/Player/PlayerHeader";
import { useEffect, useState } from "react";
import { getSongById } from "../API/MusicApi/MusicApi";
import { ProfileLoader } from "../Components/Pages/Profile/ProfileLoader";
import { ProfileNotFound } from "../Components/Pages/Profile/ProfileNotFound";

export const Player = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [track, setTrack] = useState(null);
  const [featuredIn, setFeaturedIn] = useState([]);
  console.log(featuredIn);
  const getTrack = async (id) => {
    const data = await getSongById(id);
    if (data) {
      setTrack(data.track);
      setFeaturedIn(data.featuredIn);
      setIsLoading(false);
    } else {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getTrack(id);
  }, []);

  return (
    <>
      {isLoading ? (
        <ProfileLoader />
      ) : track ? (
        <>
          <PlayerHeader track={track} />
          <div className="flex items-start pt-[10vh] justify-center bg-gradient-to-b from-[#02040C] to-[#052226] w-screen min-h-[50vh]">
            {/* <MusicPlayer /> */}
            <div className="flex flex-col items-center gap-4 w-full md:w-5/6">
              <img src={track.artist.profilePhoto} className="h-40 w-40 rounded-md" />
              <Typography text={track.artist.fullName} type="big" />
              <Typography
                text={`${track.artist.followedBy.length} followers`}
              />
              {featuredIn.length ? (
                <List
                  object={featuredIn}
                  sectionTitle="Featured in"
                  dataType="playlist"
                  itemsNumber={{
                    itemsSuperLarge: 7,
                    itemsDesktop: 4,
                    itemsTablet: 3,
                    itemsMobile: 2,
                  }}
                />
              ) : null}
            </div>
          </div>
        </>
      ) : (
        <ProfileNotFound message="We could not find this song" />
      )}
    </>
  );
};
