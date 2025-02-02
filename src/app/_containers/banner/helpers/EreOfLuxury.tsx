import React from "react";
import ButtonWithIcon from "@/app/_components/buttons/ButtonWithIcon";
import { arrowForBtnIcon } from "@/app/assests/icons";
const EreOfLuxury = () => {
  return (
    <div className="bg-black bg-opacity-60">
      <div className=" md:ml-40 md:mr-40 ml-4 mr-4 ">
        <div className="h-screen flex items-center ">
          <div className="w-full ">
            <div className="flex flex-col gap-5">
              <div>
              <h5 className="tex-[15px] font-inter">KHAWAJA YANNI</h5>
              </div>
              <div>
              <h1 className="font-playfair lg:text-[68px] md:text-[60px] text-[50px]">The new</h1>
              <h1 className="font-playfair lg:text-[68px] md:text-[60px] text-[50px] md:-mt-6 ">
                era of luxury 
              </h1>
              </div>
              <div>
              <p className="font-inter text-[13px] flex text-wrap">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum
              </p>
              </div>
              <div>
              <ButtonWithIcon
                name="Book reservation now"
                icon={arrowForBtnIcon.src}
                className="bg-gradient-to-r w-[18.6875rem] mt-3 !h-[3rem] p-2 from-[#AD8749] to-[#DCBB75] border-none rounded-xl font-normal text-[.9375rem] "
              />
              </div>
            </div>
          </div>
          <div className="w-full"></div>
        </div>
      </div>
    </div>
  );
};

export default EreOfLuxury;
