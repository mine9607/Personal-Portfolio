"use client";
import React from "react";
import SectionHeading from "./SectionHeading";
import { projectsData } from "@/lib/data";
import Project from "./Project";
import { useSectionInView } from "@/lib/hooks";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);
  return (
    // note- taken out a mb-28 and sm:mb-40 from the section tag below -- may need to add back
    <section className="max-w-[45rem] leading-8 scroll-mt-24 mb-28 sm:mb-0" id="projects" ref={ref}>
      <SectionHeading>My projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            {/* note - adding the link works but throws off the gap and the framer motion effects requireing the group to be placed higher on the Link component */}
            {/* <Link href={project.Url}> */}
            <Project {...project} />
            {/* </Link> */}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
