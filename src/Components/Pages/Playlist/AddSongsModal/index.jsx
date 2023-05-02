import React from "react";
import { Typography } from "../../../Typography";
import testImg from "../../../../assets/images/testImages/test.jpg";
import { SongItem } from "./SongItem";
import { tracks } from "../../../../data/SongsData/SongsData";

export const AddSongsModal = () => {
  return (
    <div className="p-4 md:p-6 overflow-y-auto h-[60vh] w-[90vw] md:w-[60vw] bg-white/90 rounded-md flex flex-col items-center justify-start gap-4">
      <div className="p-4">
        <Typography
          text="Add songs to playlist name"
          color="secondary"
          type="subtitle"
        />
      </div>
      <div className="flex flex-col items-start justify-start w-full">
        {tracks.map((track) => {
          return (
            <SongItem
              img={testImg}
              songName={track.name}
              artist={track.artist}
            />
          );
        })}
      </div>
    </div>
  );
};
