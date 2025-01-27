import Image from "next/image";
import React from "react";

const Ourprocess = () => {
  return (
    <section className="container mt-24 flex flex-col items-center">
      <div className="flex flex-col items-center justify-center bg-white p-3 gap-4 lg:w-10/12  rounded-md">
        <div className=" flex items-start py-2 lg:py-0  ">
          <div className="flex flex-row items-center text gap-2 font-bold p-2 rounded-lg bg-[#056FC533]    ">
            <p className="text-[#056FC5] ]">Our Process</p>
          </div>
        </div>

        <div className="lg:text-3xl font-bold text-xl text-center lg:text-start  ">
          <p className="space-x-20 text-[#032759] ">
            Streamlined Solutions, Streamlined .
            <span className="text-[#056FC5]"> Results</span>
          </p>
        </div>

        <h1 className="md:text-2xl text-[#757575] text-center">
          The VY Construction process is designed to ensure the highest quality
          standards of construction and customer satisfaction. The entire
          process begins with a thorough evaluation of customer needs and
          expectations, followed by designing the project to meet these
          expectations.
        </h1>
      </div>

      <main className="grid grid-cols-1 lg:grid-cols-7 gap-4 mt-10">
        {/* Left Section (4 columns) */}
        <div className="col-span-1 lg:col-span-4 flex flex-col items-center gap-4 relative rounded-2xl overflow-hidden">
          {/* Image */}
          <Image
            src="/21.png"
            alt="Overlay Example"
            width={500}
            height={1000}
            className="object-cover w-full h-full rounded-2xl"
          />

          {/* Overlay Text */}
          <div className="  absolute inset-0 flex flex-col  w-full p-8 items-center gap-4 justify-end rounded-2xl bg-black/50  text-lg font-bold">
            <div className="bg-white text-[#757575] p-3 flex flex-col items-center border-2 border-black">
              <p className="p-3 md:text-2xl font-bold text-[#26343D] rounded-md ">
                Preconstruction Design
              </p>
              <p className="text-start text-sm md:text-md">
                VY Construction’s Preconstruction Design phase is where our team
                of experts works together to design a customized solution
                tailored to meet the needs and budget of each project.
              </p>
            </div>
          </div>
        </div>

        {/* Right Section (3 columns) */}
        <div className="col-span-1 lg:col-span-3 flex flex-col items-center gap-4 relative rounded-2xl overflow-hidden">
          {/* Image */}
          <Image
            src="/22.png"
            alt="Overlay Example"
            width={1000}
            height={1000}
            className="object-cover w-full h-full rounded-2xl"
          />

          {/* Overlay Text */}
          <div className="absolute inset-0 flex flex-col p-8 rounded-2xl items-center gap-4 justify-end bg-black/50 text-white text-lg font-bold">
            <div className="bg-white text-[#757575] p-3 flex flex-col items-center border-2 border-black">
              <p className="p-3 md:text-2xl font-bold text-[#26343D] rounded-md ">
                Design & Construction Estimate
              </p>
              <p className="text-start text-sm md:text-md">
                Our team starts by providing clients with a detailed design and
                construction estimate to ensure that the project is within
                budget..
              </p>
            </div>
          </div>
        </div>
      </main>

      <main className="grid grid-cols-1 lg:grid-cols-7 gap-4 mt-4">
        {/* Right Section (3 columns) */}
        <div className="col-span-1 lg:col-span-3 flex flex-col items-center gap-4 relative rounded-2xl overflow-hidden">
          {/* Image */}
          <Image
            src="/23.png"
            alt="Overlay Example"
            width={1000}
            height={1000}
            className="object-cover w-full h-full rounded-2xl"
          />

          {/* Overlay Text */}
          <div className="absolute inset-0 flex flex-col p-8 rounded-2xl items-center gap-4 justify-end bg-black/50 text-white text-lg font-bold">
            <div className="bg-white text-[#757575] p-3 flex flex-col items-center border-2 border-black">
              <p className="p-3 md:text-2xl font-bold text-[#26343D] rounded-md ">
                On-Site Consultations
              </p>
              <p className="text-start text-sm md:text-md  ">
                At VY Construction, we understand that no two construction
                projects are ever the same. That&apos;s why each project is
                given a customized approach tailored to the unique needs of each
                customer.
              </p>
            </div>
          </div>
        </div>

        {/* Left Section (4 columns) */}
        <div className="col-span-1 lg:col-span-4 flex flex-col items-center gap-4 relative rounded-2xl overflow-hidden">
          {/* Image */}
          <Image
            src="/24.png"
            alt="Overlay Example"
            width={500}
            height={1000}
            className="object-cover w-full h-full rounded-2xl"
          />

          {/* Overlay Text */}
          <div className="  absolute inset-0 flex flex-col  w-full p-8 items-center gap-4 justify-end rounded-2xl bg-black/50  text-lg font-bold">
            <div className="bg-white text-[#757575] p-3 flex flex-col items-center border-2 border-black">
              <p className="p-3 md:text-2xl font-bold text-[#26343D] rounded-md ">
                The Finishing Touches
              </p>
              <p className="text-start text-sm md:text-md ">
                The finishing touches involve all those small details that
                create the overall look and feel of a construction project.
              </p>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Ourprocess;
