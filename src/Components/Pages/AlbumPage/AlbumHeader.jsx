import React from 'react'
import { Button } from '../../Button'
import { Typography } from '../../Typography'
import { AiFillCaretRight} from "react-icons/ai";
import { IoShuffle } from "react-icons/io";


export const AlbumHeader = () => {
  return (
    <div className="bg-cover bg-[url('../../../src/assets/images/headerPicture.jpeg')] w-screen h-screen" >
      <div className="absolute inset-x-0 bottom-0 h-16 ...">
        <Typography text="LA ROSALÍA" color="white" type="important" />
        <Typography text="El Mal Querer" color="primary" type="title" />
      
      </div>
      <div className="absolute bottom-0 right-10 h-6 w-29 flex">
      <Button text="Play" color="gray" icon={<AiFillCaretRight/>}></Button>
      <Button text="Shuffle" color="gray" icon={<IoShuffle/>} ></Button>
      </div>
    </div>
  )
}
