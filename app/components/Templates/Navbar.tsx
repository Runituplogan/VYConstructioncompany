'use client';

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoCall } from "react-icons/io5";
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const Navbar = () => {
  const pathname = usePathname();

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/service", label: "Service" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <div className="bg-white flex flex-row justify-between items-center px-8 py-3 my-6 mx-16 rounded-md">
      <Image src={"/logo.png"} alt="" width={100} height={100} />
      <div className="flex gap-14 items-center font-medium">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={clsx(
              "hover:text-blue-600 transition",
              pathname === item.href ? "text-blue-600 font-semibold" : "text-black"
            )}
          >
            {item.label}
          </Link>
        ))}
      </div>

      <Link
        href={"tel:925-914-7536"}
        className="p-2 flex gap-1 items-center rounded-full border-2 border-black"
      >
        <IoCall className="text-2xl" />
        925-914-7536
      </Link>
    </div>
  );
};

export default Navbar;
