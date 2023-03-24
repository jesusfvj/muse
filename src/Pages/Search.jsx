import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import {
  getAlbums,
  getArtists,
  getPlaylists,
  getSongs,
} from "../API/MusicApi/MusicApi";
import { Layout, List, Typography } from "../Components";
import logo from "../assets/logo/logowhite.png";

export const Search = () => {
  const query = "";
  const {
    data: songs,
    isLoading: isLoadingSongs,
    error: errorSongs,
  } = useQuery({ queryKey: ["songs"], queryFn: getSongs });
  const {
    data: albums,
    isLoading: isLoadingAlbums,
    error: errorAlbums,
  } = useQuery({ queryKey: ["albums"], queryFn: getAlbums });
  const {
    data: artists,
    isLoading: isLoadingArtists,
    error: errorArtists,
  } = useQuery({ queryKey: ["artists"], queryFn: getArtists });
  const {
    data: playlists,
    isLoading: isLoadingPlaylists,
    error: errorPlaylists,
  } = useQuery({ queryKey: ["playlists"], queryFn: getPlaylists });

  const [searchInput, setSearchInput] = useState("");
  const [searchResults, setsearchResults] = useState({});

  const handleChange = (e) => {
    setSearchInput(e.target.value);
    if (e.target.value.length >= 3) {
      FilterData(e.target.value);
    }
  };

  useEffect(() => {
    if (
      !isLoadingSongs &&
      !isLoadingAlbums &&
      !isLoadingArtists &&
      !isLoadingPlaylists &&
      query
    ) {
      setTimeout(() => {
        setSearchInput(query);
        FilterData(query);
      }, 2500);
    }
  }, [isLoadingSongs, isLoadingAlbums, isLoadingArtists, isLoadingPlaylists]);

  function FilterData(searchQuery) {
    const searchResultsSongs = [];
    const searchResultsPlaylists = [];
    const searchResultsAlbums = [];
    const searchResultsArtists = [];

    songs.forEach((element) => {
      if (
        element.name
          .toString()
          .toLowerCase()
          .includes(searchQuery.toLowerCase()) ||
        element.artist
          .toString()
          .toLowerCase()
          .includes(searchQuery.toLowerCase())
      ) {
        searchResultsSongs[element.id] = element;
      }
    });

    playlists.forEach((element) => {
      if (
        element.name
          .toString()
          .toLowerCase()
          .includes(searchQuery.toLowerCase())
      ) {
        searchResultsPlaylists[element.id] = element;
      }
    });

    albums.forEach((element) => {
      if (
        element.name
          .toString()
          .toLowerCase()
          .includes(searchQuery.toLowerCase()) ||
        element.artist
          .toString()
          .toLowerCase()
          .includes(searchQuery.toLowerCase())
      ) {
        searchResultsAlbums[element.id] = element;
      }
    });

    artists.forEach((element) => {
      if (
        element.name
          .toString()
          .toLowerCase()
          .includes(searchQuery.toLowerCase())
      ) {
        searchResultsArtists[element.id] = element;
      }
    });

    setsearchResults({
      searchResultsSongs: searchResultsSongs,
      searchResultsPlaylists: searchResultsPlaylists,
      searchResultsAlbums: searchResultsAlbums,
      searchResultsArtists: searchResultsArtists,
    });
  }

  return (
    <Layout>
      <div className="h-screen bg-gradient-to-b from-[#02040C] to-[#0A4148] flex flex-col">
        <div className=" flex justify-center p-9">
          <input
            type="text"
            placeholder="Buscar"
            value={searchInput}
            className=" rounded-3xl h-12 w-4/12"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className=" flex flex-col items-center gap-y-[4rem] pt-[4rem] w-full h-full">
          {searchInput.length <= 2 ? (
            <Typography
              text="Nothing here, try to search your favorite artist!!"
              type="big"
              family="lato"
              color="white"
            />
          ) : null}
          {searchInput.length >= 3 &&
          searchResults.searchResultsSongs.length > 0 ? (
            <div className=" w-full md:w-5/6">
              <List
                object={searchResults.searchResultsSongs.filter(Boolean)}
                sectionTitle="Songs"
                dataType="song"
              />
            </div>
          ) : null}
          {searchInput.length >= 3 &&
          searchResults.searchResultsArtists.length > 0 ? (
            <div className=" w-full md:w-5/6">
              {searchInput.length >= 3 ? (
                <List
                  object={searchResults.searchResultsArtists.filter(Boolean)}
                  sectionTitle="Artists"
                  dataType="artist"
                />
              ) : null}
            </div>
          ) : null}
          {searchInput.length >= 3 &&
          searchResults.searchResultsAlbums.length > 0 ? (
            <div className=" w-full md:w-5/6">
              {searchInput.length >= 3 ? (
                <List
                  object={searchResults.searchResultsAlbums.filter(Boolean)}
                  sectionTitle="Albums"
                  dataType="album"
                />
              ) : null}
            </div>
          ) : null}
          {searchInput.length >= 3 &&
          searchResults.searchResultsPlaylists.length > 0 ? (
            <div className=" w-full md:w-5/6">
              {searchInput.length >= 3 ? (
                <List
                  object={searchResults.searchResultsPlaylists.filter(Boolean)}
                  sectionTitle="Playlists"
                  dataType="playlist"
                />
              ) : null}
            </div>
          ) : null}
        </div>
        <div className="absolute right-[-25vw] top-[-15vw] hidden md:block">
          <img src={logo} className="z-50 w-[70vw] mix-blend-overlay" />
        </div>
      </div>
    </Layout>
  );
};
