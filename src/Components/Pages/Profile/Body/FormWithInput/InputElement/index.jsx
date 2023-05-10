import { InputWithLabel } from "../../../../../index";
import { AiFillEye } from "react-icons/ai";
import { RxEyeClosed } from "react-icons/rx";
import { useState } from "react";

export const InputElement = ({ name, type, value, input, onInputChange }) => {
  const [clicked, setClicked] = useState(true);
  
  return (
    <div className="relative">
      <InputWithLabel
        name={name}
        label={name}
        type={type}
        value={value} /* {loginData.username} */
        onInputChange={onInputChange}
      />
      {input == "password" && (
        <div className="text-white absolute right-0 top-[1rem] cursor-pointer">
          {clicked ? (
            <RxEyeClosed
              onClick={() => {
                setClicked(false);
              }}
            />
          ) : (
            <AiFillEye
              onClick={() => {
                setClicked(true);
              }}
            />
          )}
        </div>
      )}
    </div>
  );
};
