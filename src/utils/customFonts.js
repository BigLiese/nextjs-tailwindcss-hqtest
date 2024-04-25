import localFont from "next/font/local";
const hqBold = localFont({
  src: [
    {
      path: "../../public/fonts/otf/NEXT-Book-Bold.otf",
      weight: "700",
    },
  ],
  variable: "--font-hqBold",
});

const hqRegular = localFont({
  src: [
    {
      path: "../../public/fonts/otf/NEXT-Book-Regular.otf",
      weight: "400",
    },
  ],
  variable: "--font-hqRegular",
});

const hqThin = localFont({
  src: [
    {
      path: "../../public/fonts/otf/NEXT-Book-Thin.otf",
      weight: "300",
    },
  ],
  variable: "--font-hqThin",
});

const machinaRegular = localFont({
  src: [
    {
      path: "../../public/fonts/otf/neuemachina-regular.otf",
      weight: "400",
    },
  ],
  variable: "--font-machinaRegular",
});

export { hqBold, hqRegular, hqThin, machinaRegular };
