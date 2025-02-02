import React from "react";

const Button = ({ name }: { name: string }) => {
  return (
    <button className=" lg:!w-[8.875rem] lg:!h-[3rem] md:w-[7rem] h-[2rem] bg-gradient-to-r from-[#AD8749] to-[#DCBB75] border-none  lg:rounded-xl rounded-lg text-white font-medium text-[.9375rem] cursor-pointer text-center">
      {name}
    </button>
  );
};

export default Button;
