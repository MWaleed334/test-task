import React from "react";

type PageContainerProps = {
  children: React.ReactNode;
};

const PageContainer = ({ children }: PageContainerProps) => {
  return <div className="w-full max-w-full">{children}</div>;
};
export default PageContainer;
