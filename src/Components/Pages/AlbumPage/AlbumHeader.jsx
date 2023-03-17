import React from 'react'
import { Button } from '../../Button'
import { Typography } from '../../Typography'
import { AiFillCaretRight } from "react-icons/ai";
import { RiShuffleFill } from "react-icons/ri";



export const AlbumHeader = () => {
  return (
    <div className="w-screen h-[80vh] relative">
      <div className="bg-cover bg-[url('../../../src/assets/images/headerPicture.jpeg')] w-full h-full">
      </div>
      <div className="bg-gradient-to-b from-[rgba(125,125,125,0)] to-[#02040C] w-screen h-[80vh] absolute top-0"></div>
      <div className="absolute inset-x-0 bottom-0 h-16 flex flex-col mx-20">
        <Typography text="LA ROSALÍA" color="white" type="important" />
        <Typography text="El Mal Querer" color="primary" type="title" />
      </div>
      <div className="absolute bottom-0 right-10 h-6 w-29 flex gap-5 mr-20">
        <Button text="Play" color="gray" icon={<AiFillCaretRight />}></Button>
        <Button text="Shuffle" color="gray" icon={<RiShuffleFill />}></Button>
      </div>
    </div>
  )
}
