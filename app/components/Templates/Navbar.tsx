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
  const [servicesOpen, setServicesOpen] = useState(false);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    {
      href: "/services",
      label: "Service",
      subItems: [
        { href: "/services#exterior", label: "Exterior Repair" },
        {
          href: "/services#deck",
          label: "Deck Repairs",
        },
        { href: "/services#pergolas", label: "   Pergolas & Patio Covers" },
        { href: "/services#siding", label: "Siding" },
        { href: "/services#gutter", label: "  Gutter Guard " },
      ],
    },
    { href: "/contact", label: "Contact" },
  ];

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  // const toggleServices = () => {
  //   setServicesOpen((prev) => !prev);
  // };

  const closeServices = () => {
    setServicesOpen(false);
  };

  return (
    <div className="sticky top-0 z-50 bg-white lg:px- lg:py- lg:my-6 lg:mx-12 rounded-md shadow-md">
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
            <div
              key={item.href}
              className="relative"
              onMouseEnter={
                item.subItems ? () => setServicesOpen(true) : undefined
              }
              onMouseLeave={
                item.subItems ? () => setServicesOpen(false) : undefined
              }
            >
              <Link
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
              {item.subItems && servicesOpen && (
                <div className="absolute top-full left-0 bg-white shadow-lg rounded-md mt-2 py-2 w-56">
                  {item.subItems.map((subItem) => (
                    <Link
                      key={subItem.href}
                      href={subItem.href}
                      onClick={closeServices}
                      className={clsx(
                        "block px-4 py-2 hover:text-blue-600 transition",
                        pathname === subItem.href
                          ? "text-blue-600 font-semibold"
                          : "text-black"
                      )}
                    >
                      {subItem.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
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
          <div key={item.href} className="text-center">
            <Link
              href={item.href}
              onClick={() => {
                toggleMenu();
                closeServices();
              }}
              className={clsx(
                "hover:text-blue-600 transition",
                pathname === item.href
                  ? "text-blue-600 font-semibold"
                  : "text-black"
              )}
            >
              {item.label}
            </Link>
            {item.subItems && (
              <div className="mt-2">
                {item.subItems.map((subItem) => (
                  <Link
                    key={subItem.href}
                    href={subItem.href}
                    onClick={() => {
                      toggleMenu();
                      closeServices();
                    }}
                    className={clsx(
                      "block px-4 py-2 hover:text-blue-600 transition",
                      pathname === subItem.href
                        ? "text-blue-600 font-semibold"
                        : "text-black"
                    )}
                  >
                    {subItem.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
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
