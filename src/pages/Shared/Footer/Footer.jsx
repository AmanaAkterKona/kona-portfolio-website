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

          {/* Name & Role - Colorful Name */}
          <div>
            <h3 className="text-2xl font-bold tracking-tight">
              <span className="text-white">Amana </span>
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent animate-gradient-x">
                Akter
              </span>
            </h3>
            <p className="text-sm text-slate-400 mt-1">
              MERN Stack Developer • React Enthusiast
            </p>
          </div>

          {/* Social Links - Outline Style */}
          <div className="flex justify-center gap-6">
            {[
              {
                icon: <FaGithub />,
                link: "https://github.com/AmanaAkterKona",
                borderColor: "group-hover:border-white",
              },
              {
                icon: <FaLinkedin />,
                link: "https://www.linkedin.com/in/amena-akter-kona/",
                borderColor: "group-hover:border-blue-500",
              },
              {
                icon: <MdEmail />,
                link: "mailto:proff.kona@gmail.com",
                borderColor: "group-hover:border-purple-500",
              },
            ].map((item, index) => (
              <motion.a
                key={index}
                href={item.link}
                target="_blank"
                whileHover={{ y: -6, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className={`group w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-slate-400 transition-all duration-300 ${item.borderColor} hover:shadow-[0_0_15px_rgba(255,255,255,0.1)]`}
              >
                <span className="text-xl group-hover:text-white transition-colors">
                  {item.icon}
                </span>
              </motion.a>
            ))}
          </div>

          {/* Divider */}
          <div className="w-24 h-px mx-auto bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />

          {/* Copyright */}
          <p className="text-xs text-slate-500 tracking-wide italic">
            © {new Date().getFullYear()} Amana Akter. Crafted with <span className="text-blue-400">React</span> & <span className="text-purple-400">Framer Motion</span>
          </p>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;