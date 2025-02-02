"use client";
import React from "react";
import { useMediaQuery } from "@/app/hooks/useMediaQuery";

const SliderItem = ({ children, width, className, height }: any) => {
  const isSmallDevice = useMediaQuery("only screen and (max-width : 768px)");
  return (
    <div
      className={`flex-shrink-0 mt-4 ${className}`}
      style={{
        width: isSmallDevice ? window.innerWidth - 32 : width || "25%",
        height: height || "auto",
      }}
    >
      {children}
    </div>
  );
};

export default SliderItem;
