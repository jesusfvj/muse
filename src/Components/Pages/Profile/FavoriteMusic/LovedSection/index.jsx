import { FavoriteMusicElement } from "../FavoriteMusicElement";

export const LovedSection = ({
  object1,
  object2,
  datatype1,
  datatype2,
  isOwner,
}) => {
  return (
    <div className="flex flex-col gap-[5rem]">
      <FavoriteMusicElement
        isOwner={isOwner}
        object={object1}
        sectionTitle="Albums"
        datatype={datatype1}
      />
      <FavoriteMusicElement
        isOwner={isOwner}
        object={object2}
        sectionTitle="Uploaded songs"
        datatype={datatype2}
      />
    </div>
  );
};
