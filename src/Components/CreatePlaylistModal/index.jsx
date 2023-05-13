import { useState } from "react";
import { BasePlaylistModal } from "../BasePlaylistModal";

export const CreatePlaylistModal = ({ handleToggleCreatePlaylistModal }) => {
  const [imageFile, setImageFile] = useState(null)

  const [playlistData, setPlaylistData] = useState({
    name: "",
    img: "https://cdn10.phillymag.com/wp-content/uploads/sites/3/2020/09/monthly-playlist.jpg",
    isPrivate: false,
  });

  const [previewImg, setPreviewImg] = useState(null);

  const stringObject = {
    successfulMessage: "Playlist successfuly submitted.",
    loadingMessage: "Uploading playlist....",
    buttonText: "Create new playlist",
    headerInputText: "Name of the playlist",
  }

  return (
    <BasePlaylistModal
      handleToggleModal={handleToggleCreatePlaylistModal}
      imageFile={imageFile}
      setImageFile={setImageFile}
      playlistData={playlistData}
      setPlaylistData={setPlaylistData}
      previewImg={previewImg}
      setPreviewImg={setPreviewImg}
      stringObject={stringObject}
      type="CREATE_PLAYLIST"
    />
  )
};
