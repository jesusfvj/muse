import { IoMdVolumeHigh, IoMdVolumeMute } from "react-icons/io";
import { useEffect, useState } from "react";

export const VolumeControls = ({playAudio}) => {
  const [volume, setVolume] = useState(30);
  const [isMuted, setIsMuted] = useState(false);
  

  const handleMutePlayer = () => {
    setIsMuted(!isMuted);

  };

  const handleSetVolume = (e) =>{
    setVolume(parseInt(e.target.value))
  }

  useEffect(() => {
    if (playAudio) {
      playAudio.current.volume = volume / 100;
    }
  }, [volume]);


  return (
    <div className="px-4 py-[1vh] w-full sm:w-auto flex items-center justify-center h-full gap-2">
      {isMuted ? 
        <IoMdVolumeMute
          className="text-white text-2xl cursor-pointer"
          onClick={handleMutePlayer}
        />
       : 
        <IoMdVolumeHigh
          className="text-white text-2xl cursor-pointer"
          onClick={handleMutePlayer}
        />
      }
      <input type="range" className="w-1/2 sm:w-auto muze-range"  onChange={handleSetVolume} value={volume} min={0} max={100}/>
    </div>
  );
};
