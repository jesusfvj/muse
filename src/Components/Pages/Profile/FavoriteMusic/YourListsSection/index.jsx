import { FavoriteMusicElement } from "../FavoriteMusicElement";

export const YourListsSection = ({object}) => {
    return (
        <div className="flex flex-col md:gap-[5rem]">
        <FavoriteMusicElement
        object={object}
        sectionTitle="Your public lists"
        datatype="song"
        />
        <FavoriteMusicElement
        object={object}
        sectionTitle="Your private lists"
        datatype="playlist"
        />
    </div>
    )
}
