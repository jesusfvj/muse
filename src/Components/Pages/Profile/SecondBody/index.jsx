import { Typography } from '../../../Typography';
import { arrayTodaysHits, arraySectionTitles, arrayList } from "../../../../data/Profile/Profile";
import { List } from '../../MainPage';
import { PublicList } from '../../../PublicList/PublicList';
import { AlbumTracks } from '../../../AlbumTracks';
import { songs } from '../../../../data/data.js';

export const SecondBody = () => {
    return (
        <div className='min-h-screen bg-gradient-to-b from-[#02040C] to-[#0A4148] sm:ml-[5rem] mt-[8rem] sm:rounded-tl-[3rem] sm:pl-[4rem]'>
            <div className="w-full h-full pt-[3rem]">
                <Typography text="Following" type="big" color="white" family="lato" />
            </div>
            <div className="flex flex-col justify-center items-center gap-y-[2rem] pt-[4rem]">
                {arraySectionTitles.map((section, i) => {
                    return (
                        <div className="relative">
                            <List
                                key={`${section.artist}-${i}`}
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
            <div className="flex flex-col justify-center items-center gap-y-[2rem] pl-[4rem]">
                {arrayList.map((list, i) => {
                    return (
                        <div key={`public-list-${i}`} className="relative">
                            <PublicList list={list}/>
                            <div className="absolute top-[-0.5rem] right-[0.75rem] cursor-pointer">
                                <Typography text="Show all" type="p1" color="white" family="lato" />
                            </div>
                        </div>
                    );
                })}
            </div>
            <div>
                <AlbumTracks songs={songs} styles="sm:pr-[3rem] pb-[6rem]"/>
            </div>
        </div>
    )
}
