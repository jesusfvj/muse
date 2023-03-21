import { Typography } from "../../../../Typography"
import { FormWithInput } from "../FormWithInput"
import { arrayInputs } from '../../../../../data/Profile/Profile.js';

export const ProfileInputSection = () => {
    return (
        <div className='flex flex-col xs:flex-row gap-16 justify-between items-center'>
            {arrayInputs.map(({ text, name, type, value, nameTwo, input }, index) => {
                return <FormWithInput key={`input-${index}`} text={text} name={name} nameTwo={nameTwo} type={type} value={value} input={input} />
            })}
            <div className="xs:self-start w-[90%] sm:w-[30%]">
                <Typography text="Payment details" type="p1" color="white" family="lato" styles="text-lg mb-[1rem] text-left" />
            </div>
        </div>
    )
}
