import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faXmark,
  faMoon,
  faSun,
} from "@fortawesome/free-solid-svg-icons";
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
  const [theme, setTheme] = useState("light");
  const [menuOpen, setMenuOpen] = useState(false);

  // Load saved theme
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  // Toggle theme
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  const middleLink = (
    <>
      <HashLink
        smooth
        to="#top"
        onClick={() => setMenuOpen(false)}
        className="px-4 py-2 rounded-lg font-semibold transition hover:bg-primary hover:text-white"
      >
        HOME
      </HashLink>
      <HashLink
        smooth
        to="/#experiences"
        onClick={() => setMenuOpen(false)}
        className="px-4 py-2 rounded-lg font-semibold transition hover:bg-primary hover:text-white"
      >
        EXPERIENCE
      </HashLink>
      <HashLink
        smooth
        to="/#projects"
        onClick={() => setMenuOpen(false)}
        className="px-4 py-2 rounded-lg font-semibold transition hover:bg-primary hover:text-white"
      >
        PROJECT
      </HashLink>
      <HashLink
        smooth
        to="/#contact"
        onClick={() => setMenuOpen(false)}
        className="px-4 py-2 rounded-lg font-semibold transition hover:bg-primary hover:text-white"
      >
        CONTACT
      </HashLink>
    </>
  );

  return (
    <nav className="fixed top-0 z-50 w-full backdrop-blur-lg bg-base-100/80 border-b border-base-300">
      <div className="max-w-7xl mx-auto px-5">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <HashLink smooth to="#top" className="flex items-center gap-2">
            <img
              src="https://i.ibb.co.com/0jrBPFFg/1738081339731.jpg"
              alt="Ekramul Logo"
              className="w-10 h-10 rounded-full"
            />
            <span className="font-bold uppercase text-lg tracking-wide">
              Md. Ekramul Hoque
            </span>
          </HashLink>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-6">
            {middleLink}
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-3">

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="btn btn-ghost btn-circle"
            >
              <FontAwesomeIcon
                icon={theme === "light" ? faMoon : faSun}
                className="text-lg"
              />
            </button>

            {/* Resume Button */}
            <a
              href="https://docs.google.com/document/d/1R6fF2k_ErDvu5vfCTYk773K-rwYpZczyz7rGvvhEetg/export?format=pdf"
              className="hidden md:inline-flex btn btn-primary btn-sm rounded-xl text-white"
            >
              Resume
            </a>

            {/* Mobile Menu Icon */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden btn btn-ghost btn-circle"
            >
              <FontAwesomeIcon
                icon={menuOpen ? faXmark : faBars}
                className="text-xl"
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-base-100 shadow-lg">
          <div className="flex flex-col p-4 space-y-2">
            {middleLink}
            <a
              href="https://docs.google.com/document/d/1R6fF2k_ErDvu5vfCTYk773K-rwYpZczyz7rGvvhEetg/export?format=pdf"
              className="mt-2 btn btn-primary btn-sm uppercase text-white"
            >
             Download Resume
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
