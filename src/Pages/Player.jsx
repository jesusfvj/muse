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

              <div className="my-10">
                <Typography
                  text="(Verse 1)" />
                <Typography
                  text="
                In a virtual classroom, where dreams take flight,"/>
                <Typography
                  text="Thirty students gathered, their futures shining bright." />
                <Typography
                  text="An online master, a journey to embark," />
                <Typography
                  text="Software development, igniting their spark." />

                <Typography
                  text="(Chorus)" />
                <Typography
                  text="For seven months, they've come together," />
                <Typography
                  text="In this digital realm, where knowledge knows no tether." />
                <Typography
                  text="More than 1200 hours, they've spent coding strong," />
                <Typography
                  text="Building their skills, where passion belongs." />

                <Typography
                  text="(Verse 2)" />

                <Typography
                  text="Thirty minds eager, ready to explore," />
                <Typography
                  text="In projects aplenty, they'll learn and soar." />
                <Typography
                  text="JavaScript, PHP, and Node.js they embrace," />
                <Typography
                  text="With MongoDB and MySQL, they find their place." />
                <Typography
                  text="HTML and CSS, the foundations they lay," />
                <Typography
                  text="React, their companion, guiding the way." />

                <Typography
                  text="(Chorus)" />
                <Typography
                  text="For seven months, they've come together," />
                <Typography
                  text="In this digital realm, where knowledge knows no tether." />
                <Typography
                  text="More than 1200 hours, they've spent coding strong," />
                <Typography
                  text="Building their skills, where passion belongs." />

                <Typography
                  text="(Bridge)" />
                <Typography
                  text="Through challenges faced, they support one another," />
                <Typography
                  text="Sharing knowledge and insights like no other." />
                <Typography
                  text="Late-night coding sessions, their determination clear," />
                <Typography
                  text="United as classmates, overcoming every fear." />

                <Typography
                  text="(Verse 3)" />
                <Typography
                  text="Thirty individuals, on a common quest," />
                <Typography
                  text="Mastering the art, striving for the best." />
                <Typography
                  text="With each project they touch, new skills they gain," />
                <Typography
                  text="Collaborating and innovating, breaking every chain." />

                <Typography
                  text="(Chorus)" />
                <Typography
                  text="For seven months, they've come together," />
                <Typography
                  text="In this digital realm, where knowledge knows no tether." />
                <Typography
                  text="More than 1200 hours, they've spent coding strong," />
                <Typography
                  text="Building their skills, where passion belongs." />

                <Typography
                  text="(Outro)" />
                <Typography
                  text="As the program concludes, their journey not yet done," />
                <Typography
                  text="Thirty students transformed, ready to shine as one." />
                <Typography
                  text="In the world of software development, they leave their mark," />
                <Typography
                  text="Forever bonded as classmates, embarking on a new arc." />
              </div>

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
