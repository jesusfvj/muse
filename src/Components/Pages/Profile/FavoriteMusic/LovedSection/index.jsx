import { FavoriteMusicElement } from "../FavoriteMusicElement";

export const LovedSection = ({ object1, object2, datatype1, datatype2 }) => {
  return (
    <div className="flex flex-col gap-[5rem]">
      <FavoriteMusicElement
        object={object1}
        sectionTitle="Albums"
        datatype={datatype1}
      />
      <FavoriteMusicElement
        object={object2}
        sectionTitle="Songs"
        datatype={datatype2}
      />
    </div>
  );
};