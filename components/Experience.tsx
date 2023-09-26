"use client";
import React from "react";
import { experiencesData } from "@/lib/data";
import SectionHeading from "./SectionHeading";
import { useSectionInView } from "@/lib/hooks";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { useTheme } from "@/store/theme-context";

export default function Experience() {
  const { ref } = useSectionInView("Experience");
  const { theme } = useTheme();

  return (
    <section className=" w-full scroll-mt-24 sm:mb-0" id="experience" ref={ref}>
      <SectionHeading>My experience</SectionHeading>
      <VerticalTimeline lineColor="">
        {experiencesData.map((experience, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              visible={true}
              contentStyle={{
                background: theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
                boxShadow: "none",
                border: "1px solid rgba(0,0,0,0.05)",
                textAlign: "left",
                padding: "1.3rem, 2rem",
              }}
              contentArrowStyle={{
                borderRight: theme === "light" ? "0.4rem solid #9ca3af" : "0.4rem solid rgba(255, 255, 255, 0.5)",
              }}
              date={experience.date}
              icon={experience.icon}
              iconStyle={{
                background: theme === "light" ? "white" : "rgba(255, 255, 255, 0.15)",
                fontSize: "1.5rem",
              }}
            >
              <h3 className="text-xl font-semibold dark:bg-gradient-to-r from-green-300 via-purple-400 to-teal-400 dark:text-transparent dark:bg-clip-text">
                {experience.title}
              </h3>
              <p className="font-normal !mt-0 ">{experience.tech}</p>
              <h4 className="dark:text-white/60">{experience.company}</h4>
              <p className="font-normal !mt-0 dark:text-white/60">{experience.location}</p>
              <p className=" !mt-2 !font-normal text-gray-700 dark:text-white/75">{experience.description}</p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}
