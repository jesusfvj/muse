import React from 'react'
import { arrayPublicList } from '../../data/Profile/Profile'
import { TrendingElement } from '../Pages/MainPage/TrendingList/TrendingElement/TrendingElement'
import { Typography } from '../Typography'

export const PublicList = ({list}) => {
  return (
    <div className="w-[80%] h-[35vh] mt-[3rem]">
    <Typography text={list} type="p1" color="white" family="lato" styles="mb-[0.2rem]"/>
    <section className="w-[100%] h-[90%] flex flex-row gap-x-[3rem] overflow-x-scroll scroll-smooth">
      {arrayPublicList.map(({genre, cardColor}, index)=>{
        
      })}
    </section>
  </div>
  )
}
