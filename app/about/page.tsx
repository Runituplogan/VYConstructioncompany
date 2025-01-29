import React from "react";
import Hero from "./Hero";
import About from "./About";
import Ourprocess from "./Ourprocess";
import OurQuality from "./OurQuality";

const page = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <About />
      <Ourprocess />
      <OurQuality />
    </div>
  );
};

export default page;
