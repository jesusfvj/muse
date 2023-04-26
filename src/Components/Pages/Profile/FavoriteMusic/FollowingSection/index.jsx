import { FavoriteMusicElement } from "../FavoriteMusicElement";

export const FollowingSection = ({
  object1,
  object2,
  datatype1,
  datatype2,
  title1,
  title2,
}) => {
  return (
    <div className="flex flex-col gap-[5rem]">
      <FavoriteMusicElement
        object={object1}
        sectionTitle={title1}
        datatype={datatype1}
      />
      <FavoriteMusicElement
        object={object2}
        sectionTitle={title2}
        datatype={datatype2}
      />
    </div>
  );
};
