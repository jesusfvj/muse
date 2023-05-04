import React, { useState } from "react";
import { Button } from "../../Button";



const EditSongForm = ({ handleToggleSongModal }) => {
    const [editSongName, setEditSongName] = useState({
        name: "",
        artist: "",
    });


    function handleEditSongName(e) {
        if (e.target){
        setEditSongName({
            ...editSongName,
            name: e.target.value
        });
    }}

    function saveEditSongName() {
        console.log(editSongName);
    }

    function handleDeleteSong(){

    }




    return (
        <div className="w-screen h-screen fixed top-0 flex items-center justify-center bg-black/50 backdrop-blur-md z-[999999]" onClick={handleToggleSongModal}>
            <div className="w-1/2 h-1/2 bg-gradient-to-b from-[#4A4A4A] to-[#0A4148] flex flex-col items-center gap-8 justify-between p-6 rounded-md" onClick={(e) => e.stopPropagation()}>
                    <input
                    placeholder="Song name"
                    type="text"
                    value={editSongName.name}
                    onChange={handleEditSongName}
                />
                <Button onClick={saveEditSongName} text="Save" color="gray"/>
            </div>
        </div>
    );
};

export default EditSongForm;