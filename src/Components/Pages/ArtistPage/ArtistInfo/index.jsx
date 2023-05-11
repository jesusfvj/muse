import { Typography } from "../../../Typography";

export const ArtistInfo = ({ artist }) => {
  const { profilePhoto, fullName, followedBy } = artist;

  return (
    <div className=" w-3/4 h-[40vh] flex flex-col md:flex-row gap-6 pt-20 pb-6">
      <img
        src={profilePhoto}
        className="h-4/5 md:h-full aspect-square object-cover rounded-sm"
      />
      <div>
        <Typography text={fullName} type="title" color="white" />
        <Typography text={`${followedBy.length} followers`} color="white" />
        {/* <Typography text="453.546.345 plays" color="white" /> */}
      </div>
    </div>
  );
};
