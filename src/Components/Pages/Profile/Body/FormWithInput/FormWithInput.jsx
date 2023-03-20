import React from 'react'
import { Typography } from '../../../../Typography';
import { InputElement } from './InputElement/InputElement';

export const FormWithInput = ({ text, name, type, value, nameTwo, input }) => {

    

    return (
        <div>
            <Typography text={text} type="p1" color="white" family="lato" />
            <form className='flex flex-col gap-8 pt-[1rem]'>
                <InputElement text={text} name={name} type={type} value={value} input={input}/>
                <InputElement text={text} name={nameTwo} type={type} input={input}/>
            </form>
        </div>
    )
}

{/* <div className="relative">
                    <InputWithLabel
                        name={nameTwo}
                        label={nameTwo}
                        type={type}
                        value="" {loginData.username}
                        onInputChange={handleLoginInputChange}
                    />
                    <div className='text-white absolute right-0 top-[1rem]'>
                        <AiFillEye />
                    </div>
                </div> */}