import { arrayList } from "../../../../../../src/data/Profile/Profile";
import { PublicList } from "../../../../PublicList/PublicList";
import { Typography } from "../../../../Typography";

export const YourListsSection = () => {
    return (
        <div className="flex flex-col justify-center items-center gap-y-[2rem] pl-[4rem]">
            {arrayList.map((list, i) => {
                return (
                    <div key={`${list}-${i}`} className="relative">
                        <PublicList list={list} />
                        <div className="absolute top-[-0.5rem] right-[0.75rem] cursor-pointer">
                            <Typography text="Show all" type="p1" color="white" family="lato" />
                        </div>
                    </div>
                );
            })}
        </div>
    )
}
