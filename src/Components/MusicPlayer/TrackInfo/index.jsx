import testImg from "../../../assets/images/testImages/test.jpg";
import { Typography } from "../../Typography";
import { AiOutlineHeart } from "react-icons/ai";

export const TrackInfo = () => {
  return (
    <div className="h-full hidden sm:flex gap-4">
      <img className="h-[8vh] w-[8vh] object-cover z-40" src={testImg} />
      <div className="flex flex-col items-start justify-between">
        <div>
          <Typography color="white" text="Song name"/>
          <Typography color="white" text="Artits name" type="p2" />
        </div>
        <AiOutlineHeart className="text-white text-2xl cursor-pointer mb-1" />
      </div>
    </div>
  );
};
