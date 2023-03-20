import { AlbumTrackElements } from '../../Components'

export const AlbumTracks = ({songs, styles}) => {
  return (
      <div className={`flex flex-col ${styles}`}>
        {
          songs.map((songs, idx) => {
            const { id, nombre, duration } = songs
            return (
              <AlbumTrackElements key={`${nombre}-${idx}`} id={id} nombre={nombre} duration={duration} idx={idx}/>
            )
          })
        }
      </div>
  )
}

