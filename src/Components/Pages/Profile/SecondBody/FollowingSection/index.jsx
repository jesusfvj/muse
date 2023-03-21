import { arrayTodaysHits, arraySectionTitles } from "../../../../../../src/data/Profile/Profile";
import { Typography } from "../../../../Typography";
import { List } from "../../../MainPage";

export const FollowingSection = () => {
    return (
        <div className="flex flex-col justify-center items-center gap-y-[2rem]">
            {arraySectionTitles.map((section, i) => {
                return (
                    <div key={`${section.artist}-${i}`} className="relative">
                        <List
                            object={arrayTodaysHits}
                            sectionTitle={section}
                            style="w-[calc((100vw)/6.5)]"
                        />
                        <div className="absolute top-[-0.5rem] right-[0.75rem] cursor-pointer">
                            <Typography text="Show all" type="p1" color="white" family="lato" />
                        </div>
                    </div>
                );
            })}
        </div>
    )
}
