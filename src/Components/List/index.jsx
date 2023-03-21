import { Carousel, Typography } from "../index";
import { AlbumElement } from "./ListElement/AlbumElement";
import { ArtistElement } from "./ListElement/ArtistElement";
import { PlaylistElement } from "./ListElement/PlaylistElement";
import { SongElement } from "./ListElement/SongElement";

export const List = ({
  object,
  sectionTitle,
  dataType,
  textType = "important",
  itemsNumber = {
    itemsSuperLarge: 8,
    itemsDesktop: 5,
    itemsTablet: 3,
    itemsMobile: 2,
  },
}) => {
  return (
    <div>
      <Typography type={textType} text={sectionTitle} color="white" />
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
            default:
            break;
          }
        })}
      </Carousel>
    </div>
  );
};
