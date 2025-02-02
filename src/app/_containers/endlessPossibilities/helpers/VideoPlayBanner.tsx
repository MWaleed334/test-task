import React from "react";
import { coverVideoImg } from "@/app/assests/endlessPossibilities";
import { playIcon } from "@/app/assests/icons";
const VideoPlayBanner = () => {
  return (
    <div className="relative w-full">
      <img src={coverVideoImg.src} alt="Snow" className="w-full h-auto" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="w-[4.75rem] h-[4.75rem] bg-white rounded-full shadow-lg flex items-center justify-center">
          <button className="text-black text-lg ml-2 focus:outline-none">
            <img src={playIcon.src} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayBanner;
