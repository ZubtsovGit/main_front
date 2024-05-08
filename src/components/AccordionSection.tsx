import React, { ReactNode, useState } from "react";

interface AccordionProps {
  title: string;
  children: ReactNode;
}

const AccordionSection: React.FC<AccordionProps> = ({ title, children }) => {
  // State to manage the visibility of each accordion content section
  const [isVisible, setIsVisible] = useState(false);

  // Function to toggle the visibility state
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="w-[879px] bg-brand-secondary flex flex-col items-start justify-start">
      <div
        className="self-stretch flex flex-row items-start justify-start py-4 pr-6 pl-4 gap-[12px] text-5xl cursor-pointer"
        onClick={toggleVisibility}
      >
        <div className="flex-1 relative leading-[20px]">{title}</div>
        <img
          className="w-6 relative h-6 overflow-hidden shrink-0"
          alt=""
          src={isVisible ? "/iconangleup.svg" : "/iconangledown.svg"}
        />
      </div>
      {isVisible && <>{children}</>}
    </div>
  );
};

export default AccordionSection;
