import Image from "next/image";
import React from "react";

const Paglory = () => {
  return (
    <section className="flex flex-col justify-center items-start md:mt-24  container ">
      {/* first section */}
      <div className="lg:grid grid-cols-2 mt-10 flex-col container lg:w-11/12 gap-10 justify-center ">
        <main className=" col-span-1 flex flex-col items-center lg:items-start  lg:gap-10  ">
          <div className="  text-center justify-center w-full py-2 lg:py-0  ">
            <div
              data-aos="fade-up"
              className="flex flex-row text-center items-center justify-center text gap-2 font-bold p-2 rounded-lg bg-white    "
            >
              <p className="text-[#032759] md:text-2xl ">
                Pergolas & Patio Covers
              </p>
            </div>
          </div>
          <p
            data-aos="fade-right"
            className="lg:text-xl md:text-xl text-justify text-[#323232] font-medium"
          >
            At VY Construction, we understand that you want to make the most out
            of your outdoor space. That&apos;s why we specialize in building
            custom pergolas and patio covers. Our experienced team of
            professionals can help you design and build a structure that not
            only adds beauty to your yard but also provides shade, privacy, and
            protection from the elements.
          </p>

          <div
            data-aos="fade-left"
            className="col-span-1 flex justify-end lg:hidden py-10"
          >
            <Image
              src={"/house1.png"}
              alt="hero"
              width={500}
              height={300}
              quality={100}
              className="object-cover"
            />
          </div>

          <p
            data-aos="fade-right"
            className="lg:text-xl md:text-xl text-justify text-[#323232] font-medium"
          >
            We use high-quality materials and proven construction techniques to
            ensure that your new pergola or patio cover is built according to
            exact specifications. Every project is unique and our team takes
            great care when crafting each one with precision. Whether you need a
            modern contemporary design or a rustic classic look, we have what it
            takes to create the perfect outdoor oasis for you and your family to
            enjoy.
          </p>
        </main>

        <div
          data-aos="fade-left"
          className="col-span-1 lg:flex justify-end hidden"
        >
          <Image
            src={"/house1.png"}
            alt="hero"
            width={600}
            height={300}
            quality={100}
            className="object-cover"
          />
        </div>
      </div>

      <div className="lg:grid grid-cols-2 mt-10 flex-col container lg:w-11/12 gap-10 justify-center ">
        <div
          data-aos="fade-right"
          className="col-span-1 lg:flex justify-end hidden"
        >
          <Image
            src={"/Group 19.png"}
            alt="hero"
            width={500}
            height={300}
            quality={100}
            className="object-cover"
          />
        </div>

        <main className=" col-span-1 flex flex-col items-center lg:items-start  lg:gap-10  ">
          <div className="  text-center justify-center w-full py-2 lg:py-0  "></div>
          <p
            data-aos="fade-left"
            className="lg:text-xl md:text-xl text-justify text-[#323232] font-medium"
          >
            Our commitment to excellence goes beyond the completion of your
            project and extends to providing ongoing maintenance and repair
            services. We are dedicated to making sure that your pergola or patio
            cover remains in top shape for years to come.
          </p>

          <div
            data-aos="fade-right"
            className="col-span-1 flex justify-end lg:hidden py-10"
          >
            <Image
              src={"/Group 19.png"}
              alt="hero"
              width={500}
              height={300}
              quality={100}
              className="object-cover"
            />
          </div>

          <p
            data-aos="fade-left"
            className="lg:text-2xl font-bold  md:text-xl text-justify text-[#032759] "
          >
            Whatever your vision is, we can help make it a reality with our
            professional pergola and patio cover services at VY Construction.
            <span className="text-[#056FC5]">
              {" "}
              Contact us today to learn more!
            </span>
          </p>
        </main>
      </div>
    </section>
  );
};

export default Paglory;
