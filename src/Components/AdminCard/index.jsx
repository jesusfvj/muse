import { Typography } from "../Typography"

export const AdminCard = ({ element }) => {
    const handleValueClick = (key, value) => {

    }

    return (
        <div className='w-full h-[20rem] bg-[#5B83B0] rounded-lg p-4'>
            {Object.keys(element).map((key) => (
                <div key={key} className="flex justify-start gap-1">
                    <Typography
                        text={`${key}:`}
                        type="p2"
                        color="white"
                        family="lato"
                        styles="text-4xl"
                    />
                    <Typography
                        text={`${element[key]!="" ?element[key] : 'void'}`}
                        type="p2"
                        color="black"
                        family="lato"
                        styles="text-4xl hover:text-blue-400 cursor-pointer"
                        onClick={handleValueClick(key, element[key])}
                    />
                </div>
            ))}
        </div>
    )
}
