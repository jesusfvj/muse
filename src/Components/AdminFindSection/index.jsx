import { useEffect, useState } from 'react'
import { GrUploadOption } from 'react-icons/gr'
import { stringFormatter } from '../../Utils/stringFormatter'
import { Button } from '../Button'
import { Typography } from '../Typography'

export const AdminFindSection = ({ setData, data, setFound }) => {
    const [dataInput, setDataInput] = useState("")
    const arrayExcludes = ["isPrivate", "createdAt"]

    const handleChangeInput = (event) => {
        const inputText = event.target.value;
        setDataInput(inputText.trim())
    };

    const handleSubmit = (event) => {
        event.preventDefault()
        if (dataInput !== "") {
            let foundObjects = []
            for (let obj of data) {
                for (let key in obj) {
                    if (Array.isArray(obj[key])) {
                        for (let item of obj[key]) {
                            if (typeof item === "string" && item.includes(dataInput)) {
                                foundObjects.push(obj)
                                setFound(dataInput)
                            }
                        }
                    } else if (typeof obj[key] === "string" && obj[key].includes(dataInput)) {
                        foundObjects.push(obj)
                        setFound(dataInput)
                    }
                }
            }
            setData(foundObjects)
        }
    }

    return (
        <div className='flex flex-col justify-center items-start gap-5 w-full'>
            <div className='w-[20%]'>
                <Typography
                    text="Find by:"
                    type="p2"
                    color="white"
                    family="lato"
                    styles="text-4xl"
                />
            </div>
            <form
                className="flex justify-start items-center gap-4 w-[80%]"
                onSubmit={handleSubmit}
            >
                <input
                    type="text"
                    value={dataInput.filterElement}
                    name="filterElement"
                    className="bg-transparent text-white w-full"
                    onChange={handleChangeInput}
                />
                <div className="w-10">
                    <Button
                        text={<Typography
                            text={<GrUploadOption />}
                            type="p1"
                        />}
                        typeButton="submit"
                        color="gray"
                        size="sm"
                        textWhite={true}
                        styles="cursor-pointer rounded-full"
                    />
                </div>
            </form>
        </div>
    )
}
