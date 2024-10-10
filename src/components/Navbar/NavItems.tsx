import Link from "next/link";
import React from "react";

const NavItems = ({ item }: { item: string }) => {
  return (
    <Link
      href="/"
      className="text-dimWhite font-syne tracking-wide font-semibold py-3 px-2 rounded-b-lg hover:text-white"
    >
      {item}
    </Link>
  );
};

export default NavItems;
