// app/components/AOSInitializer.jsx
"use client"; // Mark this as a Client Component

import { useEffect } from "react";

export default function AOSInitializer() {
  useEffect(() => {
    import("aos").then((AOS) => {
      AOS.init({
        duration: 1000, // Animation duration
        once: true, // Whether animation should happen only once
      });
    });
  }, []);

  return null; // This component doesn't render anything
}
