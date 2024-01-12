"use client";

import React from "react";
import SectionHeading from "./section-heading";
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
      delay: 0.05 * index,
    },
  }),
};

export default function Skills() {
  const {ref} = useSectionInView("Skills");

  return (
      <section
          id="skills"
          ref={ref}
          className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
      >
        <SectionHeading>My skills</SectionHeading>
        <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
          {skillsData.map((skill, index) => (
              <motion.li
                  className="bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80"
                  key={index}
                  variants={fadeInAnimationVariants}
                  initial="initial"
                  whileInView="animate"
                  viewport={{
                    once: true,
                  }}
                  custom={index}
              >
                {skill}
              </motion.li>
          ))}
        </ul>
        <p className="mt-4 text-gray-600">
          My skillset includes but is not limited to the technologies mentioned
          above. I am always enthusiastic about learning new tools and frameworks to
          enhance my capabilities as a developer.
        </p>
      </section>
  );
}
