import React from 'react'
import { Typography, RoundButton } from '../../index'
import {FaPlay} from 'react-icons/fa';


export const AlbumElement = ({object}) => {
  const {artist, songTitle, album, year, producer, genre, bgImage} = object;
  return (
    <div className="relative flex my-4 select-none">
        <div className={' bg-slate-900 rounded-[0.5rem] flex flex-col  place-content-between items-center p-2 w-[12rem] h-[15rem] '}>
            <div className="w-full mt-2 px-3 ">
                <Typography text={songTitle} type="p1" color="white" family="lato" styles='max-w-[200px] sm:leading-6 line-clamp-2 text-ellipsis'/>
                <Typography text={artist} type="p2" color="white" family="lato" />
            </div>
                <div className={`w-[8rem] h-[8rem] ${bgImage} bg-cover bg-center bg-no-repeat min-h-[8rem] m-4`}>
            </div>
        </div>
        <div className="absolute -bottom-2 -right-2 w-[2.5rem] h-[2.5rem] flex items-center justify-center">
            <RoundButton color="gray" background="gradient" icon={<FaPlay/>} margin="pl-1"/>
        </div>
    </div>
  )
}