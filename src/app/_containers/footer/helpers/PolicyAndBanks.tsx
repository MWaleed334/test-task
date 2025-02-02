import React from "react";
import { visa, payIcon, mastercard } from "@/app/assests/footer";

const PolicyAndBanks = () => {
  return (
    <div className="mt-10">
      <div className="flex md:flex-row flex-col justify-between md:items-center items-start font-inter">
        <div className="flex md:flex-row flex-col md:gap-5 gap-3">
          <div className="sm:m-0 mt-4">
            <a href="#">Terms & Conditions</a>
          </div>
          <div className="sm:m-0 mt-4">
            <a href="#">Privacy Policy</a>
          </div>
          <div className="sm:m-0 mt-4">
            <a href="#">©2023 The Groves for Entertainment</a>
          </div>
        </div>
        <div className="flex md:gap-1 gap-3 sm:m-0 mt-7 ">
          <img
            className="w-8 cursor-pointer h-5"
            src={visa.src}
            alt=""
          />
          <img
            className="w-8 cursor-pointer h-5"
            src={mastercard.src}
            alt=""
          />
          <img
            className="w-8 cursor-pointer h-5"
            src={payIcon.src}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default PolicyAndBanks;
