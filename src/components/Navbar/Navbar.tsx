import React from "react";
import { FaLinkedin, FaDiscord, FaInstagram } from "react-icons/fa";
import NavLinks from "./NavLinks";
import NavItems from "./NavItems";
import NavLogo from "./NavLogo";

const navItems = ["Home", "Services", "Portfolio", "Testimonials", "About"];
const links = [
  { icon: <FaLinkedin color="#6C5CE7" />, link: "/" },
  { icon: <FaDiscord color="#6C5CE7" />, link: "/" },
  { icon: <FaInstagram color="#6C5CE7" />, link: "/" },
];

const Navbar = () => {
  return (
    <div className="flex justify-between items-center">
      <NavLogo />
      <div className="flex gap-[20px] items-center">
        {navItems.map((item) => (
          <NavItems item={item} />
        ))}
      </div>
      <div className="flex gap-4 items-center">
        {links.map((link) => (
          <NavLinks link={link} />
        ))}
      </div>
    </div>
  );
};

export default Navbar;
