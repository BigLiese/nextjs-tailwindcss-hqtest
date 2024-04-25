const { fromJSON } = require("postcss");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bkg: "#030303",
        card: "#131313",
        gradient_from: "180deg, #38C1A5 -0.01%",
        gradient_to: "#0891D5 99.99%",
      },
      fontFamily: {
        hqRegular: ["var(--font-hqRegular)"],
        hqBold: ["var(--font-hqBold)"],
        hqThin: ["var(--font-hqThin)"],
        machinaRegular: ["var(--font-machinaRegular)"],
      },
      backgroundImage: {
        card1: "url('/imgs/card1.svg')",
        card2: "url('/imgs/card2.svg')",
        card3: "url('/imgs/card3.svg')",
        card4: "url('/imgs/card4.svg')",
        leftCover: "url('/imgs/leftCover.png')",
        rightCover: "url('/imgs/rightCover.png')",
      },
    },
  },
  plugins: [],
};
