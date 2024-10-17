import Image from "next/image";
import React from "react";
import dragon from "../../app/assest/dragon.png";

const TestimonialCard = () => {
  return (
    <div
      className="transition-all duration-500 flex flex-shrink-0 font-Syne border border-black bg-gradient-to-tr from-[#f2e6e0]/[0.08] to-[#f2e6e0]/[0.03]
                shadow-[inset_0px_2px_6px_rgba(255,255,255,0.4), inset_0px_-2px_4px_rgba(255,255,255,0.1)] 
                flex-col overflow-hidden
                md:w-[256px] md:h-[468px] md:rounded-[16px]
                w-[184px] h-[374px] rounded-[12px]"
    >
      <div className="flex flex-col py-4 items-center h-[83%] md:h-[80%]">
        <Image
          src={dragon}
          alt="Johan Kreek"
          className="rounded-full w-[60px] h-[60px] border-2 border-white"
          width={60}
          height={60}
        />
        <h1 className="pt-2 font-syneBold text-fragOrange text-[14px] md:text-[16px]">Mindscape</h1>
        <p className="text-[10px] md:text-[14px] px-3 h-auto">
          <span className="text-fragOrange font-black text-[18px] leading-none mr-0.5">"</span>
          We have worked closely with FRAG from the start to develop our farming adventure game ‘Life in
          Willowdale’. It has been an amazing creative journey that we have completed together. Frag turned
          out to be very creative and dedicated to go for the maximum result. We are pretty sure that we will
          continue this journey and grow closer together and reach new, even higher levels!
          <span className="text-fragOrange font-black text-[18px] leading-none ml-0.5">"</span>
        </p>
      </div>
      <div className="text-center flex flex-col h-[20%] justify-end pb-2">
        <h1 className="text-[14px] md:text-[18px] text-black font-syneBold">Johan Kreek</h1>
        <p className="text-[12px] md:text-[12px] font-syne">Life In Willowdale</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
