import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Library = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("/details.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((p) => p.id === parseInt(id));
        if (found) setProject(found);
        else setError("Project not found");
      })
      .catch(() => setError("Failed to load project details"))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return (
      <div className="py-16 text-center text-lg font-semibold text-base-content">
        Loading project…
      </div>
    );
  }

  if (error) {
    return (
      <div className="py-16 text-center text-lg font-semibold text-red-500">
        {error}
      </div>
    );
  }

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    arrows: false,
  };

  return (
    <section className="my-12 sm:my-16 lg:my-28 px-4 sm:px-6 lg:px-20">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="mb-8 sm:mb-10 text-center">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-3">
            {project.title}
          </h1>
          <p className="text-sm sm:text-base lg:text-lg text-base-content max-w-3xl mx-auto">
            {project.briefDescription}
          </p>
        </div>

        {/* Slider */}
        <div className="rounded-2xl overflow-hidden shadow-xl mb-8 sm:mb-12 border border-base-300">
          <Slider {...sliderSettings}>
            {project.images.map((img, index) => (
              <div key={index}>
                <img
                  src={img}
                  alt={`Project screenshot ${index + 1}`}
                  className="w-full h-56 sm:h-72 lg:h-[420px] object-cover"
                />
              </div>
            ))}
          </Slider>
        </div>

        {/* Content Card */}
        <div className="bg-base-100 border border-base-300 rounded-2xl shadow-lg p-5 sm:p-6 lg:p-8 space-y-8 sm:space-y-10">

          {/* Overview */}
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold text-primary mb-2">
              Project Overview
            </h2>
            <p className="text-sm sm:text-base text-base-content leading-relaxed">
              {project.details}
            </p>
          </div>

          {/* Tech Stack */}
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold text-primary mb-2">
              Technology Stack
            </h2>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {project.mainTechnologyStack.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 sm:px-4 py-1 rounded-full bg-primary/10 text-primary font-medium text-xs sm:text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Challenges */}
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold text-primary mb-2">
              Challenges Faced
            </h2>
            <p className="text-sm sm:text-base text-base-content leading-relaxed">
              {project.challengesFaced}
            </p>
          </div>

          {/* Improvements */}
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold text-primary mb-2">
              Potential Improvements
            </h2>
            <p className="text-sm sm:text-base text-base-content leading-relaxed">
              {project.potentialImprovements}
            </p>
          </div>

          {/* CTA */}
          <div className="flex flex-wrap gap-3 sm:gap-4 pt-2">
            {project.liveLink && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 sm:px-6 py-2 rounded-full bg-primary text-white text-sm sm:text-base font-semibold hover:opacity-90 transition"
              >
                Live Demo
              </a>
            )}
            {project.githubRepo && (
              <a
                href={project.githubRepo}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 sm:px-6 py-2 rounded-full border border-primary text-primary text-sm sm:text-base font-semibold hover:bg-primary hover:text-white transition"
              >
                GitHub Repository
              </a>
            )}
          </div>
        </div>

        {/* Back */}
        <div className="mt-8 sm:mt-10 text-center">
          <Link
            to="/"
            className="inline-block px-6 py-2 rounded-full bg-primary text-white text-sm sm:text-base font-semibold hover:opacity-90 transition"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Library;
