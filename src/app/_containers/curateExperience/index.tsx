"use client";
import React, { useEffect, useState } from "react";
import Heading from "../../_components/heading&Paragraph/Heading";
import ButtonWithIcon from "@/app/_components/buttons/ButtonWithIcon";
import { arrowForBtnIcon } from "@/app/assests/icons";
import Slider from "@/app/_components/Slider/Slider";
import SliderItem from "@/app/_components/Slider/SliderItem";
import { resturantsImg, eventsImg, experiencesImg } from "@/app/assests/curateExperience";
import { useWindowWidth } from "@/app/hooks/useWindowWidth";
import CurateExperienceCard from "./helpers/CurateExperienceCard";

const images = [
  {
    src: resturantsImg.src,
    alt: "Resturants",
    caption: "Resturants",
  },
  {
    src: experiencesImg.src,
    alt: "Experiences",
    caption: "Experiences",
  },
  {
    src: eventsImg.src,
    alt: "Events",
    caption: "Events",
  },
];

const CurateExperience = () => {
  const widthSize = useWindowWidth();
  const [windowWidth, setWindowWidth] = useState<number>(0);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const isSmallScreen = widthSize < 768;

  useEffect(() => {
    setWindowWidth(widthSize);
  }, [widthSize]);

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (isSmallScreen) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isSmallScreen]);

  return (
    <div className="md:pl-40 md:pr-0 pl-4 pr-0">
      <div className="flex flex-col lg:flex-row lg:gap-8">
        <div className="lg:w-[20%] w-full">
          <Heading
            text={"Curate your experience as you like"}
            className="md:text-[50px] text-[28px] font-playfair break-words text-wrap tracking-tight leading-tight sm:whitespace-normal"
          />
          <ButtonWithIcon
            name="Book Tickets"
            icon={arrowForBtnIcon.src}
            className="bg-gradient-to-r w-56 mt-3 !h-[3rem] p-3 from-[#AD8749] to-[#DCBB75] border-none rounded-xl font-medium md:text-[1.0625rem] text-[.9375rem]"
          />
        </div>
        <div className="mt-3">
          {!isSmallScreen && images.length > 0 && (
            <Slider gap={40} totalItems={images.length || 0}>
              {images.map((item, i) => (
                <SliderItem key={i} index={i} activeIndex={0} width={windowWidth > 1500 ? 410 : 320}>
                  <CurateExperienceCard i={i} item={item} />
                </SliderItem>
              ))}
            </Slider>
          )}

          {isSmallScreen && (
            <div className="relative w-[100%] overflow-hidden mt-3">
              <div
                className="flex transition-transform duration-500 ease-in-out gap-3"
                style={{ transform: `translateX(-${currentIndex * 60}%)` }}
              >
                {images.map((item, index) => (
                  <div key={index} className="w-[75%] flex justify-center">
                    <div>
                      <img
                        src={item.src}
                        alt={item.alt}
                        className="object-cover rounded-lg"
                      />
                      <p className="md:text-[1.875rem] font-playfair py-3 text-[17px]">{item.caption}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CurateExperience;
