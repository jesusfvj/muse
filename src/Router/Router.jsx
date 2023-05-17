import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { Album } from "../Pages/Album";
import { Artist } from "../Pages/Artist";
import { LandingPage } from "../Pages/LandingPage";
import { MyLibrary } from "../Pages/MyLibrary";
import { Player } from "../Pages/Player";
import { Playlist } from "../Pages/Playlist";
import { User } from "../Pages/User";
import { Search } from "../Pages/Search";
import { MainPage } from "../Pages/MainPage";
import { ScrollTop } from "../Components/ScrollTop";
import ProtectedRoutes from "../ProtectedRoutes/ProtectedRoutes";
import PublicRoute from "../PublicRoute";
import { ResetPassword } from "../Pages/ResetPassword";
import ProtectedAdminRoute from "../ProtectedAdminRoute";
import { AdminPage } from "../Pages/AdminPage";

function Router() {
  return (
    <>
      <ScrollTop />
      <Routes>
        <Route path="/" element={<PublicRoute><LandingPage /></PublicRoute>} />
        <Route path="/resetpassword/:token" element={<PublicRoute><ResetPassword /></PublicRoute>} />
        <Route path="/admin" element={
          <ProtectedAdminRoute>
            <Routes>
              <Route path="/" element={<AdminPage />} />
            </Routes>
          </ProtectedAdminRoute>
        }
        />
        <Route path="/*" element={
          <ProtectedRoutes>
            <Routes>
              <Route path="/main" element={<MainPage />} />
              <Route path="/playlist" element={<Playlist />}>
                <Route path=":playlistId" element={<Playlist />} />
              </Route>
              <Route path="/album" element={<Album />} >
                <Route path=":albumId" element={<Album />} />
              </Route>
              <Route path="/user" element={<User />} >
                <Route path=":userId" element={<User />} />
              </Route>
              <Route path="/artist" element={<Artist />} >
                <Route path=":artistId" element={<Artist />} />
              </Route>
              <Route path="/player/:id" element={<Player />} />
              <Route path="/search" element={<Search />}>
                <Route path=":query" element={<Search />} />
              </Route>
              <Route path="/mylibrary" element={<MyLibrary />} />
              <Route path="/admin" element={<AdminPage />} />
            </Routes>
          </ProtectedRoutes>
        }
        />
      </Routes>
    </>
  );
}

export default Router;

/*     <ProtectedAdminRoute>
</ProtectedAdminRoute> */