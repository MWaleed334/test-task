"use client";
import React from "react";
import { arrowForCardIcon } from "@/app/assests/icons";

const FinestCuisineCard = ({ item }: any) => {
  return (
    <div className="bg-[#222a10] rounded-2xl overflow-hidden shadow-lg relative w-[80%] md:w-[28.1875rem]">
      <img src={item.src} alt={item.caption} className="w-full h-52 object-cover p-2" />
      <div className="p-4 md:p-6">
        <h3 className="text-lg md:text-xl font-medium font-playfair text-white">
          {item.caption}
        </h3>
        <p className="bg-[#ad8749] text-white font-inter text-xs rounded-full px-3 py-1 mt-2 inline-block">
          100 SR PER GUEST
        </p>
      </div>
      <div className="absolute bottom-4 right-4 text-[#ad8749] text-3xl font-bold">
        <img className="w-6 md:w-7" src={arrowForCardIcon.src} alt="Arrow Icon" />
      </div>
    </div>
  );
};

export default FinestCuisineCard;
