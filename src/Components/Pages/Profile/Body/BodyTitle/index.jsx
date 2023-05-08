import { useUser } from "../../../../../Context/UserContext/UserContext";
import { Typography } from "../../../../index";

export const BodyTitle = ({ user, isLoggedUserProfile }) => {
  const { fullName, following, followedBy, playlists, _id } = user;

  const ownedPlaylists = playlists.filter((playlist) => playlist.user === _id);

  return (
    <div className="flex flex-col justify-center items-center md:items-start pt-[3rem]">
      {isLoggedUserProfile && (
        <Typography text="Hi!" type="big" color="white" family="lato" />
      )}
      <Typography
        text={`${fullName}`}
        type="headline"
        color="white"
        family="lato"
      />
      <div className="flex flex-col justify-center items-center md:items-start mt-[1rem]">
        <Typography
          text={`${ownedPlaylists.length} lists`}
          type="p1"
          color="secondary"
          family="lato"
        />
        <Typography
          text={`${following.length} followed & ${followedBy.length} followers`}
          type="p1"
          color="secondary"
          family="lato"
        />
      </div>
    </div>
  );
};
