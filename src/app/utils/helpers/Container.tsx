import React from "react";

const Container = ({ children, className }: any) => {
  return (
    <div>
      <div className={`w-auto m-auto h-full  ${className}`}>{children}</div>
    </div>
  );
};

export default Container;
