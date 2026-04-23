import React from "react";
import { motion } from "framer-motion";
import {
  FaMapMarkerAlt, FaReact, FaNodeJs, FaGithub, FaLinkedin,
} from "react-icons/fa";
import {
  SiMongodb, SiExpress, SiTailwindcss, SiTypescript, SiNextdotjs, SiFramer,
} from "react-icons/si";
import { MdEmail } from "react-icons/md";
import profileo from "../assets/image_transparent_bg.png";

const About = () => {
  const skills = [
    { name: "React",        icon: <FaReact className="text-2xl" /> },
    { name: "TypeScript",   icon: <SiTypescript className="text-2xl" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-2xl" /> },
    { name: "Node.js",      icon: <FaNodeJs className="text-2xl" /> },
    { name: "Express",      icon: <SiExpress className="text-2xl" /> },
    { name: "MongoDB",      icon: <SiMongodb className="text-2xl" /> },
    { name: "Next.js",      icon: <SiNextdotjs className="text-2xl" /> },
    { name: "Framer Motion",icon: <SiFramer className="text-2xl" /> },
  ];

  return (
    <div
      className="min-h-screen text-slate-300 relative overflow-hidden
        py-16 sm:py-20 md:py-24
        px-4 sm:px-8 md:pl-[98px] md:pr-8 lg:pl-16 lg:pr-16"
      style={{ background: "linear-gradient(135deg, #060e22 0%, #0a1628 50%, #0d1b38 100%)" }}
    >
      {/* bg glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-fuchsia-600/10 blur-[120px] rounded-full z-0" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-cyan-600/10 blur-[120px] rounded-full z-0" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12 sm:mb-16 md:mb-24"
        >
          <p className="text-[#e8175d] font-bold tracking-[0.5em] uppercase text-xs mb-4">Discovery</p>
          <h1 className="font-black  text-white mb-6 tracking-tighter"
            style={{ fontSize: "clamp(30px, 5vw, 70px)" }}>
            About <span className="text-[#e8175d]">Me</span>
          </h1>
          <div className="w-16 sm:w-20 h-1.5 bg-[#e8175d] mx-auto rounded-full" />
        </motion.div>

        {/* ── Main Profile Section ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16 sm:mb-24 md:mb-32">

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-5 relative flex justify-center items-center"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-fuchsia-500/20 to-transparent blur-3xl rounded-full scale-110" />

            <div className="relative w-full max-w-[260px] sm:max-w-[320px] md:max-w-[380px] lg:max-w-[400px] mx-auto">
              <div className="aspect-square rounded-full overflow-hidden border border-white/10 shadow-2xl">
                <img
                  src={profileo}
                  alt="Kona"
                  className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
                />
              </div>
              {/* Badge */}
              <div className="absolute bottom-4 sm:bottom-6 left-2 sm:left-4 z-10">
                <span className="bg-[#e8175d] text-white font-bold px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg uppercase tracking-wider shadow-lg whitespace-nowrap"
                  style={{ fontSize: "clamp(9px, 1.5vw, 12px)" }}>
                  MERN Stack Developer
                </span>
              </div>
            </div>
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-7 space-y-5 sm:space-y-8"
          >
            <h2 className="font-black text-white leading-tight"
              style={{ fontSize: "clamp(26px, 4vw, 48px)" }}>
              I build modern, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-cyan-400">
                Scalable Applications
              </span>
            </h2>
            <p className="text-slate-400 leading-relaxed max-w-2xl"
              style={{ fontSize: "clamp(13px, 1.8vw, 17px)" }}>
              I'm <span className="text-white font-bold">Amana Akter Kona</span>, a passionate Frontend and MERN Stack Developer based in Dhaka.
              My expertise lies in crafting premium user interfaces with clean code and smooth user experiences.
              Always pushing boundaries with React and Next.js.
            </p>

            <div className="flex flex-wrap gap-3 sm:gap-6 pt-2">
              <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-4 sm:px-6 py-3 sm:py-4 rounded-2xl hover:bg-white/10 transition-all">
                <FaMapMarkerAlt className="text-[#e8175d] text-lg sm:text-xl flex-shrink-0" />
                <div>
                  <p className="text-[9px] sm:text-[10px] uppercase tracking-widest text-slate-300">Location</p>
                  <p className="text-white font-bold text-sm sm:text-base">Dhaka, Bangladesh</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-4 sm:px-6 py-3 sm:py-4 rounded-2xl hover:bg-white/10 transition-all">
                <MdEmail className="text-cyan-400 text-lg sm:text-xl flex-shrink-0" />
                <div>
                  <p className="text-[9px] sm:text-[10px] uppercase tracking-widest text-slate-300">Email</p>
                  <p className="text-white font-bold text-sm sm:text-base">proff.kona@gmail.com</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ── Skills Grid ── */}
        <div className="bg-[#081229] border border-white/5 rounded-[30px] sm:rounded-[50px] p-8 sm:p-12 md:p-20 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
          <div className="text-center mb-10 sm:mb-16">
            <p className="text-[#e8175d] font-bold tracking-[0.4em] uppercase text-xs mb-3">Expertise</p>
            <h3 className="font-black text-white"
              style={{ fontSize: "clamp(24px, 4vw, 36px)" }}>
              Technical Proficiency
            </h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {skills.map((skill) => (
              <motion.div
                key={skill.name}
                whileHover={{ y: -8, backgroundColor: "rgba(255,255,255,0.05)" }}
                className="flex flex-col items-center p-5 sm:p-8 rounded-[20px] sm:rounded-[30px] border border-white/5 bg-white/[0.02] transition-all"
              >
                <div className="p-3 sm:p-4 bg-[#05070a] rounded-xl sm:rounded-2xl text-[#e8175d] mb-3 sm:mb-4 shadow-xl border border-white/5">
                  {skill.icon}
                </div>
                <span className="text-white font-bold tracking-wide text-xs sm:text-sm text-center">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── Connect CTA ── */}
        <motion.div
          whileHover={{ scale: 1.01 }}
          className="mt-16 sm:mt-24 md:mt-32 p-[3px] bg-gradient-to-r from-fuchsia-600 via-purple-600 to-cyan-600 rounded-[30px] sm:rounded-[40px]"
        >
          <div className="bg-[#05070a] rounded-[28px] sm:rounded-[38px] p-8 sm:p-12 text-center">
            <h2 className="font-black text-white mb-6"
              style={{ fontSize: "clamp(22px, 4vw, 48px)" }}>
              Let's Create Something Great
            </h2>
            <div className="flex justify-center gap-6">
              <a href="https://github.com/AmanaAkterKona" target="_blank" rel="noreferrer"
                className="text-xl sm:text-2xl hover:text-[#e8175d] transition-colors">
                <FaGithub />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer"
                className="text-xl sm:text-2xl hover:text-cyan-400 transition-colors">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default About;