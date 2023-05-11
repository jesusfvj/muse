import { Typography } from "../Components";
import { Layout } from "../Components/Layout";
import { MusicPlayer } from "../Components/Pages/Player/MusicPlayer";
import { PlayerHeader } from "../Components/Pages/Player/PlayerHeader";

export const Player = () => {
  return (
    <>
      <PlayerHeader />
      <div className="flex items-start pt-[10vh] justify-center bg-gradient-to-b from-[#02040C] to-[#052226] w-screen min-h-[50vh]">
        {/* <MusicPlayer /> */}
        <Typography text="Show info of the song" />
      </div>
    </>
  );
};
