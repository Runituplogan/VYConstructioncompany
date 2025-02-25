import { useState } from "react";
// import house from "/wood-house.webp";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";

interface IProps {
  name: string;
  email: string;
  phone: string;
  address: string;
  message: string;
}

const GetInTouch = () => {
  const [formData, setFormData] = useState<any>({
    name: "",
    email: "",
    phone: "",
    address: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: { target: { name: any; value: any } }) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setLoading(true);

    // Push to Google Tag Manager dataLayer
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "contact_form_submission",
      phone_number: formData.phone,
      email: formData.email,
    });

    emailjs
      .send(
        process.env.NEXT_SERVICE_ID as string,
        process.env.NEXT_PROJECT_ENQUIRY_TEMPLATE_ID as string,
        formData as any,
        process.env.NEXT_PUBLIC_KEY
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setLoading(false);
          setFormData({ name: "", email: "", phone: "", message: "" });
          toast.success("Request sent successfully!");
        },
        (error) => {
          console.log("FAILED...", error);
          setLoading(false);
        }
      );
  };

  return (
    <section className="w-full p-5 pb-5 lg:px-14 mt-5 flex flex-col">
      <h1 className="font-bold hidden md:flex text-xl py-7 lg:text-3xl text-[#032759]">
        Get in touch with us
      </h1>
      <main className=" flex flex-col gap-10 lg:flex-row md:justify-between ">
        <div className="flex flex-col  lg:flex-row gap-4 mt-5 items-center">
          <h1 className="font-bold md:hidden flex text-xl py-7 lg:text-3xl text-[#032759]">
            Get in touch with us
          </h1>
          <img alt="wooden house" loading="lazy" src={"/wood-house.webp"} />
          <div className="flex flex-col gap-8 bg-[#F7F7F7] p-3 ">
            <p className="flex items-center font-bold gap-3">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 512 512"
                className="text-[#056FC5]"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="256" cy="192" r="32"></circle>
                <path d="M256 32c-88.22 0-160 68.65-160 153 0 40.17 18.31 93.59 54.42 158.78 29 52.34 62.55 99.67 80 123.22a31.75 31.75 0 0 0 51.22 0c17.42-23.55 51-70.88 80-123.22C397.69 278.61 416 225.19 416 185c0-84.35-71.78-153-160-153zm0 224a64 64 0 1 1 64-64 64.07 64.07 0 0 1-64 64z"></path>
              </svg>
              East Bay California Service Areas:
            </p>
            <ul className="font-bold text-sm flex flex-row flex-wrap items-start justify-start gap-4 list-none pl-6">
              <li className="relative flex items-center before:content-[''] before:block before:w-2 before:h-2 before:bg-[#F28705] before:mr-2">
                Clayton
              </li>
              <li className="relative flex items-center before:content-[''] before:block before:w-2 before:h-2 before:bg-[#F28705] before:mr-2">
                Discovery Bay
              </li>
              <li className="relative flex items-center before:content-[''] before:block before:w-2 before:h-2 before:bg-[#F28705] before:mr-2">
                Orinda
              </li>
              <li className="relative flex items-center before:content-[''] before:block before:w-2 before:h-2 before:bg-[#F28705] before:mr-2">
                Danville
              </li>
              <li className="relative flex items-center before:content-[''] before:block before:w-2 before:h-2 before:bg-[#F28705] before:mr-2">
                San Ramon
              </li>
              <li className="relative flex items-center before:content-[''] before:block before:w-2 before:h-2 before:bg-[#F28705] before:mr-2">
                Martinez
              </li>
              <li className="relative flex items-center before:content-[''] before:block before:w-2 before:h-2 before:bg-[#F28705] before:mr-2">
                Pleasant Hill
              </li>
              <li className="relative flex items-center before:content-[''] before:block before:w-2 before:h-2 before:bg-[#F28705] before:mr-2">
                Concord
              </li>
              <li className="relative flex items-center before:content-[''] before:block before:w-2 before:h-2 before:bg-[#F28705] before:mr-2">
                Lafayette
              </li>
              <li className="relative flex items-center before:content-[''] before:block before:w-2 before:h-2 before:bg-[#F28705] before:mr-2">
                Walnut Creek
              </li>
            </ul>
            <div className="flex flex-col gap-4 bg-[#F7F7F7] p-3">
              <p className="text-[#757575] flex items-center gap-2">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 512 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="256" cy="192" r="32"></circle>
                  <path d="M256 32c-88.22 0-160 68.65-160 153 0 40.17 18.31 93.59 54.42 158.78 29 52.34 62.55 99.67 80 123.22a31.75 31.75 0 0 0 51.22 0c17.42-23.55 51-70.88 80-123.22C397.69 278.61 416 225.19 416 185c0-84.35-71.78-153-160-153zm0 224a64 64 0 1 1 64-64 64.07 64.07 0 0 1-64 64z"></path>
                </svg>
                Concord, CA 94521
              </p>
              <p className="text-[#757575] flex items-center gap-2">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"></path>
                </svg>
                vitaly@vyconstructionco.com
              </p>
              <p className="text-[#757575] flex items-center gap-2">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 512 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M391 480c-19.52 0-46.94-7.06-88-30-49.93-28-88.55-53.85-138.21-103.38C116.91 298.77 93.61 267.79 61 208.45c-36.84-67-30.56-102.12-23.54-117.13C45.82 73.38 58.16 62.65 74.11 52a176.3 176.3 0 0 1 28.64-15.2c1-.43 1.93-.84 2.76-1.21 4.95-2.23 12.45-5.6 21.95-2 6.34 2.38 12 7.25 20.86 16 18.17 17.92 43 57.83 52.16 77.43 6.15 13.21 10.22 21.93 10.23 31.71 0 11.45-5.76 20.28-12.75 29.81-1.31 1.79-2.61 3.5-3.87 5.16-7.61 10-9.28 12.89-8.18 18.05 2.23 10.37 18.86 41.24 46.19 68.51s57.31 42.85 67.72 45.07c5.38 1.15 8.33-.59 18.65-8.47 1.48-1.13 3-2.3 4.59-3.47 10.66-7.93 19.08-13.54 30.26-13.54h.06c9.73 0 18.06 4.22 31.86 11.18 18 9.08 59.11 33.59 77.14 51.78 8.77 8.84 13.66 14.48 16.05 20.81 3.6 9.53.21 17-2 22-.37.83-.78 1.74-1.21 2.75a176.49 176.49 0 0 1-15.29 28.58c-10.63 15.9-21.4 28.21-39.38 36.58A67.42 67.42 0 0 1 391 480z"></path>
                </svg>
                925-914-7563
              </p>
              <a
                target="_blank"
                className="flex flex-row items-center gap-4 py-5 md:py-0 lg:text-"
                href="https://www.facebook.com/Vyconstruction"
              >
                <p className="text-[#056FC5] font-bold">Follow our social</p>
                <p className="border-2  p-0.5 bg-[#056FC5] w-16"></p>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 512 512"
                  className="text-[#056FC5] text-xl lg:text-4xl"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col gap-4">
          <h1 className="md:text-3xl font-bold text-[#032759]">
            Let's Discuss&nbsp;Your{" "}
            <span className="text-[#056FC5]"> Next Projectss!</span>
          </h1>
          <p className="text-[#323232]">
            Fill out the form to set up a free in-home consultation.
          </p>
          <form onSubmit={sendEmail} className="flex flex-col gap-4">
            <div className="">
              <input
                name="name"
                value={formData?.name}
                onChange={handleChange}
                type="text"
                id="name"
                className="bg-gray-50 border border-[#056FC5] text-sm rounded-lg lue-500 block w-full p-2.5 "
                placeholder="Full Name"
              />
            </div>
            <div className=" flex gap-4">
              <input
                name="email"
                value={formData?.email}
                onChange={handleChange}
                type="email"
                id="email"
                className="bg-gray-50 border border-[#056FC5] text-sm rounded-lg lue-500 block w-full p-2.5 "
                placeholder="Email"
              />
              <input
                name="phone"
                value={formData?.phone}
                onChange={handleChange}
                type="phone number"
                id="phone"
                className="bg-gray-50 border border-[#056FC5] text-sm rounded-lg lue-500 block w-full p-2.5 "
                placeholder="Phone Number"
              />
            </div>
            <input
              name="address"
              value={formData.address}
              onChange={handleChange}
              type="address"
              id="address"
              className="bg-gray-50 border border-[#056FC5] text-sm rounded-lg lue-500 block w-full p-2.5 "
              placeholder="Address"
            />
            <textarea
              name="message"
              value={formData?.message}
              onChange={handleChange}
              id="message"
              rows={5}
              className="block p-2.5 w-full text-sm  border-[#056FC5] border rounded-lg  text-gray-900 bg-gray-50"
              placeholder="Type your message here..."
            ></textarea>
            <button
              disabled={loading}
              type="submit"
              className="disabled:opacity-55 transition-all duration-300 text-white bg-[#056FC5] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5"
            >
              Submit your request
            </button>
          </form>
        </div>
      </main>
      <div className="flex lg:flex-row flex-col gap-7 lg:justify-between items-center pt-16 pb-4">
        <img
          alt="logo"
          loading="lazy"
          width="100"
          height="10"
          decoding="async"
          className="md:flex hidden "
          src="/logo.webp"
        />
        <div className="flex flex-row items-center gap-16 md:hidden ">
          <img
            alt="logo"
            loading="lazy"
            width="100"
            height="10"
            className="md:flex"
            src="/logo.webp"
          />
          <p className="text-[#757575] font-bold md:hidden items-center gap-2 flex">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 512 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M391 480c-19.52 0-46.94-7.06-88-30-49.93-28-88.55-53.85-138.21-103.38C116.91 298.77 93.61 267.79 61 208.45c-36.84-67-30.56-102.12-23.54-117.13C45.82 73.38 58.16 62.65 74.11 52a176.3 176.3 0 0 1 28.64-15.2c1-.43 1.93-.84 2.76-1.21 4.95-2.23 12.45-5.6 21.95-2 6.34 2.38 12 7.25 20.86 16 18.17 17.92 43 57.83 52.16 77.43 6.15 13.21 10.22 21.93 10.23 31.71 0 11.45-5.76 20.28-12.75 29.81-1.31 1.79-2.61 3.5-3.87 5.16-7.61 10-9.28 12.89-8.18 18.05 2.23 10.37 18.86 41.24 46.19 68.51s57.31 42.85 67.72 45.07c5.38 1.15 8.33-.59 18.65-8.47 1.48-1.13 3-2.3 4.59-3.47 10.66-7.93 19.08-13.54 30.26-13.54h.06c9.73 0 18.06 4.22 31.86 11.18 18 9.08 59.11 33.59 77.14 51.78 8.77 8.84 13.66 14.48 16.05 20.81 3.6 9.53.21 17-2 22-.37.83-.78 1.74-1.21 2.75a176.49 176.49 0 0 1-15.29 28.58c-10.63 15.9-21.4 28.21-39.38 36.58A67.42 67.42 0 0 1 391 480z"></path>
            </svg>
            925-914-7563
          </p>
        </div>
        <p className="text-[#26343D]">Copyright ©2025. VY Construction</p>
        <p className="text-[#757575] font-bold md:flex items-center gap-2 hidden">
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 512 512"
            height="1.5em"
            width="1.5em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M391 480c-19.52 0-46.94-7.06-88-30-49.93-28-88.55-53.85-138.21-103.38C116.91 298.77 93.61 267.79 61 208.45c-36.84-67-30.56-102.12-23.54-117.13C45.82 73.38 58.16 62.65 74.11 52a176.3 176.3 0 0 1 28.64-15.2c1-.43 1.93-.84 2.76-1.21 4.95-2.23 12.45-5.6 21.95-2 6.34 2.38 12 7.25 20.86 16 18.17 17.92 43 57.83 52.16 77.43 6.15 13.21 10.22 21.93 10.23 31.71 0 11.45-5.76 20.28-12.75 29.81-1.31 1.79-2.61 3.5-3.87 5.16-7.61 10-9.28 12.89-8.18 18.05 2.23 10.37 18.86 41.24 46.19 68.51s57.31 42.85 67.72 45.07c5.38 1.15 8.33-.59 18.65-8.47 1.48-1.13 3-2.3 4.59-3.47 10.66-7.93 19.08-13.54 30.26-13.54h.06c9.73 0 18.06 4.22 31.86 11.18 18 9.08 59.11 33.59 77.14 51.78 8.77 8.84 13.66 14.48 16.05 20.81 3.6 9.53.21 17-2 22-.37.83-.78 1.74-1.21 2.75a176.49 176.49 0 0 1-15.29 28.58c-10.63 15.9-21.4 28.21-39.38 36.58A67.42 67.42 0 0 1 391 480z"></path>
          </svg>
          925-914-7563
        </p>
      </div>
    </section>
  );
};

export default GetInTouch;
