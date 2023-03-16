import React from 'react'
import { Header, AlbumList, TrendingList } from '../Components/Pages/MainPage/index.js';

export const MainPage = () => {
  return (
    <div className="w-screen h-screen bg-gradient-to-b from-[#02040C] to-[#0A4148] flex flex-col justify-center items-center gap-y-[2rem] pt-[4rem]">
        <Header/>
        <TrendingList />
        <AlbumList />
    </div>
  )
}
