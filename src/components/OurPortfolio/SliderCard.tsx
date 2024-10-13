import Image from "next/image";
import React from "react";
import { FaCode } from "react-icons/fa";
import dragon from "../../app/assest/dragon.png";

const SliderCard = ({ data }: any) => {
  return (
    <div
      className="cursor-grab active:cursor-grabbing flex justify-center rounded-[12px] md:rounded-[16px] w-auto transition-all duration-500 ease-in-out"
      style={{ transform: "scale(0.85)" }}
    >
      <div className="group">
        <div
          className="
      transition-all duration-300
      flex 
      font-inter
      w-[164px] h-[272px]
      rounded-[12px]
      lg:w-[352px] lg:h-[490px]
      lg:rounded-[16px]
   
      overflow-hidden"
        >
          <div className="flex flex-col w-full h-full">
            <div
              className="
          h-60 w-full
          rounded-t-[12px] lg:rounded-t-[16px]
          overflow-hidden transition-all duration-500
          group-hover:h-0 "
            >
              <Image src={data.image} alt="Sandbox" className="object-cover object-center w-full h-full" />
            </div>
            <div
              className="
          group-hover:h-full
          transition-all duration-500
        bg-[#bcf0ff]
        rounded-b-lg
          h-[35%] lg:h-[30%] p-1 md:p-2"
            >
              <div className="md:group-hover:h-[10%] group-hover:h-[8%]">
                <h1 className="font-syneBold text-xl truncate">{data?.name}</h1>
              </div>
              <div className="md:group-hover:h-[360px] group-hover:h-64 group-hover:line-clamp-none line-clamp-2 lg:line-clamp-3 font-syne text-sm mt-3">
                {data?.description}
              </div>
              <div className="pt-2 text-center opacity-25 group-hover:opacity-0 pulseUpNDown text-fragOrange">
                ⬆⬆⬆
              </div>
              <div className="group-hover:h-[8%] h-0 flex flex-row justify-around group-hover:opacity-100 opacity-0">
                <a href="https://www.sandbox.game/en/" target="_blank" rel="noopener noreferrer">
                  <FaCode />
                </a>
                <button className="font-syneBold text-[8px] lg:text-[12px] px-2 rounded-md mb-2 lg:mb-4">
                  More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderCard;
