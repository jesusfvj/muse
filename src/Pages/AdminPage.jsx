import { useEffect, useState } from 'react'
import {
    getUsers,
    getArtists,
    getPlaylists,
    getAlbums,
    getSongs
} from '../API/AdminApi'
import { Typography } from '../Components'
import { AdminButton } from '../Components/AdminButton'
import { AdminCard } from '../Components/AdminCard'
import { AdminFilterButton } from '../Components/AdminFilterButton'
import { AdminFilterSection } from '../Components/AdminFilterSection'
import { AdminFindSection } from '../Components/AdminFindSection'

export const AdminPage = () => {
    const [activeButton, setActiveButton] = useState(null);
    const [objectTitle, setObjectTitle] = useState(null)
    const [found, setFound] = useState("")
    const [data, setData] = useState([])
    /* const [adminButtonClicked, setAdminButtonClicked] = useState([null, null, null, null, null]) */

    const handleClickAdminButton = async (string) => {
        setFound([])
        let response = null;
        switch (string) {
            case "stats":
                setActiveButton(string)
                break;
            case "users":
                response = await getUsers()
                setObjectTitle("Users")
                setActiveButton(string)
                break;
            case "artists":
                response = await getArtists()
                setObjectTitle("Artists")
                setActiveButton(string)
                break;
            case "playlists":
                response = await getPlaylists()
                setObjectTitle("Playlists")
                setActiveButton(string)
                break;
            case "albums":
                response = await getAlbums()
                setObjectTitle("Albums")
                setActiveButton(string)
                break;
            case "songs":
                response = await getSongs()
                setObjectTitle("Songs")
                setActiveButton(string)
                break;
            default:
                break;
        }
        if (response.ok) {
            setData(response.object)
        } else {
            setData([])
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
                    <AdminButton text="Stats" active={("stats" === activeButton)} />
                    <AdminButton text="Users" onClick={() => { handleClickAdminButton("users") }} active={("users" === activeButton)} />
                    <AdminButton text="Artists" onClick={() => { handleClickAdminButton("artists") }} active={("artists" === activeButton)} />
                    <AdminButton text="Playlists" onClick={() => { handleClickAdminButton("playlists") }} active={("playlists" === activeButton)} />
                    <AdminButton text="Albums" onClick={() => { handleClickAdminButton("albums") }} active={("albums" === activeButton)} />
                    <AdminButton text="Songs" onClick={() => { handleClickAdminButton("songs") }} active={("songs" === activeButton)} />
                </div>
                <div className="flex flex-col w-[88%] h-full bg-gradient-to-b from-[#02040C] to-[#0A4148] xs:rounded-tl-[3rem] sm:pl-[4rem] sm:pr-[3rem]">
                    <Typography
                        text={objectTitle}
                        type="big"
                        color="white"
                        family="lato"
                        styles="mt-10 mb-5"
                    />
                    {data.length !== 0 &&
                        <div className='flex gap-5 justify-start items-center'>
                            <AdminFilterSection
                                objectTitle={objectTitle}
                                setData={setData}
                                data={data}
                            />
                            <AdminFindSection
                                setData={setData}
                                data={data}
                                setFound={setFound}
                            />
                        </div>
                    }
                    <div className='flex flex-wrap justify-start items-center first-line:h-full my-5 gap-5 overflow-y-auto overflow-x-hidden'>
                        {data.map((element, index) => {
                            return (
                                <AdminCard
                                    key={index}
                                    element={element}
                                    found={found}
                                    setFound={setFound}
                                    setData={setData}
                                />
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}
