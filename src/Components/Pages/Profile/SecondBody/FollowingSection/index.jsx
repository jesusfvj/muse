import { arrayTodaysHits } from "../../../../../../src/data/Profile/Profile";
import { SecondBodySectionElement } from "./SecondBodySectionElement";

export const FollowingSection = () => {
    return (
    <div className="flex flex-col gap-[5rem]">
        <SecondBodySectionElement
        object={arrayTodaysHits}
        sectionTitle="Artists"
        datatype="artist"
        />
    </div>
    )
}