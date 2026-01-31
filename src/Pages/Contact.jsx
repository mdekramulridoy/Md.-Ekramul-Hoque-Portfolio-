import React, { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { Toaster } from "react-hot-toast";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import Swal from "sweetalert2";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [state, handleSubmit] = useForm("xjkkpoqa");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    await handleSubmit(e);

    if (state.succeeded) {
      Swal.fire({
        title: "Message Sent!",
        text: "Thanks for reaching out. I’ll get back to you shortly.",
        icon: "success",
        confirmButtonColor: "#15A6FF",
      });

      setFormData({ name: "", email: "", message: "" });
    }
  };

  return (
    <section id="contact" className="my-14 lg:my-28 px-4 sm:px-6 lg:px-20">
      <div className="rounded-2xl bg-base-100 border border-base-300 shadow-xl p-6 sm:p-8 lg:p-14 grid grid-cols-1 lg:grid-cols-2 gap-10">

        {/* Left: Form */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-3">
            Get in Touch
          </h2>
          <p className="text-base-content mb-6 max-w-md text-sm sm:text-base">
            Have a project in mind or want to collaborate?  
            Fill out the form and I’ll respond as soon as possible.
          </p>

          <form onSubmit={handleFormSubmit} className="space-y-5">
            {/* Name */}
            <div>
              <label className="block mb-1 font-semibold text-base-content text-sm">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your name"
                className="w-full rounded-xl px-4 py-3 bg-base-100 border border-base-300 text-base-content focus:outline-none focus:ring-2 focus:ring-primary transition"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block mb-1 font-semibold text-base-content text-sm">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Your email"
                className="w-full rounded-xl px-4 py-3 bg-base-100 border border-base-300 text-base-content focus:outline-none focus:ring-2 focus:ring-primary transition"
              />
              <ValidationError prefix="Email" field="email" errors={state.errors} />
            </div>

            {/* Message */}
            <div>
              <label className="block mb-1 font-semibold text-base-content text-sm">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                placeholder="Write your message..."
                className="w-full rounded-xl px-4 py-3 bg-base-100 border border-base-300 text-base-content focus:outline-none focus:ring-2 focus:ring-primary transition resize-none"
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={state.submitting}
              className="w-full rounded-xl bg-primary text-white font-semibold py-3 hover:opacity-90 transition shadow-lg"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Right: Info */}
        <div className="flex flex-col justify-start lg:justify-center">
          <h3 className="text-2xl sm:text-3xl font-bold text-primary mb-4">
            Contact Information
          </h3>
          <p className="text-base-content mb-6 max-w-md text-sm sm:text-base">
            You can also reach me directly through the following channels.
          </p>

          <div className="space-y-3">
            <div className="flex items-start gap-3 p-4 rounded-xl border border-base-300">
              <FaMapMarkerAlt className="text-primary text-lg mt-1" />
              <span className="text-base-content text-sm sm:text-base">
                Dhaka, Bangladesh
              </span>
            </div>

            <div className="flex items-start gap-3 p-4 rounded-xl border border-base-300 break-all">
              <FaEnvelope className="text-primary text-lg mt-1" />
              <a
                href="mailto:ekramul.hoque.ridoy@gmail.com"
                className="text-base-content hover:underline text-sm sm:text-base"
              >
                ekramul.hoque.ridoy@gmail.com
              </a>
            </div>

            <div className="flex items-start gap-3 p-4 rounded-xl border border-base-300">
              <FaPhoneAlt className="text-primary text-lg mt-1" />
              <span className="text-base-content text-sm sm:text-base">
                +8801792243520 (WhatsApp)
              </span>
            </div>
          </div>
        </div>
      </div>

      <Toaster position="bottom-right" />
    </section>
  );
};

export default Contact;
