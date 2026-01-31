import React from "react";

const About = () => {
  return (
    <section className="my-10 lg:my-20 px-4 sm:px-6 lg:px-20">
      <div className="rounded-2xl bg-base-100 border border-primary/20 shadow-lg 
                      py-8 sm:py-10 lg:py-16 text-center">

        {/* Title */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl 
                       font-bold mb-4 sm:mb-6 text-primary">
          About Me
        </h2>

        {/* Paragraph 1 */}
        <p className="text-sm sm:text-base lg:text-lg 
                      text-base-content mb-4 max-w-4xl mx-auto px-1 sm:px-0">
          I’m{" "}
          <span className="font-semibold text-primary">
            Md. Ekramul Hoque
          </span>
          , a dedicated{" "}
          <span className="font-semibold">
            Full-Stack Developer (MERN)
          </span>{" "}
          with a strong passion for building scalable, high-performance web
          applications. I focus on creating seamless, user-friendly digital
          experiences with clean and maintainable code.
        </p>

        {/* Paragraph 2 */}
        <p className="text-sm sm:text-base lg:text-lg 
                      text-base-content mb-4 max-w-4xl mx-auto px-1 sm:px-0">
          My technical expertise includes{" "}
          <span className="font-semibold">
            React.js, Next.js, Tailwind CSS, Node.js, Express.js, and MongoDB
          </span>
          . I enjoy solving complex problems and continuously learning modern
          web technologies to deliver real-world solutions.
        </p>

        {/* Paragraph 3 */}
        <p className="text-sm sm:text-base lg:text-lg 
                      text-base-content max-w-4xl mx-auto px-1 sm:px-0">
          Beyond development, I run the{" "}
          <span className="font-semibold text-primary">
            EH Science Club
          </span>{" "}
          YouTube channel with{" "}
          <span className="font-semibold">
            250K+ subscribers
          </span>
          , where I share insights on space and science. I’m always open to
          collaboration and challenges that drive innovation.
        </p>

      </div>
    </section>
  );
};

export default About;
