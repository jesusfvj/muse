import { Typography } from "../../../Typography";

export const ArtistInfo = ({ artist }) => {
  const { profilePhoto, fullName, followedBy } = artist;

  return (
    <div className=" w-3/4  flex flex-col md:flex-row gap-6 pt-20 pb-6">
    <div className="flex items-center justify-center">
      <img
        src={profilePhoto}
        className="h-[20vh] w-[20vh] md:h-full aspect-square object-cover rounded-full"
      />
    </div>
      <div>
        <Typography text={fullName} type="title" color="white" />
        <Typography text={`${followedBy.length} followers`} color="white" />
        {/* <Typography text="453.546.345 plays" color="white" /> */}
      </div>
    </div>
  );
};
