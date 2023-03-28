import { Typography } from "../../../../Typography"
import { FormWithInput } from "../FormWithInput"
import { arrayInputs } from '../../../../../data/Profile/Profile.js';
import { Button } from "../../../../Button";
import { InputElement } from "../FormWithInput/InputElement";

export const ProfileInputSection = () => {
    const handleClick = (event) => {
        event.preventDefault();
    }
    return (
        <section>
            <div className='flex flex-col sm:flex-row gap-16 sm:gap-6 lg:gap-16 justify-between items-center'>
                {arrayInputs.map(({ text, name, type, value, nameTwo, input }, index) => {
                    return <FormWithInput key={`input-${index}`} text={text} name={name} nameTwo={nameTwo} type={type} value={value} input={input} />
                })}
                <div className="self-center sm:self-start w-[90%] sm:w-[30%]">
                    <Typography text="Payment details" type="subSection" color="white" family="lato" styles="text-lg mb-[1rem] text-left" />
                    <form className='flex flex-col gap-4 pt-[1rem]'>
                        <InputElement text="Introduce your bank details" name="Introduce your bank details" type="text" input="text" />
                        <div className="invisible">
                            <InputElement text="Introduce your bank details" name="Introduce your bank details" type="text" input="text" />
                        </div>
                    </form>
                </div>
            </div>
            <div className="mt-[4rem] flex justify-start">
                <div className="w-[10rem]">
                    <Button text="Save" color="black" size="sm" onClick={handleClick} />
                </div>
            </div>
        </section>
    )
}
