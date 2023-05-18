import { AiOutlinePlus } from 'react-icons/ai'
import { useState } from "react";
import { Typography } from '../../../Typography';

export const CreateListButton = () => {
    const [hovered, setHovered] = useState(false)
    return (
        <div className={`relative flex overflow-hidden select-none h-full w-full py-4`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}>
            <div className="h-full w-full text-center text-3xl sm:text-6xl flex flex-col justify-center items-center border border-gray-600 hover:border-white  cursor-pointer text-gray-600">
                {!hovered
                    ? <AiOutlinePlus />
                    : <Typography color="white" text="Create a new list" styles="z-3 relative" />}
            </div>
        </div>
    )
}
