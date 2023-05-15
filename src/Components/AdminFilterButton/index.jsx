import { useState } from 'react'
import { GrUploadOption } from 'react-icons/gr'
import { Button } from '../Button'
import { Typography } from '../Typography'

export const AdminFilterButton = ({ text, onClick }) => {
    const [isHovered, setIsHovered] = useState(false)
    const [data, setData] = useState({
        filterElement: ""
    })

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(data.filterElement)
    }

    return (
        <button
            className='w-full h-6 flex p-4 justify-center items-center gap-2 bg-[#0A4148] transition duration-500 hover:bg-[#454a4b] rounded-lg cursor-pointer text-gray-300 hover:text-white'
            type="button"
            onClick={onClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <Typography
                text={text}
                type="p1"
                color="white"
                family="lato"
                styles="text-4xl"
            />
            {isHovered &&
                <form
                    className="flex justify-center items-center"
                    onSubmit={handleSubmit}
                >
                    <input
                        type="text"
                        value={data.filterElement}
                        name="filterElement"
                        className="bg-transparent"
                        onChange={(event) => setData({...data, filterElement: event.target.value })} />
                    <Button
                        text={<Typography
                            text={<GrUploadOption />}
                            type="p1"
                            color="white"
                            styles="text-white"
                        />}
                        typeButton="submit"
                        color="transparent"
                        styles="cursor-pointer rounded-full"
                    />
                </form>
            }
        </button>
    )
}
