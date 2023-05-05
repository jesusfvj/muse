import { AiFillDelete } from "react-icons/ai";
import { Button } from "../Button";
import { InputWithLabel } from "../InputWithLabel";
import { Typography } from "../Typography"

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

    const handleInputChange = (event) => {
        setRegisterData({
            ...registerData,
            [event.target.name] : event.target.value
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
        <div className="flex items-end gap-5 w-full">
            <Typography
                text={index + 1}
                type="p1"
                color="white"
            />
            <input
                type="file"
                accept="image/*"
                id={`imageFile${index}`}
                multiple={false}
                className="hidden"
                onChange={(event) => handleImageChange(event, index)}
            />
            <label htmlFor={`imageFile${index}`}>
                <img src={previewImage[index]} alt="Selected image" className="w-20 h-20 cursor-pointer" />
            </label>
            <InputWithLabel
                name={`songTitle${index + 1}`}
                label="Song Title"
                type="text"
                value={registerData[`songTitle${index+1}`]}
                onInputChange={handleInputChange}
                sizeContainer="w-1/4"
                styles="text-xs"
            />
            <InputWithLabel
                name={`artistName${index + 1}`}
                label="Artist name"
                type="text"
                value={user.fullName}
                readonly
                sizeContainer="w-1/4"
                styles="text-xs"
            />
            <InputWithLabel
                name={`genre${index + 1}`}
                label="Genre"
                type="text"
                sizeContainer="w-1/4"
                styles="text-xs"
                value={registerData[`genre${index+1}`]}
                onInputChange={handleInputChange}
            />
            <div className="w-1/8 h-full">
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
