import Header from "@/components/Header";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
import ActiveSectionContextProvider from "@/store/active-section-context";
import { Toaster } from "react-hot-toast";
import ThemeToggle from "@/components/ThemeToggle";
import ThemeContextProvider from "@/store/theme-context";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Brian Miner | Portfolio",
  description: "Brian Miner's web development portfolio.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} pt-28 sm:pt-36 bg-gray-50 dark:bg-gray-900 text-gray-00 dark:text-gray-50 dark:text-opacity-80 relative`}
      >
        <div className="bg-[#f9b0d6] absolute top-[-6rem] -z-10 right-[11rem] h-[33rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#9289ed]"></div>
        <div className="bg-[#bab2f9] absolute top-[-1rem] -z-10 left-[-35rem] h-[35rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#9289ed]"></div>

        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />
            <Toaster position="top-right" />
            <ThemeToggle />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
