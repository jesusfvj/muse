import React from 'react'
import { AlbumHeader } from '../Components/Pages/AlbumPage/AlbumHeader';
import { AlbumTracks } from '../Components/Pages/AlbumPage/AlbumTracks';
import { Layout } from "../Components/Layout";

export const Album = () => {
  return (
    <Layout>
    <div className="w-1/3">
      <div><AlbumHeader/></div>
      <div><AlbumTracks/></div>
    
    </div>
    </Layout>
  )
}

