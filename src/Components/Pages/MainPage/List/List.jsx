import { Typography } from "../../../Typography"
import { AlbumElement } from "./ListElement/AlbumElement"
import { ArtistElement } from "./ListElement/ArtistElement"
import { PlaylistElement } from "./ListElement/PlaylistElement"
import { SongElement } from "./ListElement/SongElement"

export const List = ({ object, sectionTitle, dataType }) => {
  return (
    <div className="w-[80%]">
      <Typography text={sectionTitle} type="important" color={"white"} family={"lato"} styles={"mb-[1.2rem]"} />
      <section className="w-[100%] m flex flex-row gap-x-[2rem] ">
        {object.map((object, index) => {
          switch (dataType) {
            case "song":
              return <SongElement key={index} object={object} />
            case "album":
              return <AlbumElement key={index} object={object} />
            case "artist":
              return <ArtistElement key={index} object={object} />
            case "playlist":
              return <PlaylistElement key={index} object={object} />
          }

        })}
      </section>
    </div>
  )
}
