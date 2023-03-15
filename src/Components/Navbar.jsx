import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div className='flex space-x-4 m-5'>
      <NavLink to="/" className={({ isActive}) =>
    ` ${isActive ? "text-red-500 font-bold" : ""}`
  }>Home</NavLink>
      <NavLink to="/playlist" className={({ isActive}) =>
    ` ${isActive ? "text-red-500 font-bold" : ""}`
  }>Playlist</NavLink>
      <NavLink to="/album"className={({ isActive}) =>
    ` ${isActive ? "text-red-500 font-bold" : ""}`
  } >Album</NavLink>
      <NavLink to="/myprofile" className={({ isActive}) =>
    ` ${isActive ? "text-red-500 font-bold" : ""}`
  }>My Profile</NavLink>
      <NavLink to="/profile" className={({ isActive}) =>
    ` ${isActive ? "text-red-500 font-bold" : ""}`
  }>Profile</NavLink>
      <NavLink to="/artist" className={({ isActive}) =>
    ` ${isActive ? "text-red-500 font-bold" : ""}`
  }>Artist</NavLink>
      <NavLink to="/player" className={({ isActive}) =>
    ` ${isActive ? "text-red-500 font-bold" : ""}`
  }>Player</NavLink>
      <NavLink to="/search" className={({ isActive}) =>
    ` ${isActive ? "text-red-500 font-bold" : ""}`
  }>Search</NavLink>
      <NavLink to="/mylibrary" className={({ isActive}) =>
    ` ${isActive ? "text-red-500 font-bold" : ""}`
  }>My Library</NavLink>
    </div>
  )
}
