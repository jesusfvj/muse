import { FavoriteMusicElement } from "../FavoriteMusicElement";

export const FollowingSection = ({object, datatype}) => {
    return (
    <div className="flex flex-col gap-[5rem]">
        <FavoriteMusicElement
        object={object}
        sectionTitle="Public lists"
        datatype={datatype}
        />
        <FavoriteMusicElement
        object={object}
        sectionTitle="Private lists"
        datatype={datatype}
        />
    </div>
    )
}