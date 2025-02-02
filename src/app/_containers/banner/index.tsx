import React from "react";
import PageContainer from "./helpers/PageContainer";
import { bgBannerImg } from "@/app/assests/banner";
import Header from "../header";
import EreOfLuxury from "./helpers/EreOfLuxury";
const Banner = () => {
  return (
    <React.Fragment>
      <div
        className="h-full  to-transparent bg-cover bg-center"
        style={{
          backgroundImage: `url(${bgBannerImg.src})`,
        }}
      >
        <Header />
        <EreOfLuxury />
      </div>
    </React.Fragment>
  );
};

export default Banner;
