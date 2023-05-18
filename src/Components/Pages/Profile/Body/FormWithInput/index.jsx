import { Typography } from "../../../../index";
import { InputElement } from "./InputElement";
import { Button } from "../../../../index";

export const FormWithInput = ({ text, name, type, valueOne, valueTwo, nameTwo, input, onInputChange, handleSubmit }) => {

    return (
        <div className='w-[90%] sm:w-[30%]'>
            <Typography text={text} type="subSection" color="white" family="lato" styles="text-lg mb-[1rem]" />
            <form className='flex flex-col gap-4 pt-[1rem]'
                onSubmit={handleSubmit}>
                <InputElement text={text} name={name} type={type} value={valueOne} input={input} onInputChange={onInputChange} />
                <InputElement text={text} name={nameTwo} type={type} value={valueTwo} input={input} onInputChange={onInputChange} />
                <div className="mt-[4rem] flex justify-start w-full">
                    <Button text="Save" typeButton="submit" color="black" size="md" />
                </div>
            </form>
        </div>
    )
}