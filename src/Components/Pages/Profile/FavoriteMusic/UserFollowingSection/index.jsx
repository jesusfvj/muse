import { Typography } from "../../../../Typography";
import { FavoriteMusicElement } from "../FavoriteMusicElement";

export const UserFollowingSection = ({ object, datatype, title, isOwner }) => {
  return (
    <div className="flex flex-col md:gap-[5rem]">
      {object.length ? (
        <FavoriteMusicElement
          object={object}
          sectionTitle={title}
          datatype={datatype}
          isOwner={isOwner}
        />
      ) : (
        <div className="pl-8 pb-8 pt-2">
          <Typography text="This user has no public lists" />
        </div>
      )}
    </div>
  );
};
