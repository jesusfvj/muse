import { useState } from "react";
import { Body, FavoriteMusic, ProfileHeader } from "../Components";
import { Layout } from "../Components/Layout";
import { useParams } from "react-router-dom";
import { useUser } from "../Context/UserContext/UserContext";
import { getUserById } from "../API/UserApi/UserApi";
import { useEffect } from "react";
import { ProfileLoader } from "../Components/Pages/Profile/ProfileLoader";
import { ProfileNotFound } from "../Components/Pages/Profile/ProfileNotFound";

export const User = () => {
  const { userId } = useParams();
  const { user } = useUser();

  const [userProfile, setUserProfile] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const isLoggedUserProfile = userId === user._id;

  const getUserProfile = async (id) => {
    const data = await getUserById(id);
    if (data?.ok) {
      setUserProfile(data.user);
      setIsLoading(false);
    } else {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getUserProfile(userId);
  }, [userId, user]);

  return (
    <>
      {userProfile && !isLoading ? (
        <>
          <ProfileHeader />
          <div className="w-screen min-h-screen bg-gradient-to-b from-[#4A4A4A] to-[#0A4148]">
            {userProfile && (
              <Body
                user={userProfile}
                isLoggedUserProfile={isLoggedUserProfile}
              />
            )}
            <FavoriteMusic
              userProfile={userProfile}
              isLoggedUserProfile={isLoggedUserProfile}
            />
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
