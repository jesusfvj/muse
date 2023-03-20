import { AlbumHeader, AlbumTracks } from "../Components";
import { Layout } from "../Components/Layout";

export const Album = () => {
  return (
    <Layout>
      <AlbumHeader />
      <AlbumTracks />
    </Layout>
  );
};
