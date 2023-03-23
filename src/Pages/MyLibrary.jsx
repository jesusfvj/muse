import { Layout } from "../Components/Layout";
import { arrayTodaysHits } from "../../src/data/Profile/Profile";
import { MosaicElements } from "../Components/Pages/MyLibrary/MosaicElements";
import { Typography } from "../Components";
import { AiOutlinePlus } from 'react-icons/ai'
import { useState } from "react";

export const MyLibrary = () => {
  const [hovered, setHovered] = useState(false)
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
        <div className={`flex justify-center items-center border-[0.1rem] border-gray-600 hover:border-white w-[5rem] h-[7rem] sm:w-[9rem] sm:h-[11rem] lg:w-[12rem] lg:h-[15rem] cursor-pointer text-gray-600 hover:text-white ${zStyles}`}>
          <div
          className="h-[3rem] w-[3rem] text-6xl flex justify-center items-center"
          onMouseEnter={()=>setHovered(true)}
          onMouseLeave={()=>setHovered(false)}>
            <AiOutlinePlus />
            {hovered && <Typography color="white" text="Create your own list" styles={zStyles}/>}
          </div>
        </div>
        <Typography type="big" text="Your public lists" color="white" styles={zStyles} />
        <MosaicElements object={arrayTodaysHits} dataType="playlist" />
        <Typography type="big" text="Your private lists" color="white" styles={zStyles} />
        <MosaicElements object={arrayTodaysHits} dataType="playlist" />

      </div>
    </Layout>
  );
};
