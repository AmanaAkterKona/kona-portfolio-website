import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden">

      {/* Glow orbs */}
      <div className="absolute -top-20 left-1/4 w-[300px] h-[200px] bg-[#e8175d]/10 blur-[100px] rounded-full" />
      <div className="absolute -top-20 right-1/4 w-[300px] h-[200px] bg-[#38bdf8]/10 blur-[100px] rounded-full" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative border-t border-white/[0.06]"
        style={{ background: "linear-gradient(135deg, #060e22 0%, #0a1628 50%, #0d1b38 100%)" }}
      >
        <div className="max-w-6xl mx-auto px-8 py-10">

          {/* ── Top row: Name + tagline left | Social icons right ── */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-8">

            {/* Left — Name & tagline */}
            <div>
              <h3 className="text-2xl font-black tracking-tight">
                <span className="text-white">Amana </span>
                <span className="text-[#e8175d]">Akter</span>
              </h3>
              <p className="text-[11px] text-slate-400 tracking-[0.22em] uppercase font-medium mt-1">
                MERN Stack Developer • React Enthusiast
              </p>
            </div>

            {/* Right — Social icons */}
            <div className="flex items-center gap-3">
              {[
                { icon: <FaGithub />,  link: "https://github.com/AmanaAkterKona",             hoverColor: "#ffffff",   hoverBorder: "rgba(255,255,255,0.4)"  },
                { icon: <FaLinkedin />,link: "https://www.linkedin.com/in/amena-akter-kona/",  hoverColor: "#38bdf8",   hoverBorder: "rgba(56,189,248,0.5)"   },
                { icon: <MdEmail />,   link: "mailto:proff.kona@gmail.com",                    hoverColor: "#e8175d",   hoverBorder: "rgba(232,23,93,0.5)"    },
              ].map((item, i) => (
                <motion.a
                  key={i}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -4, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-full flex items-center justify-center text-lg transition-all duration-300"
                  style={{
                    border: "1px solid rgba(255,255,255,0.08)",
                    background: "rgba(255,255,255,0.03)",
                    color: "rgba(148,163,184,0.5)",
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.color = item.hoverColor;
                    e.currentTarget.style.borderColor = item.hoverBorder;
                    e.currentTarget.style.background = `${item.hoverColor}15`;
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.color = "rgba(148,163,184,0.5)";
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                    e.currentTarget.style.background = "rgba(255,255,255,0.03)";
                  }}
                >
                  {item.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* ── Divider ── */}
          <div className="w-full h-px mb-6" style={{ background: "linear-gradient(to right, rgba(232,23,93,0.3), rgba(255,255,255,0.04), transparent)" }} />

          {/* ── Bottom row: nav links left | copyright right ── */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">

            {/* Left — quick nav */}
            <div className="flex items-center gap-5">
              {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-[11px] font-bold tracking-widest uppercase transition-colors duration-200"
                  style={{ color: "rgba(148,163,184,0.4)" }}
                  onMouseEnter={e => e.currentTarget.style.color = "#e8175d"}
                  onMouseLeave={e => e.currentTarget.style.color = "rgba(148,163,184,0.4)"}
                >
                  {item}
                </a>
              ))}
            </div>

            {/* Right — copyright */}
            <p className="text-[11px] text-slate-500 tracking-widest uppercase whitespace-nowrap">
              © {new Date().getFullYear()} Amana Akter &nbsp;·&nbsp; Built with{" "}
              <span style={{ color: "rgba(232,23,93,0.8)" }}>React</span>
              {" "}&{" "}
              <span style={{ color: "rgba(56,189,248,0.8)" }}>Framer Motion</span>
            </p>

          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;