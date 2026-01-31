import React from "react";
import { FaArrowUp } from "react-icons/fa";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="mt-20 bg-base-100 border-t border-primary/20">
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col items-center">

        {/* Logo */}
        <div className="mb-6">
          <a href="/" aria-label="Home">
            <img
              src="https://i.ibb.co.com/0jrBPFFg/1738081339731.jpg"
              alt="Md. Ekramul Hoque Logo"
              className="h-20 w-auto object-contain rounded-full shadow-lg"
            />
          </a>
        </div>

        {/* Social Badges (Your Style – Polished) */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          <a target="_blank" rel="noreferrer" href="mailto:ekramul.hoque.ridoy@gmail.com">
            <img
              height="30"
              src="https://img.shields.io/badge/Gmail-EA4335?style=for-the-badge&logo=gmail&logoColor=white"
              alt="Gmail"
              className="hover:scale-105 transition"
            />
          </a>

          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/mdekramulhoqueridoy/"
          >
            <img
              height="30"
              src="https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white"
              alt="LinkedIn"
              className="hover:scale-105 transition"
            />
          </a>

          <a target="_blank" rel="noreferrer" href="https://x.com/mdekramulridoy">
            <img
              height="30"
              src="https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white"
              alt="Twitter"
              className="hover:scale-105 transition"
            />
          </a>

          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.facebook.com/mdekramulhoqueridoy/"
          >
            <img
              height="30"
              src="https://img.shields.io/badge/Facebook-1877F2?style=for-the-badge&logo=facebook&logoColor=white"
              alt="Facebook"
              className="hover:scale-105 transition"
            />
          </a>

          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.instagram.com/mdekramulhoqueridoy/"
          >
            <img
              height="30"
              src="https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white"
              alt="Instagram"
              className="hover:scale-105 transition"
            />
          </a>

          <a target="_blank" rel="noreferrer" href="https://t.me/ekramulridoy/">
            <img
              height="30"
              src="https://img.shields.io/badge/Telegram-26A5E4?style=for-the-badge&logo=telegram&logoColor=white"
              alt="Telegram"
              className="hover:scale-105 transition"
            />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm text-base-content mb-6 text-center">
          © {new Date().getFullYear()} Md. Ekramul Hoque. All Rights Reserved.
        </p>

        {/* Back to Top */}
        <button
          onClick={scrollToTop}
          className="flex items-center gap-2 px-5 py-2 rounded-full bg-primary text-white font-semibold shadow-lg hover:opacity-90 transition"
          aria-label="Go to top"
        >
          <FaArrowUp /> Back to Top
        </button>
      </div>
    </footer>
  );
};

export default Footer;
