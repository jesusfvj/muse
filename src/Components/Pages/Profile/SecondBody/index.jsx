import { AlbumTracks } from '../../../AlbumTracks';
import { songs } from '../../../../data/data.js';
import { TitleSection } from './TitleSection';
import { FollowingSection } from './FollowingSection';
import { YourListsSection } from './YourListsSection';

export const SecondBody = () => {
    return (
        <div className='flex flex-col gap-[5rem] min-h-screen bg-gradient-to-b from-[#02040C] to-[#0A4148] sm:ml-[5rem] pt-[2rem] mt-[8rem] sm:rounded-tl-[3rem] sm:pl-[4rem]'>
            <div>
                <TitleSection titleSection="Following" />
                <FollowingSection />
            </div>
            <div>
                <TitleSection titleSection="Your lists" />
                <YourListsSection />
            </div>
            <div>
                <TitleSection titleSection="Most listened songs this month" />
                <AlbumTracks songs={songs} styles="sm:pr-[3rem] pb-[6rem]" />
            </div>
        </div>
    )
}
