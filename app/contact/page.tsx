import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div>
      <section className="mt-24 container flex flex-col lg:flex-row items-center justify-center relative">
        {/* Main Content */}
        <main className="flex flex-col gap-5 md:p-6 rounded-lg  z-10   relative lg:-right-32">
          <div className="border-[#056FC5] bg-white border-2 p-4 rounded-md flex flex-col gap-2">
            <div className="flex items-end">
              <div className="bg-[#056FC533] text-[#056FC5] p-3 font-bold rounded-lg text-base gap-3 flex items-center">
                <p>Why choose us</p>
              </div>
            </div>
            <p className="md:text-3xl text-2xl font-bold text-[#032759]">
              VY is Built on Trust, Driven by{" "}
              <span className="text-[#056FC5]">Quality</span>.
            </p>
          </div>

          <ul className="font-bold text-xl flex flex-col gap-2 list-none pl-6">
            <li className="relative before:content-[''] before:block before:w-2 before:h-2 before:bg-[#056FC5] before:absolute before:left-[-1rem] before:top-1/2 before:transform before:-translate-y-1/2">
              Free Consultations
            </li>
            <li className="relative before:content-[''] before:block before:w-2 before:h-2 before:bg-[#056FC5] before:absolute before:left-[-1rem] before:top-1/2 before:transform before:-translate-y-1/2">
              Exceeded Expectations
            </li>
            <li className="relative before:content-[''] before:block before:w-2 before:h-2 before:bg-[#056FC5] before:absolute before:left-[-1rem] before:top-1/2 before:transform before:-translate-y-1/2">
              Licensed & Insured
            </li>
            <li className="relative before:content-[''] before:block before:w-2 before:h-2 before:bg-[#056FC5] before:absolute before:left-[-1rem] before:top-1/2 before:transform before:-translate-y-1/2">
              High-Quality Results
            </li>
          </ul>
          <div className="relative z-0  md:hidden">
            <Image
              src="/why.png"
              alt="Why Choose Us"
              width={570}
              height={500}
            />
          </div>

          <div className="flex md:items-start"></div>
        </main>

        {/* Image Section */}
        <div className="relative z-0 hidden md:flex">
          <Image src="/why.png" alt="Why Choose Us" width={570} height={500} />
        </div>
      </section>
    </div>
  );
};

export default page;
