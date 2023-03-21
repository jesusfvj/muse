import { SecondBodySectionElement } from "../FollowingSection/SecondBodySectionElement";
import { arrayTodaysHits } from "../../../../../../src/data/Profile/Profile";

export const YourListsSection = () => {
    return (
        <div className="flex flex-col gap-[5rem]">
        <SecondBodySectionElement
        object={arrayTodaysHits}
        sectionTitle="Your public lists"
        datatype="playlist"
        />
        <SecondBodySectionElement
        object={arrayTodaysHits}
        sectionTitle="Your private lists"
        datatype="playlist"
        />
    </div>
    )
}
