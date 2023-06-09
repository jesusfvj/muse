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
    <div className="flex flex-col pb-12 md:pb-0 md:gap-[5rem]">
      {object1.length ? (
        <FavoriteMusicElement
          isOwner={isOwner}
          object={object1}
          sectionTitle="Albums"
          datatype={datatype1}
        />
      ) : (
        <div className="pl-8 ">
          <Typography text="No albums to show" />
        </div>
      )}
      {object2.length ? (
        <FavoriteMusicElement
          isOwner={isOwner}
          object={object2}
          sectionTitle="Songs"
          datatype={datatype2}
        />
      ) : (
        <div className="pl-8 pt-2">
          <Typography text="No songs to show" />
        </div>
      )}
    </div>
  );
};
