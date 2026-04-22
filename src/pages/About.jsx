import React from "react";
import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiTypescript,
  SiNextdotjs,
  SiFramer,
} from "react-icons/si";
import { BiCodeAlt } from "react-icons/bi";
import { MdEmail, MdPhone } from "react-icons/md";
import profileo from "../assets/image_transparent_bg.png";

const About = () => {
  const skills = [
    { name: "React", icon: <FaReact className="text-2xl" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-2xl" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-2xl" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-2xl" /> },
    { name: "Express", icon: <SiExpress className="text-2xl" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-2xl" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-2xl" /> },
    { name: "Framer Motion", icon: <SiFramer className="text-2xl" /> },
  ];

  return (
    <div className="bg-[#05070a] min-h-screen text-slate-300 py-24 px-6 md:px-16 lg:px-32 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #060e22 0%, #0a1628 50%, #0d1b38 100%)" }}>
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-fuchsia-600/10 blur-[120px] rounded-full z-0" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-cyan-600/10 blur-[120px] rounded-full z-0" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-24"
        >
          <p className="text-[#e8175d] font-bold tracking-[0.5em] uppercase text-xs mb-4">Discovery</p>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter">
            About <span className="text-[#e8175d]">Me</span>
          </h1>
          <div className="w-20 h-1.5 bg-[#e8175d] mx-auto rounded-full" />
        </motion.div>

        {/* ── Main Profile Section ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-32">

          {/* Image Part */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-5 relative flex justify-center items-center"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-fuchsia-500/20 to-transparent blur-3xl rounded-full scale-110" />

            {/* Outer wrapper — aspect-square so it's a true circle container */}
            <div className="relative w-full max-w-[400px]">

              {/* Circle image */}
              <div className="aspect-square rounded-full overflow-hidden border border-white/10 shadow-2xl">
                <img
                  src={profileo}
                  alt="Kona"
                  className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
                />
              </div>

              {/* Badge — bottom-left, outside overflow-hidden */}
              <div className="absolute bottom-6 left-4 z-10">
                <span className="bg-[#e8175d] text-white text-xs font-bold px-4 py-2 rounded-lg uppercase tracking-wider shadow-lg whitespace-nowrap">
                  MERN Stack Developer
                </span>
              </div>

            </div>
          </motion.div>

          {/* Info Part */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-7 space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-black text-white leading-tight">
              I build modern, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-cyan-400">
                Scalable Applications
              </span>
            </h2>
            <p className="text-lg text-slate-400 leading-relaxed max-w-2xl">
              I'm <span className="text-white font-bold">Amana Akter Kona</span>, a passionate Frontend and MERN Stack Developer based in Dhaka.
              My expertise lies in crafting premium user interfaces with clean code and smooth user experiences.
              Always pushing boundaries with React and Next.js.
            </p>

            <div className="flex flex-wrap gap-6 pt-4">
              <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-6 py-4 rounded-2xl hover:bg-white/10 transition-all">
                <FaMapMarkerAlt className="text-[#e8175d] text-xl" />
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-slate-300">Location</p>
                  <p className="text-white font-bold">Dhaka, Bangladesh</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-6 py-4 rounded-2xl hover:bg-white/10 transition-all">
                <MdEmail className="text-cyan-400 text-xl" />
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-slate-300">Email</p>
                  <p className="text-white font-bold">proff.kona@gmail.com</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ── Skills Grid ── */}
        <div className="bg-[#081229] border border-white/5 rounded-[50px] p-12 md:p-20 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
          <div className="text-center mb-16">
            <p className="text-[#e8175d] font-bold tracking-[0.4em] uppercase text-xs mb-3">Expertise</p>
            <h3 className="text-4xl font-black text-white">Technical Proficiency</h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                whileHover={{ y: -10, backgroundColor: "rgba(255,255,255,0.05)" }}
                className="flex flex-col items-center p-8 rounded-[30px] border border-white/5 bg-white/[0.02] transition-all"
              >
                <div className="p-4 bg-[#05070a] rounded-2xl text-[#e8175d] mb-4 shadow-xl border border-white/5">
                  {skill.icon}
                </div>
                <span className="text-white font-bold tracking-wide">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── Connect CTA ── */}
        <motion.div
          whileHover={{ scale: 1.01 }}
          className="mt-32 p-1 bg-gradient-to-r from-fuchsia-600 via-purple-600 to-cyan-600 rounded-[40px]"
        >
          <div className="bg-[#05070a] rounded-[38px] p-12 text-center">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6">Let's Create Something Great</h2>
            <div className="flex justify-center gap-6">
              <a href="https://github.com/AmanaAkterKona" target="_blank" className="text-2xl hover:text-[#e8175d] transition-colors"><FaGithub /></a>
              <a href="https://linkedin.com" target="_blank" className="text-2xl hover:text-cyan-400 transition-colors"><FaLinkedin /></a>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default About;