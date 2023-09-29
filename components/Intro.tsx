"use client";
import Image from "next/image";
import profile from "@/public/profile-photo.jpg";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsCloudDownload, BsEnvelope, BsGithub, BsLinkedin } from "react-icons/bs";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/store/active-section-context";

export default function Intro() {
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  const { ref } = useSectionInView("Home", 0.1);
  return (
    <section className=" max-w-[50rem] text-center scroll-mt-24 mb-28 sm:mb-0" id="home" ref={ref}>
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src={profile}
              quality="95"
              width="195"
              height="195"
              priority={true}
              className="rounded-full h-48 w-48 border-[0.35rem] object-cover border-white shadow-2xl"
              alt="Brian's profile photo."
            />
          </motion.div>
          {/* <motion.span
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.1, duration: 0.7 }}
            className="absolute top-[8.5rem] left-[-0.5rem] text-6xl dark:!opacity-100"
          >
            ☕
          </motion.span> */}
        </div>
      </div>
      <motion.h1
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        className="mb-10 mt-8 px-4 !text-5xl font-medium !leading-[1.5] sm:text-3xl"
      >
        Hi, <span className="font-bold text-violet-800 dark:text-[#75FFC5]">I&apos;m Brian</span>.
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        className="mb-10 mt-16 px-4 text-xl font-medium !leading-[1.5] sm:text-3xl"
      >
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        I&apos;m a <span className=" text-[#C575FF]  underline underline-offset-8">web-developer</span> transitioning
        from a career in petroleum engineering to the tech industry.{" "}
        {/* I am currently building my portfolio of <span className="italic">websites and apps</span> using React
          (Next.js). */}
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
        className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4 text-lg font-medium"
      >
        <Link
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
          href="#contact"
          className="group flex items-center rounded-lg gap-3 bg-gray-900 text-white px-5 py-3 outline-none focus:scale-110 hover:scale-110 active:scale-105 transition"
        >
          Contact Me
          <BsEnvelope className="opacity-60 group-hover:translate-x-[0.2rem] transition" />
        </Link>

        <a
          href="/BrianMiner-Resume.pdf"
          download
          className="flex items-center rounded-lg gap-3 borderBlack bg-white dark:bg-white/20 dark:text-gray-50 px-5 py-3 outline-none focus:scale-110 hover:scale-110 hover:text-gray-900 active:scale-105 transition"
        >
          Download CV <BsCloudDownload className="opacity-60 dark:opacity-80" />
        </a>

        <a
          href="https://www.linkedin.com/in/brian-miner"
          className="flex items-center rounded-full gap-2 bg-gray-50 border dark:bg-white/10 border-green-400/30 dark:border-none text-gray-700 dark:text-white/60 p-4 focus:scale-125 hover:scale-125 hover:text-gray-900 dark:hover:text-white active:scale-105 transition"
        >
          <BsLinkedin />
        </a>

        <a
          href="https://www.github.com/mine9607"
          className="flex items-center rounded-full gap-2 bg-white border dark:bg-white/10 dark:border-none border-purple-400/30 text-gray-700 dark:text-white/60 p-4 focus:scale-125 hover:scale-125 hover:text-gray-900 dark:hover:text-white active:scale-105 transition"
        >
          <BsGithub />
        </a>
      </motion.div>
    </section>
  );
}
