"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
      <motion.section
          ref={ref}
          className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.175 }}
          id="about"
      >
        <SectionHeading>About me</SectionHeading>
        <p className="mb-3">
          Hello, my name is Issam Agoudjil, and I am a dedicated backend developer
          with a solid two-year professional background. Concurrently, I am pursuing
          my studies in computer science at USTHB, reflecting my commitment to
          continuous learning and academic excellence. My expertise lies in crafting
          robust and scalable solutions for web applications and systems, with
          proficiency in programming languages such as{" "}
          <span className="font-medium">
        Javascript (React.js, Node.js, Express.js...), Python, C
      </span>
          . I am well-versed in managing both MongoDB and SQL databases and
          proficient in utilizing tools such as Git, Excel, and Access. Throughout
          my professional journey, I have consistently demonstrated a passion for
          innovation and problem-solving. Beyond coding, my enthusiasm extends to
          mathematics, further enriching my analytical skills. With a long-term
          vision of establishing my own development company or startup, I am keen on
          acquiring diverse experiences. If you wish to explore potential
          collaborations or learn more about my work, please do not hesitate to
          reach out. I look forward to connecting with you.
        </p>
      </motion.section>
  );}
