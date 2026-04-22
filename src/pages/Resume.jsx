// src/pages/Resume.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaDownload, FaGithub } from "react-icons/fa";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.45, delay },
});

// Section heading with left red bar
const SectionTitle = ({ children }) => (
  <div className="flex items-center gap-3 mb-6">
    <div className="w-1 h-6 rounded-full flex-shrink-0" style={{ background: "#e8175d" }} />
    <h2 className="text-xl font-black text-white tracking-tight">{children}</h2>
  </div>
);

const Divider = () => (
  <div className="my-10" style={{ height: "1px", background: "rgba(255,255,255,0.06)" }} />
);

const Resume = () => {
  const projects = [
    {
      title: "Portfolio Website",
      stack: "React · TailwindCSS · Framer Motion",
      desc: "A modern, responsive portfolio website showcasing skills and projects.",
      live: null,
      repo: "https://github.com/AmanaAkterKona/kona-portfolio-website.git",
      challenges: "Learning Framer Motion animations and managing complex state.",
      improvements: "Plan to integrate a Headless CMS.",
    },
    {
      title: "E-commerce Website",
      stack: "React.js · Node.js · Express.js · MongoDB",
      desc: "Online store with product listing, cart, and checkout functionality.",
      live: "https://kids-toys-cute-projects.web.app",
      repo: "https://github.com/AmanaAkterKona/kids-toys-cute-my-projects.git",
      challenges: "Payment integration and state management.",
      improvements: "Add admin dashboard and order tracking.",
    },
    {
      title: "Task Management App",
      stack: "React.js · Node.js · Express.js · MongoDB",
      desc: "CRUD application for tasks with user authentication.",
      live: "https://personal-finance-4dfd1.web.app/",
      repo: "https://github.com/AmanaAkterKona/personal-finance-management-client.git",
      challenges: "Authentication and data security.",
      improvements: "Mobile app version and notifications.",
    },
  ];

  return (
    <div
      className="min-h-screen py-20 px-4"
      style={{ background: "linear-gradient(135deg, #060e22 0%, #0a1628 50%, #0d1b38 100%)" }}
    >
      {/* subtle glow */}
      <div className="fixed top-0 right-1/3 w-[600px] h-[400px] pointer-events-none opacity-[0.07]"
        style={{ background: "radial-gradient(ellipse, rgba(232,23,93,0.8) 0%, transparent 70%)" }} />

      <div className="max-w-2xl mx-auto">

        {/* ── Header ── */}
        <motion.div {...fadeUp()} className="mb-12">
          <p className="text-[10px] font-black tracking-[0.5em] uppercase mb-3" style={{ color: "#e8175d" }}>
            Resume
          </p>
          <div className="flex items-end justify-between gap-4">
            <div>
              <h1 className="text-5xl font-black text-white leading-none">Amana</h1>
              <h1 className="text-5xl font-black leading-none" style={{ color: "#e8175d" }}>Akter</h1>
              <p className="mt-3 text-sm font-semibold tracking-[0.25em] uppercase"
                style={{ color: "rgba(148,163,184,0.45)" }}>
                MERN Stack Developer
              </p>
            </div>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-3 rounded-xl font-black text-xs tracking-widest uppercase flex-shrink-0 transition-all duration-300"
              style={{
                background: "linear-gradient(90deg, #e8175d, #c0143c)",
                color: "#fff",
                boxShadow: "0 4px 20px rgba(232,23,93,0.3)",
              }}
            >
              <FaDownload /> Download
            </a>
          </div>
        </motion.div>

        {/* ── Contact ── */}
        <motion.div {...fadeUp(0.05)} className="flex flex-col sm:flex-row sm:justify-between gap-6 mb-10">
          <div className="flex flex-col gap-2">
            {[
              { emoji: "✉️", text: "proff.kona@gmail.com", href: "mailto:proff.kona@gmail.com" },
              { emoji: "📞", text: "+8801796575129", href: "tel:+8801796575129" },
              { emoji: "💬", text: "+8801796575129 (WhatsApp)", href: "#" },
            ].map((item, i) => (
              <a key={i} href={item.href}
                className="text-sm flex items-center gap-2 transition-colors duration-200"
                style={{ color: "rgba(148,163,184,0.6)" }}
                onMouseEnter={e => e.currentTarget.style.color = "#fff"}
                onMouseLeave={e => e.currentTarget.style.color = "rgba(148,163,184,0.6)"}
              >
                <span>{item.emoji}</span> {item.text}
              </a>
            ))}
          </div>
          <div className="flex flex-col gap-2 sm:text-right">
            {[
              { label: "GitHub",   href: "https://github.com/AmanaAkterKona",            color: "#fff"    },
              { label: "LinkedIn", href: "https://www.linkedin.com/in/amena-akter-kona/", color: "#38bdf8" },
            ].map((item, i) => (
              <a key={i} href={item.href} target="_blank" rel="noopener noreferrer"
                className="text-sm font-bold transition-colors duration-200"
                style={{ color: "rgba(148,163,184,0.4)" }}
                onMouseEnter={e => e.currentTarget.style.color = item.color}
                onMouseLeave={e => e.currentTarget.style.color = "rgba(148,163,184,0.4)"}
              >
                {item.label} ↗
              </a>
            ))}
          </div>
        </motion.div>

        <Divider />

        {/* ── About Me ── */}
        <motion.div {...fadeUp(0.05)}>
          <SectionTitle>About Me</SectionTitle>
          <p className="text-[15px] leading-[1.9]" style={{ color: "rgba(148,163,184,0.7)" }}>
            Hi! I am <span className="text-white font-bold">Amana Akter</span>, a passionate MERN Stack Developer.
            I enjoy building scalable web applications and exploring modern web technologies.
          </p>
          <div className="mt-5 flex flex-col gap-3">
            {[
              { label: "Programming Journey", value: "Started with HTML, CSS, JavaScript, then moved to React, Node.js, Express, MongoDB." },
              { label: "Work I Enjoy",        value: "Responsive websites, interactive UI components, full-stack apps." },
              { label: "Hobbies",             value: "Reading tech blogs, painting, solving coding challenges." },
              { label: "Personality",         value: "Creative, detail-oriented, eager to learn." },
            ].map((item, i) => (
              <div key={i} className="flex gap-2 text-[14px] leading-relaxed">
                <span className="font-black text-white flex-shrink-0">{item.label}</span>
                <span style={{ color: "rgba(148,163,184,0.55)" }}>— {item.value}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <Divider />

        {/* ── Skills ── */}
        <motion.div {...fadeUp(0.05)}>
          <SectionTitle>Skills</SectionTitle>
          <div className="flex flex-col gap-4">
            {[
              { label: "Frontend", value: "HTML5, CSS3, JavaScript (ES6+), React.js, Tailwind CSS, Framer Motion", color: "#38bdf8" },
              { label: "Backend",  value: "Node.js, Express.js, MongoDB, REST APIs",                               color: "#6cc24a" },
              { label: "Tools",    value: "Git & GitHub, VS Code, Postman, Figma",                                 color: "#e8175d" },
            ].map((item, i) => (
              <div key={i} className="flex gap-3 text-[14px] leading-relaxed items-start">
                <span className="font-black flex-shrink-0 mt-[1px]" style={{ color: item.color }}>{item.label}</span>
                <span style={{ color: "rgba(148,163,184,0.6)" }}>— {item.value}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <Divider />

        {/* ── Education ── */}
        <motion.div {...fadeUp(0.05)}>
          <SectionTitle>Education</SectionTitle>
          <div className="flex flex-col gap-3">
            {[
              { label: "HSC", value: "Shafipur Ideal Public College" },
              { label: "SSC", value: "Mouchack Scout School and College" },
            ].map((item, i) => (
              <div key={i} className="flex gap-3 text-[14px] leading-relaxed">
                <span className="font-black text-white flex-shrink-0">{item.label}</span>
                <span style={{ color: "rgba(148,163,184,0.6)" }}>— {item.value}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <Divider />

        {/* ── Projects ── */}
        <motion.div {...fadeUp(0.05)}>
          <SectionTitle>Projects</SectionTitle>
          <div className="flex flex-col gap-10">
            {projects.map((p, i) => (
              <motion.div key={i} {...fadeUp(i * 0.07)}>
                <div className="flex items-start justify-between gap-4 mb-1">
                  <h3 className="text-white font-black text-[17px]">{p.title}</h3>
                  <div className="flex gap-4 flex-shrink-0 text-xs font-black tracking-wider uppercase mt-1">
                    {p.live && (
                      <a href={p.live} target="_blank" rel="noopener noreferrer"
                        style={{ color: "#38bdf8" }}>Live ↗</a>
                    )}
                    <a href={p.repo} target="_blank" rel="noopener noreferrer"
                      style={{ color: "#e8175d" }}>GitHub ↗</a>
                  </div>
                </div>
                <p className="text-[11px] tracking-[0.2em] uppercase mb-3" style={{ color: "rgba(148,163,184,0.3)" }}>
                  {p.stack}
                </p>
                <p className="text-[14px] leading-[1.8] mb-3" style={{ color: "rgba(148,163,184,0.65)" }}>
                  {p.desc}
                </p>
                <p className="text-[13px] leading-relaxed" style={{ color: "rgba(148,163,184,0.45)" }}>
                  <span className="text-white font-semibold">Challenges — </span>{p.challenges}
                </p>
                <p className="text-[13px] leading-relaxed mt-1" style={{ color: "rgba(148,163,184,0.45)" }}>
                  <span className="text-white font-semibold">Next — </span>{p.improvements}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <Divider />

        {/* Footer */}
        <p className="text-center text-[11px] tracking-[0.3em] uppercase pb-4"
          style={{ color: "rgba(148,163,184,0.2)" }}>
          © {new Date().getFullYear()} Amana Akter · MERN Stack Developer
        </p>

      </div>
    </div>
  );
};

export default Resume;