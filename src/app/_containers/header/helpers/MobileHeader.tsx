import { brandLogo } from "@/app/assests";
import { englandFlag } from "@/app/assests/banner";
import { dropdownIcon, exitIcon } from "@/app/assests/icons";
import React, { useState } from "react";

const MobileHeader = ({
  open,
  toggleDrawer,
}: {
  open?: boolean;
  toggleDrawer?: () => void;
}) => {
  return (
    <div>
      <div
        className={`fixed top-0 left-0  w-full h-full font-inter bg-gradient-to-r from-[#283606] to-[#0F1500] shadow-md transition-transform transform ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between p-4">
          <img
            className="w-[11.8125rem] h-[2.6875rem]"
            src={brandLogo.src}
            alt=""
          />
          <button onClick={toggleDrawer}>
            <img src={exitIcon.src} alt="" />
          </button>
        </div>
        <ul className="mt-8 ">
          <li className="py-5  p-4 border border-l-0 border-r-0">
            <a href="#" className="text-md font-inter">
              DINE WITH US
            </a>
          </li>

          <li className="py-5 p-4 border border-l-0 border-r-0">
            <a href="#" className="text-md font-inter">
              PLAN YOUR VISIT
            </a>
          </li>
          <li className="py-5 p-4 border border-l-0 border-r-0">
            <a href="#" className="text-md font-inter">
              EVENTS
            </a>
          </li>
          <li className="py-5 p-4 border border-l-0 border-r-0">
            <a href="#" className="text-md font-inter">
              OUR STORY
            </a>
          </li>
          <li className="py-5 p-4 border border-l-0 border-r-0">
            <a href="#" className="text-md font-inter">
              CONTACT US
            </a>
          </li>
          <li className="py-5 p-5">
            <div className="flex gap-3 items-center">
              <img
                className="w-[0.8rem] h-[.875rem]"
                src={dropdownIcon.src}
                alt=""
              />
              <img src={englandFlag.src} alt="" />
              <span className="text-[.9375rem] ">English</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MobileHeader;
