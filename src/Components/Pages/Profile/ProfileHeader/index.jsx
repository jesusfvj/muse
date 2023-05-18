import { useUI } from "../../../../Context/UI/UIContext";
import { Typography } from "../../../Typography"

export const ProfileHeader = () => {
  const {
    handleToggleStripeModal
  } = useUI();
  return (
    <div className="w-screen h-[4rem] xs:h-[8rem] bg-[#96927A] flex flex-col justify-center items-center relative cursor-pointer drop-shadow-xl" onClick={handleToggleStripeModal}>
      <div className="flex flex-col justify-center items-center h-full w-full bg-[url('https://res.cloudinary.com/dmufnezzd/image/upload/v1684419665/muze-image_file-folder/coffeePattern_rvqqtu.png')] bg-cover">
        <Typography text="Donate" type="important" color="white" family="lato"/>
        <Typography text="buy us a coffee!" type="p1" color="white" family="lato" styles="mt-[-0.75rem] pl-[2rem] xs:pl-[6rem]"/>
      </div>
        <img src="https://res.cloudinary.com/dmufnezzd/image/upload/v1684419626/muze-image_file-folder/pointerIcon_eaoxld.png" className="absolute bottom-[-0.5rem] xs:bottom-[-1rem] left-[30vw] xs:left-[44vw] w-[2rem] h-[2rem] xs:w-[4rem] xs:h-[4rem] rotate-[67deg]" alt="arrow icon"/>
      </div>
  )
}
