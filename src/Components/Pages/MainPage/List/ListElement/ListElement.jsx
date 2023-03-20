import React from 'react'
import { Typography } from '../../../../Typography';
import {FaPlay} from 'react-icons/fa';
import { RoundButton } from '../../../../RoundButton';

export const ListElement = ({object, style}) => {
  const {artist, songTitle, album, year, producer, genre, bgImage} = object;
  return (
    <div className="relative flex h-full w-full">
        <div className={'w-full h-full bg-slate-900 rounded-[0.5rem] flex flex-col justify-around items-center'}>
            <div className="ml-[1rem] self-start">
                <Typography text={songTitle} type="p1" color="white" family="lato" />
                <Typography text={artist} type="p2" color="white" family="lato" />
            </div>
                <div className={`w-[7rem] h-[7rem] rounded-full ${bgImage} bg-cover bg-center bg-no-repeat`}>
            </div>
        </div>
        <div className="absolute bottom-0 right-0 w-[2rem] h-[2rem] flex items-center justify-center">
            <RoundButton color="gray" background="gradient" icon={<FaPlay/>} margin="pl-1"/>
        </div>
    </div>
  )
}