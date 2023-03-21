import React from 'react'
import { Typography } from '../../../Typography'
import { FormWithInput } from './FormWithInput'


const arrayInputs = [{
    text: "Change your username",
    name: "your username",
    type: "text",
    value: "your username",
    nameTwo: "new username",
    input: "text"
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
        <>
            <div className='w-screen flex xs:hidden flex-col justify-center items-center pt-10'>
                <img src="../../../../../src/assets/logo/logoWhite.png" alt="muze logo" className="w-16 h-16" />
                <Typography text="Muze" type="big" color="white" family="lato" />
            </div>
            <div className="xs:px-[5rem]">
                <div className='flex flex-col xs:flex-row justify-between items-center xs:pt-[3rem]'>
                    <div className="flex flex-col justify-center items-center xs:items-start w-screen pt-[3rem]">
                        <Typography text="Hi!" type="big" color="white" family="lato" />
                        <Typography text="Molongui!" type="headline" color="white" family="lato" />
                        <div className="flex flex-col justify-center items-center xs:items-start mt-[1rem]">
                            <Typography text="10 lists" type="p1" color="secondary" family="lato" />
                            <Typography text="25 followed & 13 followers" type="p1" color="secondary" family="lato" />
                        </div>
                    </div>
                    <div className="w-[10rem] h-[10rem] flex justify-center items-center xs:w-[22rem] xs:h-[15rem] bg-[#373737] rounded-full drop-shadow-lg cursor-pointer mt-[3rem] xs:mt-0">
                        <div className="w-[3rem] h-[3rem] xs:w-[8rem] xs:h-[8rem] hover:xs:w-[5rem] hover:xs:h-[5rem] bg-[url('../../../../src/assets/icons/userIcon.png')] hover:bg-[url('../../../../src/assets/icons/editIcon.png')] bg-no-repeat bg-cover bg-center"></div>
                    </div>
                </div>
                <div className='pt-[4rem] pb-[3rem] flex justify-center items-center xs:justify-start xs:items-center'>
                    <Typography text="Settings" type="big" color="white" family="lato" styles="text-4xl"/>
                </div>
                <div className='flex flex-col xs:flex-row gap-16 justify-between items-center'>
                    {arrayInputs.map(({ text, name, type, value, nameTwo, input }, index) => {
                        return <FormWithInput key={`input-${index}`} text={text} name={name} nameTwo={nameTwo} type={type} value={value} input={input} />
                    })}
                    <div className="xs:self-start w-[90%] sm:w-[30%]">
                        <Typography text="Payment details" type="p1" color="white" family="lato" styles="text-lg mb-[1rem] text-left"/>
                    </div>
                </div>
            </div>
        </>
    )
}
