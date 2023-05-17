import { HashLink } from "react-router-hash-link";
import { List, Typography } from "../../../..";

export const FavoriteMusicElement = ({
  object,
  sectionTitle,
  datatype,
  isLoggedUserProfile
 
}) => {
    console.log(object)
  return (
    <div className="flex flex-col justify-center items-center gap-y-[2rem] relative">
      <div className="w-[95%]">
        <List
          object={object}
          sectionTitle={sectionTitle}
          textType="big"
          dataType={datatype}
      
        />
      </div>
      {isLoggedUserProfile && (
        <HashLink to={`/mylibrary#${sectionTitle}`}>
          <div className="absolute top-[1rem] right-4 xs:right-[4.75rem] cursor-pointer">
            <Typography text="Show all" type="p1" color="white" family="lato" />
          </div>
        </HashLink>
      )}
    </div>
  );
};
