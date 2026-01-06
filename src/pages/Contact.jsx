import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaPhone,
  FaRegCopy,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import back2 from "../assets/back2.avif";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    project: "",
  });
  const [copied, setCopied] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("proff.kona@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", project: "" });
  };

  return (
    <section
      className="min-h-screen flex justify-center items-center p-6 bg-cover bg-center relative"
      style={{ backgroundImage: `url(${back2})` }}
    >
      {/* dark overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Glass Card */}
      <div
        className="relative w-full max-w-md rounded-2xl p-8 flex flex-col gap-6
                   bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl"
      >
        {/* Header */}
        <div>
          <h2 className="text-white text-2xl font-bold mb-2">
            Ready to start your{" "}
            <span className="text-blue-400">next project?</span>
          </h2>
          <p className="text-gray-300 text-sm">
            Feel free to reach out for collaborations or just a friendly hello.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="flex flex-col gap-4 mt-2">
          <div className="flex items-center justify-between bg-black/40 p-4 rounded-xl hover:bg-black/60 transition">
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-blue-400" />
              <div>
                <p className="text-gray-200 text-sm">
                  proff.kona@gmail.com
                </p>
                <span className="text-gray-400 text-xs">Email</span>
              </div>
            </div>
            <button
              onClick={handleCopyEmail}
              className="text-gray-400 hover:text-white"
            >
              <FaRegCopy />
            </button>
          </div>

          <div className="flex items-center gap-3 bg-black/40 p-4 rounded-xl hover:bg-black/60 transition">
            <FaPhone className="text-blue-400" />
            <div>
              <p className="text-gray-200 text-sm">+880 1796575129</p>
              <span className="text-gray-400 text-xs">Phone</span>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="text-gray-400 text-xs text-center">
          or send a message
        </div>

        {/* Contact Form */}
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="p-3 rounded-xl bg-black/40 text-white placeholder-gray-400
                       focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address"
            className="p-3 rounded-xl bg-black/40 text-white placeholder-gray-400
                       focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <textarea
            name="project"
            value={formData.project}
            onChange={handleChange}
            placeholder="Project Details"
            rows={4}
            className="p-3 rounded-xl bg-black/40 text-white placeholder-gray-400
                       focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            required
          />

          <button
            type="submit"
            className="w-full py-3 bg-blue-500 hover:bg-blue-600
                       text-white font-bold rounded-xl transition-all"
          >
            Send Message →
          </button>
        </form>

        {/* Animated Social Links */}
        <div className="flex justify-center gap-4 mt-2">
          <motion.a
            whileHover={{ scale: 1.1, y: -3 }}
            href="https://github.com/AmanaAkterKona"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-black/40 hover:bg-blue-500 rounded-full
                       flex items-center justify-center text-gray-300 hover:text-white transition-all"
          >
            <FaGithub className="text-xl" />
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.1, y: -3 }}
            href="https://www.linkedin.com/in/amena-akter-kona/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-black/40 hover:bg-blue-500 rounded-full
                       flex items-center justify-center text-gray-300 hover:text-white transition-all"
          >
            <FaLinkedin className="text-xl" />
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.1, y: -3 }}
            href="mailto:proff.kona@gmail.com"
            className="w-12 h-12 bg-black/40 hover:bg-blue-500 rounded-full
                       flex items-center justify-center text-gray-300 hover:text-white transition-all"
          >
            <MdEmail className="text-xl" />
          </motion.a>
        </div>

        {/* Footer */}
        <div className="text-center text-gray-400 text-xs mt-4">
          <p>Designed & Built by Kona.</p>
          <p>© 2024 All rights reserved.</p>
        </div>

        {/* Copy Toast */}
        {copied && (
          <div className="absolute top-4 right-4 bg-blue-500 text-white px-3 py-1 rounded-md text-sm">
            Email copied!
          </div>
        )}
      </div>
    </section>
  );
};

export default Contact;
