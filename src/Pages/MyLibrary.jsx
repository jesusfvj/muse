import { Layout } from "../Components/Layout";
import { FollowingSection } from "../Components/Pages/Profile/SecondBody/FollowingSection";
import { TitleSection } from "../Components/Pages/Profile/SecondBody/TitleSection";
import { YourListsSection } from "../Components/Pages/Profile/SecondBody/YourListsSection";

export const MyLibrary = () => {
  return (
    <Layout>
      <div className="z-0 fixed top-0 left-0 right-0 h-screen bg-gradient-to-b from-[#02040C] to-[#0A4148]"></div>
      <div className='flex flex-col gap-[5rem] min-h-screen bg-gradient-to-b from-[#02040C] to-[#0A4148] sm:ml-[5rem] pt-[2rem] mt-[8rem] sm:rounded-tl-[3rem] sm:pl-[4rem]'>
        <div>
          <TitleSection titleSection="Following" />
          <FollowingSection />
        </div>
        <div>
          <TitleSection titleSection="Your lists" />
          <YourListsSection />
        </div>
      </div>
    </Layout>
  );
};
