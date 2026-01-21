import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiDownload, HiMail } from "react-icons/hi";
import profileImg from "../assets/WhatsApp Image 2025-12-30 at 11.59.32 PM.jpeg";
import bgImg from "../assets/konaImg.jpg";

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-[#0a192f]">
      {/* Blurred Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${bgImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(15px)",
          opacity: 0.15,
        }}
      />

      {/* Glow Orbs */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-blue-500/10 blur-[160px] rounded-full" />
      <div className="absolute top-20 right-0 w-[420px] h-[420px] bg-purple-500/15 blur-[160px] rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto min-h-screen px-6 md:px-16 flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 w-full items-center">

          {/* ================= LEFT CONTENT ================= */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            {/* HELLO TAG */}
            <motion.span
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block mb-5 px-5 py-2 rounded-full 
              bg-white/5 border border-white/10 
              text-blue-400 tracking-widest text-sm font-semibold
              shadow-[0_0_30px_rgba(59,130,246,0.25)]"
            >
              HELLO, I’M
            </motion.span>

            {/* NAME */}
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="relative text-4xl md:text-6xl font-extrabold leading-tight mb-4"
            >
              <span className="relative inline-block bg-gradient-to-r from-white via-blue-300 to-purple-400 bg-clip-text text-transparent">
                Amana Akter
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shine" />
              </span>{" "}
              <span className="bg-gradient-to-r from-purple-400 via-indigo-500 to-pink-500 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(168,85,247,0.65)]">
                Kona
              </span>
            </motion.h1>

            {/* ROLE */}
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45 }}
              className="text-2xl md:text-3xl font-semibold mb-6 
              bg-gradient-to-r from-cyan-300 via-sky-400 to-purple-400 
              bg-[length:200%_200%] bg-clip-text text-transparent animate-gradientSlow"
            >
              MERN Stack Web Developer
            </motion.h2>

            {/* DESCRIPTION */}
            <motion.p
              initial={{ opacity: 0, filter: "blur(6px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              transition={{ delay: 0.55, duration: 0.8 }}
              className="max-w-xl mx-auto lg:mx-0 text-slate-300/90 mb-10 leading-relaxed"
            >
              I build modern, scalable, and human-centered web applications
              with clean design and smooth user experience.
            </motion.p>

            {/* SOCIAL ICONS */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.65 }}
              className="flex justify-center lg:justify-start gap-6 mb-10"
            >
              <SocialIcon icon={<FaGithub />} link="https://github.com/AmanaAkterKona" />
              <SocialIcon icon={<FaLinkedin />} link="https://www.linkedin.com/in/amena-akter-kona/" />
              <SocialIcon icon={<HiMail />} link="mailto:proff.kona@gmail.com" />
            </motion.div>

            {/* DOWNLOAD BUTTON */}
            <motion.a
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.95 }}
              href="/resume.pdf"
              download="Amana_Akter_Resume.pdf"
              className="
                relative inline-flex items-center gap-3 px-10 py-4
                bg-gradient-to-r from-blue-500 to-purple-500
                text-white font-semibold rounded-xl overflow-hidden
                shadow-[0_10px_40px_rgba(99,102,241,0.45)]
                hover:shadow-[0_20px_80px_rgba(168,85,247,0.7)]
                transition-all duration-300
              "
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent 
                translate-x-[-100%] hover:translate-x-[100%] transition-transform duration-700" />
              <HiDownload className="relative z-10 text-xl" />
              <span className="relative z-10">Download Resume</span>
            </motion.a>
          </motion.div>

          {/* ================= RIGHT IMAGE ================= */}
          {/* ================= RIGHT IMAGE ================= */}
<motion.div
  initial={{ opacity: 0, scale: 0.85 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 1 }}
  className="flex justify-center lg:justify-end"
>
  <div className="relative">
    {/* Rotating Outer Ring (Dashed) */}
    <div className="absolute inset-0 rounded-full border-2 border-dashed border-purple-400/40 animate-spin-slow" />
    
    {/* Core Purple Glow Effect (ইমেজের পেছনে মেইন গ্লো) */}
    <div className="absolute inset-[-10px] bg-purple-600/50 blur-[40px] rounded-full animate-pulse" />
    <div className="absolute inset-[-2px] bg-gradient-to-r from-purple-500 to-blue-500 rounded-full blur-md opacity-75" />

    {/* Profile Image Container with Floating Motion */}
    <motion.div 
      animate={{
        y: [0, -15, 0], // উপরে নিচে মুভ করবে
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="relative w-80 h-80 md:w-96 md:h-96 lg:w-[420px] lg:h-[420px]
        rounded-full overflow-hidden 
        shadow-[0_0_50px_rgba(168,85,247,0.4)] z-10"
    >
      <img 
        src={profileImg} 
        alt="Amana Akter Kona" 
        className="w-full h-full object-cover" 
      />
    </motion.div>

    {/* Floating Badge */}
    <span className="absolute bottom-4 right-0 z-20 px-4 py-2 text-sm rounded-full bg-black/70 border border-white/10 text-purple-300 backdrop-blur-md">
      MERN Stack Developer
    </span>
  </div>
</motion.div>

        </div>
      </div>
    </section>
  );
};

const SocialIcon = ({ icon, link }) => (
  <motion.a
    whileHover={{ y: -8, scale: 1.15 }}
    whileTap={{ scale: 0.95 }}
    className="
      relative w-12 h-12 flex items-center justify-center
      rounded-full border border-white/20
      bg-white/5 text-slate-300
      hover:text-blue-400 hover:border-blue-400
      transition-all duration-300
      hover:shadow-[0_0_30px_rgba(59,130,246,0.6)]
    "
    href={link}
    target="_blank"
    rel="noopener noreferrer"
  >
    {icon}
  </motion.a>
);

export default Hero;
