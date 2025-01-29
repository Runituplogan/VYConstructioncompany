import React from "react";
import Hero from "./Hero";
import Exterior from "./Exterior";
import Paglory from "./Paglory";
import Siding from "./Siding";

const page = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <Exterior />
      <Paglory />
      <Siding />
    </div>
  );
};

export default page;
