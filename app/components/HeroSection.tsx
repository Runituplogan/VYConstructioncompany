import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center gap-4 lg:gap-7 py-10 lg:px-44 justify-center text-center container">
      <p className="flex flex-row items-center text-xs font-bricolage p-2 gap-2 bg-[#056FC54D] rounded-lg text-[#056FC5] ">
        <Image src="/fig.png" alt="hero" width={20} height={10} />
        Welcome to VY Construction
      </p>
      <h1
        data-aos="fade-up"
        className="lg:text-7xl md:text-5xl text-3xl text-[#032759] font-bricolage  font-bold"
      >
        General Contractor in East Bay{" "}
        <span className="text-[#056FC5]">California</span>
      </h1>
      <p data-aos="fade-up" className="lg:text-4xl text-[#757575] ">
        Serving Homeowners, HOA&apos;s, Property Management Companies and
        Commercial Properties.
      </p>
      <form data-aos="fade-up" className="lg:w-3/4 w-full">
        <div className="relative w- ">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"></div>
          <input
            type="search"
            id="search"
            className="  w-full p-4  text-sm text-gray-900  border-gray-300 rounded-lg"
            placeholder="Enter your phone number"
            required
          />
          <button
            type="submit"
            className="text-white absolute end-2.5 bottom-2.5 bg-[#056FC5]  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs md:text-sm md:px-4 px-2 py-2 "
          >
            Get free estimate
          </button>
        </div>
      </form>

      <div data-aos="fade-up" className="lg:w-[65rem]   w-[30rem]">
        <Image
          src="/hero.png"
          alt="hero"
          width={1920}
          height={300}
          quality={100}
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default HeroSection;
