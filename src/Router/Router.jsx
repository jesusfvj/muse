import React from "react";
import { Route, Routes } from "react-router-dom";
import { TestComponents } from "../Components/TestComponents";
import { Album } from "../Pages/Album";
import { Artist } from "../Pages/Artist";
import { LandingPage } from "../Pages/LandingPage";
import { MyLibrary } from "../Pages/MyLibrary";
import { Player } from "../Pages/Player";
import { Playlist } from "../Pages/Playlist";
import { Profile } from "../Pages/Profile";
import { Search } from "../Pages/Search";
import { MainPage } from "../Pages/MainPage";
import { ScrollTop } from "../Components/ScrollTop";
import ProtectedRoutes from "../ProtectedRoutes/ProtectedRoutes";

function Router() {
  return (
    <>
      <ScrollTop />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/*"
          element={
            <ProtectedRoutes>
              <Routes>
                <Route path="/main" element={<MainPage />} />
                <Route path="/playlist" element={<Playlist />} />
                <Route path="/album" element={<Album />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/artist" element={<Artist />} />
                <Route path="/player" element={<Player />} />
                <Route path="/search" element={<Search />} />
                <Route path="/mylibrary" element={<MyLibrary />} />
                <Route path="/test" element={<TestComponents />} />
              </Routes>
            </ProtectedRoutes>
          }
        />
      </Routes>
    </>
  );
}

export default Router;
