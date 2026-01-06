import React from "react";
import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaLinkedin,
  FaTwitter,
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
import profileo from "../assets/WhatsApp_Image_2025-12-31_at_1.50.56_PM-removebg-preview (2).png"
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

  const journey = [
    {
      year: "2021",
      title: "Hello World",
      icon: <BiCodeAlt />,
      description:
        "Wrote my first line of HTML. It was ugly, but it worked. I was hooked instantly.",
    },
    {
      year: "2022",
      title: "Discovered React",
      icon: <FaReact />,
      description:
        "Moved from jQuery spaghetti to component-based architecture. The ecosystem blew my mind.",
    },
    {
      year: "2023",
      title: "Full Stack Developer",
      icon: <FaNodeJs />,
      description:
        "Started building complete applications with MERN stack. Learning backend was challenging but rewarding.",
    },
    {
      year: "PRESENT",
      title: "Senior MERN Engineer",
      icon: <SiMongodb />,
      description:
        "Leading frontend initiatives and building design systems for scalable web applications.",
    },
  ];

  const hobbies = [
    {
      name: "Drawing",
      emoji: "🎨",
      description: "Creative expression",
      image:
        "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&h=300&fit=crop",
    },
    {
      name: "Gardening",
      emoji: "🌱",
      description: "Growing green",
      image:
        "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop",
    },
    {
      name: "Coffee",
      emoji: "☕",
      description: "Fuel for coding",
      image:
        "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=300&fit=crop",
    },
    {
      name: "Traveling",
      emoji: "✈️",
      description: "Exploring the world",
      image:
        "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&h=300&fit=crop",
    },
  ];

  return (
    <div className="bg-[#0a192f] min-h-screen text-slate-300 py-20 px-6 md:px-16 lg:px-32">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-slate-100 mb-4">
            About Me
          </h1>
          <div className="w-24 h-1 bg-blue-400 mx-auto"></div>
        </motion.div>

        {/* Profile Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="bg-[#112240] rounded-2xl p-8 md:p-12 mb-16 border border-blue-500/20 shadow-2xl"
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Profile Image */}
            <div className="relative">
              <div className="w-40 h-40 md:w-48 md:h-48 rounded-2xl overflow-hidden border-4 border-blue-400 shadow-lg shadow-blue-500/50">
                <img
                  src={profileo}
                  alt="AA Kona"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-3 -right-3 bg-blue-500 rounded-full p-3 shadow-lg">
                <BiCodeAlt className="text-2xl text-white" />
              </div>
            </div>

            {/* Profile Info */}
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-2">
                Hi, I'm Kona
              </h2>
              <p className="text-xl text-blue-400 mb-4 font-semibold">
                MERN Stack Web Developer
              </p>
              <div className="flex items-center justify-center md:justify-start gap-2 text-slate-400 mb-6">
                <FaMapMarkerAlt className="text-blue-400" />
                <span>Dhaka, Bangladesh</span>
              </div>
              <p className="text-slate-300 leading-relaxed">
                I build web applications with MERN stack that are not just
                functional, but intuitive and visually engaging. Every feature I
                create is designed with precision, scalability, and a smooth
                user experience in mind.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Core Stack */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-slate-100 mb-6 flex items-center gap-3">
            <span className="text-blue-400">⚡</span> Core Stack
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-[#112240] border border-slate-700/50 rounded-xl p-4 flex flex-col items-center gap-3 hover:border-blue-500/50 transition-all cursor-pointer"
              >
                <div className="text-blue-400">{skill.icon}</div>
                <span className="text-sm font-medium text-slate-300">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Journey Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-slate-100 mb-8 flex items-center gap-3">
            <span className="text-blue-400">🚀</span> My Journey
          </h3>
          <div className="space-y-6">
            {[
              {
                year: "01/06/2025",
                title: "Hello World",
                description:
                  "Started my programming journey by writing my first code.",
                icon: "💻",
              },
              {
                year: "15/10/2025",
                title: "React",
                description:
                  "Learned React and built my first interactive web apps.",
                icon: "⚛️",
              },
              {
                year: "20/11/2025",
                title: "MongoDB, Express.js, Next.js",
                description:
                  "Expanded my skills to backend technologies and server-side rendering.",
                icon: "🗄️",
              },
              {
                year: "06/01/2026",
                title: "MERN Stack Web Developer",
                description:
                  "Became a MERN Stack Web Developer capable of building full-stack apps.",
                icon: "🚀",
              },
            ].map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="flex gap-6 group"
              >
                {/* Timeline Icon */}
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-blue-500/20 border-2 border-blue-500 flex items-center justify-center text-blue-400 text-xl group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  {index !== 3 && (
                    <div className="w-0.5 h-full bg-blue-500/30 mt-2"></div>
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 pb-8">
                  <div className="bg-[#112240] rounded-xl p-6 border border-slate-700/50 hover:border-blue-500/50 transition-all">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-bold text-blue-400 bg-blue-500/20 px-3 py-1 rounded-full">
                        {item.year}
                      </span>
                    </div>
                    <h4 className="text-xl font-bold text-slate-100 mb-2">
                      {item.title}
                    </h4>
                    <p className="text-slate-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Free Time Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-slate-100 mb-6 flex items-center gap-3">
            <span className="text-blue-400">✨</span> My Free Time
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {hobbies.map((hobby, index) => (
              <motion.div
                key={hobby.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-[#112240] rounded-xl overflow-hidden border border-slate-700/50 hover:border-blue-500/50 transition-all cursor-pointer group"
              >
                {/* Image */}
                <div className="relative h-32 overflow-hidden">
                  <img
                    src={hobby.image}
                    alt={hobby.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#112240] to-transparent"></div>
                </div>

                {/* Content */}
                <div className="p-4 text-center">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <span className="text-xl">{hobby.emoji}</span>
                    <h4 className="text-lg font-bold text-slate-100">
                      {hobby.name}
                    </h4>
                  </div>
                  <p className="text-xs text-slate-400">{hobby.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Connect Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="bg-[#112240] rounded-2xl p-8 border border-blue-500/20 text-center"
        >
          <h3 className="text-2xl font-bold text-slate-100 mb-4">
            Let's Connect
          </h3>
          <p className="text-slate-400 mb-6 max-w-2xl mx-auto">
            Always open to interesting conversations and collaboration
            opportunities. Feel free to reach out!
          </p>

          {/* Contact Info */}
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <a
              href="mailto:aakona@example.com"
              className="flex items-center gap-2 bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/30 text-blue-400 px-6 py-3 rounded-lg transition-all"
            >
              <MdEmail className="text-xl" />
              <span className="text-sm font-medium">aakona@example.com</span>
            </a>
            <a
              href="tel:+8801234567890"
              className="flex items-center gap-2 bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/30 text-blue-400 px-6 py-3 rounded-lg transition-all"
            >
              <MdPhone className="text-xl" />
              <span className="text-sm font-medium">+880 123 456 7890</span>
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4">
            <motion.a
              whileHover={{ scale: 1.1, y: -3 }}
              href="https://github.com/AmanaAkterKona"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-slate-700/50 hover:bg-blue-500 rounded-full flex items-center justify-center text-slate-300 hover:text-white transition-all"
            >
              <FaGithub className="text-xl" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1, y: -3 }}
              href="https://www.linkedin.com/in/amena-akter-kona/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-slate-700/50 hover:bg-blue-500 rounded-full flex items-center justify-center text-slate-300 hover:text-white transition-all"
            >
              <FaLinkedin className="text-xl" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1, y: -3 }}
              href="mailto:proff.kona@gmail.com"
              className="w-12 h-12 bg-slate-700/50 hover:bg-blue-500 rounded-full flex items-center justify-center text-slate-300 hover:text-white transition-all"
            >
              <MdEmail className="text-xl" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
