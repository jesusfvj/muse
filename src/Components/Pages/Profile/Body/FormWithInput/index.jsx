import React from "react";
import { Typography } from "../../../../index";
import { InputElement } from "./InputElement";

export const FormWithInput = ({ text, name, type, value, nameTwo, input }) => {

    return (
        <div className='w-[90%] sm:w-[30%]'>
            <Typography text={text} type="p1" color="white" family="lato" styles="text-lg mb-[1rem]"/>
            <form className='flex flex-col gap-4 pt-[1rem]'>
                <InputElement text={text} name={name} type={type} value={value} input={input}/>
                <InputElement text={text} name={nameTwo} type={type} input={input}/>
            </form>
        </div>
    )
}