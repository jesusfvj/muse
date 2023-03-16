import { Typography } from "../../../Typography"
import { ListElement } from "./ListElement/ListElement"

export const List = ({object, sectionTitle}) => {
  return (
    <div className="w-[80%] h-[35vh]">
      <Typography text={sectionTitle} type={"p2"} color={"white"} family={"lato"} styles={"mb-[0.2rem]"}/>
      <section className="w-[100%] h-[90%] flex flex-row gap-x-[1rem] overflow-x-scroll scroll-smooth">
        {object.map((object, index)=>{
          return <ListElement key={index} object={object}/>
        })}
      </section>
    </div>
  )
}
