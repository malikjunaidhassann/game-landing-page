import Image from "next/image";
import React from "react";

const ExpertiesCard = ({ item }: { item: any }) => {
  return (
    <div className="w-6/12 border-[1px] rounded-lg border-black px-8 relative hover:bg-[#bcf0ff] cursor-pointer">
      <Image className="h-12 w-12 absolute top-2 right-2" src={item.icon} alt="icon" />

      <h2 className="font-syneBold text-xl mt-20"> {item.department}</h2>
      <p className="font-syne text-sm mt-2 mb-10"> {item.detail}</p>
    </div>
  );
};

export default ExpertiesCard;

// import React from "react";

// const ExpertiseCard = ({ title, content, image, isOpen, onToggle }: any) => {
//   return (
//     <div
//       className={`border p-4 rounded-lg transition-all duration-300 cursor-pointer
//       ${isOpen ? "bg-white shadow-lg" : "bg-gray-100"}`}
//       onClick={onToggle}
//     >
//       <div className="font-bold text-xl text-gray-800">{title}</div>
//       {isOpen && (
//         <div className="mt-4">
//           <img src={image} alt={title} className="w-full h-auto mb-4 rounded-lg" />
//           <p className="text-gray-600">{content}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ExpertiseCard;
