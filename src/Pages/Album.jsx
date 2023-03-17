import React from 'react'
import { AlbumHeader } from '../Components/Pages/AlbumPage/AlbumHeader';
import { AlbumTracks } from '../Components/Pages/AlbumPage/AlbumTracks';

export const Album = () => {
  return (
    <div className="w-1/3">
      <div><AlbumHeader/></div>
      <div><AlbumTracks/></div>
    
    </div>
  )
}
