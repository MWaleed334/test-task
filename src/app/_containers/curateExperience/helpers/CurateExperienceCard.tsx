import React from "react";
const CurateExperienceCard = ({ item, i }: any) => {
  return (
    <div
      className={`${
        i === 1 || i === 3 ? "mt-10" : "mt-0"
      } flex justify-center `}
    >
      <div
        key={item.src}
        className={`flex justify-center w-full text-center rounded-lg overflow-hidden `}
      >
        <div>
          <img
            src={item.src}
            alt={item.alt}
            className={` object-cover rounded-lg`}
          />
          <p className="text-[1.875rem] py-3 ">{item.caption}</p>
        </div>
      </div>
    </div>
  );
};

export default CurateExperienceCard;
