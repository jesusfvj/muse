import React from 'react'
import { Typography } from '../../../Typography'
import { TrendingElement } from './TrendingElement/TrendingElement'
import { arrayTrendingList } from '../../../.././data/MainPage/TrendingList.js';

export const TrendingList = () => {
  return (
    <div className="w-[80%] h-[35vh] mt-[3rem]">
      <Typography text="Trending playlists" type="p2" color="white" family="lato" styles="mb-[0.2rem]"/>
      <section className="w-[100%] h-[90%] flex flex-row gap-x-[3rem] overflow-x-scroll scroll-smooth">
        {arrayTrendingList.map(({genre, cardColor}, index)=>{
          return <TrendingElement key={index} genre={genre} cardColor={cardColor} />
        })}
      </section>
    </div>
  )
}
