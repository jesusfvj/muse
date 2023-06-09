import { Typography } from "../../../../Typography";
import { FavoriteMusicElement } from "../FavoriteMusicElement";

export const FollowingSection = ({
  section,
  object1,
  object2,
  object3,
  datatype1,
  datatype2,
  datatype3,
  title1,
  title2,
  title3,
  isLoggedUserProfile,
}) => {
  return (
    <div className="flex flex-col md:gap-[5rem]">
      {object1.length ? (
        <FavoriteMusicElement
          object={object1}
          sectionTitle={title1}
          datatype={datatype1}
          isLoggedUserProfile={isLoggedUserProfile}
        />
      ) : (
        <div className="pl-8 pt-2">
        <Typography
          text={
            section === "playlists"
              ? "Not public playlists"
              : "Not following any artist"
          }
        />
        </div>
      )}
      {object2.length ? (
        <FavoriteMusicElement
          object={object2}
          sectionTitle={title2}
          datatype={datatype2}
          isLoggedUserProfile={isLoggedUserProfile}
        />
      ) : (
         <div className="pl-8 pt-2 pb-8">
        <Typography
          text={
            section === "playlists"
              ? "No private playlist"
              : "Not following any playlist"
          }
        />
        </div>
      )}
      {object3?.length ? (
        <FavoriteMusicElement
          object={object3}
          sectionTitle={title3}
          datatype={datatype3}
          isLoggedUserProfile={isLoggedUserProfile}
        />
      ) : null}
    </div>
  );
};
