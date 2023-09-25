import { projectsData } from "./lib/data";
import { links } from "./lib/data";

interface SectionHeadingProps {
  children: React.ReactNode;
}

interface ProjectProps extends (typeof projectsData)[number] {}

export type SectionName = (typeof links)[number]["name"];
