import { Typography } from "../Typography";
import { useUI } from "../../Context/UI/UIContext";
import { useTracks } from "../../Context/TracksContext/TracksContext";
import { useUser } from "../../Context/UserContext/UserContext";

export const AddToPlaylistModal = ({ handleToggleModal }) => {
  const { handleTogglePlaylistModal } = useUI();
  const {
    user: { playlists },
  } = useUser();
  const { currentTrack } = useTracks();
  const { addToPlaylist } = useUser();

  const handleAddToList = (e, playlist) => {
    e.stopPropagation();
    addToPlaylist(playlist._id, currentTrack._id);
    handleTogglePlaylistModal();
  };

  return (
    <div
      className="fixed p-[15vw] md:p-20 h-screen w-screen top-0 bg-black/50 z-[99] grid grid-cols-1 md:grid-cols-2 place-items-center lg:grid-cols-3 gap-8 overflow-y-auto backdrop-filter backdrop-blur-md"
      onClick={handleToggleModal}
    >
      {/* <div
        className="w-full h-[40vh] flex justify-center items-center border-[0.1rem] border-gray-600 hover:border-white cursor-pointer "
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={handleAddToList}
      >
        {!hovered ? (
          <AiOutlinePlus className="text-5xl font-bold text-white" />
        ) : (
          <div>
            <Typography
              color="white"
              text="Create a new list"
              styles="z-3 relative"
              type="big"
            />
          </div>
        )}
      </div> */}

      {playlists &&
        playlists.map((playlist) => {
          const { thumbnail, name } = playlist;
          return (
            <div
              onClick={(e) => handleAddToList(e, playlist)}
              key={name}
              className="w-full h-[40vh] bg-white relative cursor-pointer"
            >
              <img src={thumbnail} className="w-full h-full object-cover" />
              <div className="absolute bottom-0 bg-gradient-to-l from-[#02040C] to-[#0A4148] w-full p-4">
                <Typography text={name} color="primary" styles="truncate" />
              </div>
            </div>
          );
        })}
    </div>
  );
};
