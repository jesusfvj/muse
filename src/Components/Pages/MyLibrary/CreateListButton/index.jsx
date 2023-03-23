import { AiOutlinePlus } from 'react-icons/ai'
import { useState } from "react";
import { Typography } from '../../../Typography';

export const CreateListButton = () => {
    const [hovered, setHovered] = useState(false)
    return (
        <div className={`flex justify-center items-center border-[0.1rem] border-gray-600 hover:border-white w-[5rem] h-[7rem] sm:w-[9rem] sm:h-[11rem] lg:w-[12rem] lg:h-[15rem] cursor-pointer text-gray-600 z-3 relative`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}>
            <div className="h-full w-full text-center text-3xl sm:text-6xl flex flex-col justify-center items-center p-[0.2rem] sm:p-[1rem]">
                {!hovered
                    ? <AiOutlinePlus />
                    : <Typography color="white" text="Create your own list" styles="z-3 relative" />}
            </div>
        </div>
    )
}
