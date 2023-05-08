import { useState } from "react";
import { Button } from "../Button";
import { Typography } from "../Typography";
import { BiImageAdd } from "react-icons/bi";

export const FormUploadSongs = ({ setFilesUploaded, setSelectedFiles }) => {
    const [dragActive, setDragActive] = useState(false);
    const [isHovering, setIsHovering] = useState(false);

    const handleFileInputChange = (event) => {
        const arraySelectedFiles = Array.from(event.target.files)
        setSelectedFiles(arraySelectedFiles);
        setFilesUploaded(true)
    }

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
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            const arraySelectedFiles = Array.from(e.dataTransfer.files)
            setSelectedFiles(arraySelectedFiles);
            setFilesUploaded(true)
        }
    };

    return (
        <form className="flex flex-col space-y-4" onDragEnter={handleDrag}>
            <input
                type="file"
                id="fileInput"
                multiple
                accept="audio/*,video/*"
                onChange={handleFileInputChange}
                onSubmit={(e) => e.preventDefault()}
                className="hidden"
            />
            <label
                htmlFor="fileInput"
                onMouseOver={() => setIsHovering(true)}
                onMouseOut={() => setIsHovering(false)}
                className={`relative flex justify-center items-center border-2 border-white border-dashed rounded h-[30vh] cursor-pointer transition duration-500 ${dragActive ? "hover:border-red-400" : "hover:border-gray-400"}`}
                >
                <div className="flex justify-center items-center">
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
                {dragActive && <div className="absolute w-full h-full top-0 right-0 left-0 bottom-0"
                    onDragEnter={handleDrag}
                    onDragLeave={handleDrag}
                    onDragOver={handleDrag}
                    onDrop={handleDrop}>
                </div>}
            </label>
            <div className="w-[20rem] h-[3rem]">
                <Button text="Choose your files" color="black" size="sm" isLabel={true} htmlFor="fileInput" />
            </div>
        </form>
    )
}
