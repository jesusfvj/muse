import { Typography } from "../../../../Typography"


export const TitleSection = ({titleSection}) => {
    return (
        <div className="w-full h-full py-[3rem] px-[1rem] sm:px-0">
            <Typography text={titleSection} type="big" color="white" family="lato" styles="text-left text-4xl" />
        </div>
    )
}
