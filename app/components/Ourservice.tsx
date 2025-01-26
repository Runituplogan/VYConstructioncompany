import Image from "next/image";
import React from "react";

const Ourservice = () => {
  return (
    <section className="container mt-24 flex flex-col items-center">
      <h1 className="text-4xl text-[#032759] font-bold">Our Service Include</h1>
      <main className="grid grid-cols-1 lg:grid-cols-7 gap-4 mt-10">
        {/* Left Section (4 columns) */}
        <div className="col-span-1 lg:col-span-4 flex flex-col items-center gap-4 relative rounded-2xl overflow-hidden">
          {/* Image */}
          <Image
            src="/1.png"
            alt="Overlay Example"
            width={1000}
            height={1000}
            className="object-cover w-full h-full rounded-2xl"
          />

          {/* Overlay Text */}
          <div className="absolute inset-0 flex flex-col p-8 items-center gap-4 justify-end rounded-2xl bg-black/50 text-white text-lg font-bold">
            <p className="bg-white p-3 md:text-2xl  rounded-md text-black">
              Wood Rot Repair
            </p>
            <p className="text-center">
              We expertly repair and replace decayed wood to restore your
              building’s strength, durability, and appearance.
            </p>
          </div>
        </div>

        {/* Right Section (3 columns) */}
        <div className="col-span-1 lg:col-span-3 flex flex-col items-center gap-4 relative rounded-2xl overflow-hidden">
          {/* Image */}
          <Image
            src="/10.jpeg"
            alt="Overlay Example"
            width={1000}
            height={1000}
            className="object-cover w-full h-full rounded-2xl"
          />

          {/* Overlay Text */}
          <div className="absolute inset-0 flex flex-col p-8 rounded-2xl items-center gap-4 justify-end bg-black/50 text-white text-lg font-bold">
            <p className="bg-white p-3 md:text-2xl rounded-md text-black">
              Wood Rot Repair
            </p>
            <p className="text-center">
              We expertly repair and replace decayed wood to restore your
              building’s strength, durability, and appearance.
            </p>
          </div>
        </div>
      </main>

      {/* secone one start here */}
      <main className="grid grid-cols-1 lg:grid-cols-7 gap-4 mt-10">
        {/* Right Section (3 columns) */}
        <div className="col-span-1 lg:col-span-3 flex flex-col items-center gap-4 relative rounded-2xl overflow-hidden">
          {/* Image */}
          <Image
            src="/10.jpeg"
            alt="Overlay Example"
            width={1000}
            height={1000}
            className="object-cover w-full h-full rounded-2xl"
          />

          {/* Overlay Text */}
          <div className="absolute inset-0 flex flex-col p-8 rounded-2xl items-center gap-4 justify-end bg-black/50 text-white text-lg font-bold">
            <p className="bg-white p-3 md:text-2xl rounded-md text-black">
              Wood Rot Repair
            </p>
            <p className="text-center">
              We expertly repair and replace decayed wood to restore your
              building’s strength, durability, and appearance.
            </p>
          </div>
        </div>

        {/* Left Section (4 columns) */}
        <div className="col-span-1 lg:col-span-4 flex flex-col items-center gap-4 relative rounded-2xl overflow-hidden">
          {/* Image */}
          <Image
            src="/1.png"
            alt="Overlay Example"
            width={1000}
            height={1000}
            className="object-cover w-full h-full rounded-2xl"
          />

          {/* Overlay Text */}
          <div className="absolute inset-0 flex flex-col p-8 items-center gap-4 justify-end rounded-2xl bg-black/50 text-white text-lg font-bold">
            <p className="bg-white p-3 md:text-2xl  rounded-md text-black">
              Wood Rot Repair
            </p>
            <p className="text-center">
              We expertly repair and replace decayed wood to restore your
              building’s strength, durability, and appearance.
            </p>
          </div>
        </div>
      </main>

      {/* third section */}
      <main className="grid grid-cols-1 lg:grid-cols-7 gap-4 mt-10">
        {/* Left Section (4 columns) */}
        <div className="col-span-1 lg:col-span-4 flex flex-col items-center gap-4 relative rounded-2xl overflow-hidden">
          {/* Image */}
          <Image
            src="/1.png"
            alt="Overlay Example"
            width={1000}
            height={1000}
            className="object-cover w-full h-full rounded-2xl"
          />

          {/* Overlay Text */}
          <div className="absolute inset-0 flex flex-col p-8 items-center gap-4 justify-end rounded-2xl bg-black/50 text-white text-lg font-bold">
            <p className="bg-white p-3 md:text-2xl  rounded-md text-black">
              Wood Rot Repair
            </p>
            <p className="text-center">
              We expertly repair and replace decayed wood to restore your
              building’s strength, durability, and appearance.
            </p>
          </div>
        </div>

        {/* Right Section (3 columns) */}
        <div className="col-span-1 lg:col-span-3 flex flex-col items-center gap-4 relative rounded-2xl overflow-hidden">
          {/* Image */}
          <Image
            src="/10.jpeg"
            alt="Overlay Example"
            width={1000}
            height={1000}
            className="object-cover w-full h-full rounded-2xl"
          />

          {/* Overlay Text */}
          <div className="absolute inset-0 flex flex-col p-8 rounded-2xl items-center gap-4 justify-end bg-black/50 text-white text-lg font-bold">
            <p className="bg-white p-3 md:text-2xl rounded-md text-black">
              Wood Rot Repair
            </p>
            <p className="text-center">
              We expertly repair and replace decayed wood to restore your
              building’s strength, durability, and appearance.
            </p>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Ourservice;
