import React, { useEffect, useState } from "react";
import { List } from "../Components";

export const Search = () => {
  const searchData = {
    canciones: [
      {
        id: "1",
        titulo: "Bohemian Rhapsody",
        artista: "Queen",
        album: "A Night at the Opera",
      },
      {
        id: "2",
        titulo: "Stairway to Heaven",
        artista: "Led Zeppelin",
        album: "Led Zeppelin IV",
      },
      {
        id: "3",
        titulo: "Hotel California",
        artista: "Eagles",
        album: "Hotel California",
      },
      {
        id: "4",
        titulo: "Imagine",
        artista: "John Lennon",
        album: "Imagine",
      },
      {
        id: "5",
        titulo: "Smells Like Teen Spirit",
        artista: "Nirvana",
        album: "Nevermind",
      },
    ],
    artistas: [
      {
        id: "1",
        nombre: "Queen",
        popularidad: 90,
      },
      {
        id: "2",
        nombre: "Led Zeppelin",
        popularidad: 85,
      },
      {
        id: "3",
        nombre: "Eagles",
        popularidad: 80,
      },
      {
        id: "4",
        nombre: "John Lennon",
        popularidad: 75,
      },
      {
        id: "5",
        nombre: "Nirvana",
        popularidad: 70,
      },
    ],
    albumes: [
      {
        id: "1",
        titulo: "A Night at the Opera",
        artista: "Queen",
        lanzamiento: "1975",
      },
      {
        id: "2",
        titulo: "Led Zeppelin IV",
        artista: "Led Zeppelin",
        lanzamiento: "1971",
      },
      {
        id: "3",
        titulo: "Hotel California",
        artista: "Eagles",
        lanzamiento: "1976",
      },
      {
        id: "4",
        titulo: "Imagine",
        artista: "John Lennon",
        lanzamiento: "1971",
      },
      {
        id: "5",
        titulo: "Nevermind",
        artista: "Nirvana",
        lanzamiento: "1991",
      },
    ],
    playlists: [
      {
        id: "1",
        nombre: "Classic Rock",
        canciones: [
          {
            id: "1",
            titulo: "Bohemian Rhapsody",
            artista: "Queen",
            album: "A Night at the Opera",
          },
          {
            id: "2",
            titulo: "Stairway to Heaven",
            artista: "Led Zeppelin",
            album: "Led Zeppelin IV",
          },
          {
            id: "3",
            titulo: "Hotel California",
            artista: "Eagles",
            album: "Hotel California",
          },
        ],
      },
      {
        id: "2",
        nombre: "90's Pop",
        canciones: [
          {
            id: "6",
            titulo: "Wannabe",
            artista: "Spice Girls",
            album: "Spice",
          },
          {
            id: "7",
            titulo: "I Will Always Love You",
            artista: "Whitney Houston",
            album: "The Bodyguard Soundtrack",
          },
          {
            id: "8",
            titulo: "Baby One More Time",
            artista: "Britney Spears",
            album: "Baby One More Time",
          },
        ],
      },
      {
        id: "3",
        nombre: "Chillout",
        canciones: [
          {
            id: "9",
            titulo: "Breathe Me",
            artista: "Sia",
            album: "Colour the Small One",
          },
          {
            id: "10",
            titulo: "Mad World",
            artista: "Gary Jules",
            album: "Donnie Darko Soundtrack",
          },
          {
            id: "11",
            titulo: "Skinny Love",
            artista: "Bon Iver",
            album: "For Emma, Forever Ago",
          },
        ],
      },
    ],
  };

  return (
    <div>
      <div className="border-black border-2 flex justify-center m-9">
        <input
          type="text"
          placeholder="Buscar"
          className="border-rose-600 border-2 h-12 w-4/12"
        />
      </div>
      <div className="border-black border-2">
        <div className="border-rose-600 border-2">
          <List object={searchData.canciones} sectionTitle="Songs" />
        </div>
        <div className="border-rose-600 border-2">
          <List object={searchData.artistas} sectionTitle="Artists" />
        </div>
        <div className="border-rose-600 border-2">
          <List object={searchData.albumes} sectionTitle="Albums" />
        </div>
        <div className="border-rose-600 border-2">
          <List object={searchData.playlists} sectionTitle="Playlists" />
        </div>
      </div>
    </div>
  );
};
