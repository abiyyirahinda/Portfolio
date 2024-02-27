import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import youappImg from "@/public/youapp.png";
import gdmImg from "@/public/gdm.png";
import travellensImg from "@/public/travellens.png";
import worky from "@/public/wwww.png";
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
      "Full responsibility for the company website, handling maintenance, updating website interface, fixing bugs.",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - 2022",
  },
] as const;

export const projectsData = [
  {
    title: "Worky - Visual Collaboration",
    description:
      "Free platform for anyone to build and share visual collaboration in real time.",
    tags: ["React", "Next.js", "Tailwind", "Convex", "TypeScript", "Clerk", "Radix UI", "Zustand" ],
    imageUrl: worky,
  },
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
      "Axios",
      "Express",
      "Next Cloudinary",
      "Midtrans",
      "MongoDB",
      "Zustand"
    ],
    imageUrl: gdmImg,
  },
  {
    title: "TravelLens Mobile App",
    description:
      "Bangkit Academy Capstone Project. As a cloud computing I handle requirements in the Google Cloud platform such as API, Storage, AI, and GCP Permissions.",
    tags: ["GCP", "Flask/Python", "SQL", "Json", "Docker"],
    imageUrl: travellensImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "Golang",
  "PHP",
  "Python",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "Redux",
  "GraphQL",
  "Express",
  "PostgreSQL",
  "Flask",
  "GCP",
  "Cypress",
  "Axios",
  "Zod"
] as const;
