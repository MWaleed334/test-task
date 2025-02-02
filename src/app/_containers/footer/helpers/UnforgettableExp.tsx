import { brandLogo } from "@/app/assests";
import { appStore, googleStore } from "@/app/assests/footer";
import React from "react";

const UnforgettableExp = () => {
  return (
    <div>
      <div className="flex md:flex-row flex-col md:items-center items-start justify-between">
        <div className="sm:hidden flex mt-2 mb-2">
          <img className="cursor-pointer" src={brandLogo.src} alt="" />
        </div>
        <div className="sm:mt-0 sm:mb-0 mt-7 mb-2">
          <h1 className="md:text-5xl text-2xl font-playfair">
            Join us for an <br />
            unforgettable experience
          </h1>
        </div>
        <div className="sm:mt-0 sm:mb-0 mt-12 mb-2 font-inter">
          <p className="font-inter">DOWNLOAD THE GROVES APP</p>
          <div className="flex md:justify-normal justify-start md:gap-5 gap-4 md:mt-3 mt-6">
              <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
        <div className="bg-white text-black px-4 py-1 rounded-lg flex items-center gap-2 md:w-44 w-36">
        <img className="cursor-pointer md:h-8 md:w-8 h-5 w-5" src={appStore.src} alt="" />
          <div>
            <p className="lg:text-[13px] text-[11px] font-inter">Download on the</p>
            <p className="lg:text-lg text-[16px] font-bold font-inter">App Store</p>
          </div>
        </div>
      </a>

      <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
        <div className="bg-white text-black px-4 py-1 rounded-lg flex items-center gap-2 lg:w-48 md:w-44 w-40">
        <img className="cursor-pointer md:h-8 md:w-8 h-6 w-6" src={googleStore.src} alt=""/>
          <div>
            <p className="lg:text-[13px] text-[11px] font-inter">Get it on</p>
            <p className="lg:text-lg text-[16px] font-bold font-inter">Google Play</p>
          </div>
        </div>
      </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnforgettableExp;
