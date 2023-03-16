import React from 'react'
import { Typography } from '../../../../Typography';

export const ListElement = ({object}) => {
  const {artist, songTitle, album, year, producer, genre, bgImage} = object;
  return (
    <div className="relative flex">
        <div className={'min-w-[10rem] min-h-[10rem] bg-slate-900 rounded-[0.5rem] flex flex-col justify-around items-center'}>
            <div className="ml-[1rem] self-start">
                <Typography text={songTitle} type={"p1"} color={"white"} family={"lato"} />
                <Typography text={artist} type={"p2"} color={"white"} family={"lato"} />
            </div>
                <div className={`w-[7rem] h-[7rem]  rounded-full ${bgImage} bg-cover bg-center bg-no-repeat`}>
            </div>
        </div>
        <div className="absolute">
        </div>
    </div>
  )
}

/* bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60 border border-gray-200 */
