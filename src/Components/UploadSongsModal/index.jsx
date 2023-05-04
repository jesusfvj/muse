import { useEffect, useRef, useState } from "react";
import { IoClose } from "react-icons/io5";
import { Button } from "../Button";
import { Typography } from '../Typography';
import { uploadSongsAPI } from "../../API/SongsUpload";
import editMusicIcon from "../../../public/icons/editSongImg.png"
import { useUser } from "../../Context/UserContext/UserContext";
import { FormUploadedSongs } from "../FormUploadedSongs";
import { FormUploadSongs } from "../FormUploadSongs";

export const UploadSongsModal = ({ setShowUploadSongsModal }) => {
    const [selectedFiles, setSelectedFiles] = useState();
    const [filesUploaded, setFilesUploaded] = useState(false);
    const [filesFormData, setFilesFormData] = useState();
    const [image, setImage] = useState([]);
    const { user } = useUser()
    const buttonSaveRef = useRef(null);
    const [registerData, setRegisterData] = useState({});

    const handleSubmit = async (event) => {
        event.preventDefault();
        const form = event.target;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
        console.log(data)
        const dataFiltered = {};
        for (const key in data) {
            const num = key.match(/\d+$/)[0];
            if (!dataFiltered[`formDataFile${num}`]) {
                dataFiltered[`formDataFile${num}`] = {};
            }
            dataFiltered[`formDataFile${num}`][key.replace(/\d+$/, "")] = data[key];
        }
        filesFormData.forEach((fileFormData, index) => {
            /* console.dir(dataFiltered[`formDataFile${index + 1}`]) */
            fileFormData.append(`dataFile${index + 1}`, dataFiltered[`formDataFile${index + 1}`])
            fileFormData.append(`imageFile${index + 1}`, image[index])
        });
        setFilesFormData(filesFormData)
        const response = await uploadSongsAPI(filesFormData);
        if(response.ok){
            //show toaster
            setShowUploadSongsModal(false)
        }
    }

    const handleRemoveFile = (indexFileToRemove) => {
        const arrayFilesFiltered = selectedFiles.filter((selectedFile, index) => {
            if (index != indexFileToRemove) {
                return selectedFile
            }
        })
        setSelectedFiles(arrayFilesFiltered)
        setImage([
            ...image.slice(0, indexFileToRemove),
            ...image.slice(indexFileToRemove + 1)
        ]);
    }

    const closeModal = () => {
        setShowUploadSongsModal(false)
    }

    const handleClickHiddenButton = () => {
        buttonSaveRef.current.click();
      };


    useEffect(() => {
        if (selectedFiles) {
            let copyRegisterData = {...registerData}
            const arrayFormDatas = Object.values(selectedFiles).map((selectedFile, index) => {
                copyRegisterData = {
                    ...copyRegisterData,
                    [`genre${index+1}`]: "",
                    [`songTitle${index+1}`]: selectedFile.name
                }
                const formData = new FormData();
                formData.append(`file${index + 1}`, selectedFile);
                return formData;
            });
            if (image.length === 0) {
                arrayFormDatas.forEach(() => {
                    image.push(editMusicIcon)
                })
                setImage(image)
            }
            setFilesFormData(arrayFormDatas)
            setFilesUploaded(true)
            setRegisterData(copyRegisterData)
        }
    }, [selectedFiles]);

    return (
        <div className='fixed inset-0 flex items-center justify-center z-10'>
            <div className="fixed inset-0 bg-black opacity-50 z-11"></div>
            <div className={`relative flex flex-col items-center gap-16 bg-[#d9d9d9] w-[80vw] ${!filesUploaded ? 'h-fit' : 'h-[80vh]'} px-6 py-20 rounded-lg z-12`}>
                <IoClose
                    className="text-black text-2xl absolute top-5 right-10 cursor-pointer z-50"
                    onClick={closeModal}
                />
                <Typography
                    text="Upload new songs"
                    type="important"
                    color="white"
                />
                {!filesUploaded
                    ? <FormUploadSongs setSelectedFiles={setSelectedFiles} />
                    : <div className="w-[80%]">
                        <form
                            className="flex flex-col items-center gap-3 max-h-[40vh] overflow-auto"
                            onSubmit={handleSubmit}
                        >
                            {selectedFiles.map(({ name }, index) => {
                                return <FormUploadedSongs
                                    key={index}
                                    index={index}
                                    songName={name}
                                    user={user}
                                    handleRemoveFile={handleRemoveFile}
                                    image={image}
                                    setImage={setImage}
                                    registerData={registerData}
                                    setRegisterData={setRegisterData}
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
                }
            </div>
        </div>
    )
}
