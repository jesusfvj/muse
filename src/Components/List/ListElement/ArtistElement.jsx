import React from 'react'
import { FaPlay } from 'react-icons/fa';
import { Typography, RoundButton } from '../../index'

export const ArtistElement = ({ object }) => {
  const { artist, songTitle, album, year, producer, genre, bgImage } = object;
    return (
        <div className="relative flex my-4 min-w-fit">
            <div className={' bg-slate-900 rounded-[0.5rem] flex flex-col  place-content-between items-center p-2 lg:w-[12rem] lg:h-[15rem] '}>
                <div className={`sm:w-[6rem] sm:h-[6rem] lg:w-[8rem] lg:h-[8rem] w-[4rem] h-[4rem] rounded-full ${bgImage} bg-cover bg-center bg-no-repeat lg:min-h-[8rem] m-4`}>
                </div>
                <div className="w-full mb-5 px-3 text-center">
                    <Typography text={songTitle} type="p1" color="white" family="lato" styles='max-w-[200px] sm:leading-6 line-clamp-2 text-ellipsis' />
                    
                </div>
            </div>
            <div className="absolute -bottom-2 -right-2 w-[2.5rem] h-[2.5rem] flex items-center justify-center">
                <RoundButton color="gray" background="gradient" icon={<FaPlay />} margin="pl-1" />
            </div>
        </div>
    )
}
