import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import Trello from "@/public/trello-clone.png";
import Netflix from "@/public/netflix-clone.png";
import SCA from "@/public/cuppingForm-lg.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description: "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Trello Clone",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: Trello,
    Url: "https://trello-clone-nextjs13-nz0ivkim7-crunchypb-s-team.vercel.app/",
  },
  {
    title: "SCA Cupping Form",
    description:
      "A web app for coffee companies to evaluate and store coffee data for purchasing decisions and traceability.  I built the full app as a server-side Express.js app which uses passport for authentication and a MongoDB on the back-end.",
    tags: ["Express", "Node.js", "MongoDB", "Passport", "Bootstrap"],
    imageUrl: SCA,
    Url: "https://trello-clone-nextjs13-nz0ivkim7-crunchypb-s-team.vercel.app/",
  },
  {
    title: "Netflix Clone",
    description:
      "Built a Netflix Clone using React.js.  The authentication and database are built using Firebase's Firestore. The clone has a fully functional Stripe payment portal built in to allow purchasing between subscription tiers",
    tags: ["React", "TypeScript", "Tailwind", "Firebase", "Stripe"],
    imageUrl: Netflix,
    Url: "https://netflix-react-clone-bdde9.web.app",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "Tailwind CSS",
  "Bootstrap",
  "Framer Motion",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Express",
  "Node.js",
  "Git",
  "MongoDB",
  "Firebase",
  "Redux",
  "Zustand",
  "NextAuth",
  "Passport",
] as const;
