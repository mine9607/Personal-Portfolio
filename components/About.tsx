"use client";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About", 1);

  return (
    <motion.section
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.175,
      }}
      className="max-w-[50rem] text-center leading-8 scroll-mt-24 mb-28 sm:mb-0"
      id="about"
      ref={ref}
    >
      <SectionHeading>About Me</SectionHeading>
      <p className="mb-4 text-lg">
        In 2021, I moved to South America after more than 12 years working as a{" "}
        <span className="font-bold text-2xl">Petroleum Engineer</span> in the United States. It had always been a dream
        of mine to learn Spanish and live in another country so I sold everything and booked a one way ticket with my
        three dogs.
      </p>
      <p className="mb-4 text-lg">
        I quickly found work teaching English at Profesores Extranjeros and began teaching classes to local software
        developers. In July 2023, I enrolled in my first bootcamp for{" "}
        <span className=" font-semibold text-2xl dark:bg-gradient-to-r from-green-300 via-purple-400 to-teal-400 dark:text-transparent dark:bg-clip-text">
          full-stack web development
        </span>{" "}
        and built my first app shortly after. <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I love the feeling of finally figuring out a solution to a problem.
      </p>
      <p className="mb-4 text-lg">
        {" "}
        My core stack is{" "}
        <span className=" font-semibold text-2xl dark:bg-gradient-to-r from-green-300 via-purple-400 to-teal-400 dark:text-transparent dark:bg-clip-text">
          React, Next.js, Node.js, and MongoDB
        </span>
        .
      </p>
      <p className="text-lg">
        <span className="italic">Aside from coding</span>, I am a coffee fanatic and certified coffee expert having
        received my <span className="">Q-Grader</span> certification in 2022. When I'm not coding, I stay busy running
        my small coffee business based in Medellin, baking sourdough bread, looking after my beehives and playing with
        my dogs. I also enjoy <span className="font-medium">learning new things</span>. I am currently learning about{" "}
        <span className="font-medium">history and philosophy</span>. I&apos;m also learning how to play the guitar.
      </p>
    </motion.section>
  );
}
