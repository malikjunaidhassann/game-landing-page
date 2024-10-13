// import React from "react";
// import Image from "next/image";
// import ExpertiesCard from "./ExpertiesCard";
// import icon1 from "../../app/assest/icon1.webp";
// import icon2 from "../../app/assest/icon2.webp";
// import icon3 from "../../app/assest/icon3.webp";
// import icon4 from "../../app/assest/icon4.webp";
// import dragon from "../../app/assest/dragon.png";
// import { MdArrowOutward } from "react-icons/md";

// const data = [
//   {
//     department: "Game Development",
//     detail:
//       "We offer end-to-end game development solutions, creating immersive multiplayer, mobile, PC, console, and WebGL games tailored to engage players across platforms.",
//     icon: icon1,
//   },
//   {
//     department: "Web Development",
//     detail:
//       "We build responsive, scalable websites, from full-stack solutions to custom business, portfolio, and dashboard sites, designed to meet your specific needs.",
//     icon: icon2,
//   },
// ];

// const data2 = [
//   {
//     department: "Digital Marketing",
//     detail:
//       "Our digital marketing services focus on boosting your brand through video ads, profile growth, banner campaigns, and strategies to increase sales.",
//     icon: icon3,
//   },
//   {
//     department: "Editing Service",
//     detail:
//       "We provide expert editing services, including video editing, animation VFX, and picture editing, to enhance your visual content.",
//     icon: icon4,
//   },
// ];

// const ExpertiesSection = () => {
//   return (
//     <div className="w-9/12 mx-auto pt-14 pb-4 bg-[#fafafa]">
//       <p className="font-syneBold text-[48px] font-bold leading-[1.167]">Experties Section</p>
//       <div className="pt-10 flex">
//         <div className="w-9/12 pl-4">
//           <div className=" flex  gap-4">
//             {data.map((item) => (
//               <ExpertiesCard item={item} />
//             ))}
//           </div>
//           <div className=" flex  gap-4 pt-4">
//             {data2.map((item) => (
//               <ExpertiesCard item={item} />
//             ))}
//           </div>
//         </div>
//         <div className="w-3/12 ml-3 bg-black hover:bg-gradient-to-br from-[#00faff] via-[#0063ff] to-[#070d1e] rounded-lg relative">
//           <div className=" flex gap-1 items-center absolute right-3 top-4">
//             <p className="font-syne text-white tracking-wide"> Hire Us</p>
//             <MdArrowOutward color="#ffff" />
//           </div>
//           <Image className="pt-12" src={dragon} alt="dragon" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ExpertiesSection;

"use client";

import React, { useState } from "react";
import ExpertiseCard from "./ExpertiesCard";

const ExpertiseSection = () => {
  const [openCardIndex, setOpenCardIndex] = useState(null);

  const handleToggle = (index: any) => {
    setOpenCardIndex(openCardIndex === index ? null : index);
  };

  const cards = [
    {
      title: "Metaverse",
      content: "Embark on your Metaverse journey with expert solutions.",
      image: "/path/to/image1.jpg",
    },
    {
      title: "AR/VR",
      content: "Cutting-edge AR/VR solutions for immersive experiences.",
      image: "/path/to/image2.jpg",
    },
    {
      title: "Game Development",
      content: "Gamification solutions to enhance user experiences.",
      image: "/path/to/image3.jpg",
    },
  ];

  return (
    <div className="flex justify-around gap-6 p-10 bg-gray-50">
      {cards.map((card, index) => (
        <ExpertiseCard
          key={index}
          title={card.title}
          content={card.content}
          image={card.image}
          isOpen={openCardIndex === index}
          onToggle={() => handleToggle(index)}
        />
      ))}
    </div>
  );
};

export default ExpertiseSection;
