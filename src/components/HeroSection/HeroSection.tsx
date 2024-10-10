import React from "react";
import animation from "../../app/assest/animation.gif";
import scrollAnimation from "../../app/assest/scrollAnimation.gif";

import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="w-screen h-screen relative">
      <Image className="w-full h-full object-cover " src={animation} alt="animation gif" />
      <Image
        className="absolute bottom-6 left-2/4 -translate-x-[50%] z-50 h-7 w-5"
        src={scrollAnimation}
        alt="scroll"
      />
    </div>
  );
};

export default HeroSection;
