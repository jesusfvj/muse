import { IoMdVolumeHigh } from "react-icons/io";

export const VolumeControls = () => {
  return (
    <div className="px-4 py-[1vh] w-full sm:w-auto flex items-center justify-center h-full gap-2">
      <IoMdVolumeHigh className="text-white text-2xl " />
      <input type="range" className="w-1/2 sm:w-auto"/>
    </div>
  );
};
