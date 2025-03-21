import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div>
      {" "}
      <div
        data-aos="fade-up"
        className="flex flex-col items-center gap-4 lg:gap-7 py-10 lg:px-44 justify-center text-center container"
      >
        <p className="flex flex-row items-center text-xs font-bricolage p-2 gap-2 bg-[#056FC54D] rounded-lg text-[#056FC5] ">
          Our Service
        </p>
        <h1 className="lg:text-6xl md:text-4xl text-2xl text-[#032759] font-bricolage  font-bold">
          Delivering Quality Solutions for
          <span className="text-[#056FC5]"> Every Project</span>
        </h1>

        <div data-aos="fade-up" className="lg:w-[70rem] w-[30rem]">
          <Image
            src="/Frame 2.png"
            alt="hero"
            width={1920}
            height={300}
            quality={100}
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
