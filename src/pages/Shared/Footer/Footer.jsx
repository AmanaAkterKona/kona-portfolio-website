import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden">

      {/* Glow orbs */}
      <div className="absolute -top-20 left-1/4 w-[300px] h-[200px] bg-orange-500/[0.10] blur-[100px] rounded-full" />
      <div className="absolute -top-20 right-1/4 w-[300px] h-[200px] bg-cyan-500/[0.10] blur-[100px] rounded-full" />
      <div className="absolute inset-0 bg-gradient-to-r from-orange-500/[0.05] via-fuchsia-500/[0.07] to-cyan-500/[0.05] blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative backdrop-blur-xl border-t border-white/[0.07]"
        style={{ background: "radial-gradient(ellipse at 50% 0%, #0f0728 0%, #08051a 60%, #020510 100%)" }}
      >
        <div className="max-w-6xl mx-auto px-6 py-14 text-center space-y-8">

          {/* Name & Role */}
          <div>
            <h3 className="text-3xl font-black tracking-tight mb-1">
              <span className="text-white">Amana </span>
              <span className="bg-gradient-to-r from-orange-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
                Akter
              </span>
            </h3>
            <p className="text-xs text-slate-500 tracking-[0.25em] uppercase font-medium mt-2">
              MERN Stack Developer • React Enthusiast
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4">
            {[
              { icon: <FaGithub />,   link: "https://github.com/AmanaAkterKona",            hoverBorder: "group-hover:border-white/40",       hoverText: "group-hover:text-white"      },
              { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/amena-akter-kona/", hoverBorder: "group-hover:border-fuchsia-400/60",  hoverText: "group-hover:text-fuchsia-400" },
              { icon: <MdEmail />,    link: "mailto:proff.kona@gmail.com",                   hoverBorder: "group-hover:border-cyan-400/60",     hoverText: "group-hover:text-cyan-400"   },
            ].map((item, index) => (
              <motion.a
                key={index}
                href={item.link}
                target="_blank"
                whileHover={{ y: -6, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className={`group w-12 h-12 rounded-full border border-white/[0.08] bg-white/[0.04]
                  flex items-center justify-center text-slate-500
                  transition-all duration-300 backdrop-blur-sm
                  ${item.hoverBorder} ${item.hoverText}`}
              >
                <span className="text-xl transition-colors duration-300">
                  {item.icon}
                </span>
              </motion.a>
            ))}
          </div>

          {/* Divider */}
          <div className="flex items-center gap-4 max-w-xs mx-auto">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent to-fuchsia-500/30" />
            <div className="w-1.5 h-1.5 rounded-full bg-fuchsia-500/50" />
            <div className="flex-1 h-px bg-gradient-to-l from-transparent to-fuchsia-500/30" />
          </div>

          {/* Copyright */}
          <p className="text-[11px] text-slate-600 tracking-widest uppercase">
            © {new Date().getFullYear()} Amana Akter &nbsp;·&nbsp; Crafted with{" "}
            <span className="text-orange-400/80">React</span>
            {" "}&{" "}
            <span className="text-fuchsia-400/80">Framer Motion</span>
          </p>

        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;