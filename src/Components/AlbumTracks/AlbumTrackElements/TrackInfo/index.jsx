import { FaPlay } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Typography } from "../../../Typography";

export const TrackInfo = ({ hovered, id, nombre, duration, artist }) => {
  return (
    <div className="flex items-start justify-start gap-10 md:gap-15 pl-[4vw] md:px-[5vw]">
      <div
        className={`hidden sm:flex cursor-pointer mt-1 ${
          hovered ? "visible" : "invisible"
        }`}
      >
        <Typography text={<FaPlay />} color="white" />
      </div>
      <Link to="/player" className="w-[10rem] lg:w-[30rem] truncate">
        <Typography
          text={nombre}
          color="white"
          styles="truncate w-full"
        />
      </Link>
      <Typography text={artist} color="white" styles="truncate hidden xs:flex " />
      <Typography text={duration} color="white" styles="hidden xs:flex" />
    </div>
  );
};
