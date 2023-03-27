import { AlbumTracks } from '../../../AlbumTracks';
import { getAlbums, getArtists, getPlaylists, getSongs } from "../../../../API/MusicApi/MusicApi";
import { songs2 } from '../../../../data/data.js';
import { TitleSection } from './TitleSection';
import { FollowingSection } from './FollowingSection';
import { YourListsSection } from './YourListsSection';
import { LovedSection } from './LovedSection';
import { useQuery } from "@tanstack/react-query";

export const SecondBody = () => {
    const {
        data: songs,
        isLoading: isLoadingSongs,
        error: errorSongs,
      } = useQuery({ queryKey: ["songs"], queryFn: getSongs });
      const {
        data: albums,
        isLoading: isLoadingAlbums,
        error: errorAlbums,
      } = useQuery({ queryKey: ["albums"], queryFn: getAlbums });
      const {
        data: artists,
        isLoading: isLoadingArtists,
        error: errorArtists,
      } = useQuery({ queryKey: ["artists"], queryFn: getArtists });
      const {
        data: playlists,
        isLoading: isLoadingPlaylists,
        error: errorPlaylists,
      } = useQuery({ queryKey: ["playlists"], queryFn: getPlaylists });

      console.log(songs, artists, playlists)
    return (
        <div className='flex flex-col gap-[5rem] min-h-screen bg-gradient-to-b from-[#02040C] to-[#0A4148] xs:ml-[1rem] sm:ml-[3rem] lg:ml-[5rem] pt-[4rem] mt-[8rem] xs:rounded-tl-[3rem] sm:pl-[4rem] sm:pr-[3rem]'>
            <div>
                <TitleSection titleSection="Following" />
                <FollowingSection object={artists}/>
            </div>
            <div>
                <TitleSection titleSection="Loved ones" />
                <LovedSection  object1={albums} object2={songs} />
            </div>
            <div>
                <TitleSection titleSection="Your lists" />
                <YourListsSection object={playlists}/>
            </div>
            <div>
                <TitleSection titleSection="Most listened songs this week" />
                <AlbumTracks songs={songs2} styles="sm:pr-[3rem]" />
            </div>
            <div>
                <TitleSection titleSection="Most listened songs this month" />
                <AlbumTracks songs={songs2} styles="sm:pr-[3rem] pb-[6rem]" />
            </div>
        </div>
    )
}
