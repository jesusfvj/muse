import React from 'react'
import { canciones } from '../../../data/data.js';
import { SlOptions } from "react-icons/sl";
import { Typography } from '../../Typography'


export const AlbumTracks = () => {
  return (
    <div className="flex items-center justify-center bg-gradient-to-b from-[#02040C] to-[#0A4148] w-screen h-screen">
      <div className="flex flex-col w-3/5">
        {
          canciones.map((songs) => {
            const { id, nombre } = songs
            return (
              <div className="flex flex-row gap-5 items-center justify-between">
                <div className="flex items-start justify-start gap-20">
                <Typography text={id} color="white"/>
                <Typography text={nombre} color="white"/>
                </div>
                <Typography text={<SlOptions/>} color="white"/>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

