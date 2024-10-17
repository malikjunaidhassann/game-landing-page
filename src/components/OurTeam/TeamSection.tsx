import React from "react";
import dragon from "../../app/assest/dragon.png";
import Image from "next/image";
import { GrLinkedinOption } from "react-icons/gr";

// Sample team members data
const teamMembers = [
  {
    name: "Ali Ihsan",
    position: "CEO",
    image: dragon,
    linkedin: "http://linkedin.com/in/ali-ihsan-🔜gdc-0949911a",
    backgroundColor: "rgb(255, 116, 38)",
  },
  {
    name: "Nauman Azhar",
    position: "COO",
    image: dragon,
    linkedin: "http://linkedin.com/in/nauman-azhar-b3032767",
    backgroundColor: "rgb(214, 42, 2)",
  },
  {
    name: "Adnan Ayub",
    position: "Art Director",
    image: dragon,
    linkedin: "https://www.linkedin.com/in/adnanayub",
    backgroundColor: "rgb(45, 179, 102)",
  },
  {
    name: "Ali Ihsan",
    position: "CEO",
    image: dragon,
    linkedin: "http://linkedin.com/in/ali-ihsan-🔜gdc-0949911a",
    backgroundColor: "rgb(255, 116, 38)",
  },
  {
    name: "Nauman Azhar",
    position: "COO",
    image: dragon,
    linkedin: "http://linkedin.com/in/nauman-azhar-b3032767",
    backgroundColor: "rgb(214, 42, 2)",
  },
  {
    name: "Adnan Ayub",
    position: "Art Director",
    image: dragon,
    linkedin: "https://www.linkedin.com/in/adnanayub",
    backgroundColor: "rgb(45, 179, 102)",
  },
];

const TeamCard = ({ member }: any) => {
  return (
    <div className="lg:block pb-4 w-[215px] max-w-[264px] h-auto bg-gradient-to-t from-zinc-800 to-zinc-950 rounded-2xl">
      <div className="grid justify-center text-center grid-rows">
        <div className="w-[145.66px] h-[100px] relative">
          <div
            className="w-[155px] max-w-[154px] h-[144.74px] bottom-4 absolute rounded-full border-2 border-white group-hover:opacity-0 transition-all duration-500"
            style={{ backgroundColor: member.backgroundColor }}
          ></div>
          <div className="w-[155px] max-w-[154px] h-[200px] bottom-[17px] absolute rounded-full overflow-hidden transition-all duration-500">
            <Image
              className="w-[155px] max-w-[154px] h-[229.81px] absolute shadow"
              alt={member.name}
              src={member.image}
            />
          </div>
        </div>
        <div className="h-[48px] mb-2">
          <p className="mt-2 text-xl font-medium leading-tight text-orange-500 font-syneBold">
            {member.name}
          </p>
          <p className="text-base font-normal leading-none text-white font-syne">{member.position}</p>
        </div>
        <div className="flex flex-row justify-center h-6 gap-6 mt-2">
          <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
            <GrLinkedinOption color="#ffffff" />
          </a>
        </div>
      </div>
    </div>
  );
};

const TeamSection = () => {
  return (
    <div>
      <div className="sm:hidden lg:grid lg:grid-cols-4 gap-x-[4vw] gap-y-36 justify-center sm:grid-cols-1 mt-32 w-9/12 mx-auto">
        {teamMembers.map((member, index) => (
          <TeamCard key={index} member={member} />
        ))}
      </div>
    </div>
  );
};

export default TeamSection;
