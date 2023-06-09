import React, { useState } from "react";
import { List, Typography } from "../Components";
import { search } from "../API/SearchApi";
import { useUser } from "../Context/UserContext/UserContext";

export const Search = () => {
  const {
    user: { _id },
  } = useUser();

  const [searchResults, setSearchResults] = useState({
    tracks: [],
    albums: [],
    artists: [],
    users: [],
    playlists: [],
  });

  const [searchInput, setSearchInput] = useState("");

  const handleSearch = async (query) => {
    const res = await search(query, _id);
    if (res.ok) {
      setSearchResults({ ...res.results });
    }
  };

  const handleChange = (e) => {
    setSearchInput(e.target.value);
    if (e.target.value.length >= 3) {
      handleSearch(e.target.value);
    }
  };

  return (
    <>
      <div className="min-h-screen pt-8 pb-12 bg-gradient-to-b from-[#02040C] to-[#0A4148] flex flex-col">
        <div className="absolute right-[-25vw] top-[-15vw] hidden md:block">
          <img src='https://res.cloudinary.com/dmufnezzd/image/upload/v1684419477/muze-image_file-folder/logoWhite_xxtkq5.png' className="w-[70vw] mix-blend-overlay" />
        </div>
        <div className="flex justify-center p-9">
          <input
            type="text"
            placeholder="Buscar"
            value={searchInput}
            className=" rounded-3xl py-2 px-8 "
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className=" flex flex-col  items-center gap-y-[4rem] pt-[4rem] w-full h-full">

          {searchInput.length <= 2 ? (
            <div className="flex flex-col gap-1 sm:flex-row justify-center items-center">
              <Typography
                text="Nothing here,"
                type="p0"
                family="lato"
                color="white"
              />
              <Typography
                text="try to search your favorite artist!!"
                type="p0"
                family="lato"
                color="white"
              />
            </div>
          ) : null}
          {searchInput.length >= 3 && searchResults.tracks?.length > 0 ? (
            <div className=" w-full md:w-5/6">
              <List
                object={searchResults.tracks}
                sectionTitle="Songs"
                dataType="song"
              />
            </div>
          ) : null}
          {searchInput.length >= 3 && searchResults.artists?.length > 0 ? (
            <div className=" w-full md:w-5/6">
              {searchInput.length >= 3 ? (
                <List
                  object={searchResults.artists}
                  sectionTitle="Artists"
                  dataType="artist"
                />
              ) : null}
            </div>
          ) : null}
          {searchInput.length >= 3 && searchResults.albums?.length > 0 ? (
            <div className=" w-full md:w-5/6">
              {searchInput.length >= 3 ? (
                <List
                  object={searchResults.albums}
                  sectionTitle="Albums"
                  dataType="album"
                />
              ) : null}
            </div>
          ) : null}
          {searchInput.length >= 3 && searchResults.playlists?.length > 0 ? (
            <div className=" w-full md:w-5/6">
              {searchInput.length >= 3 ? (
                <List
                  object={searchResults.playlists}
                  sectionTitle="Playlists"
                  dataType="playlist"
                />
              ) : null}
            </div>
          ) : null}
          {searchInput.length >= 3 && searchResults.users?.length > 0 ? (
            <div className=" w-full md:w-5/6">
              {searchInput.length >= 3 ? (
                <List
                  object={searchResults.users}
                  sectionTitle="Users"
                  dataType="user"
                />
              ) : null}
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
};
