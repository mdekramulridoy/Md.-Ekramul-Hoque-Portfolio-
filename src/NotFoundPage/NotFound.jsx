import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="min-h-[70vh] flex items-center justify-center px-4 sm:px-6">
      <div className="text-center max-w-md">

        {/* 404 */}
        <h1 className="text-6xl sm:text-7xl font-extrabold text-primary mb-4">
          404
        </h1>

        {/* Title */}
        <h2 className="text-xl sm:text-2xl font-semibold text-base-content mb-3">
          Page Not Found
        </h2>

        {/* Description */}
        <p className="text-sm sm:text-base text-base-content leading-relaxed">
          Sorry, the page you’re looking for doesn’t exist,  
          has been removed, or the URL might be incorrect.
        </p>

        {/* Action */}
        <div className="mt-8">
          <Link
            to="/"
            className="inline-flex items-center justify-center
                       px-6 py-2.5 rounded-full
                       bg-primary text-white
                       font-semibold text-sm sm:text-base
                       hover:opacity-90 transition shadow-lg"
          >
            ← Back to Home
          </Link>
        </div>

      </div>
    </section>
  );
};

export default NotFound;
