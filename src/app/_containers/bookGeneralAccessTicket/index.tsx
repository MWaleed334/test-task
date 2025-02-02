"use client";
import React, { useEffect, useState } from "react";
import Heading from "../../_components/heading&Paragraph/Heading";
import ButtonWithIcon from "@/app/_components/buttons/ButtonWithIcon";
import { arrowForBtnIcon } from "@/app/assests/icons";
import {
  hawanimGrovesCityImg,
  lucaeImg,
  littleKrzayImg,
  picnicMarketImg,
} from "@/app/assests/bookGeneralAccessTicket";
import Slider from "@/app/_components/Slider/Slider";
import SliderItem from "@/app/_components/Slider/SliderItem";
import { useWindowWidth } from "@/app/hooks/useWindowWidth";
import BookGeneralAccessTicketCards from "./helpers/BookGeneralAccessTicketCards";

const images = [
  {
    src: littleKrzayImg.src,
    alt: "Little Krazy",
    caption: "Little Krazy",
    caption2: "",
  },
  {
    src: hawanimGrovesCityImg.src,
    alt: "Hawanim Groves City",
    caption: "Hawanim",
    caption2: "Groves City",
  },
  {
    src: picnicMarketImg.src,
    alt: "Picnic Market",
    caption: "Picnic Market",
    caption2: "",
  },
  {
    src: lucaeImg.src,
    alt: "Lucawy",
    caption: "Lucawy",
    caption2: "",
  },
];

// const BookGeneralAccessTicket = () => {
//   const widthSize = useWindowWidth();
//   const [windowWidth, setWindowWidth] = useState<number>(0);
//   const isSmallScreen = widthSize < 768;

//   useEffect(() => {
//     setWindowWidth(widthSize);
//   }, [widthSize]);

//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     if (isSmallScreen) {
//       const interval = setInterval(() => {
//         setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//       }, 3000);
//       return () => clearInterval(interval);
//     }
//   }, [isSmallScreen]);

//   return (
//     <div className="lg:pl-40 md:pl-10 pl-4">
//       <div className="flex">
//         <div className="w-[90%]">
//           <Heading
//             text={"Book General Access ticket and enjoy the attractions for free"}
//             className="md:text-[30px] text-[25px] font-medium font-playfair items-start break-words"
//           />
//           <ButtonWithIcon
//             name="Book General Access Ticket"
//             icon={arrowForBtnIcon.src}
//             className="bg-gradient-to-r w-[18.6875rem] mt-3 !h-[3rem] p-3 from-[#AD8749] to-[#DCBB75] border-none rounded-xl font-medium text-[.9375rem]"
//           />
//         </div>
//       </div>
//       <div className="mt-3">
//         {!isSmallScreen && images.length > 0 && (
//           <Slider gap={40} totalItems={images.length || 0}>
//             {images.map((item, i) => (
//               <SliderItem key={i} index={i} activeIndex={0} width={windowWidth > 1500 ? 410 : 320}>
//                 <BookGeneralAccessTicketCards i={i} item={item} />
//               </SliderItem>
//             ))}
//           </Slider>
//         )}

//         {isSmallScreen && (
//           <div className="relative w-[100%] overflow-hidden mt-3">
//             <div
//               className="flex transition-transform duration-700 ease-in-out gap-5"
//               style={{ transform: `translateX(-${currentIndex * 70}%)` }}
//             >
//               {images.map((item, index) => (
//                 <div key={index} className="min-w-[80%] flex justify-center">
//                   <div>
//                     <img
//                       src={item.src}
//                       alt={item.alt}
//                       className="object-cover rounded-lg"
//                     />
//                     <p className="text-[17x] md:text-[1.875rem] font-playfair py-1">{item.caption}</p>
//                     {item.caption2 && <p className="text-[17px] md:text-[1.875rem] font-playfair py-3">{item.caption2}</p>}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

const BookGeneralAccessTicket = () => {
  const widthSize = useWindowWidth();
  const [windowWidth, setWindowWidth] = useState<number | null>(null);
  const isSmallScreen = windowWidth !== null && windowWidth < 768;

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

  if (windowWidth === null) {
    return null; // Avoid hydration mismatch by not rendering until we get window width
  }

  return (
    <div className="lg:pl-40 md:pl-10 pl-4">
      <div className="flex">
        <div className="w-[90%]">
          <Heading
            text={"Book General Access ticket and enjoy the attractions for free"}
            className="md:text-[30px] text-[25px] font-medium font-playfair items-start break-words"
          />
          <ButtonWithIcon
            name="Book General Access Ticket"
            icon={arrowForBtnIcon.src}
            className="bg-gradient-to-r w-[18.6875rem] mt-3 !h-[3rem] p-3 from-[#AD8749] to-[#DCBB75] border-none rounded-xl font-medium text-[.9375rem]"
          />
        </div>
      </div>
      <div className="mt-3">
        {!isSmallScreen && images.length > 0 && (
          <Slider gap={40} totalItems={images.length}>
            {images.map((item, i) => (
              <SliderItem key={i} index={i} activeIndex={0} width={windowWidth > 1500 ? 410 : 320}>
                <BookGeneralAccessTicketCards i={i} item={item} />
              </SliderItem>
            ))}
          </Slider>
        )}

        {isSmallScreen && (
          <div className="relative w-[100%] overflow-hidden mt-3">
            <div
              className="flex transition-transform duration-700 ease-in-out gap-5"
              style={{ transform: `translateX(-${currentIndex * 70}%)` }}
            >
              {images.map((item, index) => (
                <div key={index} className="min-w-[80%] flex justify-center">
                  <div>
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="object-cover rounded-lg"
                    />
                    <p className="text-[17px] md:text-[1.875rem] font-playfair py-1">{item.caption}</p>
                    {item.caption2 && <p className="text-[17px] md:text-[1.875rem] font-playfair py-3">{item.caption2}</p>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};


export default BookGeneralAccessTicket;
