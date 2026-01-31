import React from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaJava,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaDatabase,
} from "react-icons/fa";
import {
  SiMongodb,
  SiTailwindcss,
  SiExpress,
  SiDaisyui,
  SiAxios,
  SiReactquery,
  SiNextdotjs,
  SiReactrouter,
} from "react-icons/si";

/* =========================
   Skills Data
========================= */
const allSkills = [
  { name: "React", icon: <FaReact /> },
  { name: "HTML5", icon: <FaHtml5 /> },
  { name: "CSS3", icon: <FaCss3Alt /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  { name: "React Router", icon: <SiReactrouter /> },
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "React Query", icon: <SiReactquery /> },
  { name: "Axios", icon: <SiAxios /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "Express.js", icon: <SiExpress /> },
  { name: "Java", icon: <FaJava /> },
  { name: "Databases", icon: <FaDatabase /> },
  { name: "DaisyUI", icon: <SiDaisyui /> },
];

/* =========================
   Infinite Scroll Row
========================= */
const InfiniteScroll = ({ skills, reverse = false }) => {
  return (
    <div className="overflow-hidden w-full py-4 sm:py-6">
      <motion.div
        className="flex gap-4 sm:gap-6"
        animate={{ x: reverse ? ["0%", "-100%"] : ["-100%", "0%"] }}
        transition={{
          repeat: Infinity,
          duration: 28,
          ease: "linear",
        }}
      >
        {[...skills, ...skills].map((skill, index) => (
          <div
            key={index}
            className="
              min-w-[140px] sm:min-w-[170px] lg:min-w-[240px]
              rounded-xl bg-primary text-white
              p-4 sm:p-5 lg:p-6
              shadow-lg flex flex-col items-center justify-center gap-1 sm:gap-2
              hover:scale-105 transition
            "
          >
            <div className="text-2xl sm:text-3xl lg:text-4xl">
              {skill.icon}
            </div>
            <p className="text-sm sm:text-base lg:text-lg font-semibold text-center">
              {skill.name}
            </p>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

/* =========================
   Main Component
========================= */
const Experiences = () => {
  return (
    <section
      id="experiences"
      className="my-12 sm:my-16 lg:my-24 px-4 sm:px-6 lg:px-20"
    >
      {/* Section Header */}
      <div className="text-center mb-8 sm:mb-10">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-3">
          Skills & Experience
        </h2>
        <p className="text-base-content text-sm sm:text-base lg:text-lg max-w-2xl mx-auto">
          A snapshot of the technologies and tools I use to build modern,
          scalable, and high-performance web applications.
        </p>
      </div>

      {/* Skills Animation */}
      <div className="space-y-3 sm:space-y-4">
        <InfiniteScroll skills={allSkills} />
        <InfiniteScroll skills={allSkills} reverse />
      </div>
    </section>
  );
};

export default Experiences;
