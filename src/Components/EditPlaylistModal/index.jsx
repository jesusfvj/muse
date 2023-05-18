import { useState } from "react";
import { BasePlaylistModal } from "../BasePlaylistModal";

export const EditPlaylistModal = ({ handleToggleEditPlaylistModal, playlist }) => {
  const [imageFile, setImageFile] = useState(null)

  const [playlistData, setPlaylistData] = useState({
    name: playlist.name
  });

  const [previewImg, setPreviewImg] = useState(playlist.thumbnail);

  const stringObject = {
    successfulMessage: "Playlist successfuly updated.",
    loadingMessage: "Editing playlist...",
    buttonText: "Edit playlist",
    headerInputText: "Name of the playlist",
  }

  return (
    <BasePlaylistModal
      handleToggleModal={handleToggleEditPlaylistModal}
      imageFile={imageFile}
      setImageFile={setImageFile}
      playlistData={playlistData}
      setPlaylistData={setPlaylistData}
      previewImg={previewImg}
      setPreviewImg={setPreviewImg}
      elementId={playlist._id}
      type="EDIT_PLAYLIST"
      stringObject={stringObject}
    />
  )
};
