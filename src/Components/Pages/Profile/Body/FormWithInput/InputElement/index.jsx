import { InputWithLabel } from "../../../../../index";
import { AiFillEye } from "react-icons/ai";
import { RxEyeClosed } from "react-icons/rx";
import { useState } from "react";

export const InputElement = ({ name, type, value, input, onInputChange, readonly }) => {
  const [inputType, setInputType] = useState(type);
  
  return (
    <div className="relative">
      <InputWithLabel
        name={name}
        label={name}
        type={inputType}
        value={value} /* {loginData.username} */
        onInputChange={onInputChange}
        readonly={readonly}
      />
      {input === "password" && (
        <div className="text-white absolute right-0 top-[1rem] cursor-pointer">
          {inputType==="password" ? (
            <RxEyeClosed
              onClick={() => {
                setInputType("text");
              }}
            />
          ) : (
            <AiFillEye
              onClick={() => {
                setInputType("password");
              }}
            />
          )}
        </div>
      )}
    </div>
  );
};
