import { useUser } from "../../../../../Context/UserContext/UserContext";
import { Typography } from "../../../../index";

export const BodyTitle = () => {
  const {
    user: { fullName },
  } = useUser();

  return (
    <div className="flex flex-col justify-center items-center md:items-start pt-[3rem]">
      <Typography text="Hi!" type="big" color="white" family="lato" />
      <Typography
        text={`${fullName}!`}
        type="headline"
        color="white"
        family="lato"
      />
      <div className="flex flex-col justify-center items-center md:items-start mt-[1rem]">
        <Typography text="10 lists" type="p1" color="secondary" family="lato" />
        <Typography
          text="25 followed & 13 followers"
          type="p1"
          color="secondary"
          family="lato"
        />
      </div>
    </div>
  );
};
