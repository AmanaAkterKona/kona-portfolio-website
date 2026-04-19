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
    <section className="min-h-screen flex flex-col justify-center items-center py-24 px-6 bg-[#060818]">

      {/* ── Page Header ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10"
      >
        <p className="text-xs uppercase tracking-[0.3em] text-slate-400 mb-4 font-semibold">
          Get in touch
        </p>
        <h1 className="text-4xl md:text-5xl font-black font-semibold text-white mb-5 tracking-tight">
          Let's{" "}
          <span className="bg-gradient-to-r from-orange-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
            Connect
          </span>
        </h1>
        <div className="w-16 h-[2px] bg-gradient-to-r from-orange-400 via-fuchsia-400 to-cyan-400 mx-auto rounded-full" />
      </motion.div>

      {/* Glass Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="relative w-full max-w-md rounded-2xl p-8 flex flex-col gap-6
                   bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl"
      >
        {/* Card Header */}
        <div>
          <h2 className="text-white text-2xl font-semibold font-black tracking-tight mb-2">
            Ready to start your{" "}
            <span className="bg-gradient-to-r from-orange-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
              next project?
            </span>
          </h2>
          <p className="text-slate-400 text-sm">
            Feel free to reach out for collaborations or just a friendly hello.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="flex flex-col gap-4 mt-2">
          <div className="flex items-center justify-between bg-black/40 p-4 rounded-xl hover:bg-black/60 transition">
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-orange-400" />
              <div>
                <p className="text-gray-200 text-sm">proff.kona@gmail.com</p>
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
            <FaPhone className="text-cyan-400" />
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
                       focus:outline-none focus:ring-2 focus:ring-fuchsia-400/50"
            required
          />

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address"
            className="p-3 rounded-xl bg-black/40 text-white placeholder-gray-400
                       focus:outline-none focus:ring-2 focus:ring-fuchsia-400/50"
            required
          />

          <textarea
            name="project"
            value={formData.project}
            onChange={handleChange}
            placeholder="Project Details"
            rows={4}
            className="p-3 rounded-xl bg-black/40 text-white placeholder-gray-400
                       focus:outline-none focus:ring-2 focus:ring-fuchsia-400/50 resize-none"
            required
          />

          <button
            type="submit"
            className="w-full py-3 bg-white/[0.08] hover:bg-white/[0.13] border border-white/20 hover:border-orange-400/50
                       text-white font-bold rounded-xl transition-all"
          >
            Send Message →
          </button>
        </form>

        {/* Social Links */}
        <div className="flex justify-center gap-4 mt-2">
          <motion.a
            whileHover={{ scale: 1.1, y: -3 }}
            href="https://github.com/AmanaAkterKona"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-black/40 hover:bg-white/10 border border-white/10 rounded-full
                       flex items-center justify-center text-gray-300 hover:text-white transition-all"
          >
            <FaGithub className="text-xl" />
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.1, y: -3 }}
            href="https://www.linkedin.com/in/amena-akter-kona/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-black/40 hover:bg-white/10 border border-white/10 rounded-full
                       flex items-center justify-center text-gray-300 hover:text-white transition-all"
          >
            <FaLinkedin className="text-xl" />
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.1, y: -3 }}
            href="mailto:proff.kona@gmail.com"
            className="w-12 h-12 bg-black/40 hover:bg-white/10 border border-white/10 rounded-full
                       flex items-center justify-center text-gray-300 hover:text-white transition-all"
          >
            <MdEmail className="text-xl" />
          </motion.a>
        </div>

        {/* Footer */}
        <div className="text-center text-gray-500 text-xs mt-4">
          <p>Designed & Built by Kona.</p>
          <p>© 2024 All rights reserved.</p>
        </div>

        {/* Copy Toast */}
        {copied && (
          <div className="absolute top-4 right-4 bg-white/10 border border-white/20 backdrop-blur-md text-white px-3 py-1 rounded-md text-sm">
            ✓ Email copied!
          </div>
        )}
      </motion.div>
    </section>
  );
};

export default Contact;