import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden">
      
      {/* Gradient glow background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative bg-slate-900/70 backdrop-blur-xl border-t border-white/10"
      >
        <div className="max-w-6xl mx-auto px-6 py-12 text-center space-y-8">

          {/* Name & Role */}
          <div>
            <h3 className="text-xl font-semibold text-white">
              Amana Akter
            </h3>
            <p className="text-sm text-slate-400">
              MERN Stack Developer • React Enthusiast
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-5">
            {[
              {
                icon: <FaGithub />,
                link: "https://github.com/AmanaAkterKona",
              },
              {
                icon: <FaLinkedin />,
                link: "https://www.linkedin.com/in/amena-akter-kona/",
              },
              {
                icon: <MdEmail />,
                link: "mailto:proff.kona@gmail.com",
              },
            ].map((item, index) => (
              <motion.a
                key={index}
                href={item.link}
                target="_blank"
                whileHover={{ y: -6, scale: 1.15 }}
                whileTap={{ scale: 0.95 }}
                className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:bg-gradient-to-tr hover:from-blue-500 hover:to-purple-500 transition-all"
              >
                <span className="text-xl">{item.icon}</span>
              </motion.a>
            ))}
          </div>

          {/* Divider */}
          <div className="w-24 h-px mx-auto bg-gradient-to-r from-transparent via-white/30 to-transparent" />

          {/* Copyright */}
          <p className="text-xs text-slate-400 tracking-wide">
            © {new Date().getFullYear()} Amana Akter. Crafted with React & Framer Motion
          </p>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
