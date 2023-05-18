import { useEffect, useState } from 'react'
import { sortByKeyAlphabet, sortByKeyLength } from '../../Utils/sortDataArrayOrder'
import { Button } from '../Button'
import { Typography } from '../Typography'

export const AdminFilterSection = ({ objectTitle, data, setData }) => {
    const [activeButton, setActiveButton] = useState(null);
    const textKeysObject = {
        Users: {
            textButtons: ["email", "name", "following", "followers", "albums", "playlists", "tracks", "followedPlaylists", "uploadedTracks", "uploadedAlbums", "banned"],
            email: "email",
            name: "fullName",
            albums: "albums",
            playlists: "playlists",
            tracks: "tracks",
            following: "following",
            followers: "followedBy",
            followedPlaylists: "followedPlaylists",
            uploadedTracks: "uploadedTracks",
            uploadedAlbums: "uploadedAlbums",
            banned: "isBanned",
        },
        Artists: {
            textButtons: ["email", "name", "following", "followers", "albums", "playlists", "tracks", "followedPlaylists", "uploadedTracks", "uploadedAlbums", "banned"],
            email: "email",
            name: "fullName",
            albums: "albums",
            playlists: "playlists",
            tracks: "tracks",
            following: "following",
            followers: "followedBy",
            followedPlaylists: "followedPlaylists",
            uploadedTracks: "uploadedTracks",
            uploadedAlbums: "uploadedAlbums",
            banned: "isBanned",
        },
        Playlists: {
            textButtons: ["name", "private", "tracks", "followers", "banned"],
            name: "name",
            private: "isPrivate",
            tracks: "tracks",
            followers: "followedBy",
            banned: "isBanned",
        },
        Albums: {
            textButtons: ["name", "uploaded", "songs", "followers", "banned"],
            name: "name",
            uploaded: "uploadedAt",
            songs: "songs",
            followers: "followedBy",
            banned: "isBanned",
        },
        Songs: {
            textButtons: ["name", "genre", "duration", "created", "followers", "banned"],
            name: "name",
            genre: "genre",
            duration: "duration",
            created: "createdAt",
            followers: "followedBy",
            banned: "isBanned",
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
        switch (text) {
            case "following":
            case "followers":
            case "albums":
            case "playlists":
            case "tracks":
            case "songs":
            case "followedPlaylists":
            case "uploadedTracks":
            case "uploadedAlbums":
                orderData = sortByKeyLength(data, textKeysObject[objectTitle][text], order)
                break;

            default:
                orderData = sortByKeyAlphabet(data, textKeysObject[objectTitle][text], order)
                break;
        }
        setData(orderData)
        setClickedOne(!clickedOne)
    }

    return (
        <div className='flex justify-start items-center gap-1 w-full'>
            <div className='w-[9%]'>
                <Typography
                    text="Sort by:"
                    type="p2"
                    color="white"
                    family="lato"
                    styles="text-4xl"
                />
            </div>
            <div className='flex flex-wrap items-center justify-start gap-2 max-w-full min-w-[20%]'>
                {textKeysObject[objectTitle]["textButtons"].map((text) => {
                    return (
                        <div className="w-fit h-8">
                            <Button
                                text={text}
                                color={`${activeButton === text ? 'primary' : 'gray'}`}
                                size="xs"
                                onClick={() => { handleClickButton(text); setActiveButton(text) }}
                            />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
