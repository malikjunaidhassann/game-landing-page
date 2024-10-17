import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaLocationArrow } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-stone h-auto flex justify-center py-2 border-dashed border-black mt-16">
      <div className="w-[96vw] md:w-[99vw] text-center flex items-center p-6 dashed-border ">
        <div className="w-full">
          <p className="sm:text-[12px] md:text-lg mb-4 font-syne font-light text-black">
            Have questions, <span className="text-fragOrange">IDEAS</span> or are eager to collaborate? Get in
            touch with our <br />
            passionate team at <span className="text-fragOrange">FRAG.</span>
          </p>
          <a
            id="btn3"
            className="sm:hidden py-4 px-24 transition duration-500 hover:shadow-red-800 shadow-3xl mb-4 text-2xl bg-black  rounded justify-center items-center gap-2 md:inline-flex font-syneBold text-white"
            href="https://docs.google.com/forms/d/e/1FAIpQLSdhXlOoG83fgDQbKETKQTOARCx_CKyquKyNSKV0IA-BZpzjMA/viewform"
            target="_blank"
            rel="noopener noreferrer"
          >
            Get in Touch
          </a>
          <a
            className="md:hidden py-2 px-14 transition duration-500 mb-4 text-lg bg-black  rounded justify-center items-center gap-2 inline-flex font-syneBold text-white"
            href="https://docs.google.com/forms/d/e/1FAIpQLSdhXlOoG83fgDQbKETKQTOARCx_CKyquKyNSKV0IA-BZpzjMA/viewform"
            target="_blank"
            rel="noopener noreferrer"
          >
            Get in Touch
          </a>
          <div className="flex-row text-[12px] md:text-sm text-black text-center">
            <div className="flex space-x-9 text-center justify-center">
              <div className="flex flex-row items-center space-x-1">
                <IoMdMail />
                <p className="font-syne">hello@frag-games.com</p>
              </div>
              <div className="flex flex-row items-center space-x-1">
                <FaPhoneAlt />
                <p className="font-syne">+92 42 35777505</p>
              </div>
            </div>
            <div className="pt-4 flex flex-row items-center space-x-1 justify-center">
              <FaLocationArrow />
              <p className="font-syne">
                Frag Games, Office #1-4, 2nd Floor, Gulberg Galleria, 18 Main Boulevard Gulberg, Lahore,
                Pakistan
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
