import { DropdownElement } from "./DropdownElement";
import { useUI } from "../../Context/UI/UIContext";
import { useTracks } from "../../Context/TracksContext/TracksContext";

export const DropDownMenu = ({
  id,
  activeDropdown,
  track,
  items,
  isAddToListVisible = true,
}) => {
  const isActive = activeDropdown == id;
  const { handleTogglePlaylistModal } = useUI();
  const { changeCurrentTrack } = useTracks();

  const handleAddToList = () => {
    handleTogglePlaylistModal();
    changeCurrentTrack(track);
  };

  return (
    <div className="relative">
      <div
        id={id}
        className={`z-10 ${
          !isActive && "hidden"
        } absolute right-[0px] divide-y rounded-lg shadow w-44 bg-gray-700 divide-gray-600 `}
      >
        <ul
          className="py-2 text-sm text-white "
          aria-labelledby="dropdownMenuIconHorizontalButton"
        >
          {items.map((item) => {
            const { text, path } = item;
            return <DropdownElement key={text} text={text} path={path} />;
          })}
        </ul>
        {isAddToListVisible ? (
          <div className="py-2">
            <button
              onClick={handleAddToList}
              className="block px-4 py-2 text-sm text-white hover:bg-gray-600 w-full text-start "
            >
              Add to list
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
};
