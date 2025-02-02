import React from "react";

type PageContainerProps = {
  children?: React.ReactNode;
};

const PageContainer = ({ children }: PageContainerProps) => {
  return (
    <div className=" lg:pl-40 lg:pr-40 pl-2 pr-2  md:pt-16 md:pb-16 pt-6 pb-6">
      {children}
    </div>
  );
};
export default PageContainer;
