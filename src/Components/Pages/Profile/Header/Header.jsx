import { Typography } from "../../../../Components";

export const Header = () => {
  return (
    <div className="w-screen h-[8rem] bg-[#fef3c6] flex flex-col justify-center items-center relative cursor-pointer drop-shadow-xl">
        <Typography text="Donate" type="important" color="secondary" family="lato"/>
        <Typography text="buy us a coffee" type="p1" color="secondary" family="lato" styles="mt-[-0.75rem] pl-[6rem]"/>
        <img src="../../../.././src/assets/icons/pointerIcon.png" className="absolute bottom-[-1rem] left-[44vw] w-[4rem] h-[4rem] rotate-[67deg]" alt="arrow icon"/>
      </div>
  )
}
