import React, { useRef, useState } from "react";
import { BiImageAdd } from "react-icons/bi";
import { InputWithLabel } from "../InputWithLabel";
import { Typography } from "../Typography";
import { Button } from "../Button";
import { createPlaylist } from "../../API/MusicApi/MusicApi";
import { useUser } from "../../Context/UserContext/UserContext";

export const EditPlaylistModal = ({
  handleToggleEditPlaylistModal,
  playlist,
}) => {
  const {
    user: { _id },
    createSinglePlaylist,
  } = useUser();

  const [playlistData, setPlaylistData] = useState({
    name: playlist.name,
    img: playlist.thumbnail,
  });

  const [previewImg, setPreviewImg] = useState(playlist.thumbnail);

  const handleAddImage = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setPreviewImg(reader.result);
    };
    // setPlaylistData({ ...playlistData, img: e.target.files[0] });
  };

  const handleSubmitForm = async () => {
   console.log(playlistData)
  };

  const inputRef = useRef();
  return (
    <div
      className="w-screen h-screen fixed top-0 flex items-center justify-center bg-black/50 backdrop-blur-md z-[999999]"
      onClick={handleToggleEditPlaylistModal}
    >
      <div
        className="w-5/6 md:w-1/2 h-2/3 bg-gradient-to-b from-[#4A4A4A] to-[#0A4148] p-6 rounded-md"
        onClick={(e) => e.stopPropagation()}
      >
        <form
          className="w-full h-full flex flex-col items-center gap-8 justify-around"
          onSubmit={handleSubmitForm}
        >
          <div className="w-full md:w-2/3">
            <InputWithLabel
              type="text"
              name="name"
              label="Name of the playlist"
              value={playlistData.name}
              onInputChange={(e) =>
                setPlaylistData({ ...playlistData, name: e.target.value })
              }
            />
          </div>

          <input
            id="file"
            type="file"
            name="img"
            onChange={handleAddImage}
            className="hidden"
            ref={inputRef}
          />
          <div
            className={`w-64 h-64  relative ${
              !previewImg && "border border-white"
            } flex items-center justify-center rounded-md`}
          >
            <label
              onClick={() => inputRef.current.click()}
              className="text-6xl text-white cursor-pointer"
            >
              {previewImg ? (
                <img
                  src={previewImg}
                  className="w-full h-full object-cover shadow-md"
                />
              ) : (
                <BiImageAdd />
              )}
            </label>
          </div>

          <div className="w-2/3">
            <Button
              text="Edit playlist"
              color="gray"
              onClick={handleSubmitForm}
            />
          </div>
        </form>
      </div>
    </div>
  );
};
