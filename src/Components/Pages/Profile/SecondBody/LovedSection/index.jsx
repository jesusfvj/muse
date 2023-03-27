import { SecondBodySectionElement } from '../FollowingSection/SecondBodySectionElement'

export const LovedSection = ({object1, object2}) => {
    return (
        <div className="flex flex-col gap-[5rem]">
            <SecondBodySectionElement
                object={object1}
                sectionTitle="Albums"
                datatype="album"
            />
            <SecondBodySectionElement
                object={object2}
                sectionTitle="Songs"
                datatype="song"
            />
        </div>
    )
}
