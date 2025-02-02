import React from "react";

const FindRest = () => {
  return (
    <div>
      <div className="flex md:flex-row flex-col md:gap-24 gap-12 mt-10 font-inter">
        <div className="sm:mt-0 sm:mb-0 md:mb-6">
          <p className="text-[.8125rem] mb-3">LOCATION</p>
          <div className="text-[.9375rem]">
            <p className="">Al-Hizam Park</p>
            <p> Al-Semairi, Yanbu Al Bahr 46455</p>
            <p> Riyadh Saudi Arabia</p>
          </div>
        </div>
        <div className="sm:mt-0 sm:mb-0 md:mb-6">
          <p className="text-[.8125rem] mb-3">WORKING HOURS</p>
          <div className="text-[.9375rem]">
            <p className="">Sun until Thurs: 4:00PM</p>
            <p className="mb-3"> Fri & Sat: 2:30PM</p>
            <p>Gates Close at:</p>
            <p>Sat until Wed: 12:00AM</p>
            <p>
            Thu & Fri: 12:30AM
            </p>
          </div>
        </div>
        <div className="sm:mt-0 sm:mb-0 md:mb-6">
          <p className="text-[.8125rem] mb-3">GUEST SERVICE CALL</p>
          <div className="text-[.9375rem]">
            <p>cc@thegroves-sa.com </p>
            <p className="mb-3">920001672</p>
            <p>+966556631309</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindRest;
