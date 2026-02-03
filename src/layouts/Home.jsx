import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  HiOutlineArrowNarrowRight,
  HiChevronRight,
  HiSparkles,
} from "react-icons/hi";
import {
  FaReact,
  FaNodeJs,
  FaCode,
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import {
  SiMongodb,
  SiTailwindcss,
  SiJavascript,
  SiFramer,
} from "react-icons/si";
import { MdEmail } from "react-icons/md";

// Assets
import Hero from "../pages/Hero";
import profileo from "../assets/WhatsApp Image 2026-01-15 at 12.04.53 AM.jpeg";
import backImg from "../assets/back2.avif";

const Home = () => {
  const [hoveredIcon, setHoveredIcon] = useState(null);
  const [showSidebar, setShowSidebar] = useState(false);

  // Social Links Data
  const socialLinks = [
    {
      icon: <FaGithub />,
      label: "GitHub",
      href: "https://github.com/AmanaAkterKona",
      color: "hover:text-slate-100",
      gradient: "from-slate-600 to-slate-800",
    },
    {
      icon: <FaLinkedin />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/amena-akter-kona/",
      color: "hover:text-blue-500",
      gradient: "from-blue-600 to-blue-800",
    },
    {
      icon: <FaWhatsapp />,
      label: "WhatsApp",
      href: "https://wa.me/8801796575129",
      color: "hover:text-green-500",
      gradient: "from-green-600 to-green-800",
    },
    {
      icon: <MdEmail />,
      label: "Email",
      href: "mailto:proff.kona@gmail.com",
      color: "hover:text-red-400",
      gradient: "from-red-600 to-red-800",
    },
  ];

  // Detect scroll to show sidebar after Hero section
  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight;
      setShowSidebar(window.scrollY > heroHeight * 0.8);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Premium Motion Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const floatAnimation = {
    y: [0, -20, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  return (
    <div className="relative bg-[#020617] text-slate-300 overflow-hidden">
      {/* --- Premium 3D Fixed Sidebar (Shows after Hero) --- */}
    {/* --- Minimal Responsive Sidebar --- */}
      <AnimatePresence>
        {showSidebar && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            /* মোবাইলে নিচে সেন্টারে, ল্যাপটপে বামে সেন্টারে */
            className="fixed bottom-8 left-1/2 -translate-x-1/2 lg:left-10 lg:top-1/2 lg:-translate-y-1/2 lg:-translate-x-0 z-50"
          >
            <div className="flex lg:flex-col items-center gap-6">
              
              {/* Desktop Vertical Line (Top) */}
              <div className="w-[1px] h-12 bg-slate-700 hidden lg:block" />

              {/* Icons Group */}
              <div className="flex flex-row lg:flex-col gap-6">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -3 }}
                    className={`text-slate-400 text-2xl transition-colors duration-300 ${social.color}`}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>

              {/* Desktop Vertical Line (Bottom) */}
              <div className="w-[1px] h-12 bg-slate-700 hidden lg:block" />
              
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- Global Background Overlay --- */}
      <div className="fixed inset-0 z-0 opacity-10 pointer-events-none">
        <img src={backImg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#020617] via-transparent to-[#020617]" />
      </div>

      {/* --- Animated Ambient Orbs --- */}
      <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-[10%] right-[-5%] w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[100px]" />

      <div className="relative z-10">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Premium About Preview with Animated Background */}
        <section className="py-24 px-6 md:px-16 lg:px-32 relative overflow-hidden">
          {/* Animated Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-purple-900/5 to-pink-900/10" />
          <motion.div
            animate={{
              backgroundPosition: ["0% 0%", "100% 100%"],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(168, 85, 247, 0.1) 0%, transparent 50%)",
              backgroundSize: "200% 200%",
            }}
          />

          <div className="max-w-6xl mx-auto relative z-10">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
            >
              {/* --- 1. Text Section --- */}
              <div className="lg:col-span-7">
                {/* Status Tag */}
                <motion.div
                  className="flex items-center gap-3 mb-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    className="h-[2px] w-12 bg-gradient-to-r from-blue-500 to-purple-500"
                    animate={{ width: [48, 60, 48] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <HiSparkles className="text-blue-400 animate-pulse" />
                  <span className="text-blue-400 font-mono tracking-widest text-sm uppercase">
                    Status: Ready for Innovation
                  </span>
                </motion.div>

                <motion.h2
                  className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight leading-tight"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  Crafting{" "}
                  <span className="relative inline-block">
                    Digital
                    <motion.span
                      className="absolute -bottom-2 left-0 w-full h-1 bg-blue-500/50 rounded-full"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      transition={{ delay: 0.5, duration: 0.8 }}
                    />
                  </span>{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 animate-gradient-x bg-[length:200%_200%]">
                    Experiences.
                  </span>
                </motion.h2>

                {/* MERN Badge */}
                <motion.div
                  className="flex items-center gap-4 mb-8 bg-white/5 border border-white/10 w-fit px-4 py-2 rounded-2xl backdrop-blur-md shadow-inner"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <div className="flex -space-x-2">
                    {["M", "E", "R", "N"].map((char, i) => (
                      <div
                        key={i}
                        className="w-8 h-8 rounded-full border-2 border-[#020617] bg-blue-500 flex items-center justify-center text-[10px] text-white font-bold bg-gradient-to-br from-blue-600 to-cyan-500"
                      >
                        {char}
                      </div>
                    ))}
                  </div>
                  <p className="text-sm text-slate-300 font-medium tracking-wide">
                    Full-Stack Architecture
                  </p>
                </motion.div>

                <motion.p
                  className="text-lg text-slate-400 leading-relaxed mb-8 max-w-xl"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  I build scalable web ecosystems using the **MERN** stack. My
                  mission is to transform complex business logic into
                  high-performance, fluid user journeys.
                </motion.p>

                {/* Improved Action Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <Link
                    to="/about"
                    className="relative inline-flex items-center gap-4 px-10 py-4 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 text-white font-bold rounded-2xl hover:border-blue-400 transition-all duration-500 group overflow-hidden shadow-[0_0_20px_rgba(59,130,246,0.1)]"
                  >
                    <span className="relative z-10">Explore My Craft</span>
                    <HiChevronRight className="relative z-10 group-hover:translate-x-2 transition-transform duration-300" />
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-in-out" />
                  </Link>
                </motion.div>
              </div>

              {/* --- 2. Image Section (Badge ektu upore) --- */}
              <div className="lg:col-span-5 flex justify-center relative pt-10">
                <motion.div
                  className="relative group p-[3px] rounded-[2.6rem]"
                  whileHover={{ scale: 1.02 }}
                  animate={floatAnimation}
                >
                  {/* Rotating Border */}
                  <motion.div
                    className="absolute inset-0 z-0 rounded-[2.6rem]"
                    style={{
                      background:
                        "conic-gradient(from 0deg, transparent 20%, #3b82f6 50%, #22d3ee 60%, transparent 80%)",
                    }}
                    animate={{ rotate: [0, 360] }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />

                  {/* Main Image Container */}
                  <div className="relative z-10 w-80 h-96 md:w-96 md:h-120 rounded-[2.5rem] bg-slate-900 overflow-hidden shadow-2xl">
                    <img
                      src={profileo}
                      alt="Profile"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent z-20" />
                  </div>

                  {/* --- RE-POSITIONED JS BADGE --- */}
                  <motion.div
                    className="absolute bottom-8 -right-4 z-40" // Position ektu upore uthano hoyeche
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5, type: "spring" }}
                  >
                    <div className="relative flex items-center justify-center">
                      {/* Soft Glow */}
                      <div className="absolute inset-0 bg-yellow-500/20 blur-xl rounded-full" />

                      {/* Spinning Ring */}
                      <motion.div
                        className="absolute w-20 h-20 border border-dashed border-yellow-500/40 rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 8,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      />

                      {/* JS Logo */}
                      <div className="relative w-14 h-14 bg-[#f7df1e] rounded-2xl flex flex-col items-center justify-center shadow-[0_10px_25px_rgba(247,223,30,0.4)] transform -rotate-6 group-hover:rotate-0 transition-all duration-300">
                        <SiJavascript className="text-black text-2xl" />
                        <span className="text-[7px] text-black font-black mt-1 uppercase tracking-tighter">
                          Stack
                        </span>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 3. Unique Tech Stack Section */}
        <section className="py-24 relative overflow-hidden">
          {/* Background Decoration */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-500/5 blur-[120px] pointer-events-none" />

          <div className="max-w-6xl mx-auto px-6 relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="max-w-xl"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  The Engine Behind <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                    My Digital Solutions
                  </span>
                </h2>
                <div className="h-1 w-20 bg-blue-500 rounded-full" />
              </motion.div>

              {/* NEW: View All Skills Button */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <Link
                  to="/skills"
                  className="group flex items-center gap-3 px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all duration-300 backdrop-blur-md"
                >
                  <span className="text-sm font-bold tracking-wider uppercase">
                    View Full Arsenal
                  </span>
                  <div className="p-1 rounded-lg bg-blue-500/20 text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all">
                    <HiOutlineArrowNarrowRight />
                  </div>
                </Link>
              </motion.div>
            </div>

            {/* Tech Cards Grid */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
            >
              {[
                {
                  icon: <FaReact />,
                  name: "React",
                  color: "#61DAFB",
                  delay: 0.1,
                },
                {
                  icon: <SiJavascript />,
                  name: "JavaScript",
                  color: "#F7DF1E",
                  delay: 0.2,
                },
                {
                  icon: <FaNodeJs />,
                  name: "Node.js",
                  color: "#339933",
                  delay: 0.3,
                },
                {
                  icon: <SiMongodb />,
                  name: "MongoDB",
                  color: "#47A248",
                  delay: 0.4,
                },
                {
                  icon: <SiTailwindcss />,
                  name: "Tailwind",
                  color: "#06B6D4",
                  delay: 0.5,
                },
                {
                  icon: <SiFramer />,
                  name: "Framer",
                  color: "#0055FF",
                  delay: 0.6,
                },
              ].map((skill, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  whileHover={{
                    y: -12,
                    transition: { duration: 0.3 },
                  }}
                  className="group relative p-8 rounded-3xl bg-white/[0.03] border border-white/5 hover:border-blue-500/20 flex flex-col items-center justify-center gap-4 overflow-hidden transition-all"
                >
                  {/* Subtle Inner Glow on Hover */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none"
                    style={{ backgroundColor: skill.color }}
                  />

                  {/* Floating Icon with Dynamic Shadow */}
                  <motion.div
                    className="text-5xl transition-all duration-300 grayscale group-hover:grayscale-0"
                    style={{ color: skill.color }}
                    animate={{ y: [0, -5, 0] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: skill.delay,
                    }}
                  >
                    {skill.icon}
                  </motion.div>

                  <span className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-500 group-hover:text-white transition-colors">
                    {skill.name}
                  </span>

                  {/* Bottom Active Indicator */}
                  <div
                    className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-500"
                    style={{ backgroundColor: skill.color }}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        

        {/* 4. Vibrant Gradient Featured Projects - Darker Version */}
        <section className="py-32 px-6 relative overflow-hidden bg-[#020617]">
          {/* Sophisticated Ambient Lighting - Reduced Opacity for Darker Feel */}
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-indigo-600/5 rounded-full blur-[140px] pointer-events-none" />

          <div className="max-w-7xl mx-auto relative z-10">
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12"
            >
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/[0.02] border border-white/5 backdrop-blur-md mb-8">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-600 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-700"></span>
                  </span>
                  <span className="text-[10px] font-bold tracking-[0.4em] text-blue-500 uppercase">
                    Featured Portfolio
                  </span>
                </div>
                <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight">
                  <span className="text-white">Future </span>
                  <span className="relative inline-block bg-gradient-to-r from-[#4facfe] via-[#7178ee] to-[#c471ed] bg-clip-text text-transparent pb-1">
                    Interfaces.
                    <div className="absolute bottom-0 right-0 w-[60%] h-[3px] bg-blue-600 rounded-full" />
                  </span>
                </h2>
              </div>
              <div className="max-w-xs pb-4 border-l border-white/5 pl-6">
                <p className="text-slate-500 text-lg leading-relaxed font-medium">
                  A curated selection of digital products, focusing on{" "}
                  <span className="text-white font-semibold">performance</span>{" "}
                  and user-centric design.
                </p>
              </div>
            </motion.div>

            {/* Project Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {[
                {
                  title: "Scholar Stream",
                  category: "LMS PLATFORM",
                  desc: "An enterprise-grade e-learning ecosystem featuring real-time analytics and seamless UX architecture.",
                  tags: ["React", "Node.js", "MongoDB"],
                  gradient: "from-blue-900 via-blue-700 to-indigo-900", // Darker Gradient
                },
                {
                  title: "Gadget Tech",
                  category: "E-COMMERCE",
                  desc: "A high-conversion gadget store built with atomic design principles and high-speed route handling.",
                  tags: ["Next.js 14", "Stripe", "PostgreSQL"],
                  gradient: "from-purple-900 via-fuchsia-800 to-pink-900", // Darker Gradient
                },
              ].map((project, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: i * 0.1 }}
                  className="group relative"
                >
                  {/* Card Container - Darker Overlay for better contrast */}
                  <div
                    className={`relative rounded-[3rem] bg-gradient-to-br ${project.gradient} p-[1px] overflow-hidden transition-transform duration-500 hover:scale-[1.01] shadow-2xl`}
                  >
                    <div className="relative rounded-[2.9rem] bg-[#000308]/90 backdrop-blur-3xl overflow-hidden p-8 md:p-12">
                      {/* Project Preview Area */}
                      <div
                        className={`h-[300px] rounded-[2rem] bg-gradient-to-br ${project.gradient} relative overflow-hidden border border-white/10 mb-8`}
                      >
                        <div className="absolute inset-0 opacity-40 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] mix-blend-multiply" />

                        {/* Floating Mockup */}
                        <div className="absolute inset-x-10 top-16 bottom-[-40px] bg-black/60 border border-white/5 rounded-t-2xl backdrop-blur-2xl transform group-hover:-translate-y-4 transition-transform duration-700">
                          <div className="flex gap-1.5 p-4 border-b border-white/5">
                            <div className="w-1.5 h-1.5 rounded-full bg-white/10" />
                            <div className="w-1.5 h-1.5 rounded-full bg-white/10" />
                          </div>
                          <div className="flex items-center justify-center h-full -mt-10 opacity-20">
                            <span className="text-white font-black text-8xl italic select-none">
                              {project.title[0]}
                            </span>
                          </div>
                        </div>

                        {/* Action Arrow */}
                        <Link
                          to="/projects"
                          className="absolute top-6 right-6 z-30"
                        >
                          <motion.div
                            whileHover={{ scale: 1.1, rotate: -45 }}
                            className="w-14 h-14 bg-white/90 text-black rounded-full flex items-center justify-center shadow-xl"
                          >
                            <HiOutlineArrowNarrowRight size={24} />
                          </motion.div>
                        </Link>
                      </div>

                      {/* Project Details */}
                      <div className="space-y-4">
                        <div className="flex items-center gap-3">
                          <span className="text-slate-500 font-black text-[10px] tracking-[0.4em] uppercase">
                            {project.category}
                          </span>
                        </div>
                        <h3 className="text-3xl md:text-4xl font-bold text-white/90 tracking-tight">
                          {project.title}
                        </h3>
                        <p className="text-slate-500 text-lg leading-relaxed line-clamp-2 font-medium">
                          {project.desc}
                        </p>

                        <div className="flex items-center justify-between pt-8 border-t border-white/5">
                          <div className="flex gap-4">
                            {project.tags.map((tag, idx) => (
                              <span
                                key={idx}
                                className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-[10px] text-slate-400 font-bold uppercase tracking-widest"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>

                          <Link
                            to="/projects"
                            className="group/btn relative inline-flex items-center px-6 py-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-full text-[11px] font-black uppercase tracking-widest transition-all"
                          >
                            <span className="relative z-10">Case Study</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Modern Floating CTA - Darker Indigo */}
            <div className="mt-32 flex flex-col items-center">
              <Link
                to="/projects"
                className="group/btn relative inline-flex items-center px-12 py-5 overflow-hidden rounded-full transition-all duration-300 shadow-[0_0_25px_rgba(79,172,254,0.3)] hover:shadow-[0_0_40px_rgba(79,172,254,0.5)] scale-110"
              >
                {/* Button Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#4facfe] via-[#7178ee] to-[#c471ed] transition-transform duration-500 group-hover/btn:scale-110" />

                {/* Dark Overlay - keeping it for that premium look */}
                <div className="absolute inset-[2px] bg-[#000308] rounded-full transition-opacity duration-300 group-hover/btn:opacity-60" />

                {/* Button Text - Enlarged */}
                <span className="relative z-10 text-[14px] font-black uppercase tracking-[0.3em] text-white whitespace-nowrap">
                  Explore Case Study
                </span>
              </Link>
            </div>
          </div>
        </section>

        {/* 5. Contact CTA */}
        <section className="py-28 relative overflow-hidden">
          <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              className="relative p-12 rounded-[3rem] overflow-hidden bg-white/5 border border-white/10 backdrop-blur-sm"
            >
              <div className="relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Want to collaborate?
                </h2>
                <p className="text-slate-400 text-lg mb-10 max-w-lg mx-auto">
                  I'm currently available for freelance projects and full-time
                  roles. Let's build your next big idea.
                </p>
                <Link to="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-12 py-5 bg-white text-black font-black rounded-full shadow-[0_0_50px_rgba(255,255,255,0.3)]"
                  >
                    SAY HELLO
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
