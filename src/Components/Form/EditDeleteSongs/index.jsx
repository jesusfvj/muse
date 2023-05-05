import React, { useState } from "react";
import { useUI } from "../../../Context/UI/UIContext";
import { Button } from "../../Button";
import { InputWithLabel } from "../../InputWithLabel";
import { TiTickOutline } from "react-icons/ti";
import { RiDeleteBin6Line } from "react-icons/ri";



const EditSongForm = ({ handleToggleSongModal }) => {
    const { currentSong } = useUI()

    const [editSongName, setEditSongName] = useState({
        name: currentSong.name,
        artist: currentSong.artist
    });


    function handleEditSongName(e) {
        if (e.target) {
            setEditSongName({
                ...editSongName,
                name: e.target.value
            });
        }
    }

    function saveEditSongName() {
        console.log(editSongName);
    }

    function handleDeleteSong() {
        console.log(`Deleted song with ID ${currentSong.id}`);
    }




    return (
        <div className="w-screen h-screen fixed top-0 flex items-center justify-center bg-black/50 backdrop-blur-md z-[999999]" onClick={handleToggleSongModal}>
            <div className="w-1/2 h-1/2 bg-gradient-to-b from-[#4A4A4A] to-[#0A4148] flex flex-row items-center gap-8 p-6 rounded-md place-content-center" onClick={(e) => e.stopPropagation()}>
                <InputWithLabel
                    placeholder="Song name"
                    type="text"
                    value={editSongName.name}
                    onChange={handleEditSongName}
                    label="song name"
                />
                <div className="flex flex-row items-center gap-8 justify-between p-6">
                    <Button onClick={saveEditSongName} text={<TiTickOutline />} color="gray" />
                    <Button onClick={handleDeleteSong} text={<RiDeleteBin6Line />} color="gray" />
                </div>
            </div>
        </div>
    );
};

export default EditSongForm;