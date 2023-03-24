import { Layout } from "../Components/Layout";
import { arrayTodaysHits } from "../../src/data/Profile/Profile";
import { MosaicElements } from "../Components/Pages/MyLibrary/MosaicElements";
import { Typography } from "../Components";
import logo from "../assets/logo/logowhite.png";

export const MyLibrary = () => {
  const zStyles = "z-3 relative";
  return (
    <Layout>
      <div className="z-0 fixed top-0 left-0 right-0 h-screen bg-gradient-to-b from-[#02040C] to-[#0A4148]"></div>
      <div className="absolute right-[-25vw] top-[-15vw] hidden md:block">
        <img src={logo} className="z-50 w-[70vw] mix-blend-overlay" />
      </div>
      <div className="p-[1rem] sm:p-[4rem] lg:p-[5rem] flex flex-col gap-[2rem]">
        <Typography
          type="important"
          text="Following"
          color="white"
          styles={zStyles}
        />
        <section id="Artists">
          <Typography
            type="big"
            text="Artists"
            color="white"
            styles={zStyles}
          />
          <MosaicElements object={arrayTodaysHits} dataType="artist" />
        </section>

        <Typography
          type="important"
          text="Loved ones"
          color="white"
          styles={zStyles}
        />
        <section id="Albums">
          <Typography type="big" text="Albums" color="white" styles={zStyles} />
          <MosaicElements object={arrayTodaysHits} dataType="album" />
        </section>

        <section id="Songs">
          <Typography type="big" text="Songs" color="white" styles={zStyles} />
          <MosaicElements object={arrayTodaysHits} dataType="song" />
        </section>

        <Typography
          type="important"
          text="Your lists"
          color="white"
          styles={zStyles}
        />
        <section id="Your public lists">
          <Typography
            type="big"
            text="Your public lists"
            color="white"
            styles={zStyles}
          />
          <MosaicElements object={arrayTodaysHits} dataType="playlist" />
        </section>

        <section id="Your private lists">
          <Typography
            type="big"
            text="Your private lists"
            color="white"
            styles={zStyles}
          />
          <MosaicElements object={arrayTodaysHits} dataType="playlist" />
        </section>
      </div>
    </Layout>
  );
};
