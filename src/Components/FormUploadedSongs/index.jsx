import { useEffect, useRef, useState } from "react"
import { Button } from "../Button"
import { FormUploadedSongsComponent } from "../FormUploadedSongsComponent"
import { InputWithLabel } from "../InputWithLabel"
import { Typography } from "../Typography"
import { useUser } from "../../Context/UserContext/UserContext";
import { uploadSongsAPI } from "../../API/MusicApi/MusicApi";
import { checkForEmptyImageFiles, organizeAndSetDataForm } from "../../Utils/uploadSongsFunctions"
import { ProfileLoader } from "../Pages/Profile/ProfileLoader"
import { useUI } from "../../Context/UI/UIContext"

export const FormUploadedSongs = ({ selectedFiles, setSelectedFiles, setShowUploadSongsModal }) => {
    const { setMessageSuccessToaster, setMessageErrorToaster } = useUI()
    const [isAlbumChecked, setIsAlbumChecked] = useState(false);
    const [albumInputValue, setAlbumInputValue] = useState('');
    const [previewImage, setPreviewImage] = useState([]);
    const [registerData, setRegisterData] = useState({});
    const [filesFormData, setFilesFormData] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [imageFiles, setImageFiles] = useState([]);
    const buttonSaveRef = useRef(null);
    const { user } = useUser()

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!checkForEmptyImageFiles(imageFiles)) {
            setIsLoading(true)
            const filesFormDataFiltered = organizeAndSetDataForm(event.target, isAlbumChecked, albumInputValue, selectedFiles, filesFormData, imageFiles)
            const response = await uploadSongsAPI(filesFormDataFiltered, user._id);
            setIsLoading(false)
            if (response.data.ok) {
                setMessageSuccessToaster("Song/s successfuly submited.");
                setTimeout(() => {
                    setShowUploadSongsModal(false)
                }, 2000);
            } else {
                setMessageErrorToaster("Something went wrong. Please try again.")
            }
        } else {
            setMessageErrorToaster("Please choose an image for every track.")
        }
    }

    const handleRemoveFile = (indexFileToRemove) => {
        const arrayFilesFiltered = selectedFiles.filter((selectedFile, index) => {
            if (index != indexFileToRemove) {
                return selectedFile
            }
        })
        setSelectedFiles(arrayFilesFiltered)
        setPreviewImage([
            ...previewImage.slice(0, indexFileToRemove),
            ...previewImage.slice(indexFileToRemove + 1)
        ]);
        setImageFiles([
            ...imageFiles.slice(0, indexFileToRemove),
            ...imageFiles.slice(indexFileToRemove + 1)
        ])
    }

    useEffect(() => {
        if (selectedFiles) {
            const formData = new FormData();
            let copyRegisterData = { ...registerData }

            Object.values(selectedFiles).map((selectedFile, index) => {
                formData.set(`audioFile${index + 1}`, selectedFile);
                copyRegisterData = {
                    ...copyRegisterData,
                    [`genre${index + 1}`]: "",
                    [`songTitle${index + 1}`]: selectedFile.name
                }
            });

            if (previewImage.length === 0) {
                Object.values(selectedFiles).forEach(() => {
                    previewImage.push("")
                    imageFiles.push("")
                })
                setPreviewImage(previewImage)
                setImageFiles(imageFiles)
            }

            setFilesFormData(formData)
            setRegisterData(copyRegisterData)
        }
    }, [selectedFiles]);

    return (
        <div className="w-[95%] h-full flex flex-col">
            <div className="m-2 flex flex-col sm:flex-row justify-center items-center gap-4">
                <label className="flex gap-4">
                    <input
                        className="sm:mt-1"
                        type="checkbox"
                        checked={isAlbumChecked}
                        onChange={(event) => { setIsAlbumChecked(event.target.checked) }} />
                    <Typography
                        text="Is it an album?"
                        type="p1"
                        color="white"
                    />
                </label>
                {isAlbumChecked && (
                    <InputWithLabel
                        name="albumName"
                        label="Album Title"
                        type="text"
                        value={albumInputValue}
                        onInputChange={(event) => { setAlbumInputValue(event.target.value); }}
                        sizeContainer="w-full sm:w-[20vw]"
                        styles="text-xs"
                    />
                )}
            </div>
            <form
                className={`flex flex-col items-center gap-3 ${isAlbumChecked ? 'max-h-[57vh]' : 'max-h-[65vh]'} sm:max-h-[45vh] overflow-auto`}
                onSubmit={handleSubmit}
            >
                {isAlbumChecked &&
                    <InputWithLabel
                        type="text"
                        value={albumInputValue}
                        sizeContainer="hidden"
                        readonly={true}
                    />
                }
                {selectedFiles.map(({ name }, index) => {
                    return <FormUploadedSongsComponent
                        key={index}
                        index={index}
                        songName={name}
                        user={user}
                        handleRemoveFile={handleRemoveFile}
                        previewImage={previewImage}
                        setPreviewImage={setPreviewImage}
                        registerData={registerData}
                        setRegisterData={setRegisterData}
                        setImageFiles={setImageFiles}
                        imageFiles={imageFiles}
                    />
                })}
                <div className="hidden">
                    <Button
                        typeButton="submit"
                        refElement={buttonSaveRef}
                    />
                </div>
            </form>
            <div className="w-full h-[3rem] sm:w-[10rem] sm:h-[2rem] mt-10 self-center sm:self-start">
                <Button
                    typeButton="submit"
                    text="Save"
                    color="black"
                    size="sm"
                    onClick={() => { buttonSaveRef.current.click(); }}
                />
            </div>
            {isLoading && <ProfileLoader modal={true} text="Uploading data..."/>}
        </div>
    )
}
