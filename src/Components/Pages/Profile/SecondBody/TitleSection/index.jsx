import { Typography } from "../../../../Typography"


export const TitleSection = ({titleSection}) => {
    return (
        <div className="w-full h-full pt-[2rem] p-[1rem] xs:py-[3rem] sm:px-0">
            <Typography text={titleSection} type="section" color="white" family="lato" styles="text-left" />
        </div>
    )
}
