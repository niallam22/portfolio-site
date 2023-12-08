import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import bookerInt from "@/public/bookerInt.gif";
import castingCarmina from "@/public/castingCarmina.gif"
import lottieHomes from "@/public/lottieHomes.gif"

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
    location: "Bath, UK",
    description:
      "I graduated university with first-class honours creating bio-tech research software. I was building models of acoustic tweezers (levitation with soundwaves!) in MatLab and devloping computer vision programmes to then test the tweezers in the action",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Product Engineer and Blockchain Investor",
    location: "Mullingar, IRL",
    description:
      "I worked as product engineer designing producing medical devices and setup a blockchain investing company. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2020 - 2022",
  },
  {
    title: "Full-Stack Engineer",
    location: "London, UK",
    description:
      "I'm now a full-stack engineer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2022 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Lazy Bones Dog Toys",
    description:
      "A headless front-end e-commerce website selling all things dog toys. Complete with stripe payments, responsive design, animations and custom themes.",
    tags: ["React", "Next.js", "TypeScript", "Framer Motion", "Tailwind", "Prisma", "Stripe"],
    imageUrl: corpcommentImg,
    liveHref: "https://www.lazybones.dog/",
    gitHubHref: "https://github.com/niallam22/ecommerce-store",
  },
  {
    title: "E-commerce CMS platform",
    description:
      "A full-stack e-commerce dashboard and CMS platform to manage products, stock and sales across multiple stores.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Prisma"],
    imageUrl: rmtdevImg,
    liveHref: "https://ecommerce-admin-cms-dashboard.vercel.app/",
    gitHubHref: "https://github.com/niallam22/ecommerce-admin",
  },
  {
    title: "Booker Int.",
    description:
      "A full-stack web app enabling users generate group meeting polls with automatic timezone conversion.",
    tags: ["JavaScript", "Express", "Node", "MVC", "Tailwind", "MongoDB"],
    imageUrl: bookerInt,
    liveHref: "https://booker.cyclic.app/",
    gitHubHref: "https://github.com/niallam22/booker-international",
  },
  {
    title: "Lottie",
    description:
      "A full-stack web app leveraging google's advanced-marker-view to display carehome information.",
    tags: ["React", "Next.js", "JavaScript", "Tailwind", "MongoDB"],
    imageUrl: lottieHomes,
    liveHref: "https://lottiehome.vercel.app/",
    gitHubHref: "https://github.com/niallam22/lottie",
  },
  
  {
    title: "Casting Carmina",
    description:
      "A virutal space to share Carmina's craft as an actor, writer and coach. Equipped with authentication, an integrated text-editor to create blog posts, animated testimonials a photo gallery and more.",
    tags: ["React", "JavaScript", "Express", "Node", "MongoDB", "Tailwind",],
    imageUrl: castingCarmina,
    liveHref: "https://carmina.cyclic.app/",
    gitHubHref: "https://carmina.cyclic.app/",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Zustand",
  "Express",
  "Framer Motion",
] as const;
