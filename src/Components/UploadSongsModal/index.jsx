import { useState } from "react";
import { Typography } from '../Typography';
import { FormUploadSongs } from "../FormUploadSongs";
import { FormUploadedSongs } from "../FormUploadedSongs";

export const UploadSongsModal = ({ setShowUploadSongsModal }) => {
    const [filesUploaded, setFilesUploaded] = useState(false);
    const [selectedFiles, setSelectedFiles] = useState();

    return (
        <div className='fixed inset-0 flex items-center justify-center z-[40]'>
            <div
                className="fixed inset-0 bg-black/50 backdrop-blur-md z-[40]"
                onClick={()=>setShowUploadSongsModal(false)}
            ></div>
            <div className={`relative flex flex-col items-center gap-8 bg-gradient-to-b from-[#4A4A4A] to-[#0A4148] w-[80vw] ${!filesUploaded ? 'h-fit' : 'h-[90vh]'} px-6 py-20 rounded-lg z-[40]`}>
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