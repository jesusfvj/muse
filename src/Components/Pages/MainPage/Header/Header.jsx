import React from 'react'
import { Typography } from '../../../Typography'

const arrayTitles = [{
  text: `Hi, Molongui!`,
  type: "p1",
  color: "white",
  family: "lato",
  styles: "pb-[2rem]"
},
{
  text: "Listen to your",
  type: "title",
  color: "white",
  family: "lato"
},
{
  text: "favourite music",
  type: "p1",
  color: "white",
  family: "lato",
  styles: "sm:pl-[6rem] md:pl-[6rem] mt-[-0.3rem]"
}]

export const Header = () => {
  return (
    <div className="w-[80vw] h-[20vh]">
    {arrayTitles.map(({text, type, color, family, styles}, index)=>{
      return <Typography key={index} text={text} type={type} color={color} family={family} styles={styles}/>
    })}
    </div>
  )
}