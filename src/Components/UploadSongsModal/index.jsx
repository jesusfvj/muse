import { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import { Typography } from '../Typography';
import { FormUploadSongs } from "../FormUploadSongs";
import { FormUploadedSongs } from "../FormUploadedSongs";

export const UploadSongsModal = ({ setShowUploadSongsModal }) => {
    const [filesUploaded, setFilesUploaded] = useState(false);
    const [selectedFiles, setSelectedFiles] = useState();

    const closeModal = () => {
        setShowUploadSongsModal(false)
    }

    useEffect(() => {
     console.log(filesUploaded)
    }, [filesUploaded])
    

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
                    ? <FormUploadSongs
                        setSelectedFiles={setSelectedFiles}
                        setFilesUploaded={setFilesUploaded}/>
                    : <FormUploadedSongs
                        selectedFiles={selectedFiles}
                        setSelectedFiles={setSelectedFiles}
                        />
                }
            </div>
        </div>
    )
}