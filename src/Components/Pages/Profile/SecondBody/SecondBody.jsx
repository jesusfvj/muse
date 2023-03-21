import { AlbumTracks } from '../../../AlbumTracks';
import { songs } from '../../../../data/data.js';
import { TitleSection } from './TitleSection';
import { FollowingSection } from './FollowingSection';
import { YourListsSection } from './YourListsSection';

export const SecondBody = () => {
    return (
        <>
            <div className='flex xs:hidden w-screen h-[8rem] bg-gradient-to-b from-[#354749] to-[#02040C] sm:pl-[4rem]'></div>
            <div className='min-h-screen bg-gradient-to-b from-[#02040C] to-[#0A4148] sm:ml-[5rem] xs:mt-[8rem] sm:rounded-tl-[3rem] sm:pl-[4rem]'>
                <TitleSection titleSection="Following" />
                <FollowingSection />
                <TitleSection titleSection="Your lists" />
                <YourListsSection />
                <TitleSection titleSection="Most listened songs this month" />
                <AlbumTracks songs={songs} styles="sm:pr-[3rem] pb-[6rem]" />
            </div>
        </>
    )
}
