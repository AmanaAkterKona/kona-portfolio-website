import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaCode, FaReact, FaJs, FaHtml5, FaCss3Alt,
  FaNodeJs, FaGithub, FaFigma, FaPaperPlane, FaTools
} from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiTypescript, SiNextdotjs, SiExpress } from "react-icons/si";

const skillsData = [
  { name: 'React',       level: 92, desc: 'Hooks, Context, Redux',      icon: <FaReact />,       category: 'Frontend', color: '#61dafb' },
  { name: 'Tailwind',    level: 90, desc: 'Config, Plugins, DaisyUI',   icon: <SiTailwindcss />, category: 'Frontend', color: '#38bdf8' },
  { name: 'JavaScript',  level: 85, desc: 'ES6+, Async/Await, DOM',     icon: <FaJs />,          category: 'Frontend', color: '#f7df1e' },
  { name: 'TypeScript',  level: 75, desc: 'Types, Interfaces, Generics',icon: <SiTypescript />,  category: 'Frontend', color: '#3178c6' },
  { name: 'HTML / CSS',  level: 98, desc: 'Semantic, Responsive, Grid', icon: <FaHtml5 />,       category: 'Frontend', color: '#f97316' },
  { name: 'Next.js',     level: 70, desc: 'SSR, SSG, App Router',       icon: <SiNextdotjs />,   category: 'Frontend', color: '#fff' },
  { name: 'Node.js',     level: 72, desc: 'Express, REST API',          icon: <FaNodeJs />,      category: 'Backend',  color: '#6cc24a' },
  { name: 'MongoDB',     level: 68, desc: 'Mongoose, CRUD, Aggregation',icon: <SiMongodb />,     category: 'Backend',  color: '#47a248' },
  { name: 'Express.js',  level: 70, desc: 'Middleware, Auth, Routing',  icon: <SiExpress />,     category: 'Backend',  color: '#ccc' },
];

const tools = [
  { name: 'Git & GitHub', icon: <FaGithub />,     color: '#fff' },
  { name: 'Figma',        icon: <FaFigma />,       color: '#e85c5c' },
  { name: 'VS Code',      icon: <FaCode />,        color: '#38bdf8' },
  { name: 'Postman',      icon: <FaPaperPlane />,  color: '#f97316' },
  { name: 'Workflow',     icon: <FaTools />,       color: '#e8175d' },
];

const CATS = ['All', 'Frontend', 'Backend', 'Tools'];

const Skills = () => {
  const [active, setActive] = useState('All');

  const filtered = active === 'All' || active === 'Tools'
    ? skillsData
    : skillsData.filter(s => s.category === active);

  return (
    <section
      className="relative min-h-screen w-full py-24 px-6 md:px-16 lg:px-24 overflow-hidden"
      style={{ background: "linear-gradient(135deg, #060e22 0%, #0a1628 50%, #0d1b38 100%)" }}
    >
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full pointer-events-none opacity-10"
        style={{ background: "radial-gradient(ellipse, rgba(232,23,93,0.5) 0%, transparent 70%)" }} />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="font-bold tracking-[0.4em] uppercase text-xs mb-3">
            <span style={{ color: "#6ec6f5" }}>WHAT I </span>
            <span style={{ color: "#e8175d" }}>WORK WITH</span>
          </p>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4"
            style={{ fontFamily: "'Syne', sans-serif" }}>
            My Arsenal
          </h1>
          <div className="mx-auto mb-5" style={{ width: "44px", height: "3px", background: "#e8175d", borderRadius: "2px" }} />
          <p style={{ color: "rgba(148,163,184,0.7)", fontSize: "15px" }}>
            Technologies I use to bring modern products to life.
          </p>
        </motion.div>

        {/* ── Filter Tabs ── */}
        <div className="flex justify-center mb-12">
          <div
            className="flex rounded-2xl overflow-hidden"
            style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}
          >
            {CATS.map((cat) => (
              <button key={cat} onClick={() => setActive(cat)}
                className="px-7 py-3 text-sm font-black tracking-widest transition-all duration-300"
                style={{
                  color: active === cat ? "#fff" : "rgba(148,163,184,0.6)",
                  background: active === cat ? "linear-gradient(90deg, #e8175d, #c0143c)" : "transparent",
                }}>
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* ── Skills Grid ── */}
        <AnimatePresence mode="wait">
          {active !== 'Tools' && (
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12"
            >
              {filtered.map((skill, i) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.06 }}
                  whileHover={{ y: -5 }}
                  className="group p-6 rounded-2xl transition-all duration-300 cursor-default"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.07)",
                  }}
                  onMouseEnter={e => e.currentTarget.style.borderColor = "rgba(232,23,93,0.3)"}
                  onMouseLeave={e => e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)"}
                >
                  {/* Icon + level */}
                  <div className="flex justify-between items-start mb-5">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl transition-all duration-300"
                      style={{ background: `${skill.color}18`, color: skill.color, border: `1px solid ${skill.color}33` }}
                    >
                      {skill.icon}
                    </div>
                    <span style={{ color: "rgba(148,163,184,0.5)", fontFamily: "monospace", fontSize: "13px" }}>
                      {skill.level}%
                    </span>
                  </div>

                  <h3 className="text-white font-black mb-1 tracking-tight">{skill.name}</h3>
                  <p style={{ color: "rgba(148,163,184,0.55)", fontSize: "13px", marginBottom: "16px" }}>{skill.desc}</p>

                  {/* Progress bar */}
                  <div className="h-[4px] w-full rounded-full overflow-hidden"
                    style={{ background: "rgba(255,255,255,0.07)" }}>
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
                      viewport={{ once: true }}
                      className="h-full rounded-full"
                      style={{ background: `linear-gradient(90deg, ${skill.color}, #e8175d)` }}
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── Tools ── */}
        {(active === 'All' || active === 'Tools') && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {active === 'All' && (
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px flex-1" style={{ background: "rgba(255,255,255,0.06)" }} />
                <h3 className="text-white font-black text-lg flex items-center gap-2">
                  <span>🛠</span> Tools & Workflow
                </h3>
                <div className="h-px flex-1" style={{ background: "rgba(255,255,255,0.06)" }} />
              </div>
            )}

            <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
              {tools.map((tool, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.06, y: -6 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex flex-col items-center justify-center gap-3 p-6 rounded-2xl cursor-default transition-all duration-300"
                  style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}
                  onMouseEnter={e => e.currentTarget.style.borderColor = "rgba(232,23,93,0.3)"}
                  onMouseLeave={e => e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)"}
                >
                  <div className="text-3xl" style={{ color: tool.color }}>{tool.icon}</div>
                  <span style={{ color: "rgba(148,163,184,0.6)", fontSize: "12px", fontWeight: 600 }}>{tool.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* ── Footer CTA ── */}
        <div className="mt-16 text-center">
          <p style={{ color: "rgba(148,163,184,0.35)", fontSize: "11px", letterSpacing: "0.25em", textTransform: "uppercase" }}>
            Always learning · Always building
          </p>
        </div>

      </div>
    </section>
  );
};

export default Skills;