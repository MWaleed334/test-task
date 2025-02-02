import React from "react";
import { locationImg } from "@/app/assests/findPlace";
import ButtonWithIcon from "@/app/_components/buttons/ButtonWithIcon";
import { arrowForBtnIcon } from "@/app/assests/icons";

const InteractiveMap = () => {
  return (
    <div className=" flex justify-center">
      <div className="container p-0">
        <div className="flex flex-col-reverse md:flex-row items-center bg-opacity-60  overflow-hidden">
          <div className="flex-1">
            <img
              src={locationImg.src}
              alt="Interactive Map"
              className="w-full md:max-w-lg "
            />
          </div>
          <div className="flex-1 sm:p-6 p-0  sm:text-center text-left md:text-left">
            <h4 className="uppercase font-inter text-[.8125rem] tracking-wide mb-2">
              Experience The Groves
            </h4>
            <h2 className="md:text-[50px] font-playfair text-[25px] sm:mb-4 mb-1">
              Find your place
            </h2>
            <p className="text-sm font-inter sm:mb-6 mb-2">
              Our interactive map will show you the way to the shops and
              restaurants that you want to see.
            </p>

            <ButtonWithIcon
              name="Open the Map"
              icon={arrowForBtnIcon.src}
              className="bg-gradient-to-r w-[14.5rem] mt-3 !h-[3rem] p-2 from-[#AD8749] to-[#DCBB75] border-none  rounded-xl  font-medium text-[.9375rem] "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveMap;
