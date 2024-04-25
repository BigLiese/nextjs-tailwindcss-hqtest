import "./globals.css";
import MainLayout from "@/components/MainLayout";
import {
  hqBold,
  hqThin,
  hqRegular,
  machinaRegular,
} from "../utils/customFonts";

export const metadata = {
  title: "HackQuest test project",
  description: "Use nextjs and tailwindcss to finish this test project",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${hqRegular.variable} ${hqBold.variable} ${hqThin.variable} ${machinaRegular.variable}`}
    >
      <body className="root">
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
