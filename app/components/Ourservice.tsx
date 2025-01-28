import Image from "next/image";
import React from "react";

const Ourservice = () => {
  return (
    <section className="container mt-24 flex flex-col items-center">
      <h1
        data-aos="fade-up"
        className="md:text-4xl text-2xl text-[#032759] font-bold"
      >
        Our Service Include
      </h1>

      {/* First Section */}
      <main className="grid grid-cols-1 lg:grid-cols-7 gap-4 mt-10">
        {/* Left Section (4 columns) */}
        <div
          data-aos="fade-right"
          className="col-span-1 lg:col-span-4 flex flex-col items-center gap-4 relative rounded-2xl overflow-hidden md:h-[500px] h-[400px]"
        >
          {/* Image */}
          <Image
            src="/1.png"
            alt="Overlay Example"
            width={1000}
            height={1000}
            className="object-cover w-full h-full rounded-2xl"
          />

          {/* Overlay Text */}
          <div className="absolute inset-0 flex flex-col md:p-8 p-4 items-start gap-4 justify-end rounded-2xl bg-black/50 text-white text-lg">
            <p className="bg-white font-bold p-3 md:text-2xl text-sm rounded-md text-black">
              Wood Rot Repair
            </p>
            <p className="md:text-start text-start md:text-xl text-sm">
              We expertly repair and replace decayed wood to restore your
              building’s strength, durability, and appearance.
            </p>
          </div>
        </div>

        {/* Right Section (3 columns) */}
        <div
          data-aos="fade-left"
          className="col-span-1 lg:col-span-3 flex flex-col items-center gap-4 relative rounded-2xl overflow-hidden md:h-[500px] h-[400px]"
        >
          {/* Image */}
          <Image
            src="/10.jpeg"
            alt="Overlay Example"
            width={1000}
            height={1000}
            className="object-cover w-full h-full rounded-2xl"
          />

          {/* Overlay Text */}

          <div className="absolute inset-0 flex flex-col md:p-8 p-4 items-start gap-4 justify-end rounded-2xl bg-black/50 text-white text-lg">
            <p className="bg-white font-bold p-3 md:text-2xl text-sm rounded-md text-black">
              New Deck Builds
            </p>
            <p className="md:text-start text-start md:text-xl text-sm">
              We design and construct custom new decks that enhance your outdoor
              living space with durability, style, and functionality.
            </p>
          </div>
        </div>
      </main>

      {/* Second Section */}
      <main
        data-aos="fade-right"
        className="grid grid-cols-1 lg:grid-cols-7 gap-4 mt-5"
      >
        {/* Right Section (3 columns) */}
        <div className="col-span-1 lg:col-span-3 flex flex-col items-center gap-4 relative rounded-2xl overflow-hidden md:h-[500px]  h-[400px]">
          {/* Image */}
          <Image
            src="/n3.png"
            alt="Overlay Example"
            width={1000}
            height={1000}
            className="object-cover w-full h-full rounded-2xl"
          />

          {/* Overlay Text */}
          <div className="absolute inset-0 flex flex-col md:p-8 p-4 items-start gap-4 justify-end rounded-2xl bg-black/50 text-white text-lg">
            <p className="bg-white font-bold p-3 md:text-2xl text-sm rounded-md text-black">
              Siding
            </p>
            <p className="md:text-start text-start md:text-xl text-sm">
              Our experienced contractors provide personalized solutions that
              not only look great but also help protect your home against
              moisture damage and other hazards.
            </p>
          </div>
        </div>

        {/* Left Section (4 columns) */}
        <div
          data-aos="fade-left"
          className="col-span-1 lg:col-span-4 flex flex-col items-center gap-4 relative rounded-2xl overflow-hidden md:h-[500px] h-[400px]"
        >
          {/* Image */}
          <Image
            src="/n4.png"
            alt="Overlay Example"
            width={1000}
            height={1000}
            className="object-cover w-full h-full rounded-2xl"
          />

          {/* Overlay Text */}
          <div className="absolute inset-0 flex flex-col md:p-8 p-4 items-start gap-4 justify-end rounded-2xl bg-black/50 text-white text-lg">
            <p className="bg-white font-bold p-3 md:text-2xl text-sm rounded-md text-black">
              Gutter Guard Insallation
            </p>
            <p className="md:text-start text-start md:text-xl text-sm">
              Our experienced team of professionals are committed to providing
              top-quality work, ensuring that your gutters will remain free from
              debris and clogging for years to come.
            </p>
          </div>
        </div>
      </main>

      {/* Third Section */}
      <main
        data-aos="fade-right"
        className="grid grid-cols-1 lg:grid-cols-7 gap-4 mt-5"
      >
        {/* Left Section (4 columns) */}
        <div className="col-span-1 lg:col-span-4 flex flex-col items-center gap-4 relative rounded-2xl overflow-hidden md:h-[500px] h-[400px]">
          {/* Image */}
          <Image
            src="/n2.png"
            alt="Overlay Example"
            width={1000}
            height={1000}
            className="object-cover w-full h-full rounded-2xl"
          />

          {/* Overlay Text */}
          <div className="absolute inset-0 flex flex-col md:p-8 p-4 items-start gap-4 justify-end rounded-2xl bg-black/50 text-white text-lg">
            <p className="bg-white font-bold p-3 md:text-2xl text-sm rounded-md text-black">
              Pergolas & Patio Covers
            </p>
            <p className="md:text-start text-start md:text-xl text-sm">
              Whatever your vision is, we can help make it a reality with our
              professional pergola and patio cover services at VY Construction.
            </p>
          </div>
        </div>

        {/* Right Section (3 columns) */}
        <div
          data-aos="fade-left"
          className="col-span-1 lg:col-span-3 flex flex-col items-center gap-4 relative rounded-2xl overflow-hidden md:h-[500px] h-[400px]"
        >
          {/* Image */}
          <Image
            src="/n1.png"
            alt="Overlay Example"
            width={1000}
            height={1000}
            className="object-cover w-full h-full rounded-2xl"
          />

          {/* Overlay Text */}
          <div className="absolute inset-0 flex flex-col md:p-8 p-4 items-start gap-4 justify-end rounded-2xl bg-black/50 text-white text-lg">
            <p className="bg-white font-bold p-3 md:text-2xl text-sm rounded-md text-black">
              Exterior Repairs
            </p>
            <p className="md:text-start text-start md:text-xl text-sm">
              We use only the finest materials for our deck builds, so you can
              rest assured your new deck will stand up to weather and wear over
              time.
            </p>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Ourservice;
