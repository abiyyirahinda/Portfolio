import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import youappImg from "@/public/youapp.png";
import gdmImg from "@/public/gdm.png";
import travellensImg from "@/public/travellens.png";

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
    title: "Bachelor of Computer Science",
    location: "Brawijaya University - Information System",
    description:
      "GPA: 3.43",
    icon: React.createElement(LuGraduationCap),
    date: "2024",
  },
  {
    title: "Cloud Computing",
    location: "Bangkit Academy 2023",
    description:
      "Learning Backend with JavaScript, Python, GCP and Produce Mobile App",
    icon: React.createElement(CgWorkAlt),
    date: "2023",
  },
  {
    title: "IT Developer",
    location: "PT. Garam Dua Musim - Lamongan, ID",
    description:
      " Executed tasks related to website configuration, maintenance, and troubleshooting to ensure optimal functionality",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - 2022",
  },
] as const;

export const projectsData = [
  {
    title: "YouApp Challanges",
    description:
      "This challenge requires completing the Register, Login, UpdateProfile API functions with the interface design that has been provided",
    tags: ["React", "Next.js", "Tailwind"],
    imageUrl: youappImg,
  },
  {
    title: "PT. GDM E-Commerce Admin",
    description:
      "E-Commerce and Admin Dashboard app, integrated with Midtrans payment gateway.",
    tags: [
      "React",
      "TypeScript",
      "Next.js",
      "Tailwind",
      "Zod",
      "PrismaDB",
      "Tanstack",
    ],
    imageUrl: gdmImg,
  },
  {
    title: "TravelLens Mobile App",
    description:
      "Graduation Rise Project Capstone. As a cloud computing I handle requirements in the Google Cloud platform such as API, Storage, AI, and GCP Permissions.",
    tags: ["GCP", "Flask/Python", "SQL", "Json", "Docker"],
    imageUrl: travellensImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Vue.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "Redux",
  "GraphQL",
  "Express",
  "PHP",
  "Python",
  "PostgreSQL",
  "Python",
  "Flask",
  "GCP",
] as const;
