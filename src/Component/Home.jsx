import React from "react";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Home = () => {
  return (
    <section
      id="top"
      className="flex flex-col lg:flex-row items-center justify-between gap-10 
                 mt-28 lg:mt-40 px-4 sm:px-6 lg:px-20"
    >
      {/* Left Content */}
      <div className="text-center lg:text-left max-w-xl">

        {/* Heading */}
        <div className="hidden lg:block">
          <img
            src="https://readme-typing-svg.herokuapp.com?font=Righteous&size=60&color=15A6FF&center=false&vCenter=true&width=750&height=70&lines=Hi,+I'm+Md.+Ekramul+Hoque"
            alt="Md. Ekramul Hoque"
          />
        </div>

        <div className="block lg:hidden">
          <img
            src="https://readme-typing-svg.herokuapp.com?font=Righteous&size=42&color=15A6FF&center=true&vCenter=true&width=600&height=60&lines=Hi,+I'm+Md.+Ekramul+Hoque"
            alt="Md. Ekramul Hoque"
          />
        </div>

        {/* Description */}
        <p className="mt-6 text-base sm:text-lg text-base-content leading-relaxed">
          I’m a passionate{" "}
          <span className="text-primary font-semibold">
            Full-Stack Developer (MERN)
          </span>{" "}
          focused on building clean, scalable, and user-friendly web
          applications. I specialize in{" "}
          <span className="font-semibold">
            React.js, Next.js, Tailwind CSS, and Node.js
          </span>
          , with a strong emphasis on modern UI/UX and performance-driven
          solutions.
        </p>

        {/* Resume Button */}
        <a
          href="https://docs.google.com/document/d/1R6fF2k_ErDvu5vfCTYk773K-rwYpZczyz7rGvvhEetg/export?format=pdf"
          className="mt-8 inline-flex items-center gap-2 px-6 sm:px-7 py-3 
                     rounded-full bg-primary text-white 
                     text-base sm:text-lg font-semibold 
                     shadow-lg hover:opacity-90 transition"
        >
          Download Resume
          <span className="text-xl">→</span>
        </a>

        {/* Social Links */}
        <div className="mt-8 flex justify-center lg:justify-start gap-6">
          <a
            href="https://github.com/mdekramulridoy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary text-xl sm:text-2xl hover:scale-110 transition"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/mdekramulridoy/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary text-xl sm:text-2xl hover:scale-110 transition"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://x.com/mdekramulridoy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary text-xl sm:text-2xl hover:scale-110 transition"
            aria-label="Twitter"
          >
            <FaSquareXTwitter />
          </a>

          <a
            href="https://www.facebook.com/mdekramulhoqueridoy/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary text-xl sm:text-2xl hover:scale-110 transition"
            aria-label="Facebook"
          >
            <FaFacebook />
          </a>
        </div>
      </div>

      {/* Right Image */}
      <div className="relative mt-12 lg:mt-0">
        <div className="w-64 sm:w-72 lg:w-96 
                        rounded-full overflow-hidden 
                        ring-4 ring-primary/30 shadow-xl">
          <img
            src="https://i.ibb.co.com/0jrBPFFg/1738081339731.jpg"
            alt="Md Ekramul Hoque - Full Stack Developer"
            className="rounded-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
