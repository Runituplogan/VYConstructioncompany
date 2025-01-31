import Image from "next/image";
import React from "react";

const Exterior = () => {
  return (
    <section className="mt-6 md:mt-30 flex-col flex justify-center p-5 lg:p-0 items-center    ">
      <div className="lg:grid grid-cols-2 lg:mt-10 flex-col  lg:w-11/12 gap-10 justify-center ">
        <div
          data-aos="fade-right"
          className="col-span-1 lg:flex justify-end hidden"
        >
          <Image
            src={"/s1.png"}
            alt="hero"
            width={600}
            height={300}
            quality={100}
            className="object-cover"
          />
        </div>

        <main
          data-aos="fade-left"
          className=" col-span-1 flex flex-col items-center lg:items-start  lg:gap-10  "
        >
          <div className="  text-center justify-center w-full py-2 lg:py-0  ">
            <div className="flex flex-row text-center items-center justify-center text gap-2 font-bold p-2 rounded-lg bg-white    ">
              <p className="text-[#032759] text-3xl ">Exterior Repairs</p>
            </div>
          </div>
          <p className="lg:text-2xl md:text-xl text-justify text-[#323232] font-medium">
            At VY Construction, we understand that your home is your most
            valuable asset and the exterior of your home plays an important role
            in its visual appeal and overall value. That&apos;s why we take the
            utmost care when it comes to repair services for your home&apos;s
            exterior. We provide detailed assessments to identify any existing
            damage or areas in need of repair, and then use only the best
            quality materials and techniques to ensure a lasting solution.
          </p>

          <div
            data-aos="fade-left"
            className="col-span-1 flex justify-end lg:hidden py-10"
          >
            <Image
              src={"/s1.png"}
              alt="hero"
              width={500}
              height={300}
              quality={100}
              className="object-cover"
            />
          </div>

          <p
            data-aos="fade-right"
            className="lg:text-2xl md:text-xl text-justify text-[#323232] font-medium"
          >
            Our team of experienced professionals have worked on countless
            residential and commercial projects over the years, so you can rest
            assured that you&apos;re getting top-notch workmanship from start to
            finish. With our competitive rates and commitment to providing
            excellent customer service, you can count on VY Construction for all
            of your exterior repair needs!.
          </p>
        </main>
      </div>

      <div className="lg:grid grid-cols-5 gap-4 mt-16 md:mt-24  flex-col lg:p-0 lg:mx-16  ">
        <div
          data-aos="fade-left"
          className="col-span-2 lg:flex hidden justify-start  "
        >
          <Image
            src={"/image 1.png"}
            alt="hero"
            width={460}
            height={200}
            quality={100}
            className="object-cover"
          />
        </div>
        <main className=" col-span-3 flex  flex-col items-center lg:items-start  gap-10 ">
          <div
            data-aos="fade-up"
            className="lg:text-2xl flex flex-col gap-1 text-center lg:text-center"
          >
            <p className=" lg:text-3xl bg-white md:p-3 p-3 font-bold text-[#032759]">
              Deck Repairs
            </p>
            <p className=" lg:text-4xl text-[#032759] font-bold md:p-3 p-3  rounded-md">
              At VY Construction, we strive to provide our customers with the
              <span className="text-[#056FC5]">
                {" "}
                best deck repair services available.
              </span>
            </p>
          </div>

          <div
            data-aos="fade-right"
            className="col-span-1 flex lg:hidden justify-start py-8  "
          >
            <Image
              src={"/g1.png"}
              alt="hero"
              width={400}
              height={300}
              quality={100}
              className="object-cover"
            />
          </div>

          <div
            data-aos="fade-left"
            className="col-span-1 lg:grid flex flex-col-reverse lg:grid-cols-2 gap-6 "
          >
            <div className="col-span-1">
              <Image
                src={"/s2.png"}
                alt="hero"
                width={400}
                height={400}
                quality={100}
                className="object-cover"
              />
            </div>
            <p
              data-aos="fade-up"
              className="lg:text-2xl col-span-1 md:text-xl text- text-[#323232] font-medium"
            >
              We understand that a deck is an important and integral part of any
              house - it’s where families gather for meals or entertainment in
              the warmer months, and it can be a great focal point for curbside
              appeal. That’s why we take every deck repair job seriously and do
              our utmost to ensure that your outdoor space is safe and secure.
            </p>
          </div>
        </main>
      </div>

      <div className="flex flex-col gap-3 py-10 md:text-xl lg:mx-14">
        <p data-aos="fade-up">
          We begin each job by inspecting your existing deck to determine if
          there are any structural problems that need to be addressed. Then we
          make sure all connections are secure, boards are level, nails have
          been properly installed, staircases meet safety standards, railings
          are firmly fastened, and the overall integrity of the structure is
          sound. We also check for any signs of decay or rot and replace
          affected boards as needed.
        </p>

        <p data-aos="fade-up">
          Once our deck repair work is complete, we can then help you choose
          from a variety of options to enhance your outdoor space, such as
          adding built-in benches, trellises, pergolas, and more. Our
          experienced team will ensure that all elements are properly installed
          for years of safe and enjoyable use.
        </p>

        <p data-aos="fade-up">
          At VY Construction, we take pride in providing top-quality services to
          our customers. With our expertise in deck repairs and enhancements,
          you can trust that your outdoor space will be secure and beautiful for
          years to come. Contact us today to learn more about how we can help
          make your home’s outdoor space more inviting.
        </p>
      </div>
    </section>
  );
};

export default Exterior;
