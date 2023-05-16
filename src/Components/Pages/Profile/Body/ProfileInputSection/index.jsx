import { FormWithInput } from "../FormWithInput";
import { useState } from "react";
import { useUser } from "../../../../../Context/UserContext/UserContext";
import { ProfileLoader } from "../../ProfileLoader";
import { useUI } from "../../../../../Context/UI/UIContext";

export const ProfileInputSection = () => {
  const { setMessageSuccessToaster, setMessageErrorToaster } = useUI()
  const [newUsername, setNewUsername] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [bankDetails, setBankDetails] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { user, updateUsername } = useUser();

  const handleSubmitUserNameInput = async (event) => {
    event.preventDefault();
    //Set the spinner with a delay of 800ms
    const timeoutId = setTimeout(() => {
      setIsLoading(true);
    }, 800);
    const response = await updateUsername(newUsername, user._id)
    clearTimeout(timeoutId);
    setIsLoading(false)
    if (response.ok) {
      setMessageSuccessToaster("Username successfuly saved.")
      setNewUsername("")
    } else {
      setMessageErrorToaster("Something went wrong. Please try again.")
    }
  };

  const handleSubmitPasswordInput = (event) => {
    event.preventDefault();
  };

  return (
    <section>
      <div className="flex flex-col sm:flex-row gap-16 sm:gap-20  lg:gap-16 justify-start items-center">
        <FormWithInput
          text="Change your username"
          name="your username"
          nameTwo="new username"
          type="text"
          valueOne={user.fullName}
          valueTwo={newUsername}
          input="text"
          onInputChange={(e) => setNewUsername(e.target.value)}
          handleSubmit={handleSubmitUserNameInput}
        />
        <FormWithInput
          text="Change your password"
          name="your password"
          nameTwo="new password"
          type="password"
          valueOne="your password"
          valueTwo={newPassword}
          input="password"
          onInputChange={(e) => setNewPassword(e.target.value)}
          handleSubmit={handleSubmitPasswordInput}
        />
        {/* <FormWithInput
          text="Payment details"
          name="Introduce your bank details"
          nameTwo=""
          type="text"
          valueOne="your bank details"
          valueTwo={bankDetails}
          input="text"
          onInputChange={(e) => setBankDetails(e.target.value)}
          handleSubmit={handleSubmitPasswordInput}
        /> */}
        {/*  <div className="self-center sm:self-start w-[90%] sm:w-[30%]">
          <Typography
            text="Payment details"
            type="subSection"
            color="white"
            family="lato"
            styles="text-lg mb-[1rem] text-left"
          />
          <form className="flex flex-col gap-4 pt-[1rem]">
            <InputElement
              text="Introduce your bank details"
              name="Introduce your bank details"
              type="text"
              input="text"
            />
          </form>
        </div> */}
      </div>
      {isLoading && <ProfileLoader modal={true} text="Uploading data..." />}
    </section>
  );
};
