import { AlbumHeader, AlbumTracks } from "../Components";
import { DropDownMenu } from "../Components/Dropdown";
import { Layout } from "../Components/Layout";

export const Album = () => {
  return (
    <Layout>
      <AlbumHeader />
      <AlbumTracks />
    </Layout>
  );
};
