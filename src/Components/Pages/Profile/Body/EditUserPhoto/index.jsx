import { useState } from "react";
import { BiEditAlt } from "react-icons/bi";

export const EditUserPhoto = ({ user, isLoggedUserProfile }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className={`relative flex justify-center items-center w-[10rem] h-[10rem] xs:max-w-[12rem] xs:w-[12rem]
        xs:h-[12rem] sm:max-w-[12rem] lg:w-[18rem] lg:h-[18rem] lg:max-w-[18rem] bg-[#373737] rounded-full drop-shadow-lg ${
          isLoggedUserProfile && "cursor-pointer"
        }`}
    >
      <img
        src={user.profilePhoto}
        className={`w-full rounded-full`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      />

      {isHovered && isLoggedUserProfile && (
        <div
          className="absolute top-2 right-2 rounded-full p-2 bg-white"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <BiEditAlt
            className=" text-4xl"
            onClick={() => console.log("edit!")}
          />
        </div>
      )}
    </div>
  );
};
