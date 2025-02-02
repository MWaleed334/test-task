import React from "react";

const Heading = ({ text, className }: { text?: any; className?: string }) => {
  return <h1 className={className}>{text}</h1>;
};

export default Heading;
