import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div>
      {" "}
      <div className="flex flex-col items-center gap-4 lg:gap-7 lg:py-10 lg:px-44 justify-center text-center container">
        <p
          data-aos="fade-up"
          className="flex flex-row items-center mt-8 md:mt-4 text-xs font-bricolage p-2 gap-2 bg-[#056FC54D] rounded-lg text-[#056FC5] "
        >
          About VY Construction
        </p>
        <h1
          data-aos="fade-up"
          className="lg:text-7xl md:text-5xl text-2xl text-[#032759] font-bricolage  font-bold"
        >
          Building Excellence with Integrity and
          <span className="text-[#056FC5]"> Precision</span>
        </h1>

        <div data-aos="fade-up" className="lg:w-[70rem]   w-[30rem]">
          <Image
            src="/about2.png"
            alt="hero"
            width={1920}
            height={300}
            quality={100}
            className="object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
