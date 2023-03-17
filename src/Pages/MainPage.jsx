import React from 'react'
import { Header, List, TrendingList } from '../Components/Pages/MainPage/index.js';
import { arraySectionTitles, arrayTodaysHits } from '../data/MainPage/MainPage';

export const MainPage = () => {
  return (
    <>
    <div className="z-0 fixed top-0 left-0 right-0 w-screen h-screen bg-gradient-to-b from-[#02040C] to-[#0A4148]">
    </div>
    <div className="z-2 relative w-screen min-h-screen">
        <div className="pt-[5rem] pl-[2rem] sm:pl-[4rem] md:pl-[6rem] lg:pl-[8rem]">
            <Header/>
        </div>
        <div className="flex flex-col justify-center items-center gap-y-[2rem] pt-[4rem]">
            <TrendingList/>
        </div>
        <div className="flex flex-col justify-center items-center gap-y-[2rem] pt-[4rem]">
            {arraySectionTitles.map((section)=>{
            return <List object={arrayTodaysHits} sectionTitle={section}/>
            })}
        </div>
    </div>
    </>
  )
}
