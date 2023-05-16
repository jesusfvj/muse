import { Button } from "../Button"

export const AdminButton = ({text, onClick, active}) => {
  return (
    <div className={`w-[80%] h-10 ${active?'bg-[#5e81b2]':'bg-[#0A4148]'} transition duration-500 ${!active && 'hover:bg-[#02040C]'} rounded-lg cursor-pointer text-gray-300 hover:text-white`}>
      <Button
        text={text}
        color="transparent"
        onClick={onClick}
      />
    </div>
  )
}
