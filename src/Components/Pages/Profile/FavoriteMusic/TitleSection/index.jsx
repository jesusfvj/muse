import { Typography } from "../../../../Typography"


export const TitleSection = ({titleSection, styles=""}) => {
    return (
        <div className={`w-full h-full pl-[1rem] xs:mb-[1rem] md:mb-[3rem] ${styles}`}>
            <Typography text={titleSection} type="section" color="white" family="lato" styles="text-left" />
        </div>
    )
}
