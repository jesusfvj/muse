import React from "react";
import { useUser } from "../../../../Context/UserContext/UserContext";
import { Typography } from "../../../Typography";

export const Header = () => {
  const {
    user: { fullName },
  } = useUser();
  const arrayTitles = [
    {
      text: `Hi, ${fullName}!`,
      type: "p1",
      color: "white",
      family: "lato",
      styles: "pb-[2rem]",
    },
    {
      text: "Listen to your",
      type: "title",
      color: "white",
      family: "lato",
    },
    {
      text: "favourite music",
      type: "p1",
      color: "white",
      family: "lato",
      styles: "sm:pl-[6rem] md:pl-[6rem] mt-[-0.3rem]",
    },
  ];
  return (
    <div className=" h-[20vh]">
      {arrayTitles.map(({ text, type, color, family, styles }, index) => {
        return (
          <Typography
            key={index}
            text={text}
            type={type}
            color={color}
            family={family}
            styles={styles}
          />
        );
      })}
    </div>
  );
};
