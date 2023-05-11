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

  return (
    <BasePlaylistModal
      handleToggleCreatePlaylistModal={handleToggleCreatePlaylistModal}
      imageFile={imageFile}
      setImageFile={setImageFile}
      playlistData={playlistData}
      setPlaylistData={setPlaylistData}
      previewImg={previewImg}
      setPreviewImg={setPreviewImg}
      type="CREATE_PLAYLIST"
    />
  )
};
