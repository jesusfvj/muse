import { useState } from "react";
import { PlaylistsElements } from "./PlaylistsElements";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { Typography } from "../Typography";
import { Button } from "../Button";
import { AddSongsModal } from "../Pages/Playlist";
import { useUI } from "../../Context/UI/UIContext";
import { useUser } from "../../Context/UserContext/UserContext";
import { useNavigate } from "react-router";
import { ProfileLoader } from "../Pages/Profile/ProfileLoader";

export const PlaylistsTracks = ({
  songs,
  styles,
  playlistId,
  isOwner,
  playlist,
}) => {
  const {
    handleToggleEditPlaylistModal,
    setMessageSuccessToaster,
    setMessageErrorToaster,
  } = useUI();
  const {
    deleteSinglePlaylist,
    user: { _id },
  } = useUser();
  const navigate = useNavigate();
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isAddSongsModalOpen, setIsAddSongsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
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
  const deletePlaylist = async () => {
    setIsLoading(true);
    const response = await deleteSinglePlaylist(_id, playlist._id);
    setIsLoading(false);
    if (response.ok) {
      setMessageSuccessToaster("Playlist deleted successfully");
    } else {
      setMessageErrorToaster(
        "There was an error trying to delete the playlist. Please try again."
      );
    }
    setTimeout(() => {
      navigate("/main");
    }, 1000);
  };

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
              track={song}
              songs={songs}
            />
          );
        })
      ) : (
        <div className="flex items-center justify-center text-center">
          <Typography text="This playlist does not have any song" type="important"/>
        </div>
      )}
      {isAddSongsModalOpen && (
        <div
          className="fixed top-0 bottom-0 left-0 right-0 m-auto bg-black/90 h-screen w-screen backdrop-blur-sm z-40 flex items-center justify-center"
          onClick={() => setIsAddSongsModalOpen(false)}
        >
          <AddSongsModal playlistId={playlistId} songs={songs} />
        </div>
      )}
      {isLoading && <ProfileLoader modal={true} text="Deleting playlist..." />}
    </div>
  );
};
