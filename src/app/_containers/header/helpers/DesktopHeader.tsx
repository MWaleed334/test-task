import React, { useState } from "react";
import Button from "@/app/_components/buttons/Button";
import { brandLogo } from "@/app/assests";
import { englandFlag } from "@/app/assests/banner";
import { dropdownIcon, toggleIcon } from "@/app/assests/icons";
import {
  instaIcon,
  snapchatIcon,
  tiktokIcon,
  xIcon,
} from "@/app/assests/socialMediaIcon";
import MobileHeader from "./MobileHeader";
const DesktopHeader = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  const toggleDrawer = () => {
    setToggle(!toggle);
  };

  return (
    <>
      {toggle && <MobileHeader open={toggle} toggleDrawer={toggleDrawer} />}
      {!toggle && (
        <header>
          <div className=" justify-between pt-4 sm:flex hidden lg:ml-40 lg:mr-40 mr-10 ml-10">
            <div>
              <img className="lg:!w-[220px] lg:h-[50px] w-[180px] h-[40px]" src={brandLogo.src} alt="" />
            </div>
            <div className="flex justify-between items-center">
              <div className="flex gap-5 items-center">
                <div className="flex gap-6">
                  <a>
                    <img
                      className="w-5 h-5"
                      src={tiktokIcon.src}
                      alt=""
                    />
                  </a>
                  <a>
                    <img
                      className="w-5 h-5"
                      src={instaIcon.src}
                      alt=""
                    />
                  </a>
                  <a>
                    <img
                      className="w-5 h-5"
                      src={xIcon.src}
                      alt=""
                    />
                  </a>
                  <a>
                    <img
                      className="w-5 h-5"
                      src={snapchatIcon.src}
                      alt=""
                    />
                  </a>
                </div>
                <Button name={"Log in"} />
                <div className="flex gap-3 items-center">
                  <img
                    className="w-[0.8rem] h-[.875rem]"
                    src={dropdownIcon.src}
                    alt=""
                  />
                  <img src={englandFlag.src} alt="" />
                  <span className="text-[.9375rem] font-inter">English</span>
                </div>
              </div>
            </div>
          </div>
          <div className="sm:hidden flex p-4 justify-between items-center">
            <div>
              <img
                className=" !w-[11.8125rem] h-[2.6875rem]"
                src={brandLogo.src}
                alt=""
              />
            </div>
            <div>
              <img onClick={() => toggleDrawer()} src={toggleIcon.src} alt="" />
            </div>
          </div>
          <div className="border sm:block hidden border-r-0 border-l-0 py-4 mt-5">
            <ul className="list-none m-0 p-0 flex justify-between lg:ml-40 lg:mr-40 md:mr-10 md:ml-10">
              <li className="inline-block mx-2 md:mx-4">
                <a href="#" className="no-underline lg:font-medium font-thin font-inter lg:text-md md:text-sm text-xs">
                  DINE WITH US
                </a>
              </li>
              <li className="inline-block mx-2 md:mx-4">
                <a href="#" className="no-underline lg:font-medium font-thin font-inter lg:text-md md:text-sm text-xs">
                  PLAN YOUR VISIT
                </a>
              </li>
              <li className="inline-block mx-2 md:mx-4">
                <a href="#" className="no-underline lg:font-medium font-thin font-inter lg:text-md md:text-sm text-xs">
                  EVENTS
                </a>
              </li>
              <li className="inline-block mx-2 md:mx-4">
                <a href="#" className="  no-underline lg:font-medium font-thin font-inter lg:text-md md:text-sm text-xs">
                  VIEW GROVES MAP
                </a>
              </li>
              <li className="inline-block mx-2 md:mx-4">
                <a href="#" className=" no-underline lg:font-medium font-thin font-inter lg:text-md md:text-sm text-xs">
                  OUR STORY
                </a>
              </li>
              <li className="inline-block mx-2 md:mx-4">
                <a href="#" className=" no-underline lg:font-medium font-thin font-inter lg:text-md md:text-sm text-xs">
                  CONTACT US
                </a>
              </li>
            </ul>
          </div>
        </header>
      )}
    </>
  );
};

export default DesktopHeader;
