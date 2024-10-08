import Link from "next/link";
import React from "react";

const NavLinks = ({ link }: { link: any }) => {
  return (
    <Link className="py-4 px-2" href={link.link}>
      {link.icon}
    </Link>
  );
};

export default NavLinks;
