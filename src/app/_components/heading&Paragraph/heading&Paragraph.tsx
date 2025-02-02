import React from "react";

const HeadingParagraph = ({
  paragraph,
  heading,
  className,
  p,
}: {
  paragraph?: string;
  heading?: string;
  className?: string;
  p?: string;
}) => {
  return (
    <div className={className}>
      <h1 className="md:text-[50px] text-[30px] ">{heading}</h1>

      <p className={"text-[13px] font-inter mt-2 sm:mr-28 sm:ml-28 ml-2 mr-2 " + p}>
        {paragraph}
      </p>
    </div>
  );
};

export default HeadingParagraph;
