import React from "react";
import { arrowForCardIcon } from "@/app/assests/icons";
const GetYourGeneralAccesTicket = () => {
  return (
    <div>
      <div className="bg-gradient-to-r from-[#313d14] to-[#283606] text-white sm:p-10 p-6 rounded-[25px] opacity-100 shadow-lg w-[100%] relative">
        <div className="text-[15px] font-inter opacity-80">
          25 SR/GUEST
        </div>
        <h2 className="text-[25px] font-playfair font-medium mt-2">
          Get your General Access Ticket
        </h2>
        <p className="text-[13px] font-thin font-inter mt-2 opacity-90 md:w-[65%] w-full">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text.
        </p>
        <div className="absolute sm:flex hidden top-1/2 right-4 transform -translate-y-1/2 text-2xl opacity-80 cursor-pointer transition-opacity duration-300 hover:opacity-100">
          <img src={arrowForCardIcon.src} alt="" className="md:w-7 w-6"/>
        </div>
        <div className=" mt-2 sm:hidden flex  justify-end">
          <img src={arrowForCardIcon.src} alt="" className="md:w-7 w-6"/>
        </div>
      </div>
    </div>
  );
};

export default GetYourGeneralAccesTicket;
