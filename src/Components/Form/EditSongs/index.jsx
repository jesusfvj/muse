import { useState } from "react";
import { useUI } from "../../../Context/UI/UIContext";
import { BasePlaylistModal } from "../../BasePlaylistModal";

const EditSongForm = ({ handleToggleSongModal }) => {
    const { currentSong } = useUI()

    const [imageFile, setImageFile] = useState(null)

    const [playlistData, setPlaylistData] = useState({
        name: currentSong.name,
    });

    const [previewImg, setPreviewImg] = useState(currentSong.thumbnailUrl);

    const stringObject = {
        successfulMessage: "Song successfuly updated.",
        loadingMessage: "Editing song...",
        buttonText: "Edit song",
        headerInputText: "Name of the song",
    }

    return (
        <BasePlaylistModal
            handleToggleModal={handleToggleSongModal}
            imageFile={imageFile}
            setImageFile={setImageFile}
            playlistData={playlistData}
            setPlaylistData={setPlaylistData}
            previewImg={previewImg}
            setPreviewImg={setPreviewImg}
            elementId={currentSong._id}
            type="EDIT_SONG"
            stringObject={stringObject}
        />
    )
};

export default EditSongForm;