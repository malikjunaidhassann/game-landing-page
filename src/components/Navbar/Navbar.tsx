import React from "react";
import NavItems from "./NavItems";
import NavLogo from "./NavLogo";
import { MdArrowOutward } from "react-icons/md";

const navItems = ["Home", "Services", "Portfolio", "Testimonials", "About"];

const Navbar = () => {
  return (
    <div
      style={{ transform: "translate(-50%,-50%)" }}
      className="flex justify-between items-center fixed top-12 w-9/12 left-2/4 bg-black rounded-full py-1.5 px-6 z-50"
    >
      <NavLogo />
      <div className="flex gap-[20px] items-center">
        {navItems.map((item, i) => (
          <NavItems key={i} item={item} />
        ))}
      </div>
      <div className="flex gap-1 items-center">
        <p className="font-syne text-white tracking-wide"> Hire Us</p>
        <MdArrowOutward color="#ffff" />
      </div>
    </div>
  );
};

export default Navbar;
