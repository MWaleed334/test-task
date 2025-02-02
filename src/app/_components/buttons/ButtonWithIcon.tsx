import React from "react";

const ButtonWithIcon = ({
  name,
  icon,
  className,
}: {
  name?: string;
  icon?: string;
  className?: string;
}) => {
  return (
    <button
      className={`flex items-center justify-between cursor-pointer text-center ${className}`}
    >
      <span className="pl-5 font-inter">{name}</span>
      <span className="pr-1">
        <img src={icon} alt="" className="md:w-7 w-6"/>
      </span>
    </button>
  );
};

export default ButtonWithIcon;
