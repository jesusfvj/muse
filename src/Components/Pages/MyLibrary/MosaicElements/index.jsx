import { AlbumElement } from "../../../List/ListElement/AlbumElement";
import { ArtistElement } from "../../../List/ListElement/ArtistElement";
import { PlaylistElement } from "../../../List/ListElement/PlaylistElement";
import { SongElement } from "../../../List/ListElement/SongElement";
import { SkeletonAlbumElement, SkeletonArtistElement, SkeletonPlaylistElement, SkeletonSongElement } from "../../../Skeletons";

export const MosaicElements = ({object, dataType}) => {
    return (
        <div className="flex flex-row items-center gap-[2rem] flex-wrap">
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
        </div>
    )
}
