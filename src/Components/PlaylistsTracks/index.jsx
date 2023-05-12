import { useState } from "react";
import { PlaylistsElements } from "./PlaylistsElements";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { Typography } from "../Typography";
import { Button } from "../Button";
import { AddSongsModal } from "../Pages/Playlist";
import { useUI } from "../../Context/UI/UIContext";
import { useUser } from "../../Context/UserContext/UserContext";
import { useNavigate } from "react-router";

export const PlaylistsTracks = ({
  songs,
  styles,
  isFollowed,
  isOwner,
  playlist,
}) => {
  const { handleToggleEditPlaylistModal } = useUI();
  const {
    deleteSinglePlaylist,
    user: { _id },
  } = useUser();
  const navigate = useNavigate();
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isAddSongsModalOpen, setIsAddSongsModalOpen] = useState(false);
  const handleToggleDropdown = (id) => {
    if (activeDropdown == id) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(id);
    }
  };

  const openEditModal = () => {
    handleToggleEditPlaylistModal(playlist);
  };
  // loggedUserId, playlistId
  const deletePlaylist = () => {
    deleteSinglePlaylist(_id, playlist._id);
    setTimeout(() => {
      navigate("/main");
    }, 1000);
  };
console.log(songs.map(song=>song.followedBy));
  return (
    <div className={`flex flex-col ${styles}`}>
      <div className="flex items-center justify-end m-4 gap-4">
        {isOwner && (
          <div className="flex gap-4 w-full md:w-1/2">
            <Button
              text="Add songs"
              color="primary"
              onClick={() => setIsAddSongsModalOpen(true)}
            />
            <Button text="Edit" color="gray" onClick={openEditModal} />
            <Button text="Delete" color="danger" onClick={deletePlaylist} />
          </div>
        )}
      </div>
      {songs.length ? (
        songs.map((song, idx) => {
          const { name, duration, artist, followedBy } = song;
          return (
            <PlaylistsElements
              key={`${name}-${idx}`}
              activeDropdown={activeDropdown}
              handleToggleDropdown={handleToggleDropdown}
              id={song._id}
              artist={artist}
              nombre={name}
              duration={duration}
              idx={idx}
              followedBy={followedBy}
            />
          );
        })
      ) : (
        <Typography text="This playlist does not have any song" />
      )}
      {isAddSongsModalOpen && (
        <div
          className="fixed top-0 bottom-0 left-0 right-0 m-auto bg-black/90 h-screen w-screen backdrop-blur-sm z-40 flex items-center justify-center"
          onClick={() => setIsAddSongsModalOpen(false)}
        >
          <AddSongsModal />
        </div>
      )}
    </div>
  );
};
