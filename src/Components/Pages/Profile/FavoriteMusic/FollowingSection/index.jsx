import { Typography } from "../../../../Typography";
import { FavoriteMusicElement } from "../FavoriteMusicElement";

export const FollowingSection = ({
  object1,
  object2,
  datatype1,
  datatype2,
  title1,
  title2,
  isLoggedUserProfile
}) => {
  if (!object1.length && !object2.length)
    return <Typography text="Nothing here" />;
  return (
    <div className="flex flex-col gap-[5rem]">
      {object1.length && (
        <FavoriteMusicElement
          object={object1}
          sectionTitle={title1}
          datatype={datatype1}
          isLoggedUserProfile={isLoggedUserProfile}
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
        <Typography text="No playlists to show" />
      )}
    </div>
  );
};
