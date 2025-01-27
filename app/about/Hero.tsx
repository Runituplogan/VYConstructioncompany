import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div>
      {" "}
      <div className="flex flex-col items-center gap-4 lg:gap-7 py-10 lg:px-44 justify-center text-center container">
        <p className="flex flex-row items-center text-xs font-bricolage p-2 gap-2 bg-[#056FC54D] rounded-lg text-[#056FC5] ">
          <Image src="/fig.png" alt="hero" width={20} height={10} />
          About VY Construction
        </p>
        <h1 className="lg:text-7xl md:text-5xl text-3xl text-[#032759] font-bricolage  font-bold">
          Building Excellence with Integrity and
          <span className="text-[#056FC5]">Precision</span>
        </h1>

        <div className="lg:w-[70rem] w-full">
          <Image
            src="/about.png"
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
