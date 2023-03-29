export const Dropdown = () => {
  return (
    <div
      className={`z-10  absolute right-[0px] divide-y rounded-lg shadow w-44 bg-gray-700 divide-gray-600 `}
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
        <button className="block px-4 py-2 text-sm text-white hover:bg-gray-600 w-full text-start ">
          Add to list
        </button>
      </div>
    </div>
  );
};
