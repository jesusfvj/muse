import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react'
import { getAlbums, getArtists, getPlaylists, getSongs } from '../API/MusicApi/MusicApi'
import { List } from '../Components'

export const Search = () => {
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

  const [searchInput, setSearchInput] = useState("")
  const [searchResults, setsearchResults] = useState({
    searchResultsSongs: {},
    searchResultsPlaylists: {},
    searchResultsAlbums: {},
    searchResultsArtists: {},
  })


  const handleChange = (e) => {
    setSearchInput(e.target.value)
    // timeout 300ms no input
    filter(e.target.value)
    console.log(e.target.value);
  }
  const filter = (searchQuery) => {
  const searchResultsSongs = {};
  const searchResultsPlaylists = {};
  const searchResultsAlbums = {};
  const searchResultsArtists = {};

  songs.forEach((element) => {
    if (element.name.toString().toLowerCase().includes(searchQuery.toLowerCase()) || element.artist.toString().toLowerCase().includes(searchQuery.toLowerCase())) {
      searchResultsSongs[element.id] = element;
      console.log(element);
    }
  });

  playlists.forEach((element) => {
    if (element.name.toString().toLowerCase().includes(searchQuery.toLowerCase())) {
      searchResultsPlaylists[element.id] = element;
      console.log(element);
    }
  });

  albums.forEach((element) => {
    if (element.name.toString().toLowerCase().includes(searchQuery.toLowerCase()) || element.artist.toString().toLowerCase().includes(searchQuery.toLowerCase())) {
      searchResultsAlbums[element.id] = element;
      console.log(element);
    }
  });

  artists.forEach((element) => {
    if (element.name.toString().toLowerCase().includes(searchQuery.toLowerCase())) {
      searchResultsArtists[element.id] = element;
      console.log(element);
    }
  });

  setsearchResults({
    searchResultsSongs:{searchResultsSongs},
    searchResultsPlaylists:{searchResultsPlaylists},
    searchResultsAlbums:{searchResultsAlbums},
    searchResultsArtists:{searchResultsArtists},
  });
  console.log(searchResults.searchResultsSongs); 

};

  // const filter = (searchQuery) => {
  //   console.log(songs);
  //   const searchResultsSongs = songs.filter((element) => {
  //     console.log(element.name.toString());
  //     if (element.name.toString().toLowerCase().includes(searchQuery.toLowerCase()) || element.artist.toString().toLowerCase().includes(searchQuery.toLowerCase())) { return element }
  //   })
  //   const searchResultsPlaylists = playlists.filter((element) => {
  //     if (element.name.toString().toLowerCase().includes(searchQuery.toLowerCase())) { return element }
  //   })
  //   const searchResultsAlbums = albums.filter((element) => {
  //     if (element.name.toString().toLowerCase().includes(searchQuery.toLowerCase()) || element.artist.toString().toLowerCase().includes(searchQuery.toLowerCase())) { return element }
  //   })
  //   const searchResultsArtists = artists.filter((element) => {
  //     if (element.name.toString().toLowerCase().includes(searchQuery.toLowerCase())) { return element }
  //   })
  //   setsearchResults({
  //     searchResultsSongs: {searchResultsSongs},
  //     searchResultsPlaylists: {searchResultsPlaylists},
  //     searchResultsAlbums: {searchResultsAlbums},
  //     searchResultsArtists: {searchResultsArtists},
  //   })
  //   console.log();
  // }

  return (
    <div>
      <div className='border-black border-2 flex justify-center m-9'>
        <input type="text" placeholder="Buscar" value={searchInput} className="border-rose-600 border-2 h-12 w-4/12" onChange={(e) => handleChange(e)} />
      </div>
      <div className='border-black border-2'>
        <div className="border-rose-600 border-2">

         { searchInput ? <List object={searchResults.searchResultsSongs} sectionTitle="Songs" dataType="song" />:null }

        </div>
        <div className="border-rose-600 border-2">
          {/* <List object={searchData.artistas} sectionTitle="Artists" /> */}

        </div>
        <div className="border-rose-600 border-2">
          {/* <List object={searchData.albumes} sectionTitle="Albums" /> */}

        </div>
        <div className="border-rose-600 border-2">
          {/* <List object={searchData.playlists} sectionTitle="Playlists" /> */}
        </div>
      </div>
    </div>
  )
}
