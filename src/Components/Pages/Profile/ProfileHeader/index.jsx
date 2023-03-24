import { Typography } from "../../../Typography"

export const ProfileHeader = () => {
  return (
    <div className="w-screen h-[4rem] xs:h-[8rem] bg-[#96927A] flex flex-col justify-center items-center relative cursor-pointer drop-shadow-xl">
      <div className="flex flex-col justify-center items-center h-full w-full">
        <Typography text="Donate" type="important" color="white" family="lato"/>
        <Typography text="buy us a coffee" type="p1" color="white" family="lato" styles="mt-[-0.75rem] pl-[2rem] xs:pl-[6rem]"/>
      </div>
       {/*  <img src="../../../.././src/assets/icons/pointerIcon.png" className="absolute bottom-[-0.5rem] xs:bottom-[-1rem] left-[30vw] xs:left-[44vw] w-[2rem] h-[2rem] xs:w-[4rem] xs:h-[4rem] rotate-[67deg]" alt="arrow icon"/> */}
      </div>
  )
}

/* bg-[#fef3c6] */
/* bg-[#96927A] */
/* bg-gradient-to-b from-[#02040C] to-[#0A4148] */
/* bg-[url('../../../.././src/assets/images/coffeePattern.png')] */