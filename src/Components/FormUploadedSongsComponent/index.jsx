import { AiFillDelete } from "react-icons/ai";
import { Button } from "../Button";
import { InputWithLabel } from "../InputWithLabel";
import { Typography } from "../Typography";
import { BiImageAdd } from "react-icons/bi";
import { useState } from "react";

export const FormUploadedSongsComponent = (
    {
        index,
        user,
        handleRemoveFile,
        previewImage,
        setPreviewImage,
        registerData,
        setRegisterData,
        setImageFiles,
        imageFiles
    }) => {

    const [isHovering, setIsHovering] = useState(false);
    const handleInputChange = (event) => {
        setRegisterData({
            ...registerData,
            [event.target.name]: event.target.value
        })
    }

    const handleImageChange = (event, index) => {
        const file = event.target.files[0];
        console.log(file)
        if (file) {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
                setPreviewImage([
                    ...previewImage.slice(0, index),
                    reader.result,
                    ...previewImage.slice(index + 1)
                ]);
            };
            setImageFiles([
                ...imageFiles.slice(0, index),
                file,
                ...imageFiles.slice(index + 1)
            ])
        }
    };

    return (
        <div className="flex flex-col sm:flex-row items-center sm:items-end gap-10 sm:gap-5 w-full py-5 sm:py-0">
            <Typography
                text={index + 1}
                type="p1"
                color="white"
                styles="hidden sm:flex"
            />
            <Typography
                text={`Track ${index + 1}`}
                type="big"
                color="white"
                styles="flex sm:hidden"
            />
            <input
                type="file"
                accept="image/*"
                id={`imageFile${index}`}
                multiple={false}
                className="hidden"
                onChange={(event) => handleImageChange(event, index)}
            />
            <label htmlFor={`imageFile${index}`} className="w-40 h-40 sm:w-24 sm:h-20">
                {previewImage[index]===""
                    ? <div
                        className='h-full w-full flex justify-center items-center border border-white border-dashed rounded-md transition duration-500 hover:border-gray-400 cursor-pointer'
                        onMouseOver={()=>setIsHovering(true)}
                        onMouseOut={()=>setIsHovering(false)}
                        >
                        <Typography
                        text={<BiImageAdd />}
                        type="icon"
                        color={`${!isHovering ? 'white' : 'primary' }`}
                        styles="ml-1"
                    />
                    </div>
                    : <img src={previewImage[index]} alt="Selected image" className="w-full h-full cursor-pointer object-cover rounded" />
                }
            </label>
            <InputWithLabel
                name={`songTitle${index + 1}`}
                label="Song Title"
                type="text"
                value={registerData[`songTitle${index + 1}`]}
                onInputChange={handleInputChange}
                sizeContainer="w-full sm:w-1/4"
                styles="text-xs"
                required={true}
            />
            <InputWithLabel
                name={`artistName${index + 1}`}
                label="Artist name"
                type="text"
                value={user.fullName}
                readonly={true}
                required={true}
                sizeContainer="w-full sm:w-1/4"
                styles="text-xs"
            />
            <InputWithLabel
                name={`genre${index + 1}`}
                label="Genre"
                type="text"
                sizeContainer="w-full sm:w-1/4"
                styles="text-xs"
                value={registerData[`genre${index + 1}`]}
                required={true}
                onInputChange={handleInputChange}
            />
            <div className="w-full sm:w-fit h-8 sm:h-[5vh] rounded bg-red-400 transition duration-500 hover:bg-red-500 sm:bg-transparent hover:sm:bg-transparent">
                <Button
                    text={<Typography
                        text={<AiFillDelete />}
                        type="p1"
                        color="white"
                        styles="flex justify-center items-center cursor-pointer"
                    />}
                    size="sm"
                    color="transparent"
                    styles="cursor-pointer"
                    onClick={() => { handleRemoveFile(index) }}
                />
            </div>
        </div>
    )
}
