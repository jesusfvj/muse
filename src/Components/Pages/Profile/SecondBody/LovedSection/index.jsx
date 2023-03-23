import React from 'react'
import { SecondBodySectionElement } from '../FollowingSection/SecondBodySectionElement'
import { arrayTodaysHits } from "../../../../../../src/data/Profile/Profile";

export const LovedSection = () => {
    return (
        <div className="flex flex-col gap-[5rem]">
            <SecondBodySectionElement
                object={arrayTodaysHits}
                sectionTitle="Albums"
                datatype="album"
            />
            <SecondBodySectionElement
                object={arrayTodaysHits}
                sectionTitle="Songs"
                datatype="song"
            />
        </div>
    )
}
