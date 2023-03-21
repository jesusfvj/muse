import { Carousel } from "../../../Carousel";
import { Typography } from "../../../Typography";
import { AlbumElement } from "./ListElement/AlbumElement";
import { ArtistElement } from "./ListElement/ArtistElement";
import { PlaylistElement } from "./ListElement/PlaylistElement";
import { SongElement } from "./ListElement/SongElement";

export const List = ({
  object,
  sectionTitle,
  dataType,
  itemsNumber = {
    itemsSuperLarge: 5,
    itemsDesktop: 4,
    itemsTablet: 3,
    itemsMobile: 1,
  },
}) => {
  return (
    <>
      <Typography type="important" text={sectionTitle} color="white" />
      <Carousel
        itemsSuperLarge={itemsNumber["itemsSuperLarge"]}
        itemsDesktop={itemsNumber["itemsDesktop"]}
        itemsTablet={itemsNumber["itemsTablet"]}
        itemsMobile={itemsNumber["itemsMobile"]}
      >
        {object.map((object, index) => {
          switch (dataType) {
            case "song":
              return <SongElement key={index} object={object} />;
            case "album":
              return <AlbumElement key={index} object={object} />;
            case "artist":
              return <ArtistElement key={index} object={object} />;
            case "playlist":
              return <PlaylistElement key={index} object={object} />;
          }
        })}
      </Carousel>
    </>
  );
};
