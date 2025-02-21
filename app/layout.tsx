// // app/layout.js
// import type { Metadata } from "next";
// import { Bricolage_Grotesque } from "next/font/google";
// import Navbar from "./components/Templates/Navbar";
// import Footer from "./components/Templates/Footer";
// import AOSInitializer from "./components/AOSInitializer"; // Import the AOS initializer
// import Preloader from "./components/Preloader";
// import { ToastContainer } from "react-toastify";
// import Script from "next/script";
// import "aos/dist/aos.css"; // Import AOS CSS
// import "./globals.css";
// import "react-toastify/dist/ReactToastify.css";
// import Head from "next/head";

// export const metadata: Metadata = {
//   title: "VY Construction",
//   description:
//     "Wood rot can silently weaken the structure of your home, leading to costly repairs if left untreated. Our expert team specializes in identifying and repairing wood rot damage, ensuring your home stays strong, safe, and looking its best.",
// };

// const bricolage = Bricolage_Grotesque({
//   subsets: ["latin"],
//   weight: ["400", "500", "600", "700"],
// });

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       {/* Google Analytics */}
//       <Head>
//         <script
//           dangerouslySetInnerHTML={{
//             __html: `
//               (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
//               new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
//               j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
//               'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
//               })(window,document,'script','dataLayer','GTM-PSLBNBF7');
//             `,
//           }}
//         />
//         <Script
//           async
//           src="https://www.googletagmanager.com/gtag/js?id=G-MW1V59Z339"
//         ></Script>
//         <Script
//           id="google-analytics"
//           dangerouslySetInnerHTML={{
//             __html: `
//           window.dataLayer = window.dataLayer || [];
//           function gtag(){dataLayer.push(arguments);}
//           gtag('js', new Date());
//           gtag('config', 'G-MW1V59Z339');
//           `,
//           }}
//         />
//       </Head>
//       <body className={bricolage.className}>
//         <noscript>
//           <iframe
//             src="https://www.googletagmanager.com/ns.html?id=GTM-PSLBNBF7"
//             height="0"
//             width="0"
//             style={{ display: "none", visibility: "hidden" }}
//           ></iframe>
//         </noscript>
//         <ToastContainer
//           autoClose={2000}
//           hideProgressBar={true}
//           theme="colored"
//         />
//         <Preloader />
//         <AOSInitializer /> {/* Initialize AOS */}
//         <Navbar />
//         {children}
//         <Footer />
//       </body>
//     </html>
//   );
// }

// app/layout.js
import { Bricolage_Grotesque } from "next/font/google";
import Navbar from "./components/Templates/Navbar";
import Footer from "./components/Templates/Footer";
import AOSInitializer from "./components/AOSInitializer";
import Preloader from "./components/Preloader";
import { ToastContainer } from "react-toastify";
import Script from "next/script";
import "aos/dist/aos.css";
import "./globals.css";
import "react-toastify/dist/ReactToastify.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "VY Construction",
  description:
    "Wood rot can silently weaken the structure of your home, leading to costly repairs if left untreated. Our expert team specializes in identifying and repairing wood rot damage, ensuring your home stays strong, safe, and looking its best.",
  scripts: [
    {
      id: "google-tag-manager",
      dangerouslySetInnerHTML: {
        __html: `
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-PSLBNBF7');
        `,
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={bricolage.className}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PSLBNBF7"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-MW1V59Z339"
          strategy="beforeInteractive"
        />
        <Script
          id="google-analytics"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-MW1V59Z339');
            `,
          }}
          strategy="beforeInteractive"
        />

        <ToastContainer autoClose={2000} hideProgressBar theme="colored" />
        <Preloader />
        <AOSInitializer />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
