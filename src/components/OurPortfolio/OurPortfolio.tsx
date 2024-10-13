import React from "react";
import CustomSlider from "./Slider";

const OurPortfolio = () => {
  return (
    <div className="pt-14 pb-4  bg-[#fafafa]">
      <p className="font-syneBold text-[48px] font-bold leading-[1.167] w-9/12 mx-auto">Our Portfolio</p>
      <div className="pt-10 flex justify-center">
        <CustomSlider />
      </div>
    </div>
  );
};

export default OurPortfolio;
