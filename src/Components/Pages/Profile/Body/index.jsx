import { Typography } from "../../../Typography";
import { Logo } from "../../../Logo";
import { BodyTitle } from "./BodyTitle";
import { EditUserPhoto } from "./EditUserPhoto";
import { ProfileInputSection } from "./ProfileInputSection";

export const Body = ({ user, isLoggedUserProfile }) => {
  return (
    <>
      <Logo logoSize="sm" extraClassesParent="xs:hidden pt-10" />
      <div className="xs:px-[2rem] sm:px-[5rem]">
        <div className="flex flex-col md:flex-row justify-between items-center xs:pt-[3rem] gap-[3rem]">
          <BodyTitle user={user} isLoggedUserProfile={isLoggedUserProfile} />
          <EditUserPhoto />
        </div>
        {isLoggedUserProfile && (
          <>
            <div className="pt-[4rem] pb-[3rem] flex justify-center items-center sm:justify-start sm:items-center">
              <Typography
                text="Settings"
                type="section"
                color="white"
                family="lato"
                styles="text-4xl"
              />
            </div>
            <ProfileInputSection />
          </>
        )}
      </div>
    </>
  );
};
