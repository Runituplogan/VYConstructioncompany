import Image from "next/image";
import React from "react";
import { BsHouseDoorFill } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";

const CTA = () => {
  return (
    <section className="grid grid-cols-2 mt-24 flex-col container ">
      <main className=" col-span-1 flex flex-col  justify-between ">
        <div className=" inline-block bg-[#056FC533]">
          <div className="flex flex-row items-center text-sm font-bold    ">
            <BsHouseDoorFill className="text-[#056FC5]" />
            <p className="text-[#056FC5] ]">Who we are</p>
          </div>
        </div>
        <p className="text-2xl text-justify">
          At VY Construction, we understand that it&apos;s important for your
          home to look its best. That&apos;s why our team consists of
          experienced professionals who are committed to providing quality
          services. We strive to make sure that your home is attractive and
          well-maintained, with exterior repairs, deck repairs, new deck builds,
          siding and gutter guard installation.
        </p>

        <div className="text-2xl text-[#056FC5]">
          <p className="font-bold">We Offer:</p>
          <p>
            Wood Rot Repair • Termite Damage Repair • Deck Repairs • New Deck
            Builds • Siding • Pergolas and Patio Covers • Gutter Cleaning •
            Gutter Guard Installation
          </p>
        </div>

        <div className="flex flex-row items-center gap-4 text-xl">
          <p className="border-2 p-1 bg-[#056FC5] w-16"></p>
          <p className="text-[#056FC5] ">Follow our social</p>
          <FaFacebook className="text-[#056FC5]" />
        </div>
      </main>
      <div className="col-span-1 flex justify-end">
        <Image
          src={"/house1.png"}
          alt="hero"
          width={500}
          height={300}
          quality={100}
          className="object-cover"
        />
      </div>
    </section>
  );
};

export default CTA;
