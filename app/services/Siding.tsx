import Image from "next/image";
import React from "react";

const Siding = () => {
  return (
    <section className="flex flex-col mt-10 lg:mt-24 gap-16 container">
      <div className="lg:grid grid-cols-2 mt-10 flex-col container lg:w-11/12 gap-10 justify-center ">
        <main className=" col-span-1 flex flex-col items-center lg:items-start  lg:gap-10  ">
          <div className="  text-center justify-center w-full py-2 lg:py-0  ">
            <div className="flex flex-row text-center items-center justify-center text gap-2 font-bold p-2 rounded-lg bg-white    ">
              <p className="text-[#032759] text-2xl ">Siding</p>
            </div>
          </div>
          <p className="lg:text-xl md:text-xl text-justify text-[#323232] font-medium">
            At VY Construction, we understand the importance of having a
            beautiful home exterior to be proud of. That’s why we specialize in
            siding services for residential homes; from large-scale projects to
            smaller fixes and upgrades. Our experienced contractors provide
            personalized solutions that not only look great but also help
            protect your home against moisture damage and other hazards. With
            our attention to detail and commitment to customer satisfaction, you
            can trust us to get the job done right! Contact us today for your
            free consultation!
          </p>

          <div className="col-span-1 flex justify-end lg:hidden py-10">
            <Image
              src={"/Group 20.png"}
              alt="hero"
              width={500}
              height={300}
              quality={100}
              className="object-cover"
            />
          </div>

          <div>
            <p className="lg:text-3xl md:text-xl font-bold  text-[#056FC5] ">
              We offer a full range of siding services, including:
            </p>

            <ul className="font-bold text-md flex flex-row flex-wrap items-start justify-start gap-4 list-none ">
              <li className="relative flex items-center before:content-[''] before:block before:w-2 before:h-2 before:bg-[#24534B] before:mr-2">
                Vinyl Siding Installation
              </li>
              <li className="relative flex items-center before:content-[''] before:block before:w-2 before:h-2 before:bg-[#24534B] before:mr-2">
                Wood Siding Installation
              </li>
              <li className="relative flex items-center before:content-[''] before:block before:w-2 before:h-2 before:bg-[#24534B] before:mr-2">
                Replacement
              </li>
              <li className="relative flex items-center before:content-[''] before:block before:w-2 before:h-2 before:bg-[#24534B] before:mr-2">
                Fiber Cement Siding Installation
              </li>
              <li className="relative flex items-center before:content-[''] before:block before:w-2 before:h-2 before:bg-[#24534B] before:mr-2">
                Aluminum Siding Installation
              </li>
            </ul>
          </div>
        </main>

        <div className="col-span-1 lg:flex justify-end hidden">
          <Image
            src={"/Group 20.png"}
            alt="hero"
            width={560}
            height={300}
            quality={100}
            className="object-cover"
          />
        </div>
      </div>

      <main className=" flex flex-col items-center justify-center lg:items-start  lg:gap-10  ">
        <div className="  text-center flex justify-center w-full py-2 lg:py-0  ">
          <div className="flex flex-row text-center items-center justify-center text gap-2 font-bold p-2 rounded-lg bg-white    ">
            <p className="text-[#032759] text-2xl ">
              Gutter Guard Installation
            </p>
          </div>
        </div>
        <p className="lg:text-xl md:text-xl text-justify text-[#323232] font-medium">
          VY Construction offers the best gutter guard installation services in
          the region. Our experienced team of professionals are committed to
          providing top-quality work, ensuring that your gutters will remain
          free from debris and clogging for years to come. With our
          state-of-the-art tools and equipment, we can provide a fast and
          efficient job while keeping costs low. We understand how important it
          is to protect your home from water damage and other potential problems
          caused by clogged gutters, so our technicians have extensive
          experience with gutter guard installation services. No matter the size
          or complexity of the job, VY Construction is here to help you get it
          done right! Contact us today for more information about our gutter
          guard installation services. We look forward to helping you protect
          your home and keep it looking great!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 justify-between  items-center">
          <div className="col-span-1    ">
            <Image
              src={"/Group 21.png"}
              alt="hero"
              width={500}
              height={300}
              quality={100}
              className="object-cover"
            />
          </div>

          <div className="col-span-1   ">
            <Image
              src={"/Frame 74.png"}
              alt="hero"
              width={500}
              height={300}
              quality={100}
              className="object-cover"
            />
          </div>
        </div>
      </main>
    </section>
  );
};

export default Siding;
