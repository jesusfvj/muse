import { useState } from "react";
import { Button } from "../Button"
import { Typography } from "../Typography"

export const FormUploadSongs = ({setSelectedFiles}) => {
    const [dragActive, setDragActive] = useState(false);

    const handleFileInputChange = (event) => {
        const arraySelectedFiles = Array.from(event.target.files)
        setSelectedFiles(arraySelectedFiles);
    }

    const handleDrag = (event) => {
        event.preventDefault();
        event.stopPropagation();
        if (event.type === "dragenter" || event.type === "dragover") {
            setDragActive(true);
        } else if (event.type === "dragleave") {
            setDragActive(false);
        }
    };

    const handleDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            const arraySelectedFiles = Array.from(e.dataTransfer.files)
            setSelectedFiles(arraySelectedFiles);
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
                        <label htmlFor="fileInput" className={`relative flex justify-center items-center border-2 border-dashed rounded h-[30vh] cursor-pointer ${dragActive ? "border-red-400 bg-gray-200" : "border-gray-400"}`}>
                            <div className="flex justify-center items-center">
                                {dragActive ?
                                    <Typography
                                        text="Drop it like is hot!"
                                        type="p1"
                                        color="secondary"
                                        styles="text-center"
                                    />
                                    :
                                    <Typography
                                        text="Drag and drop your files here or"
                                        type="p1"
                                        color="white"
                                        styles="w-[50%] text-center"
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
