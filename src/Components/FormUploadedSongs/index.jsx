import { useRef, useState } from "react"
import { Button } from "../Button"
import { FormUploadedSongsComponent } from "../FormUploadedSongsComponent"
import { InputWithLabel } from "../InputWithLabel"
import { Typography } from "../Typography"
import editMusicIcon from "../../../public/icons/editSongImg.png"

export const FormUploadedSongs = ({selectedFiles, setSelectedFiles}) => {
    const [isAlbumChecked, setIsAlbumChecked] = useState(false);
    const [albumInputValue, setAlbumInputValue] = useState('');
    const [previewImage, setPreviewImage] = useState([]);
    const [registerData, setRegisterData] = useState({});
    const [filesFormData, setFilesFormData] = useState();
    const [imageFiles, setImageFiles] = useState([]);
    const buttonSaveRef = useRef(null);
    const { user } = useUser()

    const handleSubmit = async (event) => {
        event.preventDefault();
        const form = event.target;
        const formDataForm = new FormData(form);
        const data = Object.fromEntries(formDataForm.entries());
        const dataFiltered = {};
        for (const key in data) {
            const num = key.match(/\d+$/)[0];
            if (!dataFiltered[`formDataFile${num}`]) {
                dataFiltered[`formDataFile${num}`] = {};
            }
            dataFiltered[`formDataFile${num}`][key.replace(/\d+$/, "")] = data[key];
        }
        if (isAlbumChecked) {
            for (let key in dataFiltered) {
                dataFiltered[key].albumName = albumInputValue
            }
        }
        Object.values(selectedFiles).map((selectedFile, index) => {
            const stringifiedData = JSON.stringify(dataFiltered[`formDataFile${index + 1}`])
            filesFormData.set(`dataFile${index + 1}`, stringifiedData)
            filesFormData.set(`imageFile${index + 1}`, imageFiles[index])
        })

        setFilesFormData(filesFormData)
        const response = await uploadSongsAPI(filesFormData);
        /*  if (response.ok) {
            //show toaster
            setShowUploadSongsModal(false)
        } */
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

    const handleClickHiddenButton = () => {
        buttonSaveRef.current.click();
    };

    const handleCheckboxChange = (event) => {
        setIsAlbumChecked(event.target.checked);
    };

    const handleTextInputChange = (event) => {
        setAlbumInputValue(event.target.value);
    };

    useEffect(() => {
        if (selectedFiles) {
            console.log(selectedFiles)
            const formData = new FormData();
            let copyRegisterData = { ...registerData }

            Object.values(selectedFiles).map((selectedFile, index) => {
                formData.set(`file${index + 1}`, selectedFile);
                copyRegisterData = {
                    ...copyRegisterData,
                    [`genre${index + 1}`]: "",
                    [`songTitle${index + 1}`]: selectedFile.name
                }
            });

            if (previewImage.length === 0) {
                Object.values(selectedFiles).forEach(() => {
                    previewImage.push(editMusicIcon)
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
        <div className="w-[80%]">
            <div className="m-8 flex flex-col items-center">
                <label className="flex gap-4">
                    <input className="mt-1" type="checkbox" checked={isAlbumChecked} onChange={handleCheckboxChange} />
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
                        onInputChange={handleTextInputChange}
                        sizeContainer="w-[20vw] mt-10"
                        styles="text-xs"
                    />
                )}
            </div>
            <form
                className="flex flex-col items-center gap-3 max-h-[10vh] overflow-auto"
                onSubmit={handleSubmit}
            >
                {isAlbumChecked &&
                    <InputWithLabel
                        /* name="albumName" */
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
            <div className="w-[15rem] h-[3rem] self-start mt-10">
                <Button
                    typeButton="submit"
                    text="Save"
                    color="black"
                    size="sm"
                    onClick={handleClickHiddenButton}
                />
            </div>
        </div>
    )
}
