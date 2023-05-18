import { useParams } from "react-router-dom";
import { Layout } from "../Components";
import { ArtistInfo } from "../Components/Pages/ArtistPage";
import logo from "../assets/logo/logowhite.png";
import { useEffect, useState } from "react";
import { ProfileLoader } from "../Components/Pages/Profile/ProfileLoader";
import { useUI } from "../Context/UI/UIContext";
import { getArtistById } from "../API/UserApi/UserApi";
import { ProfileNotFound } from "../Components/Pages/Profile/ProfileNotFound";
import { ArtistPageMusicSection } from "../Components/Pages/ArtistPage/AtristPageMusicSection";

export const Artist = () => {
  const { artistId = "645503ecdf93c9316fd34445" } = useParams();
  const [artist, setArtist] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const getArtist = async (id) => {
    const data = await getArtistById(id);
    setArtist(data);
    setIsLoading(false);
  };

  useEffect(() => {
    getArtist(artistId);
  }, []);

  return (
    <>
      {artist && !isLoading ? (
        <>
          <div className="z-0 fixed top-0 left-0 right-0 h-screen bg-gradient-to-b from-[#02040C] to-[#0A4148]"></div>
          <div className="absolute right-[-25vw] top-[-15vw] hidden md:block">
            <img src={logo} className="z-50 w-[70vw] mix-blend-overlay" />
          </div>
          <div className="z-2 relative flex flex-col items-center  min-h-screen gap-8">
            <ArtistInfo artist={artist}/>
            <ArtistPageMusicSection artist={artist}/>
          </div>
        </>
      ) : isLoading ? (
        <ProfileLoader />
      ) : (
        <ProfileNotFound />
      )}
    </>
  );
};
