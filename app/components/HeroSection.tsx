"use client";

import React, { useState } from "react";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";
import Image from "next/image";
import Script from "next/script";

const HeroSection = () => {
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);

  const sendEstimationRequest = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    setLoading(true);

    emailjs
      .send(
        "service_6gs5319",
        "template_0lzto0f",
        { phone },
        "apQJg2DtjcCfWOzGP"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setLoading(false);
          setPhone("");
          toast.success("Request sent successfully!");
        },
        (error) => {
          console.log("FAILED...", error);
          setLoading(false);
        }
      );
  };
  return (
    <div className="flex flex-col items-center gap-4 lg:gap-7 mt-8 md:mt-0 md:py-10 lg:px-44 justify-center text-center container">
      <Script
        id="google-analytic-phoneNumber"
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        'event': ‘free_estimate’,
      'phone_number’: ${{ phone }},`,
        }}
      />
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
        Serving Homeowners, HOA&apos;s, Property Management Companies, and
        Commercial Properties.
      </p>
      <form onSubmit={sendEstimationRequest} className="lg:w-3/4 w-full">
        <div className="relative w-">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"></div>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="  w-full p-4  text-sm text-gray-900  border-gray-300 rounded-lg"
            placeholder="Enter your phone number"
            required
          />
          <button
            disabled={loading}
            type="submit"
            className="disabled:opacity-55 ease transition-all duration-200 text-white absolute end-2.5 bottom-2.5 bg-[#056FC5]  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs md:text-sm md:px-4 px-2 py-2 "
          >
            Get a free estimate
          </button>
        </div>
      </form>

      <div className="lg:w-[65rem]   w-[30rem]">
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
