"use client";

import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";

export interface IDivMotionPorps {
  children: React.ReactNode;
  delay?: number;
  initial?: number;
  className: string;
}

export const XDivMotion = ({
  children,
  delay = 0,
  initial = 40,
  className,
}: IDivMotionPorps) => {
  const divRef = useRef(null);
  const isInView = useInView(divRef, {
    triggerOnce: false, // Allows tracking when it leaves
    margin: "-100px",
  });

  return (
    <motion.div
      ref={divRef}
      initial={{ x: initial, opacity: 0.5 }}
      animate={isInView ? { x: 0, opacity: 1 } : { x: -initial, opacity: 0 }}
      transition={{
        duration: 0.9,
        ease: "easeInOut",
        delay,
      }}
      className={`${className ? className : "w-full"} `}
    >
      {children}
    </motion.div>
  );
};

export const YDivMotion = ({
  children,
  delay = 0,
  initial = 40,
  className,
}: IDivMotionPorps) => {
  const divRef = useRef(null);
  const isInView = useInView(divRef, {
    triggerOnce: false,
    margin: "-100px",
  });

  return (
    <motion.div
      ref={divRef}
      initial={{ y: initial, opacity: 0.5 }}
      animate={isInView ? { y: 0, opacity: 1 } : { y: -initial, opacity: 0 }}
      transition={{
        duration: 0.9,
        ease: "easeInOut",
        delay,
      }}
      className={`${className ? className : "w-full"} `}
    >
      {children}
    </motion.div>
  );
};

export const ODivMotion = ({
  children,
  delay = 0,
  className,
}: IDivMotionPorps) => {
  const divRef = useRef(null);
  const isInView = useInView(divRef, {
    triggerOnce: false,
    margin: "-100px",
  });

  return (
    <motion.div
      ref={divRef}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{
        duration: 0.9,
        ease: "easeInOut",
        delay,
      }}
      className={`${className ? className : "w-full"} `}
    >
      {children}
    </motion.div>
  );
};
