import { Typography } from "../index";

export const SkeletonPlaylistElement = () => {
  return (
    <div className="animate-pulse">
      <div
        className={`relative flex my-4 bg-gray-400 overflow-hidden select-none`}
      >
        <div
          className={
            " flex flex-col  place-content-between items-center p-2 w-[5rem] h-[7rem] sm:w-[9rem] sm:h-[11rem] lg:w-[12rem] lg:h-[15rem]"
          }
        >
          <div className="w-full mt-2 px-3">
            <Typography
              text="..."
              type="p1"
              color="white"
              family="lato"
              styles="max-w-[200px] line-clamp-2 text-ellipsis"
            />
          </div>
          <div
            className="w-[4rem] h-[4rem] sm:w-[7rem] sm:h-[7rem] lg:w-[10rem] lg:h-[10rem] bg-cover bg-center bg-no-repeat min-h-[8rem] m-4 rotate-[35deg] absolute -bottom-8 -right-8 drop-shadow-[0_15px_15px_rgba(0,0,0,0.50)] pointer-events-none"
          />
          {/* <div className={`w-[4rem] h-[4rem] m-1 sm:w-[7rem] sm:h-[7rem] lg:w-[10rem] lg:h-[10rem] ${bgImage} bg-cover bg-center bg-no-repeat min-h-[8rem] m-4 rotate-[35deg] absolute -bottom-8 -right-8 drop-shadow-[0_15px_15px_rgba(0,0,0,0.50)]`}>
                    </div> */}
        </div>
      </div>
      <div className="relative">
        <div className="absolute bottom-2 -right-2 w-[2.5rem] h-[2.5rem] flex items-center justify-center">
          {/* <RoundButton
            color="gray"
            background="gradient"
            icon={<FaPlay />}
            margin="pl-1"
          /> */}
        </div>
      </div>
    </div>
  );
};
