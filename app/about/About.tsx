import Image from "next/image";
import React from "react";
import { BsHouseDoorFill } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";

const About = () => {
  return (
    <section className="flex flex-col gap-3">
      {/* first section */}
      <div className="lg:grid grid-cols-2 mt-10 md:mt-24 flex-col container lg:w-11/12 gap-10 justify-center ">
        <div className="col-span-1 lg:flex justify-end hidden">
          <Image
            src={"/house1.png"}
            alt="hero"
            width={600}
            height={300}
            quality={100}
            className="object-cover"
          />
        </div>

        <main className=" col-span-1 flex flex-col items-center lg:items-start  lg:justify-between  ">
          <div className=" flex items-start py-2 lg:py-0  ">
            <div
              data-aos="fade-up"
              className="flex flex-row items-center text gap-2 font-bold p-2 rounded-lg bg-[#056FC533]    "
            >
              <BsHouseDoorFill className="text-[#056FC5] text-xl" />
              <p className="text-[#056FC5] ]">About VY Construction</p>
            </div>
          </div>
          <p
            data-aos="fade-left"
            className="lg:text-2xl md:text-xl text-justify text-[#323232] font-medium"
          >
            At VY Construction, we understand that it&apos;s important for your
            home to look its best. That&apos;s why our team consists of
            experienced professionals who are committed to providing quality
            services. We strive to make sure that your home is attractive and
            well-maintained, with exterior repairs, deck repairs, new deck
            builds, siding and gutter guard installation.
          </p>

          <div
            data-aos="fade-right"
            className="col-span-1 flex justify-end lg:hidden py-10"
          >
            <Image
              src={"/house1.png"}
              alt="hero"
              width={500}
              height={300}
              quality={100}
              className="object-cover"
            />
          </div>

          <div
            data-aos="fade-left"
            className="lg:text-2xl md:text-xl text-[#032759] font-medium"
          >
            <p className="font-bold">We Offer:</p>
            <p className="space-x-20">
              Wood Rot Repair • Termite Damage Repair • Deck Repairs • New Deck
              Builds • Siding • Pergolas and Patio Covers • Gutter Cleaning •
              Gutter Guard Installation
            </p>
          </div>

          <div className="flex flex-row items-center gap-4 py-5 md:py-0 lg:text-xl">
            <p className="border-2  p-0.5 bg-[#056FC5] w-16"></p>
            <p className="text-[#056FC5] ">Follow our social</p>
            <FaFacebook className="text-[#056FC5] text-2xl lg:text-4xl" />
          </div>
        </main>
      </div>

      {/* section section */}

      <div className="lg:grid grid-cols-3 mt-16 md:mt-24 gap-4 flex-col container  ">
        <div className="col-span-1 lg:flex hidden justify-start ">
          <Image
            src={"/12.png"}
            alt="hero"
            width={500}
            height={300}
            quality={100}
            className="object-cover"
          />
        </div>
        <main className=" col-span-2 flex flex-col items-center lg:items-start  lg:justify-between ">
          <div
            data-aos="fade-up"
            className="lg:text-3xl font-bold text-xl text-center lg:text-start bg-white md:p-3 p-3 md:py-0  rounded-md "
          >
            <p className="space-x-20 ">
              VY Construction delivers quality exterior repairs and improvements
              with a supportive team ready to help
              <span className="text-[#056FC5]"> transform your home.</span>
            </p>
          </div>

          <div
            data-aos="fade-right"
            className="col-span-1 flex lg:hidden py-7 justify-start "
          >
            <Image
              src={"/12.png"}
              alt="hero"
              width={500}
              height={300}
              quality={100}
              className="object-cover"
            />
          </div>

          <div className="col-span-1 lg:grid  flex flex-col-reverse lg:grid-cols-2 justify-end gap-10 py-10">
            <div data-aos="fade-left" className="col-span-1">
              <Image
                src={"/10.jpeg"}
                alt="hero"
                width={500}
                height={300}
                quality={100}
                className="object-cover"
              />
            </div>
            <p
              data-aos="fade-right"
              className="lg:text-2xl col-span-1 md:text-xl text-justify text-[#323232] font-medium"
            >
              At VY Construction, we take pride in providing quality exterior
              repair and improvement services. We understand that not everyone
              has experience in this area, so our friendly team is always ready
              to answer any questions you may have about our services. Contact
              us today to get started on transforming your home!
            </p>
          </div>
        </main>
      </div>
    </section>
  );
};

export default About;
