import { useState } from 'react'
import { AiOutlineCheck } from 'react-icons/ai'
import { RxCross1 } from 'react-icons/rx'
import {
    toggleBanAsset,
    getCollection
} from '../API/AdminApi'
import { Typography } from '../Components'
import { AdminButton } from '../Components/AdminButton'
import { AdminCard } from '../Components/AdminCard'
import { AdminFilterSection } from '../Components/AdminFilterSection'
import { AdminFindSection } from '../Components/AdminFindSection'

export const AdminPage = () => {
    const [showBanModal, setShowBanModal] = useState(false)
    const [isBanned, setIsBanned] = useState(null)
    const [currentBan, setCurrentBan] = useState([])
    const [activeButton, setActiveButton] = useState(null);
    const [objectTitle, setObjectTitle] = useState(null)
    const [found, setFound] = useState("")
    const [data, setData] = useState([])

    const handleClickAdminButton = async (string) => {
        setFound([])
        let response = null;
        switch (string) {
            case "stats":
                setActiveButton(string)
                break;
            case "users":
                response = await getCollection("User", "user")
                setObjectTitle("Users")
                setActiveButton(string)
                break;
            case "artists":
                response = await getCollection("User", "artist")
                setObjectTitle("Artists")
                setActiveButton(string)
                break;
            case "playlists":
                response = await getCollection("Playlist")
                setObjectTitle("Playlists")
                setActiveButton(string)
                break;
            case "albums":
                response = await getCollection("Album")
                setObjectTitle("Albums")
                setActiveButton(string)
                break;
            case "songs":
                response = await getCollection("Track")
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

    const handleAcceptButton = async () => {
        let collectionName = currentBan[0].charAt(0).toUpperCase() + currentBan[0].slice(1);
        if (collectionName === "Song") {
            collectionName = "Track"
        }
        const { ok, assetId } = await toggleBanAsset(collectionName, currentBan[2], !isBanned)
        if (ok) {
            const newArrayData = [...data]
            const index = newArrayData.findIndex(obj => obj._id === assetId);

            if (index !== -1) {
                newArrayData[index]["isBanned"] = !isBanned;
            }
            setData(newArrayData)
        }
        setShowBanModal(false)
    }

    return (
        <div className="w-screen h-screen bg-gradient-to-b from-[#4A4A4A] to-[#0A4148]">
            <div className='ml-[10rem] py-4'>
                <Typography
                    text={`Admin page${activeButton != null ? '/' + activeButton : ""}`}
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
                <div className="flex flex-col w-[88%] h-full pt-8 bg-gradient-to-b from-[#02040C] to-[#0A4148] xs:rounded-tl-[3rem] sm:pl-[4rem] sm:pr-[3rem]">
                    {data.length !== 0 &&
                        <div className='flex flex-col gap-3 justify-center items-start'>
                            <AdminFindSection
                                setData={setData}
                                data={data}
                                setFound={setFound}
                            />
                            <AdminFilterSection
                                objectTitle={objectTitle}
                                setData={setData}
                                data={data}
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
                                    collection={activeButton}
                                    setShowBanModal={setShowBanModal}
                                    setCurrentBan={setCurrentBan}
                                    setIsBanned={setIsBanned}
                                    setActiveButton={setActiveButton}
                                />
                            )
                        })}
                    </div>
                </div>
            </div>
            {showBanModal &&
                <div
                    className="w-screen h-screen fixed top-0 flex items-center justify-center bg-black/50 backdrop-blur-md z-[999999]"
                    onClick={() => { setShowBanModal(false) }}
                >
                    <div className="w-fit md:w-fit h-fit bg-gradient-to-b from-[#4A4A4A] to-[#0A4148] p-6 rounded-md flex justify-center items-center">
                        <div className='flex flex-col justify-center items-center text-center'>
                            <div className='flex justify-center items-center text-center gap-1'>
                                <Typography
                                    text="Are you sure you want to"
                                    type="p1"
                                    color="white"
                                />
                                <Typography
                                    text={`${isBanned ? 'remove the ban to' : 'ban'}`}
                                    type="p1"
                                    color={`${isBanned ? 'blue' : 'danger'}`}
                                />
                                <Typography
                                    text="the"
                                    type="p1"
                                    color="white"
                                />
                            </div>
                            <div className='flex gap-2 justify-center'>
                                <Typography
                                    text={`${currentBan[0]}`}
                                    type="p1"
                                    color="black"
                                />
                                <Typography
                                    text={`${currentBan[1]}`}
                                    type="p1"
                                    color="danger"
                                />
                            </div>
                            <div className='flex mt-10'>
                                <button>
                                    <Typography
                                        text={<AiOutlineCheck />}
                                        type="p0"
                                        color="blue"
                                        styles="bg-gray-800 py-2 px-5 rounded-tl-lg rounded-bl-lg hover:bg-gray-600"
                                        onClick={handleAcceptButton}
                                    />
                                </button>
                                <button className="bg">
                                    <Typography
                                        text={<RxCross1 />}
                                        type="p0"
                                        color="danger"
                                        styles="bg-gray-800 py-2 px-5 rounded-tr-lg rounded-br-lg hover:bg-gray-600"
                                        onClick={() => setShowBanModal(false)}
                                    />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}
