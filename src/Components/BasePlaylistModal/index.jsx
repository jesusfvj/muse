import { useRef, useState } from "react";
import { BiImageAdd } from "react-icons/bi";
import { InputWithLabel } from "../InputWithLabel";
import { Typography } from "../Typography";
import { ProfileLoader } from "../Pages/Profile/ProfileLoader";
import { Button } from "../Button";
import { useUser } from "../../Context/UserContext/UserContext";
import { useUI } from "../../Context/UI/UIContext";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toastMessageError } from "../../Utils/toaster";

export const BasePlaylistModal = (
    {
        handleToggleModal,
        imageFile,
        setImageFile,
        playlistData,
        setPlaylistData,
        previewImg,
        setPreviewImg,
        elementId,
        type,
        stringObject
    }) => {
    const {successfulMessage, loadingMessage, buttonText, headerInputText} = stringObject
    const { setMessageSuccessToaster, setMessageErrorToaster } = useUI()
    const [isLoading, setIsLoading] = useState(false);
    const [dragActive, setDragActive] = useState(false);
    const [isHovering, setIsHovering] = useState(false);
    const inputRef = useRef();

    const {
        user: { _id },
        createSinglePlaylist,
        updatePlaylist,
        updateSong,
        updateAlbum
    } = useUser();

    const MAX_FILE_SIZE = 10485760;

    const handleAddImage = (e) => {
        const file = e.target.files[0];
        if (file && file.size <= MAX_FILE_SIZE) {
            setImageFile(file)
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
                setPreviewImg(reader.result);
            };
        } else {
            toastMessageError(`Please choose an image with a size less than: ${MAX_FILE_SIZE/1000000}MB`)
        }
        // setPlaylistData({ ...playlistData, img: e.target.files[0] });
    };

    const handleSubmitForm = async (event) => {
        event.preventDefault();
        if (previewImg !== null && playlistData.name !== "") {
            setIsLoading(true)
            const formData = new FormData();
            formData.set(`imagePlaylistFile`, imageFile)
            formData.set(`imagePlaylistData`, JSON.stringify(playlistData))
            let response = ""
            switch (type) {
                case "CREATE_PLAYLIST":
                    response = await createSinglePlaylist(formData, _id);
                    break;
                case "EDIT_PLAYLIST":
                    response = await updatePlaylist(formData, elementId);
                    break;
                case "EDIT_SONG":
                    response = await updateSong(formData, elementId);
                    break;
                case "EDIT_ALBUM":
                    response = await updateAlbum(formData, elementId);
                    break;
                default:
                    break;
            }
            setIsLoading(false)
            if (response.ok) {
                handleToggleModal();
                setMessageSuccessToaster(`${successfulMessage}`);
            } else {
                setMessageErrorToaster(response.msg)
            }
        } else {
            toastMessageError("Please choose a name and image for the playlist.")
        }
    };

    const handleDrag = (event) => {
        event.preventDefault();
        event.stopPropagation();

        switch (event.type) {
            case "dragenter":
            case "dragover":
                setDragActive(true);
                break;
            case "dragleave":
                setDragActive(false);
                break;
            default:
                break;
        }
    };

    const handleDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);
        if (e.dataTransfer.items[0]) {
            const file = e.dataTransfer.items[0].getAsFile();
            if (file && file.size <= MAX_FILE_SIZE) {
                setImageFile(file)
                const reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = () => {
                    setPreviewImg(reader.result);
                }
            } else {
                toastMessageError(`Please choose an image with a size less than: ${MAX_FILE_SIZE}`)
            }
        };
    };

    return (
        <div
            className="w-screen h-screen fixed top-0 flex items-center justify-center bg-black/50 backdrop-blur-md z-[999999]"
            onClick={handleToggleModal}
        >
            <div
                className="w-5/6 md:w-1/2 h-2/3 bg-gradient-to-b from-[#4A4A4A] to-[#0A4148] p-6 rounded-md"
                onClick={(e) => e.stopPropagation()}
            >
                <form
                    className="w-full h-full flex flex-col items-center gap-5 justify-around"
                    onSubmit={handleSubmitForm}
                >
                    <div className="w-full md:w-2/3">
                        <InputWithLabel
                            type="text"
                            name="name"
                            label={`${headerInputText}`}
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
                        accept="image/*"
                        onChange={handleAddImage}
                        className="hidden"
                        ref={inputRef}
                    />
                    <label
                        className={`w-64 h-64 relative ${!previewImg && "border-2 border-white border-dashed transition duration-500"
                            } flex items-center justify-center rounded-md cursor-pointer ${dragActive ? "hover:border-red-400" : "hover:border-gray-400"}`}
                        onClick={() => inputRef.current.click()}
                        onMouseOver={() => setIsHovering(true)}
                        onMouseOut={() => setIsHovering(false)}
                        onDragEnter={handleDrag}
                    >
                        <div
                            className="text-6xl text-white h-full w-full flex justify-center items-center"
                        >
                            {previewImg ? (
                                <img
                                    src={previewImg}
                                    className="w-full h-full object-cover shadow-md rounded"
                                />
                            ) : (
                                <div className="flex justify-center items-center h-full w-full">
                                    {dragActive ?
                                        <Typography
                                            text="Drop it like is hot!"
                                            type="p1"
                                            color="danger"
                                            styles="text-center"
                                        />
                                        :
                                        <Typography
                                            text={<BiImageAdd />}
                                            type="important"
                                            color={`${!isHovering ? 'white' : 'primary'}`}
                                        />
                                    }
                                </div>
                            )}
                        </div>
                        {dragActive && <div className="absolute w-full h-full top-0 right-0 left-0 bottom-0"
                            onDragEnter={handleDrag}
                            onDragLeave={handleDrag}
                            onDragOver={handleDrag}
                            onDrop={handleDrop}>
                        </div>}
                    </label>
                    {type === "CREATE_PLAYILIST" &&
                        <div className="flex items-center gap-4">
                            <label htmlFor="file" className="text-white">
                                <Typography text="Make this playlist private" />
                            </label>
                            <input
                                id="checkbox"
                                type="checkbox"
                                name="isPrivate"
                                onChange={() =>
                                    setPlaylistData({
                                        ...playlistData,
                                        isPrivate: !playlistData.isPrivate,
                                    })
                                }
                            />
                        </div>
                    }
                    <div className="w-2/3">
                        <Button
                            text={`${buttonText}`}
                            color="gray"
                            typeButton="submit"
                        />
                    </div>
                </form>
            </div>
            {isLoading && <ProfileLoader modal={true} text={`${loadingMessage}`} />}
            <ToastContainer />
        </div>
    );
};
