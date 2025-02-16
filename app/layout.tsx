// app/layout.js
import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import Navbar from "./components/Templates/Navbar";
import Footer from "./components/Templates/Footer";
import AOSInitializer from "./components/AOSInitializer"; // Import the AOS initializer
import Preloader from "./components/Preloader";
import { ToastContainer } from "react-toastify";
import "aos/dist/aos.css"; // Import AOS CSS
import "./globals.css";
import "react-toastify/dist/ReactToastify.css";

export const metadata: Metadata = {
  title: "VY Construction",
  description:
    "Wood rot can silently weaken the structure of your home, leading to costly repairs if left untreated. Our expert team specializes in identifying and repairing wood rot damage, ensuring your home stays strong, safe, and looking its best.",
};

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={bricolage.className}>
        <ToastContainer
          autoClose={2000}
          hideProgressBar={true}
          theme="colored"
        />
        <Preloader />
        <AOSInitializer /> {/* Initialize AOS */}
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
