import React from "react";
import GameDevelopment from "../../app/assest/Game-Development.png";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div>
      <section
        id="home"
        className="relative flex flex-col overflow-hidden sm:h-auto md:h-auto md:justify-center md:mx-auto"
      >
        <div className="relative flex flex-row items-center w-full h-auto md:justify-start">
          <div
            id="heroText"
            className="leading-tight lg:leading-[43px] content-center min-h-[200px] md:min-h-[520px] text-center md:text-start md:justify-start h-auto sm:w-[100%] md:w-[80%] font-extralight text-[20px] lg:text-[24pt]"
          >
            <h1 className="tracking-wide text-black">
              FROM
              <span className="text-blueMain font-medium text-[28px] tracking-tighter lg:text-[58pt]">
                {" "}
                ART
              </span>
              &amp;
            </h1>
            <h1>
              <span className="tracking-[5px] lg:tracking-[1px] font-medium text-[28px] lg:text-[60pt] text-black">
                DESIGN
              </span>
            </h1>
            <h1 className="lg:tracking-[2px] text-black">
              TO{" "}
              <span className="text-blueMain font-medium text-[28px] lg:text-[58pt] tracking-tighter lg:tracking-[2px]">
                DEV
              </span>
              &amp;
              <span className="text-blueMain tracking-[-3px] text-[28px] font-medium lg:text-[58pt]">
                PLAY
              </span>
            </h1>
            <h1 className="text-[20px] lg:text-[32pt] text-black">
              WE HELP
              <span className="text-black font-medium text-[28px] tracking-[1px] lg:text-[58pt]"> POWER</span>
            </h1>
            <h1 className="text-blueMain lg:leading-[52px] tracking-[0.4px]">
              EVERY <span className="text-blueMain font-pixel text-[28px] lg:text-[58pt]">PIXEL!</span>
            </h1>
          </div>
          <div>
            <Image src={GameDevelopment} alt="left hero image" />
          </div>
        </div>
        {/* <div className="flex h-auto md:flex-row sm:flex-col sm:space-y-16 md:space-y-0">
          <div className="sm:w-[100%] h-[400px] sm:justify-center md:left-0 md:hidden md:w-[50%] flex overflow-hidden">
            <video
              className="lazyload mix-blend-lighten md:w-full h-[300px] max-w-[800px]"
              preload="true"
              autoPlay
              loop
            >
              <source src="/assets/logoMobile-01f9d133.webm" type="video/webm" />
              <source src="/assets/logoNew-f8ce82d9.mp4" type="video/mp4" />
            </video>
          </div>
        </div> */}
      </section>
    </div>
  );
};

export default HeroSection;
