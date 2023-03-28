import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
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
import { MusicPlayer } from "../Components";
import PublicRoute from "../PublicRoute";

function Router() {
  const location = useLocation();
  const isMusicPlayerVisible = location.pathname !== "/";

  return (
    <>
      <ScrollTop />
      <div
        className={`${
          !isMusicPlayerVisible && "hidden"
        } fixed w-screen bottom-0 min-h-[10vh] z-40 p-[1vh] bg-black`}
      >
        <MusicPlayer isMusicPlayerVisible={isMusicPlayerVisible}/>
      </div>
      <Routes>
        <Route path="/" element={<PublicRoute><LandingPage /></PublicRoute> }/>
        <Route
          path="/*"
          element={
            <ProtectedRoutes>
              <Routes>
                <Route path="/main" element={<MainPage />} />
                <Route path="/playlist" element={<Playlist />} >
                  <Route path=":playlistId" element={<Playlist />} />
                </Route>
                <Route path="/album" element={<Album />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/artist" element={<Artist />} />
                <Route path="/player" element={<Player />} />
                <Route path="/search" element={<Search />} >
                  <Route path=":query" element={<Search />} />
                </Route>
                <Route path="/mylibrary" element={<MyLibrary />} />
              </Routes>
            </ProtectedRoutes>
          }
        />
      </Routes>
    </>
  );
}

export default Router;
