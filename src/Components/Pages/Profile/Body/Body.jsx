import React from 'react'
import InputWithLabel from '../../../Form'
import { Typography } from '../../../Typography'
import { FormWithInput } from './FormWithInput/FormWithInput';

const arrayInputs = [{
    text: "Change your username",
    name: "your username",
    type: "text",
    value: "your username",
    nameTwo: "new username",
    input:"text"
},
{
    text: "Change your password",
    name: "your password",
    type: "password",
    value: "your password",
    nameTwo: "new password",
    input: "password"
}
]

export const Body = () => {
    return (
            <div className="px-[5rem]">
                <div className='flex justify-between pt-[3rem]'>
                    <div className="w-screen col-span-2 pt-[3rem]">
                        <Typography text="Hi!" type="big" color="white" family="lato" />
                        <Typography text="Molongui!" type="headline" color="white" family="lato" />
                        <div className="mt-[1rem]">
                            <Typography text="10 lists" type="p1" color="secondary" family="lato" />
                            <Typography text="25 followed & 13 followers" type="p1" color="secondary" family="lato" />
                        </div>
                    </div>
                    <div className="w-[22rem] h-[15rem] bg-[#373737] rounded-full drop-shadow-lg cursor-pointer bg-no-repeat bg-center bg-[url('../../../../src/assets/icons/userIcon.png')] hover:bg-[url('../../../../src/assets/icons/editIcon.png')]"></div>
                </div>
                <div className='pt-[2rem]'>
                    <Typography text="Settings" type="big" color="white" family="lato" />
                </div>
                <div className='flex justify-between pr-[2rem]'>
                    {arrayInputs.map(({ text, name, type, value, nameTwo, input }, index) => {
                        return <FormWithInput key={`input-${index}`} text={text} name={name} nameTwo={nameTwo} type={type} value={value} input={input}/>
                    })}
                    <div className="">
                        <Typography text="Payment details" type="p1" color="white" family="lato" />
                    </div>
                </div>
            </div>
    )
}
