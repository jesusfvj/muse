import { SecondBodySectionElement } from "../FollowingSection/SecondBodySectionElement";

export const YourListsSection = ({object}) => {
    return (
        <div className="flex flex-col gap-[5rem]">
        <SecondBodySectionElement
        object={object}
        sectionTitle="Your public lists"
        datatype="song"
        />
        <SecondBodySectionElement
        object={object}
        sectionTitle="Your private lists"
        datatype="playlist"
        />
    </div>
    )
}
