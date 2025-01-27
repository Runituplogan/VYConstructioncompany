import React from "react";
import Hero from "./hero";
import About from "./About";
import Ourprocess from "./Ourprocess";
import OurQuality from "./OurQuality";

const page = () => {
  return (
    <div>
      <Hero />
      <About />
      <Ourprocess />
      <OurQuality />
    </div>
  );
};

export default page;
