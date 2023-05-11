import { useEffect, useState } from "react";
import { GrUploadOption } from "react-icons/gr";
import { BiEditAlt } from "react-icons/bi";
import { toastMessageError, toastMessageSuccess } from "../../../../../Utils/toaster";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Typography } from "../../../../Typography";
import { Button } from "../../../../Button";
import { useUser } from "../../../../../Context/UserContext/UserContext";

export const EditUserPhoto = ({ user, isLoggedUserProfile }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isHoveredUpload, setIsHoveredUpload] = useState(false);
  const [dragActive, setDragActive] = useState(false);
  const [profileImage, setProfileImage] = useState(user.profilePhoto);
  const [imageFile, setImageFile] = useState(null);
  const [showSaveButton, setShowSaveButton] = useState(false);
  const { updateProfileImage } = useUser()

  const handleFileInputChange = async (e) => {
    if (e.target.files[0]) {
      const file = e.target.files[0];
      setImageFile(file)
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        setProfileImage(reader.result);
      };
      setShowSaveButton(true)
    }
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
    if (e.dataTransfer.items[0]) {
      const file = e.dataTransfer.items[0].getAsFile();
      setImageFile(file)
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        setPreviewImg(reader.result);
        setShowSaveButton(true)
      };
    }
  };

  const handleSubmitForm = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.set(`profileImageFile`, imageFile)
    const response = await updateProfileImage(formData, user._id);
    if (response.ok) {
      toastMessageSuccess("Profile image successfuly saved.");
      setShowSaveButton(false)
    } else {
      toastMessageError("Something went wrong. Please try again.")
    }
  };

  useEffect(() => {
    setProfileImage(user.profilePhoto);
  }, [user])

  return (
    <>
      {
        isLoggedUserProfile
          ? <form className={`relative flex justify-center items-center w-[10rem] h-[10rem] xs:max-w-[12rem] xs:w-[12rem]
      xs:h-[12rem] sm:max-w-[12rem] lg:w-[18rem] lg:h-[18rem] lg:max-w-[18rem] bg-[#373737] rounded-full drop-shadow-lg}`}
            onDragEnter={handleDrag}
            onSubmit={handleSubmitForm}
          >
            <input
              type="file"
              id="fileInput"
              multiple
              accept="image/*"
              onChange={handleFileInputChange}
              onSubmit={(e) => e.preventDefault()}
              className="hidden"
            />
            <label className="relative flex rounded-full justify-center items-center h-full w-full"
              htmlFor="fileInput">
              <img
                src={profileImage}
                className="w-full rounded-full h-full object-cover cursor-pointer"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              />
              {dragActive &&
                <div className="absolute h-full w-full top-0 right-0 left-0 bottom-0 rounded-full bg-white bg-opacity-50"></div>
              }
            </label>
            {
              dragActive && <div className="absolute w-full h-full rounded-full top-0 right-0 left-0 bottom-0"
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}>
              </div>
            }
            {
              isHovered && !showSaveButton && (
                <div
                  className="absolute top-4 right-4 rounded-full p-2 bg-white cursor-pointer"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <BiEditAlt className=" text-2xl" />
                </div>
              )
            }
            {
              showSaveButton &&
              <div
                className="absolute h-10 w-10 top-4 right-4 rounded-full bg-white hover:bg-gray-300 transition duration-500"
                onMouseEnter={() => setIsHoveredUpload(true)}
                onMouseLeave={() => setIsHoveredUpload(false)}
              >
                <Button
                  text={<Typography
                    text={<GrUploadOption />}
                    type="p1"
                    color={`${isHoveredUpload ? "white" : "black"}`}
                  />}
                  typeButton="submit"
                  size="sm"
                  color="transparent"
                  styles="cursor-pointer rounded-full"
                />
              </div>
            }
            <ToastContainer />
          </form >
          :
          <div className="flex justify-center items-center w-[10rem] h-[10rem] xs:max-w-[12rem] xs:w-[12rem]
          xs:h-[12rem] sm:max-w-[12rem] lg:w-[18rem] lg:h-[18rem] lg:max-w-[18rem] bg-[#373737] rounded-full drop-shadow-lg}">
            <img
              src={profileImage}
              className="w-full rounded-full h-full object-cover cursor-pointer"
            />
          </div>
      }
    </>
  );
};