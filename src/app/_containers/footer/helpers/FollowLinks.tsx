import { brandLogo } from "@/app/assests";
import {
  instaIcon,
  snapchatIcon,
  tiktokIcon,
  xIcon,
} from "@/app/assests/socialMediaIcon";
import React from "react";

const FollowLinks = () => {
  return (
    <div className="mt-10">
      <div className="flex justify-between items-center">
        <div className="sm:block hidden">
          <img className="cursor-pointer" src={brandLogo.src} alt="" />
        </div>
        <div>
          <div className="flex md:gap-7 gap-7">
            <a href="#">
              <img
                className="md:w-[1.3525rem] w-[1.6625rem] md:h-[1.2731rem] h-[1.8862rem]"
                src={tiktokIcon.src}
                alt=""
              />
            </a>
            <a href="#">
              <img
                className="md:w-[1.3525rem] w-[1.6625rem] md:h-[1.2731rem] h-[1.8862rem]"
                src={instaIcon.src}
                alt=""
              />
            </a>
            <a href="#">
              <img
                className="md:w-[1.3525rem] w-[1.6625rem] md:h-[1.2731rem] h-[1.8862rem]"
                src={xIcon.src}
                alt=""
              />
            </a>
            <a href="#">
              <img
                className="md:w-[1.3525rem] w-[1.6625rem] md:h-[1.2731rem] h-[1.8862rem]"
                src={snapchatIcon.src}
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FollowLinks;
