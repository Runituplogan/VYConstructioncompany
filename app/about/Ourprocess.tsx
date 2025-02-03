import Image from "next/image";
import React from "react";

const Ourprocess = () => {
  return (
    <section className="container lg:mt-24 flex flex-col items-center">
      <div className="flex flex-col items-center justify-center  shadow-md  p-3 gap-4 lg:w-10/12  rounded-sm">
        <div data-aos="fade-up" className=" flex items-start py-2 lg:py-0  ">
          <div className="flex flex-row items-center text gap-2 font-bold p-2 rounded-lg bg-[#056FC533]    ">
            <p className="text-[#056FC5] ]">Our Process</p>
          </div>
        </div>

        <div
          data-aos="fade-up"
          className="lg:text-3xl font-bold text-xl text-center lg:text-start  "
        >
          <p data-aos="fade-up" className="space-x-20 text-[#032759] ">
            Streamlined Solutions, Streamlined
            <span className="text-[#056FC5]"> Results.</span>
          </p>
        </div>

        <h1
          data-aos="fade-up"
          className="md:text-2xl font-medium text-[#757575] text-center"
        >
          The VY Construction process is designed to ensure the highest quality
          standards of construction and customer satisfaction. The entire
          process begins with a thorough evaluation of customer needs and
          expectations, followed by designing the project to meet these
          expectations.
        </h1>
      </div>

      <div className="bg-[#056FC54] md:px-4 lg:px-20 md:mt-32 w-full">
        <div className="relative">
          <div className="relative">
            {/* Background Color Layer */}
            <div className="absolute top-0 left-0  w-ful lg:w-[80%] lg:h-[70%] bg-[#056FC540]"></div>

            {/* Content Section */}
            <main className="relative flex flex-col md:flex-row gap-4 lg:px-20">
              <div
                data-aos="fade-right"
                className="flex flex-col items-center gap-4 relative rounded-2xl lg:-top-20 overflow-hidden lg:overflow-visible md:h-[500px] h-[400px] lg:w-[60%]"
              >
                {/* Image */}
                <Image
                  width={1000}
                  height={1000}
                  src={"/b1.png"}
                  alt="Overlay Example"
                  className="object-cover w-full h-full rounded-2xl"
                />

                {/* Overlay Text */}
                <div className="absolute inset-0 z-10 flex flex-col  p-8 rounded-2xl gap-4 justify-end bg-black/ border-black border-4 text-white text-lg font-bold">
                  <div className="lg:-translate-x-6 gap-2 lg:-translate-y-12 right-10 md:py-4 md:px-8 bg-white text-[#757575] p-3 flex flex-col justify-center items-center border-2 border-black lg:w-[90%]">
                    <p className=" md:text-2xl lg:text-xl font-bold text-[#26343D] rounded-md">
                      Preconstruction Design
                    </p>
                    <p className="text-start text-sm md:text-md">
                      VY Construction’s Preconstruction Design phase is where
                      our team of experts works together to design a customized
                      solution tailored to meet the needs and budget of each
                      project.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Section */}
              <div
                data-aos="fade-left col-span-1"
                className="lg:w-[40%] flex flex-col items-center gap-4 relative rounded-2xl overflow-hidden lg:overflow-visible lg:top-1 md:h-[430px] h-[400px] lg:!mt-24"
              >
                {/* Image */}
                <Image
                  src={"/b2.png"}
                  alt="Overlay Example"
                  width={1000}
                  height={1000}
                  className="object-cover w-full h-full rounded-2xl"
                />

                {/* Overlay Text */}
                <div className="absolute z-10 inset-0 flex flex-col p-8 rounded-2xl items-center gap-4 justify-end bg-black/ border-black border-4 text-white text-lg font-bold">
                  <div className="bg-white lg:w-96 gap-2 lg:translate-x-12 lg:-translate-y-8 md:!py-4 md:!px-6 text-[#757575] p-3 flex flex-col items-center border-2 border-black">
                    <p className=" md:text-2xl lg:text-xl text-center font-bold text-[#26343D] rounded-md">
                      Design & Construction Estimate
                    </p>
                    <p className="text-start text-sm md:text-md">
                      Our team starts by providing clients with a detailed
                      design and construction estimate to ensure that the
                      project is within budget.
                    </p>
                  </div>
                </div>
              </div>
            </main>
          </div>

          {/* Second Main Section */}
          <main className="flex flex-col md:flex-row gap-4 !mt-4 h-[100%] w-full lg:px-20">
            <div
              data-aos="fade-right"
              className="w-full lg:w-[55%] md:-top-20 flex flex-col items-center gap-4 relative rounded-2xl lg:-top-14 overflow-hidden md:h-[450px] h-[400px] lg:-translate-y-18"
            >
              <Image
                src={"/b3.png"}
                alt="Overlay Example"
                width={1000}
                height={1000}
                className="object-cover w-full h-full rounded-2xl"
              />

              <div className="absolute inset-0 flex flex-col p-8 rounded-2xl items-center gap-4 justify-end bg-black/ text-white text-lg font-bold !px-3 -translate-y-4">
                <div className="bg-white text-[#757575] gap-2 !px-6 !py- p-3 flex flex-col items-center border-2 border-black">
                  <p className=" md:text-2xl lg:text-xl  font-bold text-[#26343D] rounded-md">
                    On-Site Consultations
                  </p>
                  <p className="text-start text-sm md:text-md">
                    At VY Construction, we understand that no two construction
                    projects are ever the same. That&apos;s why each project is
                    given a customized approach tailored to the unique needs of
                    each customer.
                  </p>
                </div>
              </div>
            </div>

            <div
              data-aos="fade-left"
              className="lg:w-[65%] flex flex-col items-center gap-4 relative rounded-2xl overflow-hidden lg:top- md:h-[500px] h-[400px]"
            >
              <Image
                src={"/b4.png"}
                alt="Overlay Example"
                width={1000}
                height={1000}
                className="object-cover w-full h-full rounded-2xl"
              />

              <div className="absolute inset-0 flex flex-col p-8 rounded-2xl items-center gap-4 justify-end border-4  border-black text-white text-lg font-bold !px-5">
                <div className="bg-white gap-2 text-[#757575] p-3 lg:!py- lg:!px-6 -translate-y-7 flex flex-col items-center border-2 border-black">
                  <p className=" md:text-xl font-bold text-[#26343D] rounded-md">
                    The Finishing Touches
                  </p>
                  <p className="text-start text-sm md:text-md">
                    The finishing touches involve all those small details that
                    create the overall look and feel of a construction project.
                  </p>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </section>
  );
};

export default Ourprocess;
