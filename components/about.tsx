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
        After graduating with a degree in{" "}
        <span className="font-medium">mechanical engineering</span>, I decided to pursue my
        passion for programming. I began designing and building{" "}
        <span className="font-medium">full-stack web applications</span> as a freelancer.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a challenge and developing tech solutions for causes that I'm interested in.
        {" "}I am always exploring new technologies and currently I am learning about and building with the latest LLMs, Gen AI tool and agentic workflows.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        camping, dancing, and cooking. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning how to sing.
      </p>
    </motion.section>
  );
}
