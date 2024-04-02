import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

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
    title: "USTHB Student",
    location: "Alger, Algeria",
    description:
        "Currently pursuing a degree in Computer Science at the University of Science and Technology Houari Boumediene (USTHB) in Algiers, Algeria.",
    icon: React.createElement(LuGraduationCap),
    date: "2023 - Present",
  },

  {
    title: "internship at the CNAS ",
    location: "alger, algeria",
    description:
      "Enriching internship at the National Social Insurance Fund, within the General Management. Skills development in SQL, Oracle, database management and cybersecurity",
    icon: React.createElement(CgWorkAlt),
    date: "2023-2024",
  },
  
    {
    title: "Backend Developer",
    location: "alger, algeria ",
    description:
        "As a backend developer, I have accumulated 2 years of professional experience, crafting robust and scalable solutions for web applications and systems. My responsibilities included designing and implementing server-side logic, integrating front-end components, and ensuring high performance and responsiveness. I am proficient in programming languages such as JavaScript (Node.js), Python, and C. My expertise extends to managing both MongoDB and SQL databases. Throughout my journey, I have consistently demonstrated a passion for innovation and problem-solving.",
    icon: React.createElement(CgWorkAlt),
    date: "2020- 2022",
  },
] as const;

export const projectsData = [
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["Django", "Node.js", "MongoDB", "SQL", "Express.js"],

  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],

  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],

  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "Django",
  "C++",
  "Node.js",
  "Git",
  "C",
  "SQL",
  "MongoDB",
  "Oracl",
  "MySQL",
  "PostgreSQL",
  "Python",
  "Django",
  "PowerBI",
] as const;
