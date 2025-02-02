import React from "react";
const BookGeneralAccessTicketCards = ({ item, i }: any) => {
  return (
    <div className={`${i === 1 || i === 3 ? "mt-10" : "mt-0"} flex justify-center`}>
      <div className="flex justify-center w-full text-center rounded-lg overflow-hidden">
        <div>
          <img
            src={item.src}
            alt={item.alt}
            className="object-cover rounded-lg w-full md:max-w-[410px] max-w-[210px]"
          />
          <p className="text-[17px] pt-3 font-playfair">{item.caption}</p>
          <p className="text-[17px] font-playfair">{item.caption2}</p>
        </div>
      </div>
    </div>
  );
};

export default BookGeneralAccessTicketCards;