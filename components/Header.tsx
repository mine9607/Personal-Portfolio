"use client";
import { motion, spring } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import { useActiveSectionContext } from "@/store/active-section-context";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  return (
    <header className="z-[999] relative">
      <motion.div
        className="fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border border-white dark:border-black/40 border-opacity-40 bg-white dark:bg-gray-900 bg-opacity-70 dark:bg-opacity-75 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      ></motion.div>
      {/* doesn't seem like taking out the w-[22rem] is doing anything to spacing */}
      <nav className="fixed flex top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
        <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
          {links.map((link) => (
            <motion.li
              key={link.hash}
              className="h-3/4 flex items-center justify-center relative"
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                onClick={() => {
                  setTimeOfLastClick(Date.now());
                  setActiveSection(link.name);
                }}
                href={link.hash}
                className={
                  activeSection === link.name
                    ? "flex w-full items-center justify- p-3 text-gray-900 dark:text-gray-200 transition"
                    : "flex w-full items-center justify-center p-3 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-50 transition"
                }
              >
                {link.name}
                {activeSection === link.name && (
                  <motion.span
                    className="bg-gray-100 dark:bg-gray-500 rounded-full absolute inset-0 -z-10"
                    layoutId="activeSection"
                    transition={{
                      type: spring,
                      stiffness: 380,
                      damping: 30,
                    }}
                  ></motion.span>
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
      <ThemeToggle />
    </header>
  );
}
