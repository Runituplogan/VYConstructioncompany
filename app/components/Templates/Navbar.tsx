"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { IoCall } from "react-icons/io5";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const Navbar = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Service" },
    { href: "/contact", label: "Contact" },
  ];

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <div className="sticky top-0 z-50 bg-white lg:px- lg:py- lg:my-6 lg:mx-16 rounded-md shadow-md">
      <div className="flex justify-between items-center px-6 py-4 md:px-8 lg:px-8">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/logo.png"
            alt="Logo"
            width={100}
            height={100}
            className="cursor-pointer"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex gap-14 items-center font-medium">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={clsx(
                "hover:text-blue-600 transition",
                pathname === item.href
                  ? "text-blue-600 font-semibold"
                  : "text-black"
              )}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Call Button */}
        <Link
          href="tel:925-914-7536"
          className="hidden lg:flex p-2 gap-1 items-center rounded-full border-2 border-black hover:border-blue-600 hover:text-blue-600 transition"
        >
          <IoCall className="text-2xl" />
          925-914-7536
        </Link>

        {/* Mobile Hamburger Menu */}
        <div
          className="lg:hidden text-3xl cursor-pointer z-50"
          onClick={toggleMenu}
        >
          {menuOpen ? (
            <IoMdClose className="text-black hover:text-blue-600 transition" />
          ) : (
            <IoMdMenu className="text-black hover:text-blue-600 transition" />
          )}
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={clsx(
          "lg:hidden fixed inset-0 bg-white flex flex-col items-center justify-center gap-8 text-lg font-medium transform transition-transform duration-300",
          menuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={toggleMenu}
            className={clsx(
              "hover:text-blue-600 transition",
              pathname === item.href
                ? "text-blue-600 font-semibold"
                : "text-black"
            )}
          >
            {item.label}
          </Link>
        ))}

        <Link
          href="tel:925-914-7536"
          className="p-2 flex gap-1 text-black items-center rounded-full border-2 border-black hover:border-blue-600 hover:text-blue-600 transition"
          onClick={toggleMenu}
        >
          <IoCall className="text-2xl" />
          925-914-7536
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
