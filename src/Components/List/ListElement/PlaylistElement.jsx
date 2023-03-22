import React, { useState } from 'react'
import { FaPlay } from 'react-icons/fa';
import { Typography, RoundButton } from '../../index'

export const PlaylistElement = ({ object }) => {
    const { name, thumbnail } = object;
    const colors = {
        bg1: "bg-green-500",
        bg2: "bg-blue-500",
        bg3: "bg-purple-500",
        bg4: "bg-pink-500",
        bg5: "bg-red-500",
        bg6: "bg-yellow-500",
        bg7: "bg-orange-500",
    }
    function getRandomNumber() {
        return Math.floor(Math.random() * 7) + 1;
    }
    const [randomColor, setRandomColor] = useState(colors[`bg${getRandomNumber()}`]);
    return (
        <div>
            <div className={`relative flex my-4 ${randomColor} overflow-hidden min-w-fit select-none`}>
                <div className={' flex flex-col  place-content-between items-center p-2 w-[5rem] h-[7rem] sm:w-[9rem] sm:h-[11rem] lg:w-[12rem] lg:h-[15rem]'}>
                    <div className="w-full mt-2 px-3">
                        <Typography text={name} type="p1" color="white" family="lato" styles='max-w-[200px] line-clamp-2 text-ellipsis' />
                    </div>
                    <img
          src={thumbnail}
          className="w-[4rem] h-[4rem] sm:w-[7rem] sm:h-[7rem] lg:w-[10rem] lg:h-[10rem] bg-cover bg-center bg-no-repeat min-h-[8rem] m-4 rotate-[35deg] absolute -bottom-8 -right-8 drop-shadow-[0_15px_15px_rgba(0,0,0,0.50)] pointer-events-none"
        />
                    {/* <div className={`w-[4rem] h-[4rem] m-1 sm:w-[7rem] sm:h-[7rem] lg:w-[10rem] lg:h-[10rem] ${bgImage} bg-cover bg-center bg-no-repeat min-h-[8rem] m-4 rotate-[35deg] absolute -bottom-8 -right-8 drop-shadow-[0_15px_15px_rgba(0,0,0,0.50)]`}>
                    </div> */}
                </div>
            </div>
            <div className='relative'>
                <div className="absolute bottom-2 -right-2 w-[2.5rem] h-[2.5rem] flex items-center justify-center">
                    <RoundButton color="gray" background="gradient" icon={<FaPlay />} margin="pl-1" />
                </div>
            </div>
        </div>
    )
}