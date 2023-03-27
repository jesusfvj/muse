export const DropDownMenu = ({
  id,
  activeDropdown,
  handleToggleDropdown,
  handleToggleModal,
}) => {
  const isActive = activeDropdown == id;
  return (
    <div className="relative">
      <button
        onClick={() => handleToggleDropdown(id)}
        id="dropdownMenuIconHorizontalButton"
        className="inline-flex items-center text-sm font-medium text-center text-gray-900 rounded-lg focus:outline-none "
        type="button"
      >
        <svg
          className="w-6 h-6 text-white"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path>
        </svg>
      </button>

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
          <li>
            <a href="#" className="block px-4 py-2  hover:bg-gray-600 ">
              Play Next
            </a>
          </li>
          <li>
            <a href="#" className="block px-4 py-2  hover:bg-gray-600 ">
              Go to Artist
            </a>
          </li>
          <li>
            <a href="#" className="block px-4 py-2  hover:bg-gray-600 ">
              Go to Album
            </a>
          </li>
        </ul>
        <div className="py-2">
          <button
            onClick={handleToggleModal}
            className="block px-4 py-2 text-sm text-white hover:bg-gray-600 w-full text-start "
          >
            Add to list
          </button>
        </div>
      </div>
    </div>
  );
};
