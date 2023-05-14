
import { Body, FavoriteMusic, ProfileHeader } from "../Components";

import { useParams } from "react-router-dom";
import { useUser } from "../Context/UserContext/UserContext";
import { useEffect } from "react";
import { ProfileLoader } from "../Components/Pages/Profile/ProfileLoader";
import { ProfileNotFound } from "../Components/Pages/Profile/ProfileNotFound";

export const User = () => {
  const { userId } = useParams();
  const { user, userProfile, isProfileLoading, getUserProfile } = useUser();

  const isLoggedUserProfile = userId === user._id;

  useEffect(() => {
    getUserProfile(userId);
  }, [userId, user]);

  return (
    <>
      {userProfile && !isProfileLoading ? (
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
      ) : isProfileLoading ? (
        <ProfileLoader />
      ) : (
        <ProfileNotFound />
      )}
    </>
  );
};