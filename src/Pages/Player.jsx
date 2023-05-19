import { useParams } from "react-router-dom";
import { List, Typography } from "../Components";
import { useEffect, useState } from "react";
import { getSongById } from "../API/MusicApi/MusicApi";
import { ProfileLoader } from "../Components/Pages/Profile/ProfileLoader";
import { ProfileNotFound } from "../Components/Pages/Profile/ProfileNotFound";

export const Player = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [track, setTrack] = useState(null);
  const [featuredIn, setFeaturedIn] = useState([]);

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
          <div className="w-screen min-h-screen bg-gradient-to-b from-[#02040C] to-[#052226]">

            <div className="flex flex-col bottom-4 z-50 right-0 left-0 m-auto text-center pt-12 px-12">
              <img
                src={track.thumbnailUrl}
                className=" object-cover text-center rounded-full w-64 h-64 self-center m-12"
              />
              <Typography text={track.name} type="title" styles="truncate" />
              <Typography text={track.genre} styles="truncate capitalize" />
              <Typography text={`Duration - ${track.duration}`} styles="truncate capitalize" />
            
              <img
                src={track.artist.profilePhoto}
                className="h-40 w-40 rounded-full self-center m-6"
              />
              <Typography text={track.artist.fullName} type="big" />
              <Typography
                text={`${track.artist.followedBy.length} followers`}
              />
              <div className="w-full my-10">
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
          </div>
        </>
      ) : (
        <ProfileNotFound message="We could not find this song" />
      )}
    </>
  );
};
