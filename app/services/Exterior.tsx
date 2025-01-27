import Image from "next/image";
import React from "react";

const Exterior = () => {
  return (
    <section className="mt-10 md:mt-24 flex-col container lg:w-11/12 ">
      <div className="lg:grid grid-cols-2 flex-col justify-center gap-10">
        <div className="col-span-1 lg:flex justify-end hidden">
          <Image
            src={"/Group 13.png"}
            alt="hero"
            width={500}
            height={300}
            quality={100}
            className="object-cover"
          />
        </div>

        <main className=" col-span-1 flex flex-col items-center lg:items-start  lg:gap-10  ">
          <div className="  text-center justify-center w-full py-2 lg:py-0  ">
            <div className="flex flex-row text-center items-center justify-center text gap-2 font-bold p-2 rounded-lg bg-white    ">
              <p className="text-[#032759] text-2xl ">Exterior Repairs</p>
            </div>
          </div>
          <p className="lg:text-xl md:text-xl text-justify text-[#323232] font-medium">
            At VY Construction, we understand that your home is your most
            valuable asset and the exterior of your home plays an important role
            in its visual appeal and overall value. That&apos;s why we take the
            utmost care when it comes to repair services for your home&apos;s
            exterior. We provide detailed assessments to identify any existing
            damage or areas in need of repair, and then use only the best
            quality materials and techniques to ensure a lasting solution.
          </p>

          <div className="col-span-1 flex justify-end lg:hidden py-10">
            <Image
              src={"/house1.png"}
              alt="hero"
              width={500}
              height={300}
              quality={100}
              className="object-cover"
            />
          </div>

          <p className="lg:text-xl md:text-xl text-justify text-[#323232] font-medium">
            Our team of experienced professionals have worked on countless
            residential and commercial projects over the years, so you can rest
            assured that you&apos;re getting top-notch workmanship from start to
            finish. With our competitive rates and commitment to providing
            excellent customer service, you can count on VY Construction for all
            of your exterior repair needs!.
          </p>
        </main>
      </div>
    </section>
  );
};

export default Exterior;
