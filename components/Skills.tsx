"use client";
import SectionHeading from "./SectionHeading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.09 * index,
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView("Skills");
  return (
    <section className="max-w-[45rem] text-center scroll-mt-28 leading-8 mb-28 sm:mb-0" id="skills" ref={ref}>
      <SectionHeading>My Skills</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-4 text-lg text-gray-800/50 m-14">
        {skillsData.map((skill, index) => (
          <motion.li
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
            key={index}
            className=" transform bg-white dark:bg-white/10  dark:text-white/70  borderBlack rounded-xl px-5 py-3 shadow-md hover:border-black/30 hover:text-gray-700 dark:hover:text-white dark:border-white/10"
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
