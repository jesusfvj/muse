import {InputWithLabel} from '../../../../../InputWithLabel'
import { AiFillEye } from 'react-icons/ai';
import { RxEyeClosed } from 'react-icons/rx';
import { useState } from 'react';

export const InputElement = ({ name, type, value, input }) => {

    const [clicked, setClicked] = useState(true)
    const [typeState, setTypeState] = useState("password")

    if (type=="password") type=typeState

    const handleLoginInputChange = (e) => {
        setLoginData({ ...loginData, [e.target.name]: e.target.value });
    };

    return (
        <div className="relative">
            <InputWithLabel
                name={name}
                label={name}
                type={type}
                value={value}/* {loginData.username} */
                onInputChange={handleLoginInputChange}
            />
            {
                input=="password" &&
                <div className='text-white absolute right-0 top-[1rem] cursor-pointer'>
                    {clicked
                        ? <RxEyeClosed onClick={() => { setClicked(false); setTypeState("text") }} />
                        : <AiFillEye onClick={() => { setClicked(true); setTypeState("password") }} />}
                </div>
            }
        </div>
    )
}
