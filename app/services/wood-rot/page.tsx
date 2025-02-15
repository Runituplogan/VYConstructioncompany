"use client";

import { useEffect } from "react";
import HeroCard from "@/app/components/HeroCard";
import { XDivMotion, YDivMotion } from "@/app/components/DivMotion";
import GetInTouch from "@/app/components/GetInTouch";
import OurServiceCard from "@/app/components/OurServiceCard";

const Page = () => {
  useEffect(() => {
    if (typeof window === "undefined") return; // Ensure this only runs on the client

    const hash = window.location.hash.substring(1); // Get hash without "#"
    if (hash) {
      const targetElement = document.getElementById(hash);
      if (targetElement) {
        setTimeout(() => {
          targetElement.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, []);

  return (
    <main className="relative w-full bg-[#F8F5F1] p-4" id="home">
      <section className="w-full">
        <HeroCard />
      </section>

      {/* Why choose us secion */}
      <section className="flex flex-col items-center gap-4 lg:gap-7 mt-8 md:mt-0 md:py-10 lg:px-20 xl:px-44 justify-center text-center container w-full mx-auto">
        <YDivMotion className="mt-14">
          <div className="w-full bg-white py-4 font-bold">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[#032759]">
              Why Choose Us
            </h2>
          </div>

          <div className="mt-16 w-full space-y-10">
            <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-7">
              <div className="w-full space-y-5 xl:space-y-8 2xl:space-y-10 col-span-1">
                <YDivMotion
                  initial={-40}
                  className="rounded-xl border-2 border-[#212121] px-4 py-8 sm:px-5 2xl:py-12 flex flex-col justify-center items-center"
                >
                  <p className="text-[#26343D] font-bold text-base md:text-lg lg:text-[20px]">
                    Local East Bay Specialists
                  </p>

                  <p className="text-sm font-medium text-[#757575] mt-2">
                    We know the unique climate and conditions that contribute to
                    wood rot in the area.
                  </p>
                </YDivMotion>

                <YDivMotion className="rounded-xl border-2 border-[#212121] px-4 py-8 sm:px-5 2xl:py-12 flex flex-col justify-center items-center">
                  <p className="text-[#26343D] font-bold text-base md:text-lg lg:text-[20px]">
                    Fast & Reliable Service
                  </p>

                  <p className="text-sm font-medium text-[#757575] mt-2">
                    We respond quickly and complete repairs efficiently.
                  </p>
                </YDivMotion>
              </div>
              <XDivMotion initial={-40} className="md:col-span-2">
                <img
                  src={"/rot-wood.png"}
                  alt="rood wood"
                  className="rounded-xl border-2 border-[#032759]"
                />
              </XDivMotion>
            </div>

            <div className="flex md:flex-row flex-col justify-stretch items-stretch gap-7 w-full h-">
              <XDivMotion className="order-2">
                <img
                  src={"/structure-repair.png"}
                  alt="structure repair"
                  className="rounded-xl border-2 border-[#032759] object-contain"
                />
              </XDivMotion>

              <div className="order-2 space-y-5 xl:space-y-8 w-full xl:w-[360px] flex flex-col justify-stretch 2xl:justify-start items-start h-full">
                <YDivMotion className="rounded-xl border-2 border-[#212121] px-4 py-8 sm:px-5 2xl:py-12 flex flex-col justify-center items-center w-full">
                  <p className="text-[#26343D] font-bold text-base md:text-lg lg:text-[20px]">
                    Licensed & Insured
                  </p>

                  <p className="text-sm font-medium text-[#757575] mt-2">
                    Work with confidence knowing our team is experienced and
                    fully insured.
                  </p>
                </YDivMotion>

                <YDivMotion
                  initial={-40}
                  className="rounded-xl border-2 border-[#212121] px-4 py-8 sm:px-5 2xl:py-12 flex flex-col justify-center items-center"
                >
                  <p className="text-[#26343D] font-bold text-base md:text-lg lg:text-[20px]">
                    Long-Lasting Solutions
                  </p>

                  <p className="text-sm font-medium text-[#757575] mt-2">
                    We don’t just patch the problem—we fix the source and use
                    durable materials to prevent future damage.
                  </p>
                </YDivMotion>
              </div>
            </div>

            <p className="font-medium text-[#757575] mt-2 sm:text-lg text-base">
              With 20 years of experience, we have worked on a wide range of
              Wood Rot problems. Our team delivers professional, high-quality
              workmanship the first time, ensuring the job is done right. You
              can trust us to provide lasting solutions, eliminating the need
              for costly rework.
            </p>
          </div>
        </YDivMotion>
      </section>

      <section className="flex flex-col items-center mt-8 md:mt-0 md:py-10 xl:px-40 justify-center text-center container w-full mx-auto">
        <div className="w-full bg-white py-4 font-bold">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[#032759]">
            Our Services
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 w-full gap-3 mt-10">
          <div
            // initial={40}
            data-aos="fade-right"
            className="w-full col-span-1 md:col-span-2 lg:col-span-3"
          >
            <OurServiceCard
              imgSrc={"/wood-rot-1.png"}
              title="Wood Rot Inspection & Assessment"
              label="We find the damage before it spreads."
              className="h-96 w-full"
            />
          </div>

          <div
            // initial={-40}
            data-aos="fade-left"
            // delay={0.4}
            className="w-full col-span-1 md:col-span-1 lg:col-span-2"
          >
            <OurServiceCard
              imgSrc={"/wood-rot-2.png"}
              title="Dry Rot Repair & Replacement"
              label="Removing affected areas and reinforcing your home’s structure."
              className="h-96 w-full"
            />
          </div>
        </div>

        <div className="px-5 sm:px-5 md:px-0 flex flex-wrap lg:flex-nowrap sm:flex-row flex-col justify-center items-start w-full gap-3 mt-3">
          <div
            data-aos="fade-right"
            // delay={0.8}
            className="w-full sm:w-[47%] md:w-[33%] flex-1"
          >
            <OurServiceCard
              imgSrc={"/wood-rot-3.png"}
              title="Deck & Porch Repair"
              label="Keep your outdoor spaces safe and sturdy."
              className="h-96 w-full"
            />
          </div>

          <div
            //   delay={1}
            data-aos="fade-right"
            className="sm:w-[47%] w-full md:w-[34%]"
          >
            <OurServiceCard
              imgSrc={"/wood-rot-4.png"}
              title="Siding & Trim Repair"
              label="Restore your home’s curb appeal and protection."
              className="h-96 w-full"
            />
          </div>

          <div
            //    delay={1.3}
            data-aos="fade-right"
            className="sm:w-[50%] w-full md:w-[33%]"
          >
            <OurServiceCard
              imgSrc={"/wood-rot-5.png"}
              title="Structural Repair"
              label="Ensuring the integrity of beams, framing, and supports."
              className="h-96 w-full"
            />
          </div>
        </div>

        <div className="w-full bg-white p-4 font-bold mt-10 md:mt-28 mx-auto">
          <h2 className="2xl:text-xl text-sm lg:text-base text-[#032759]">
            Ignoring wood rot can lead to serious structural issues. Call us
            today for a{" "}
            <span className="text-[#056FC5]">free consultation</span> and let
            our experts restore your home with high-quality craftsmanship and
            materials built to last.
          </h2>
        </div>
      </section>
      <GetInTouch />

      {/* <Footer /> */}
    </main>
  );
};

export default Page;
