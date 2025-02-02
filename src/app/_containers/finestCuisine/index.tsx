"use client";
import React from "react";
import PageContainer from "@/app/utils/helpers/PageContainer";
import FinestCuisineCard from "./helpers/FinestCuisine";
import {
  vidaVeraImg,
  khawajaYanniImg,
  zamaZuluImg,
  yamagataImg,
} from "@/app/assests/finestCuisine";
import HeadingParagraph from "@/app/_components/heading&Paragraph/heading&Paragraph";

const images = [
  {
    src: vidaVeraImg.src,
    alt: "vidaVeraImg",
    caption: "Vida Vera",
  },
  {
    src: zamaZuluImg.src,
    alt: "zamaZuluImg",
    caption: "Zama Zulu ",
  },
  {
    src: khawajaYanniImg.src,
    alt: "khawajaYanniImg",
    caption: "Khawaja Yanni",
  },
  {
    src: yamagataImg.src,
    alt: "yamagataImg",
    caption: "Yamagata",
  },
];
const FinestCuisine = () => {
  return (
    <React.Fragment>
      <PageContainer>
        <HeadingParagraph
          heading={"Experience the Finest Cuisine"}
          paragraph={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          }
          p={"sm:flex hidden font-inter"}
          className="sm:text-center text-left mb-8"
        />
        <div className="mt-4">
        <div className="flex flex-wrap gap-8 justify-around">
  {images.map((item: any, i: number) => {
    return <FinestCuisineCard key={i} item={item} />;
  })}
</div>

        </div>
      </PageContainer>
    </React.Fragment>
  );
};

export default FinestCuisine;
