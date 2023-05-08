import { FavoriteMusicElement } from "../FavoriteMusicElement";

export const UserFollowingSection = ({
  object,
  datatype,
  title,
  isOwner,
}) => {
  return (
    <div className="flex flex-col gap-[5rem]">
      <FavoriteMusicElement
        object={object}
        sectionTitle={title}
        datatype={datatype}
        isOwner={isOwner}
      />
    </div>
  );
};
