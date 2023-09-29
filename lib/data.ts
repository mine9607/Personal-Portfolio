import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact, FaChalkboardTeacher, FaNodeJs } from "react-icons/fa";
import { FaComputer } from "react-icons/fa6";
import { SiExpress } from "react-icons/si";
import { BiLogoMongodb } from "react-icons/bi";
import { LuGraduationCap } from "react-icons/lu";
import { IoAirplaneOutline } from "react-icons/io5";
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
    title: "Graduated - Petroleum Engineering",
    tech: "",
    company: "University of Oklahoma",
    location: "",
    description:
      "Graduated with a Master's in Petroleum Engineering and began work at BP in the Anadarko Basin of Texas.",
    icon: React.createElement(LuGraduationCap),
    date: "2012",
  },
  {
    title: "Staff Production Engineer",
    tech: "",
    company: "BP -> Chesapeake Energy",
    location: "",
    description:
      "Worked for 12+ years as a petroleum engineer for BP and later Chesapeake Energy.  During this time, I led several successful multi-disciplinary intiatives including a fundamental revision of production methods in the Haynesville Shale.",
    icon: React.createElement(CgWorkAlt),
    date: "2012 - 2021",
  },
  {
    title: "Moved to South America",
    tech: "",
    company: "",
    location: "",
    description:
      "In September 2021, I moved to Colombia to pursue a personal dream of learning Spanish and living abroad.",
    icon: React.createElement(IoAirplaneOutline),
    date: "September 2021",
  },
  {
    title: "English Teacher",
    tech: "",
    company: "Profesores Extranjeros",
    location: "Medellin, Colombia",
    description:
      "I quickly found work teaching English at Profesores Extranjeros and began teaching classes to local software developers.",
    icon: React.createElement(FaChalkboardTeacher),
    date: "2021-Present",
  },
  {
    title: "Enrolled in Full-Stack Bootcamp",
    tech: "",
    company: "App Brewery",
    location: "",
    description:
      "Online Full-Stack bootcamp covering the fundamentals from HTML, CSS, Javascript as well as intermediate to advanced concepts such as: building RESTful APIs and full-stack app development using the MERN stack.",
    icon: React.createElement(BiLogoMongodb),
    date: "July 2023",
  },
  {
    title: "My First App!",
    tech: "(Express.js, Node.js, MongoDB)",
    company: "",
    location: "",
    description:
      "Built a web app to mimic an SCA international sensory evalution form and connected it to a MongoDB database.  The app allows coffee profesionals to maintain a record of coffee quality for QA/Purchasing decisions.  The app handles user registration, login and authentication with Passport.",
    icon: React.createElement(SiExpress),
    date: "August 2023",
  },
  {
    title: "Built Netflix Clone",
    tech: "(React.js + Stripe)",
    company: "",
    location: "",
    description:
      "Built beautiful Netflix clone with React.js.  Google's Firebase/Firestore handles user-registration, login and authentication as well as subscription information.  A fully-functional Stripe payment portal was integrated to offer a more realistic user-experience.",
    icon: React.createElement(FaReact),
    date: "August 2023",
  },
  {
    title: "Built Trello Clone & Personal Portfolio",
    tech: "(React.js / Next.js)",
    company: "",
    location: "",
    description:
      "Built a fully-functional Trello clone with drag and drop functionality.  State management in the Trello app is implemented using Zustand's stream-lined state management library and OpenAI's public API was used to integrate a simple ChatGPT 3-Turbo functionality.  After finishing I built out this personal website to showcase my work and begin job-hunting.",
    icon: React.createElement(FaNodeJs),
    date: "September 2023",
  },
  {
    title: "In-Progress: Learning",
    tech: "",
    company: "",
    location: "",
    description:
      "I am continuing my personal education and learning through enrollment in online Udemy Courses: COMPLETE JAVASCRIPT - ZERO TO EXPERT; DOCKER MASTERY W/ KUBERNETES + SWARM; REACT - COMPLETE GUIDE 2023",
    icon: React.createElement(FaComputer),
    date: "September 2023 - Present",
  },
  {
    title: "In-Progress: Apps",
    tech: "(React.js / Next.js)",
    company: "",
    location: "",
    description:
      "I have several personal projects that are in various stages of progress: a WEIGHT LOSS APP (with meal-planning and calorie-tracking); a TEACHER REPORT APP for Profesores Extranjeros to standardize end-of-month teacher reports and a RESUME WRITING APP with drag/drop sections and ChatGPT functionality.",
    icon: React.createElement(FaComputer),
    date: "September 2023 - Present",
  },
] as const;

export const projectsData = [
  {
    title: "Trello Clone",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: Trello,
    websiteURL: "https://mytrelloclone.vercel.app/",
  },
  {
    title: "SCA Cupping Form",
    description:
      "A web app for coffee companies to evaluate and store coffee data for purchasing decisions and traceability.  I built the full app as a server-side Express.js app which uses passport for authentication and a MongoDB on the back-end.",
    tags: ["Express", "Node.js", "MongoDB", "Passport", "Bootstrap"],
    imageUrl: SCA,
    websiteURL: "https://trello-clone-nextjs13-nz0ivkim7-crunchypb-s-team.vercel.app/",
  },
  {
    title: "Netflix Clone",
    description:
      "Built a Netflix Clone using React.js.  The authentication and database are built using Firebase's Firestore. The clone has a fully functional Stripe payment portal built in to allow purchasing between subscription tiers",
    tags: ["React", "TypeScript", "Tailwind", "Firebase", "Stripe"],
    imageUrl: Netflix,
    websiteURL: "https://netflix-react-clone-bdde9.web.app",
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
