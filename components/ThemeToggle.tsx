"use client";
import { BsMoonStars, BsSun } from "react-icons/bs";
import { useTheme } from "@/store/theme-context";

export default function ThemeToggle() {
  const { theme, handleThemeSwitch } = useTheme();

  return (
    <button
      onClick={handleThemeSwitch}
      className="fixed top-2 right-4 sm:top-[1.55rem] sm:right-14 w-[3rem] h-[3rem] text-xl text-gray-500 dark:text-gray-50 bg-white dark:bg-gray-950 bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-lg rounded-full flex items-center justify-center hover:scale-110 active:scale-105 transition-all"
    >
      {theme === "light" ? <BsSun /> : <BsMoonStars />}
    </button>
  );
}
