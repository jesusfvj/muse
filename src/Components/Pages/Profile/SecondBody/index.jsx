import { AlbumTracks } from '../../../AlbumTracks';
import { songs } from '../../../../data/data.js';
import { TitleSection } from './TitleSection';
import { FollowingSection } from './FollowingSection';
import { YourListsSection } from './YourListsSection';
import { LovedSection } from './LovedSection';

export const SecondBody = () => {
    return (
        <div className='flex flex-col gap-[5rem] min-h-screen bg-gradient-to-b from-[#02040C] to-[#0A4148] xs:ml-[1rem] sm:ml-[3rem] lg:ml-[5rem] pt-[4rem] mt-[8rem] xs:rounded-tl-[3rem] sm:pl-[4rem] sm:pr-[3rem]'>
            <div>
                <TitleSection titleSection="Following" />
                <FollowingSection />
            </div>
            <div>
                <TitleSection titleSection="Loved ones" />
                <LovedSection />
            </div>
            <div>
                <TitleSection titleSection="Your lists" />
                <YourListsSection />
            </div>
            <div>
                <TitleSection titleSection="Most listened songs this week" />
                <AlbumTracks songs={songs} styles="sm:pr-[3rem]" />
            </div>
            <div>
                <TitleSection titleSection="Most listened songs this month" />
                <AlbumTracks songs={songs} styles="sm:pr-[3rem] pb-[6rem]" />
            </div>
        </div>
    )
}
