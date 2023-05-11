import { Typography } from "../../../../Typography";
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
      {object1.length ? (
        <FavoriteMusicElement
          isOwner={isOwner}
          object={object1}
          sectionTitle="Albums"
          datatype={datatype1}
        />
      ) : (
        <Typography text="No albums to show" />
      )}
      {object2.length ? (
        <FavoriteMusicElement
          isOwner={isOwner}
          object={object2}
          sectionTitle="Songs"
          datatype={datatype2}
        />
      ) : (
        <Typography text="No songs to show" />
      )}
    </div>
  );
};
