import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
padding: '1rem',
center: true,
    },
    screens:{
xs: "450px",
sm: "576ppx",
md: "768px",
lg: "992px",
xl: "1024px",
xxl: "1280px",
"2xl": "1536px",
    },
    extend: {
      fontFamily: {
        bricolage: ["Bricolage Grotesque", "sans-serif"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
