import { Layout } from "../Components/Layout";
import { arrayTodaysHits } from "../../src/data/Profile/Profile";
import { MosaicElements } from "../Components/Pages/MyLibrary/MosaicElements";
import { Typography } from "../Components";

export const MyLibrary = () => {
  const zStyles = "z-3 relative";
  return (
    <Layout>
      <div className="z-0 fixed top-0 left-0 right-0 h-screen bg-gradient-to-b from-[#02040C] to-[#0A4148]"></div>
      <div className="p-[1rem] sm:p-[4rem] lg:p-[5rem] flex flex-col gap-[2rem]">

        <Typography type="important" text="Following" color="white" styles={zStyles} />
        <Typography type="big" text="Artists" color="white" styles={zStyles} />
        <MosaicElements object={arrayTodaysHits} dataType="artist" />

        <Typography type="important" text="Loved ones" color="white" styles={zStyles} />
        <Typography type="big" text="Albums" color="white" styles={zStyles} />
        <MosaicElements object={arrayTodaysHits} dataType="album" />
        <Typography type="big" text="Songs" color="white" styles={zStyles} />
        <MosaicElements object={arrayTodaysHits} dataType="song" />

        <Typography type="important" text="Your lists" color="white" styles={zStyles} />
        <Typography type="big" text="Your public lists" color="white" styles={zStyles} />
        <MosaicElements object={arrayTodaysHits} dataType="playlist" />
        <Typography type="big" text="Your private lists" color="white" styles={zStyles} />
        <MosaicElements object={arrayTodaysHits} dataType="playlist" />

      </div>
    </Layout>
  );
};
