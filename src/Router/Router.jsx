import React from "react";
import { Route, Routes } from "react-router-dom";
import { TestComponents } from "../Components/TestComponents";
import { Album } from "../Pages/Album";
import { Artist } from "../Pages/Artist";
import { Home } from "../Pages/Home";
import { LandingPage } from "../Pages/LandingPage";
import { MyLibrary } from "../Pages/MyLibrary";
import { MyProfile } from "../Pages/MyProfile";
import { Player } from "../Pages/Player";
import { Playlist } from "../Pages/Playlist";
import { Profile } from "../Pages/Profile";
import { Search } from "../Pages/Search";
import { MainPage } from "../Pages/MainPage";
import { ProtectedRoutes } from "../ProtectedRoutes/ProtectedRoutes";
import { UserProvider } from "../Context/UserContext/UserContext";



function Router() {
  return (
    <>
     <UserProvider>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        {/* Protected */}
        <Route path="/home" element={<ProtectedRoutes><Home /></ProtectedRoutes>} />
        <Route path="/main" element={<ProtectedRoutes><MainPage /></ProtectedRoutes>} />
        <Route path="/playlist" element={<ProtectedRoutes><Playlist /></ProtectedRoutes>} />
        <Route path="/album" element={<ProtectedRoutes><Album /></ProtectedRoutes>} />
        <Route path="/myprofile" element={<ProtectedRoutes><MyProfile /></ProtectedRoutes>} />
        <Route path="/profile" element={<ProtectedRoutes><Profile /></ProtectedRoutes>} />
        <Route path="/artist" element={<ProtectedRoutes><Artist /></ProtectedRoutes>} />
        <Route path="/player" element={<ProtectedRoutes><Player /></ProtectedRoutes>} />
        <Route path="/search" element={<ProtectedRoutes><Search /></ProtectedRoutes>} />
        <Route path="/mylibrary" element={<ProtectedRoutes><MyLibrary /></ProtectedRoutes>} />
        <Route path="/test" element={<TestComponents />} />
        {/* Protected */}
      </Routes>
      </UserProvider>
    </>
  );
}

export default Router;
