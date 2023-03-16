import React from 'react'
import { Route, Routes } from "react-router-dom"
import { Album } from '../Pages/Album'
import { Artist } from '../Pages/Artist'
import { Home } from '../Pages/Home'
import { MainPage } from '../Pages/MainPage'
import { MyLibrary } from '../Pages/MyLibrary'
import { MyProfile } from '../Pages/MyProfile'
import { Player } from '../Pages/Player'
import { Playlist } from '../Pages/Playlist'
import { Profile } from '../Pages/Profile'
import { Search } from '../Pages/Search'

function Router() {
    return (
        <>
            <Routes>
                <Route path="/" element={<MainPage />} />
                {/* Protected */}
                <Route path="/playlist" element={<Playlist />} />
                <Route path="/album" element={<Album />} />
                <Route path="/myprofile" element={<MyProfile />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/artist" element={<Artist />} />
                <Route path="/player" element={<Player />} />
                <Route path="/search" element={<Search />} />
                <Route path="/mylibrary" element={<MyLibrary />} />
                {/* Protected */}
            </Routes>


        </>
    )
}

export default Router