import React from "react";

interface MaxWidthContainerProps {
  children: React.ReactNode;
}

const MaxWidthContainer: React.FC<MaxWidthContainerProps> = ({ children }) => {
  return <div className="max-w-[1920px] mx-auto">{children}</div>;
};

export default MaxWidthContainer;
