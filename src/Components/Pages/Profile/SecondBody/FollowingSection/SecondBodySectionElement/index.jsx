import { List, Typography } from "../../../../.."

export const SecondBodySectionElement = ({object, sectionTitle, datatype}) => {
  return (
    <div className="flex flex-col justify-center items-center gap-y-[2rem] pr-[2rem] relative">
            <List
                object={object}
                sectionTitle={sectionTitle}
                textType="big"
                dataType={datatype}
            />
            <div className="absolute top-[1rem] right-4 xs:right-[4.75rem] cursor-pointer">
                <Typography text="Show all" type="p1" color="white" family="lato" />
            </div>
        </div>
  )
}
