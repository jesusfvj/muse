import { SecondBodySectionElement } from "./SecondBodySectionElement";

export const FollowingSection = ({object}) => {
    return (
    <div className="flex flex-col gap-[5rem]">
        <SecondBodySectionElement
        object={object}
        sectionTitle="Artists"
        datatype="artist"
        />
    </div>
    )
}