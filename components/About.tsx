"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Mia from "@/public/profile-photo.jpg";
import Kingston from "@/public/profile-photo.jpg";
import Marvin from "@/public/profile-photo.jpg";
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
        {/* eslint-disable-next-line react/no-unescaped-entities */}I graduated from the University of Oklahoma with a
        master's degree in <span className="font-medium">Petroleum Engineering</span>, and spent the next 12 years
        working various fields across the United States. In 2021, I moved to South America to pursue a dream of mine to
        learn Spanish and live abroad. After selling everything I owned, I landed in Medellin, Colombia with my three
        dogs: <span className=" hove hover:group-hover:block">Mia</span>,
        <Image className=" hidden" src={Mia} quality="95" width="100" height="150" alt="Picture of my dog Mia." />
        <span>Kingston</span>
        <Image
          className=" hidden"
          src={Kingston}
          quality="95"
          width="100"
          height="150"
          alt="Picture of my dog Kingston."
        />{" "}
        and <span>Marvin</span>
        <Image className=" hidden" src={Marvin} quality="95" width="100" height="150" alt="Picture of my dog Marvin." />
        . I quickly found work teaching English to local software developers and through our classes developed an
        interest in programming.{" "}
      </p>
      <p className="mb-4 text-lg">
        In August 2023, I enrolled in my first <span className="font-medium">full-stack web development bootcamp</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the problem-solving aspect. I{" "}
        <span className="underline">love</span> the feeling of finally figuring out a solution to a problem. My core
        stack is{" "}
        <span className="font-medium text-2xl dark:bg-gradient-to-r from-green-300 via-purple-400 to-teal-400 dark:text-transparent dark:bg-clip-text">
          React, Next.js, Node.js, and MongoDB
        </span>
        . I am also familiar with TypeScript, several authentication providers such as: NextAuth, Passport and Firebase;
        and . I am always looking to learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software developer.
      </p>
      <p className="text-lg">
        <span className="italic">Aside from coding</span>, I am a coffee fanatic and certified coffee expert having
        received my Q-Grader certification in 2022. When I'm not coding, I stay busy running my small coffee business
        based in Medellin, baking sourdough bread, looking after my beehives and playing with my dogs. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently learning about{" "}
        <span className="font-medium">history and philosophy</span>. I'm also learning how to play the guitar.
      </p>
    </motion.section>
  );
}
