import Link from "next/link";
import React from "react";

const NavItems = ({ item }: { item: string }) => {
  return (
    <Link
      href="/"
      className="text-black py-3 px-2 rounded-b-lg hover:bg-gradient-to-t from-[#6C5CE7] to-orange-800/10"
    >
      {item}
    </Link>
  );
};

export default NavItems;
