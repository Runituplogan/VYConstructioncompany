import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div>
      <section className="md:mt-16 mt-10  flex flex-col lg:flex-row items-center justify-center md:relative md:right-20">
        {/* Main Content */}
        <main className="flex flex-col gap-10 md:gap-5 md:p-6 rounded-lg  md:z-10   md:relative lg:-right-32">
          <div
            data-aos="fade-up"
            className="border-[#056FC5] bg-white border-2 p-4 rounded-md flex lg:w-[45rem]  md:text-center items-center flex-col gap-2"
          >
            <p className="md:text-6xl text-2xl font-bold text-[#032759] w-full">
              Connect with us
              <span className="text-[#056FC5]"> today</span>
            </p>
          </div>

          <div className="font-bold text-xl flex flex-col gap-4 list-none md:pl-">
            <p
              data-aos="fade-left"
              className="lg:text-2xl text-center md:text-start text-[#757575] md:w-96 "
            >
              {" "}
              Reach out today to discuss your project and discover how we can
              bring your vision to life with quality craftsmanship.
            </p>

            <div className="md:relative z-0 py-8  md:hidden">
              <Image
                src="/l1.png"
                alt="Why Choose Us"
                width={570}
                height={500}
              />
            </div>

            <p className="font-bold text-2xl text-[#323232]">
              Request Your Free Estimate Today!
            </p>

            <form className="lg:w-3/4 w-full">
              <div className="relative w- ">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"></div>
                <input
                  type="search"
                  id="search"
                  className="  w-full p-4  text-sm text-gray-900  border-gray-300 rounded-lg"
                  placeholder="Enter your phone number"
                  required
                />
                <button
                  type="submit"
                  className="text-white absolute end-2.5 bottom-2.5 bg-[#056FC5]  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs md:text-sm md:px-4 px-2 py-2 "
                >
                  Get free estimate
                </button>
              </div>
            </form>
          </div>

          <div className="flex md:items-start"></div>
        </main>

        {/* Image Section */}
        <div data-aos="fade-left" className=" md:relative z-0 hidden md:flex">
          <Image src="/l1.png" alt="Why Choose Us" width={1200} height={500} />
        </div>
      </section>
    </div>
  );
};

export default page;
