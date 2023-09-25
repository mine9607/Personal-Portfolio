"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { projectsData } from "@/lib/data";

type ProjectProps = (typeof projectsData)[number];

export default function Project({ title, description, tags, imageUrl }: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.7, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      <section className="bg-gray-100 dark:text-white dark:bg-white/10 max-w-fit border border-black/5 overflow-hidden sm:pr-8 relative sm:w-max-[42rem] sm:h-[26rem] rounded-lg hover:bg-gray-200 dark:hover:bg-white/20 transition">
        <div className="pt-4 pb-6 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-odd:mr-[20rem] sm:group-even:ml-[20rem]">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">{description}</p>
          <ul className="flex gap-2 mt-8 flex-wrap flex-row">
            {tags.map((tag, index) => (
              <li
                key={index}
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white dark:text-white/70 rounded-full"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
        <Image
          className="sm:absolute top-8 -right-40 w-[28rem] rounded-t-lg shadow-2xl
          transition
          group-hover:scale-110
          group-hover:-translate-x-3
          group-hover:translate-y-3
          group-hover:-rotate-2
          group-even:group-hover:translate-x-3
          group-even:group-hover:translate-y-3
          group-even:group-hover:rotate-2
          group-even:-left-40"
          src={imageUrl}
          alt="Image of project I worked on"
          quality={95}
        />
      </section>
    </motion.div>
  );
}
