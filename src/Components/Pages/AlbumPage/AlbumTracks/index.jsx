import { canciones } from '../../../../data/data.js';
import { SlOptions } from "react-icons/sl";
import { Typography } from '../../../Typography'


export const AlbumTracks = () => {
  return (
    <div className="flex items-center justify-center bg-gradient-to-b from-[#02040C] to-[#0A4148] w-screen h-screen">
      <div className="flex flex-col w-4/5">
        {
          canciones.map((songs, idx) => {
            const { id, nombre } = songs
            return (
              <div key={`${nombre}-${idx}`} className={`flex flex-row gap-5 items-center justify-between border-b-2 ${idx === 0 && "border-t-2"} border-white/20`}>
                <div className="flex items-start justify-start gap-20 py-8 px-[10vw]">
                  <Typography text={id} color="white" />
                  <Typography text={nombre} color="white" />
                </div>
                <div className="px-[10vw]">
                  <Typography text={<SlOptions />} color="white" />
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

