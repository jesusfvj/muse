import { Carousel, Typography } from "../index";
import { AlbumElement } from "./ListElement/AlbumElement";
import { ArtistElement } from "./ListElement/ArtistElement";
import { PlaylistElement } from "./ListElement/PlaylistElement";
import {
  SkeletonPlaylistElement,
  SkeletonAlbumElement,
  SkeletonArtistElement,
  SkeletonSongElement,
} from "../Skeletons";
import { SongElement } from "./ListElement/SongElement";
import { useState } from "react";
import { UserElement } from "./ListElement/UserElement";

export const List = ({
  object,
  sectionTitle,
  dataType,
  textType = "important",
  itemsNumber = {
    itemsSuperLarge: 7,
    itemsDesktop: 5,
    itemsTablet: 3,
    itemsMobile: 2,
  },
  isOwner,
}) => {
  const [isSwipping, setIsSwipping] = useState(false);

  return (
    <div>
      <div className="ml-8">
        <Typography type={textType} text={sectionTitle} color="white" />
      </div>
      <Carousel
        itemsSuperLarge={itemsNumber["itemsSuperLarge"]}
        itemsDesktop={itemsNumber["itemsDesktop"]}
        itemsTablet={itemsNumber["itemsTablet"]}
        itemsMobile={itemsNumber["itemsMobile"]}
        setIsSwipping={setIsSwipping}
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
              return (
                <PlaylistElement
                  key={index}
                  object={object}
                  isSwipping={isSwipping}
                  isOwner={isOwner}
                />
              );
            case "user":
              return <UserElement key={index} object={object} />;
            case "skeletonPlaylist":
              return <SkeletonPlaylistElement key={index} object={object} />;
            case "skeletonAlbum":
              return <SkeletonAlbumElement key={index} object={object} />;
            case "skeletonArtist":
              return <SkeletonArtistElement key={index} object={object} />;
            case "skeletonSong":
              return <SkeletonSongElement key={index} object={object} />;
            default:
              break;
          }
        })}
      </Carousel>
    </div>
  );
};
