import { useEffect, useState } from 'react'
import { sortArray } from '../../Utils/sortAlphabeticalOrder'
import { Button } from '../Button'
import { Typography } from '../Typography'

export const AdminFilterSection = ({ objectTitle, data, setData }) => {
    const [activeButton, setActiveButton] = useState(null);
    const textKeysObject = {
        Users: {
            textButtons: ["email", "name"],
            email: "email",
            name: "fullName"
        },
        Artists: {
            textButtons: ["email", "name"],
            email: "email",
            name: "fullName"
        },
        Playlists: {
            textButtons: ["name", "private"],
            name: "name",
            private: "isPrivate"
        },
        Albums: {
            textButtons: ["name", "uploaded"],
            name: "name",
            uploaded: "uploadedAt",
        },
        Songs: {
            textButtons: ["name", "genre", "duration", "created"],
            name: "name",
            genre: "genre",
            duration: "duration",
            created: "createdAt",
        }
    }

    useEffect(() => {
        setActiveButton(null)
    }, [objectTitle])
    


    const [clickedOne, setClickedOne] = useState(true)
    let orderData = []
    let order = ""

    const handleClickButton = (text) => {
        clickedOne ? order = "ascending" : order = "descending";
        orderData = sortArray(data, textKeysObject[objectTitle][text], order)
        setData(orderData)
        setClickedOne(!clickedOne)
    }

    return (
        <div className='flex flex-col justify-center items-start gap-5 w-2/3'>
            <div className='w-[20%]'>
                <Typography
                    text="Filter by:"
                    type="p2"
                    color="white"
                    family="lato"
                    styles="text-4xl"
                />
            </div>
            <div className='flex flex-wrap items-center justify-center gap-4 max-w-full min-w-[20%]'>
                {textKeysObject[objectTitle]["textButtons"].map((text) => {
                    return (
                        <div className="w-14 h-8">
                            <Button
                                text={text}
                                color={`${activeButton===text? 'primary':'gray'}`}
                                size="sm"
                                onClick={() => { handleClickButton(text); setActiveButton(text)}}
                            />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
