import { canciones } from '../../data/data';
import { AlbumTrackElements, Typography } from '../../Components'

export const AlbumTracks = () => {
  return (
    <div className="flex items-center justify-center bg-gradient-to-b from-[#02040C] to-[#0A4148] w-screen h-screen">
      <div className="flex flex-col w-4/5">
        {
          canciones.map((songs, idx) => {
            const { id, nombre, duration } = songs
            return (
              <AlbumTrackElements key={`${nombre}-${idx}`} id={id} nombre={nombre} duration={duration} idx={idx}/>
            )
          })
        }
      </div>
    </div>
  )
}

