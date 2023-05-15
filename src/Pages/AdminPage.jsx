import React, { useState } from 'react'
import { getUsers } from '../API/AdminApi'
import { Button, Typography } from '../Components'
import { AdminButton } from '../Components/AdminButton'
import { AdminCard } from '../Components/AdminCard'
import { AdminFilterButton } from '../Components/AdminFilterButton'

export const AdminPage = () => {
    const [data, setData] = useState([])

    const handleUsersClick = async () => {
        const response = await getUsers()
        if(response.ok){
            setData(response.users)
        } else {
            console.log(response)
        }

    }
    return (
        <div className="w-screen h-screen bg-gradient-to-b from-[#4A4A4A] to-[#0A4148]">
            <div className='ml-[10rem] py-4'>
                <Typography
                    text="Admin page"
                    type="important"
                    color="white"
                    family="lato"
                    styles="text-4xl"
                />
            </div>
            <div className='flex w-screen h-[88vh]'>
                <div className='flex flex-col items-center w-[12%] pt-10 gap-4'>
                    <AdminButton text="Stats" />
                    <AdminButton text="Users" onClick={handleUsersClick} />
                    <AdminButton text="Artists" />
                    <AdminButton text="Playlists" />
                    <AdminButton text="Albums" />
                    <AdminButton text="Songs" />
                </div>
                <div className="flex flex-col w-[88%] h-full bg-gradient-to-b from-[#02040C] to-[#0A4148] xs:rounded-tl-[3rem] sm:pl-[4rem] sm:pr-[3rem]">
                    <div className='flex pt-6 gap-5'>
                        <div className='w-52'>
                            <Typography
                                text="Filter by:"
                                type="p1"
                                color="white"
                                family="lato"
                                styles="text-4xl"
                            />
                        </div>

                        <AdminFilterButton text="id" />
                        <AdminFilterButton text="id" />
                    </div>
                    <div className='flex flex-wrap justify-center h-full my-5 gap-5 overflow-y-auto overflow-x-hidden'>
                        {data.map((element, index) => {
                            return (
                                <AdminCard key={index} element={element}/>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}
