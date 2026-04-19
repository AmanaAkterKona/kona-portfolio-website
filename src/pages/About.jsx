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
import profileo from "../assets/ks.png";

const About = () => {
  const skills = [
    { name: "React",          icon: <FaReact className="text-2xl" /> },
    { name: "TypeScript",     icon: <SiTypescript className="text-2xl" /> },
    { name: "Tailwind CSS",   icon: <SiTailwindcss className="text-2xl" /> },
    { name: "Node.js",        icon: <FaNodeJs className="text-2xl" /> },
    { name: "Express",        icon: <SiExpress className="text-2xl" /> },
    { name: "MongoDB",        icon: <SiMongodb className="text-2xl" /> },
    { name: "Next.js",        icon: <SiNextdotjs className="text-2xl" /> },
    { name: "Framer Motion",  icon: <SiFramer className="text-2xl" /> },
  ];

  const journey = [
    {
      year: "01/06/2025",
      title: "Hello World",
      description: "Started my programming journey by writing my first code.",
      icon: "💻",
    },
    {
      year: "15/10/2025",
      title: "React",
      description: "Learned React and built my first interactive web apps.",
      icon: "⚛️",
    },
    {
      year: "20/11/2025",
      title: "MongoDB, Express.js, Next.js",
      description: "Expanded my skills to backend technologies and server-side rendering.",
      icon: "🗄️",
    },
    {
      year: "06/01/2026",
      title: "MERN Stack Web Developer",
      description: "Became a MERN Stack Web Developer capable of building full-stack apps.",
      icon: "🚀",
    },
  ];

  const hobbies = [
    {
      name: "Drawing",
      emoji: "🎨",
      description: "Creative expression",
      image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&h=300&fit=crop",
    },
    {
      name: "Gardening",
      emoji: "🌱",
      description: "Growing green",
      image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop",
    },
    {
      name: "Coffee",
      emoji: "☕",
      description: "Fuel for coding",
      image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=300&fit=crop",
    },
    {
      name: "Traveling",
      emoji: "✈️",
      description: "Exploring the world",
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&h=300&fit=crop",
    },
  ];

  return (
    <div className="bg-[#060818] min-h-screen text-slate-300 py-24 px-6 md:px-16 lg:px-32">
      <div className="max-w-6xl mx-auto">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-slate-300 mb-4 font-semibold">
            Get to know me
          </p>
          <h1 className="text-4xl md:text-5xl font-black font-semibold text-white mb-5 tracking-tight">
            About{" "}
            <span className="bg-gradient-to-r from-orange-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
              Me
            </span>
          </h1>
          <div className="w-16 h-[2px] bg-gradient-to-r from-orange-400 via-fuchsia-400 to-cyan-400 mx-auto rounded-full" />
        </motion.div>

        {/* ── Profile Card ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="bg-white/[0.03] rounded-2xl p-8 md:p-12 mb-16 border border-white/[0.07]"
        >
          <div className="flex flex-col md:flex-row items-center gap-10">
            {/* Image */}
            <div className="relative shrink-0">
              <div className="w-40 h-40 md:w-48 md:h-48 rounded-2xl overflow-hidden border border-white/10">
                <img
                  src={profileo}
                  alt="AA Kona"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-3 -right-3 bg-gradient-to-r from-orange-500 to-fuchsia-500 rounded-full p-[2px]">
                <div className="bg-[#060818] rounded-full p-2">
                  <BiCodeAlt className="text-xl text-white" />
                </div>
              </div>
            </div>

            {/* Info */}
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-black text-white mb-2 tracking-tight">
                Hi, I'm Kona
              </h2>
              <p className="text-base font-semibold mb-4 bg-gradient-to-r from-orange-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
                MERN Stack Web Developer
              </p>
              <div className="flex items-center justify-center md:justify-start gap-2 text-slate-300 text-sm mb-6">
                <FaMapMarkerAlt className="text-orange-400" />
                <span>Dhaka, Bangladesh</span>
              </div>
              <p className="text-slate-400 leading-relaxed text-[15px] ">
                I build web applications with MERN stack that are not just
                functional, but intuitive and visually engaging. Every feature I
                create is designed with precision, scalability, and a smooth
                user experience in mind.
              </p>
            </div>
          </div>
        </motion.div>

        {/* ── Core Stack ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-xl font-black text-white mb-6 tracking-tight flex items-center gap-2">
            <span className="text-orange-400">⚡</span> Core Stack
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + index * 0.07 }}
                whileHover={{ scale: 1.04, y: -4 }}
                className="bg-white/[0.03] border border-white/[0.07] rounded-xl p-4 flex flex-col items-center gap-3 hover:border-white/20 transition-all cursor-pointer"
              >
                <div className="text-fuchsia-400">{skill.icon}</div>
                <span className="text-sm font-medium text-slate-300">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ── Journey Timeline ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-xl font-black text-white mb-8 tracking-tight flex items-center gap-2">
            <span className="text-cyan-400">🚀</span> My Journey
          </h3>
          <div className="space-y-5">
            {journey.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="flex gap-6 group"
              >
                {/* Icon */}
                <div className="flex flex-col items-center">
                  <div className="w-11 h-11 rounded-full bg-white/[0.04] border border-white/[0.1] flex items-center justify-center text-lg group-hover:border-orange-400/40 transition-colors">
                    {item.icon}
                  </div>
                  {index !== journey.length - 1 && (
                    <div className="w-px flex-1 bg-white/[0.07] mt-2" />
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 pb-6">
                  <div className="bg-white/[0.03] rounded-xl p-5 border border-white/[0.07] hover:border-white/[0.12] transition-all">
                    <span className="inline-block text-[11px] font-bold text-orange-400 bg-orange-400/10 px-3 py-1 rounded-full mb-3 tracking-wide">
                      {item.year}
                    </span>
                    <h4 className="text-base font-bold text-white mb-1">
                      {item.title}
                    </h4>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ── Free Time ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-xl font-black text-white mb-6 tracking-tight flex items-center gap-2">
            <span className="text-fuchsia-400">✨</span> My Free Time
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {hobbies.map((hobby, index) => (
              <motion.div
                key={hobby.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9 + index * 0.08 }}
                whileHover={{ scale: 1.04 }}
                className="bg-white/[0.03] rounded-xl overflow-hidden border border-white/[0.07] hover:border-white/20 transition-all cursor-pointer group"
              >
                <div className="relative h-28 overflow-hidden">
                  <img
                    src={hobby.image}
                    alt={hobby.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#060818] to-transparent" />
                </div>
                <div className="p-4 text-center">
                  <div className="flex items-center justify-center gap-2 mb-1">
                    <span className="text-lg">{hobby.emoji}</span>
                    <h4 className="text-sm font-bold text-white">{hobby.name}</h4>
                  </div>
                  <p className="text-[11px] text-slate-500">{hobby.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ── Connect ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="bg-white/[0.03] rounded-2xl p-10 border border-white/[0.07] text-center"
        >
          <h3 className="text-2xl font-black text-white mb-3 tracking-tight">
            Let's{" "}
            <span className="bg-gradient-to-r from-orange-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
              Connect
            </span>
          </h3>
          <p className="text-slate-400 text-sm mb-8 max-w-xl mx-auto leading-relaxed">
            Always open to interesting conversations and collaboration
            opportunities. Feel free to reach out!
          </p>

          {/* Contact Info */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <a
              href="mailto:aakona@example.com"
              className="flex items-center gap-2 bg-white/[0.04] hover:bg-white/[0.07] border border-white/[0.08] text-slate-300 hover:text-white px-5 py-3 rounded-xl transition-all text-sm"
            >
              <MdEmail className="text-orange-400 text-lg" />
              aakona@example.com
            </a>
            <a
              href="tel:+8801234567890"
              className="flex items-center gap-2 bg-white/[0.04] hover:bg-white/[0.07] border border-white/[0.08] text-slate-300 hover:text-white px-5 py-3 rounded-xl transition-all text-sm"
            >
              <MdPhone className="text-cyan-400 text-lg" />
              +880 123 456 7890
            </a>
          </div>

          {/* Social */}
          <div className="flex justify-center gap-3">
            {[
              { href: "https://github.com/AmanaAkterKona", icon: <FaGithub className="text-xl" /> },
              { href: "https://www.linkedin.com/in/amena-akter-kona/", icon: <FaLinkedin className="text-xl" /> },
              { href: "mailto:proff.kona@gmail.com", icon: <MdEmail className="text-xl" /> },
            ].map((s, i) => (
              <motion.a
                key={i}
                whileHover={{ scale: 1.1, y: -3 }}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] hover:border-white/20 rounded-full flex items-center justify-center text-slate-400 hover:text-white transition-all"
              >
                {s.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default About;