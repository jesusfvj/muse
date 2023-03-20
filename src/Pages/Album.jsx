import { AlbumHeader, AlbumTracks } from "../Components";
import { Layout } from "../Components/Layout";
import { songs } from '../data/data.js';

export const Album = () => {
  return (
    <Layout>
      <AlbumHeader />
      <div className="flex items-center justify-center bg-gradient-to-b from-[#02040C] to-[#0A4148] w-screen h-screen">
        <AlbumTracks songs={songs} styles="w-4/5"/>
      </div>
    </Layout>
  );
};
