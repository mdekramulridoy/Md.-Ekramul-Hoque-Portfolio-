import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Visa Portal",
    image: "https://i.ibb.co.com/N2ZsvCDZ/Screenshot-2025-02-03-114317.png",
    description:
      "A full-featured visa processing platform with role-based access and secure workflows.",
  },
  {
    id: 2,
    title: "Book Library",
    image: "https://i.ibb.co.com/9DMrYnc/Screenshot-2025-02-04-234519.png",
    description:
      "A digital library system with book management, search, and user authentication.",
  },
  {
    id: 3,
    title: "Language Learning",
    image: "https://i.ibb.co.com/MD5Lwhdy/Screenshot-2025-02-03-114115.png",
    description:
      "An interactive language learning platform focused on vocabulary and practice.",
  },
];

const Project = () => {
  const navigate = useNavigate();

  return (
    <section
      id="projects"
      className="my-12 sm:my-16 lg:my-28 px-4 sm:px-6 lg:px-20"
    >
      {/* Section Header */}
      <div className="text-center mb-8 sm:mb-12">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-3">
          Featured Projects
        </h2>
        <p className="text-base-content text-sm sm:text-base lg:text-lg max-w-2xl mx-auto">
          A selection of projects that demonstrate my ability to design,
          develop, and deliver real-world web applications.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3 }}
            className="group rounded-2xl overflow-hidden bg-base-100 border border-base-300 shadow-lg hover:shadow-2xl transition"
          >
            {/* Image */}
            <div className="overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="h-44 sm:h-48 lg:h-56 w-full object-cover group-hover:scale-105 transition duration-500"
              />
            </div>

            {/* Content */}
            <div className="p-4 sm:p-5 lg:p-6 flex flex-col gap-3 sm:gap-4">
              <h3 className="text-lg sm:text-xl font-semibold text-base-content">
                {project.title}
              </h3>

              <p className="text-base-content text-sm leading-relaxed">
                {project.description}
              </p>

              <div className="mt-2">
                <button
                  onClick={() => navigate(`/project/${project.id}`)}
                  className="inline-flex items-center justify-center px-4 sm:px-5 py-2 rounded-full bg-primary text-white text-sm sm:text-base font-semibold hover:opacity-90 transition"
                >
                  View Details →
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Project;
