import { Typography } from "../../index";

export const SkeletonArtistElement = () => {
  return (
    <div className="relative flex my-4 min-w-fit select-none animate-pulse">
      <div
        className={
          " bg-slate-900 rounded-[0.5rem] flex flex-col  place-content-between items-center p-2  w-full h-full "
        }
      >
        <div className="sm:w-[6rem] sm:h-[6rem] lg:w-[8rem] lg:h-[8rem] w-[4rem] h-[4rem] rounded-full bg-cover bg-center bg-no-repeat lg:min-h-[8rem] m-4 pointer-events-none select-none" />
        <div className="w-full mb-5 px-3 text-center">
          <Typography
            text="..."
            type="p1"
            color="white"
            family="lato"
            styles=" sm:leading-6 line-clamp-2 text-ellipsis"
          />
        </div>
      </div>
      <div className="absolute -bottom-2 -right-2 w-[2.5rem] h-[2.5rem] flex items-center justify-center"></div>
    </div>
  );
};
