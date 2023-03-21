import { SecondBodySectionElement } from "../FollowingSection/SecondBodySectionElement";
import { arrayTodaysHits } from "../../../../../../src/data/Profile/Profile";
import { useEffect, useState } from "react";

const url = "http://localhost:3000/tracks";

export const YourListsSection = () => {
    const [dataFetch, setDataFetch] = useState([])

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const response = await fetch(url);
                const data = await response.json();
                return setDataFetch(data)
            } catch (error) {
                console.log(error);
            }
        }
        fetchImages();
    }, [])

    return (
        <div className="flex flex-col gap-[5rem]">
        <SecondBodySectionElement
        object={dataFetch}
        sectionTitle="Your public lists"
        datatype="song"
        />
        <SecondBodySectionElement
        object={arrayTodaysHits}
        sectionTitle="Your private lists"
        datatype="playlist"
        />
    </div>
    )
}
