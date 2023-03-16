import React from 'react'
import { Typography } from '../../../Typography'
import { TrendingElement } from './TrendingElement/TrendingElement'

const arrayTrendingList = [{
  artist: `Molongui!`,
  songTitle: "I rock!",
  album: "We are cool",
  year: "2023",
  producer: "Mololongui",
  genre: "pop"
},
{
  artist: `Molongui!`,
  songTitle: "I rock!",
  album: "We are cool",
  year: "2023",
  producer: "Mololongui",
  genre: "pop"
},
{
  artist: `Molongui!`,
  songTitle: "I rock!",
  album: "We are cool",
  year: "2023",
  producer: "Mololongui",
  genre: "pop"
},
{
  artist: `Molongui!`,
  songTitle: "I rock!",
  album: "We are cool",
  year: "2023",
  producer: "Mololongui",
  genre: "pop"
},
{
  artist: `Molongui!`,
  songTitle: "I rock!",
  album: "We are cool",
  year: "2023",
  producer: "Mololongui",
  genre: "pop"
},
{
  artist: `Molongui!`,
  songTitle: "I rock!",
  album: "We are cool",
  year: "2023",
  producer: "Mololongui",
  genre: "pop"
}
,
{
  artist: `Molongui!`,
  songTitle: "I rock!",
  album: "We are cool",
  year: "2023",
  producer: "Mololongui",
  genre: "pop"
}
]

export const TrendingList = () => {
  return (
    <div className="w-[80%] h-[35vh] mt-[3rem]">
      <Typography text={"Trending playlists"} type={"p2"} color={"white"} family={"lato"} styles={"mb-[0.2rem]"}/>
      <section className="w-[100%] h-[90%] flex flex-row gap-x-[1rem]">
        {arrayTrendingList.map(({artist, songTitle, album, year, producer, genre, cardColor}, index)=>{
          return <TrendingElement key={index} artist={artist} songTitle={songTitle} album={album} year={year} producer={producer} genre={genre} styles={`w-[10rem] h-[10rem] rounded-[0.15rem]  bg-yellow-200 ${cardColor}`}/>
        })}
      </section>
    </div>
  )
}
