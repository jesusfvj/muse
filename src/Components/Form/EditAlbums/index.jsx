import { useState } from "react";
import { useUI } from "../../../Context/UI/UIContext";
import { BasePlaylistModal } from "../../BasePlaylistModal";

const EditAlbumForm = ({ handleToggleAlbumModal }) => {
    const { currentAlbum } = useUI()

    const [imageFile, setImageFile] = useState(null)

    const [playlistData, setPlaylistData] = useState({
        name: currentAlbum.name,
    });

    const [previewImg, setPreviewImg] = useState(currentAlbum.thumbnailUrl);

    const stringObject = {
        successfulMessage: "album successfuly updated.",
        loadingMessage: "Editing album...",
        buttonText: "Edit album",
        headerInputText: "Name of the album",
    }

    return (
        <BasePlaylistModal
            handleToggleModal={handleToggleAlbumModal}
            imageFile={imageFile}
            setImageFile={setImageFile}
            playlistData={playlistData}
            setPlaylistData={setPlaylistData}
            previewImg={previewImg}
            setPreviewImg={setPreviewImg}
            elementId={currentAlbum._id}
            stringObject={stringObject}
            type="EDIT_ALBUM"
        />
    )
};

export default EditAlbumForm;