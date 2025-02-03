import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsHouseDoorFill } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";

const About = () => {
  return (
    <section className="flex flex-col gap-3">
      {/* first section */}
      <div className="lg:grid grid-cols-2 mt-6 md:mt-20 flex-col lg:mx-12 p-5 lg:p-0  lg:w-11/12 gap-10 justify-center ">
        <div className="col-span-1 lg:flex justify-end hidden">
          <Image
            src={"/Frame 42.png"}
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
            className="lg:text-2xl md:text-xl t text-[#323232] font-medium"
          >
            At VY Construction, we understand the importance of maintaining and
            improving your property. Having a well-maintained and attractive
            exterior is key to enjoying your living space. Our experienced teams
            are qualified to handle all of your exterior repairs. We have
            extensive experience in installing new siding and trim, doors,
            windows, structural repairs, wood rot and termite damage. 
          </p>

          <div
            data-aos="fade-right"
            className="col-span-1 flex justify-end lg:hidden py-10"
          >
            <Image
              src={"/Frame 42.png"}
              alt="hero"
              width={500}
              height={300}
              quality={100}
              className="object-cover"
            />
          </div>

          <div data-aos="fade-left" className="lg:text-2xl md:text-xl ">
            <p className="space-x-20">
              We also specialize in existing deck repairs, full deck rebuilds.
              With our deck repair services, you don’t need to worry about
              splintering wood or rotting boards; we will make sure that your
              deck looks great while providing a safe and solid build for years
              to come. For those who want an outdoor area where they can relax
              and entertain, we also offer services for building custom decks
              and pergolas.
            </p>
          </div>

          <Link
            href={"https://www.facebook.com/Vyconstruction "}
            className="flex flex-row items-center gap-4 py-5 md:py-0 lg:text-xl"
          >
            <FaFacebook className="text-[#056FC5] text-2xl lg:text-4xl" />
            <p className="text-[#056FC5] ">Follow our social</p>
            <p className="border-2  p-0.5 bg-[#056FC5] w-16"></p>
          </Link>
        </main>
      </div>

      {/* section section */}

      <div className="lg:grid grid-cols-3 mt- md:mt-24 gap-4 flex-col lg:mx-12 p-5 lg:p-0  ">
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
            className="lg:text-3xl  font-bold text-xl text-center lg:text-start bg-white md:p-6 p-3 md:py-0  rounded-md "
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

          <div className="col-span-1 lg:grid  flex flex-col-reverse lg:grid-cols-2 items-center justify-end md:gap-10 py-10">
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
              className="lg:text-[28px] lg:leading-10 col-span-1 md:text-xl text- text-[#323232] font-medium"
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
