import { FormWithInput } from "../FormWithInput";
import { useState } from "react";
import { useUser } from "../../../../../Context/UserContext/UserContext";
import { ProfileLoader } from "../../ProfileLoader";
import { useUI } from "../../../../../Context/UI/UIContext";
import { updateUserPassword } from "../../../../../API/UserApi/UserApi";

export const ProfileInputSection = () => {
  const [newUsername, setNewUsername] = useState("");
  const [bankDetails, setBankDetails] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [resetNewPassword, setResetNewPassword] = useState({
    password: "",
    confirm: "",
  });
  const {
    user: { _id: userId, fullName },
    updateUsername,
  } = useUser();
  const { setMessageSuccessToaster, setMessageErrorToaster } = useUI();

  const handleSubmitUserNameInput = async (event) => {
    event.preventDefault();
    //Set the spinner with a delay of 800ms
    const timeoutId = setTimeout(() => {
      setIsLoading(true);
    }, 800);
    const response = await updateUsername(newUsername, userId);
    clearTimeout(timeoutId);
    setIsLoading(false);
    if (response.ok) {
      setMessageSuccessToaster("Username successfully saved.");
      setNewUsername("");
    } else {
      setMessageErrorToaster("Something went wrong. Please try again.");
    }
  };

  const handleSubmitPasswordInput = async (e) => {
    e.preventDefault();

    if (resetNewPassword.password !== resetNewPassword.confirm) {
      alert("Passwords do not match. Please try again.");
      return;
    }

    const response = await updateUserPassword(
      userId,
      resetNewPassword.password,
      resetNewPassword.confirm
    );

    if (response.ok) {
      setMessageSuccessToaster("Password successfully updated.");
      setResetNewPassword({
        password: "",
        confirm: "",
      });
    } else {
      setMessageErrorToaster("Something went wrong. Please try again.");
    }
  };

  return (
    <section>
      <div className="flex flex-col sm:flex-row gap-16 sm:gap-20  lg:gap-16 justify-start items-center">
        <FormWithInput
          text="Change your username"
          name="your username"
          nameTwo="new username"
          type="text"
          valueOne={fullName}
          valueTwo={newUsername}
          input="text"
          onInputChange={(e) => setNewUsername(e.target.value)}
          handleSubmit={handleSubmitUserNameInput}
        />
        <FormWithInput
          text="Change your password"
          name="password"
          nameTwo="confirm"
          type="password"
          valueOne={resetNewPassword.password}
          valueTwo={resetNewPassword.confirm}
          input="password"
          onInputChange={(e) =>
            setResetNewPassword({
              ...resetNewPassword,
              [e.target.name]: e.target.value,
            })
          }
          handleSubmit={handleSubmitPasswordInput}
        />
      </div>
      {isLoading && <ProfileLoader modal={true} text="Uploading data..." />}
    </section>
  );
};
