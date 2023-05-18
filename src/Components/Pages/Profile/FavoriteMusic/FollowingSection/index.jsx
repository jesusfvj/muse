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
    <div className="flex flex-col gap-[5rem]">
      {object1.length ? (
        <FavoriteMusicElement
          object={object1}
          sectionTitle={title1}
          datatype={datatype1}
          isLoggedUserProfile={isLoggedUserProfile}
        />
      ) : (
        <Typography
          text={
            section === "playlists"
              ? "Not public playlists"
              : "Not following any artist"
          }
        />
      )}
      {object2.length ? (
        <FavoriteMusicElement
          object={object2}
          sectionTitle={title2}
          datatype={datatype2}
          isLoggedUserProfile={isLoggedUserProfile}
        />
      ) : (
        <Typography
          text={
            section === "playlists"
              ? "No private playlist"
              : "Not following any playlist"
          }
        />
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
