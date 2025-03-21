"use client";

import Image from "next/image";
import React from "react";
import { IoLocation } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import Link from "next/link";
import { useState } from "react";
// import house from "/wood-house.webp";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";

interface IProps {
  name: string;
  email: string;
  phone: string;
  address: string;
  message: string;
}
const Footer = () => {
  const [formData, setFormData] = useState<IProps | any>({
    name: "",
    email: "",
    phone: "",
    address: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: { target: { name: any; value: any } }) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    setLoading(true);

    window.dataLayer.push({
      event: "contact_form_submission",
      phone_number: formData.phone,
      email: formData.email,
    });

    emailjs
      .send(
        "service_brl9y2s",
        "template_0lzto0f",
        formData as any,
        "apQJg2DtjcCfWOzGP"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setLoading(false);
          setFormData({
            name: "",
            email: "",
            phone: "",
            message: "",
            address: "",
          });
          toast.success("Request sent successfully!");
        },
        (error) => {
          console.log("FAILED...", error);
          setLoading(false);
        }
      );
  };

  return (
    <section className=" p-5 lg:p-0 md:mt-16 flex flex-col lg:mx-16 ">
      <h1 className="font-bold hidden md:flex text-xl py-7 lg:text-3xl text-[#032759]">
        Get in touch with us
      </h1>
      <main className=" flex flex-col gap-10 lg:flex-row md:justify-between ">
        {/* first side  */}
        <div className="flex flex-col  lg:flex-row gap-4 mt-5 items-center">
          <h1 className="font-bold md:hidden flex text-xl py-7 lg:text-3xl text-[#032759]">
            Get in touch with us
          </h1>
          <Image src={"/Group 28.png"} alt="" width={1000} height={1000} />

          <div className="flex flex-col gap-8 bg-[#F7F7F7] p-3 ">
            <p className="flex items-center font-bold gap-3">
              {" "}
              <IoLocation className="text-[#056FC5]" />
              East Bay California Service Areas:
            </p>

            <ul className="font-bold text-sm flex flex-row flex-wrap items-start justify-start gap-4 list-none pl-6">
              <li className="relative flex items-center before:content-[''] before:block before:w-2 before:h-2 before:bg-[#F28705] before:mr-2">
                Clayton
              </li>
              <li className="relative flex items-center before:content-[''] before:block before:w-2 before:h-2 before:bg-[#F28705] before:mr-2">
                Discovery Bay
              </li>
              <li className="relative flex items-center before:content-[''] before:block before:w-2 before:h-2 before:bg-[#F28705] before:mr-2">
                Orinda
              </li>
              <li className="relative flex items-center before:content-[''] before:block before:w-2 before:h-2 before:bg-[#F28705] before:mr-2">
                Danville
              </li>
              <li className="relative flex items-center before:content-[''] before:block before:w-2 before:h-2 before:bg-[#F28705] before:mr-2">
                San Ramon
              </li>
              <li className="relative flex items-center before:content-[''] before:block before:w-2 before:h-2 before:bg-[#F28705] before:mr-2">
                Martinez
              </li>
              <li className="relative flex items-center before:content-[''] before:block before:w-2 before:h-2 before:bg-[#F28705] before:mr-2">
                Pleasant Hill
              </li>
              <li className="relative flex items-center before:content-[''] before:block before:w-2 before:h-2 before:bg-[#F28705] before:mr-2">
                Concord
              </li>
              <li className="relative flex items-center before:content-[''] before:block before:w-2 before:h-2 before:bg-[#F28705] before:mr-2">
                Lafayette
              </li>
              <li className="relative flex items-center before:content-[''] before:block before:w-2 before:h-2 before:bg-[#F28705] before:mr-2">
                Walnut Creek
              </li>
            </ul>

            <div className="flex flex-col gap-4 bg-[#F7F7F7] p-3">
              <p className="text-[#757575] flex items-center gap-2">
                <IoLocation className="" />
                Concord, CA 94521
              </p>
              <p className="text-[#757575] flex items-center gap-2">
                <MdEmail className="" />
                vitaly@vyconstructionco.com
              </p>
              <p className="text-[#757575] flex items-center gap-2">
                <IoCall className="" />
                925-914-7563
              </p>

              <Link
                href="https://www.facebook.com/Vyconstruction"
                className="flex flex-row items-center gap-4 py-5 md:py-0 lg:text-"
              >
                <p className="text-[#056FC5] font-bold">Follow our social</p>
                <p className="border-2  p-0.5 bg-[#056FC5] w-16"></p>
                <FaFacebook className="text-[#056FC5] text-xl lg:text-4xl" />
              </Link>
            </div>
          </div>
        </div>

        {/* second sizeddddd  */}
        <div className="w-full flex flex-col gap-4">
          <h1 className="md:text-3xl font-bold text-[#032759]">
            Let&apos;s Discuss Your{" "}
            <span className="text-[#056FC5]"> Next Project!</span>
          </h1>
          <p className="text-[#323232]">
            Fill out the form to set up a free in-home consultation.
          </p>

          <form onSubmit={sendEmail} className="flex flex-col gap-4">
            <div className="">
              <input
                name="name"
                value={formData?.name}
                onChange={handleChange}
                type="text"
                id="name"
                className="bg-gray-50 border border-[#056FC5] text-sm rounded-lg lue-500 block w-full p-2.5 "
                placeholder="Full Name"
              />
            </div>
            <div className=" flex gap-4">
              <input
                name="email"
                value={formData?.email}
                onChange={handleChange}
                type="email"
                id="email"
                className="bg-gray-50 border border-[#056FC5] text-sm rounded-lg lue-500 block w-full p-2.5 "
                placeholder="Email"
              />
              <input
                name="phone"
                value={formData?.phone}
                onChange={handleChange}
                type="phone number"
                id="phone"
                className="bg-gray-50 border border-[#056FC5] text-sm rounded-lg lue-500 block w-full p-2.5 "
                placeholder="Phone Number"
              />
            </div>
            <input
              name="address"
              value={formData.address}
              onChange={handleChange}
              type="address"
              id="address"
              className="bg-gray-50 border border-[#056FC5] text-sm rounded-lg lue-500 block w-full p-2.5 "
              placeholder="Address"
            />
            <textarea
              name="message"
              value={formData?.message}
              onChange={handleChange}
              id="message"
              rows={5}
              className="block p-2.5 w-full text-sm  border-[#056FC5] border rounded-lg  text-gray-900 bg-gray-50"
              placeholder="Type your message here..."
            ></textarea>
            <button
              disabled={loading}
              type="submit"
              className="disabled:opacity-55 transition-all duration-300 text-white bg-[#056FC5] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5"
            >
              Submit your request
            </button>
          </form>
        </div>
      </main>

      <div className="flex lg:flex-row flex-col gap-7 lg:justify-between items-center pt-16 pb-4">
        <Image
          src={"/logo.png"}
          alt=""
          width={100}
          height={10}
          className="md:flex hidden "
        />

        <div className="flex flex-row items-center gap-16 md:hidden ">
          <Image
            src={"/logo.png"}
            alt=""
            width={100}
            height={10}
            className="md:flex "
          />
          <p className="text-[#757575] font-bold md:hidden items-center gap-2 flex">
            <IoCall className="" />
            925-914-7563
          </p>
        </div>

        <p className="text-[#26343D]">Copyright ©2025. VY Construction</p>
        <p className="text-[#757575] font-bold md:flex items-center gap-2 hidden">
          <IoCall className="" />
          925-914-7563
        </p>
      </div>
    </section>
  );
};

export default Footer;
