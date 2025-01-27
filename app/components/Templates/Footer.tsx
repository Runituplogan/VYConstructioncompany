import Image from "next/image";
import React from "react";
import { IoLocation } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";

const Footer = () => {
  return (
    <section className="container mt-24 flex flex-col ">
      <h1 className="font-bold lg:text-3xl text-[#032759]">
        Get in touch with us
      </h1>
      <main className=" flex flex-col lg:flex-row justify-between">
        {/* first side  */}
        <div className="flex flex-col  lg::flex-row gap-4 mt-5 items-center">
          <Image src={"/last.png"} alt="" width={1000} height={1000} />

          <div className="flex flex-col gap-8 ">
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

            <div className="flex flex-col gap-4">
              <p className="text-[#757575] flex items-center gap-2">
                <IoLocation className="" />
                Concord, CA 94521
              </p>
              <p className="text-[#757575] flex items-center gap-2">
                <MdEmail className="" />
                vyconstructionco@gmail.com
              </p>
              <p className="text-[#757575] flex items-center gap-2">
                <IoCall className="" />
                925-914-7563
              </p>

              <div className="flex flex-row items-center gap-4 py-5 md:py-0 lg:text-xl">
                <p className="border-2  p-0.5 bg-[#056FC5] w-16"></p>
                <p className="text-[#056FC5] ">Follow our social</p>
                <FaFacebook className="text-[#056FC5] text-2xl lg:text-4xl" />
              </div>
            </div>
          </div>
        </div>

        {/* second size  */}
        <div className="w-full flex flex-col gap-4">
          <h1 className="text-3xl font-bold text-[#032759]">
            Let&apos;s Discuss Your{" "}
            <span className="text-[#056FC5]">Next Project!</span>
          </h1>
          <p className="text-[#323232]">
            Fill out the form to set up a free in-home consultation.
          </p>

          <form className="flex flex-col gap-4">
            <div className="">
              <input
                type="name"
                id="email"
                className="bg-gray-50 border border-[#056FC5] text-sm rounded-lg lue-500 block w-full p-2.5 "
                placeholder="Full Name"
                required
              />
            </div>

            <div className=" flex gap-4">
              <input
                type="email"
                id="email"
                className="bg-gray-50 border border-[#056FC5] text-sm rounded-lg lue-500 block w-full p-2.5 "
                placeholder="Email"
                required
              />
              <input
                type="phone number"
                id="phone"
                className="bg-gray-50 border border-[#056FC5] text-sm rounded-lg lue-500 block w-full p-2.5 "
                placeholder="Phone Number"
                required
              />
            </div>

            <input
              type="name"
              id="email"
              className="bg-gray-50 border border-[#056FC5] text-sm rounded-lg lue-500 block w-full p-2.5 "
              placeholder="Address"
              required
            />

            <textarea
              id="message"
              rows={5}
              className="block p-2.5 w-full text-sm  border-[#056FC5] border rounded-lg  text-gray-900 bg-gray-50"
              placeholder="Leave a comment..."
            ></textarea>

            <button
              type="submit"
              className="text-white bg-[#056FC5] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5"
            >
              Submit your Request
            </button>
          </form>
        </div>
      </main>

      <div className="flex lg:flex-row flex-col gap-4 lg: justify-between items-center pt-16 pb-4">
        <Image src={"/logo.png"} alt="" width={100} height={10} />

        <p className="text-[#26343D]">Copyright ©2025. VY Construction</p>

        <p className="text-[#757575] font-bold flex items-center gap-2">
          <IoCall className="" />
          925-914-7563
        </p>
      </div>
    </section>
  );
};

export default Footer;
