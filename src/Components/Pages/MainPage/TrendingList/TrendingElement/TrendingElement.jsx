import React from 'react'
import { Typography } from '../../../../Typography'

export const TrendingElement = ({genre, cardColor}) => {
  return (
    <div className={`${cardColor} relative min-w-[12rem] min-h-[10rem] rounded-[0.15rem] overflow-hidden`}>
        <div className="absolute w-[12rem] h-[12rem] top-[-2rem] left-[-3rem]">
            <div className="bg-[url('../../../../../../src/assets/images/testImages/cover.jpeg')] bg-left bg-cover w-full h-full rounded-full rotate-45 flex justify-center items-center">
                {/* <div className={`${cardColor} h-10 w-10 rounded-full`}></div> */}
            </div>
        </div>
        <Typography text={genre} type="p1" color="black" family="pilonyc" styles="absolute bottom-2 right-3"/>
    </div>
  )
}
