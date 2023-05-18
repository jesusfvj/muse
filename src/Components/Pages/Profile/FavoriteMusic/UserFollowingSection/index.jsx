import { Typography } from "../../../../Typography";
import { FavoriteMusicElement } from "../FavoriteMusicElement";

export const UserFollowingSection = ({ object, datatype, title, isOwner }) => {
  return (
    <div className="flex flex-col gap-[5rem]">
      {object.length ? (
        <FavoriteMusicElement
          object={object}
          sectionTitle={title}
          datatype={datatype}
          isOwner={isOwner}
        />
      ) : (
        <Typography text="This user has no public lists" />
      )}
    </div>
  );
};
