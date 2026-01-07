import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiDownload, HiMail } from 'react-icons/hi';
import profileImg from '../assets/WhatsApp Image 2025-12-30 at 11.59.32 PM.jpeg';
import bgImg from "../assets/konaImg.jpg"

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center px-6 md:px-16 overflow-hidden bg-[#0a192f]">

      {/* Blurred Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${bgImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(30px)',
          opacity: 0.18,
        }}
      />

      {/* Glow */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-blue-500/10 blur-[140px] rounded-full" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-purple-500/10 blur-[140px] rounded-full" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center w-full">

        {/* IMAGE TOP CENTER */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="relative group">

            {/* GRADIENT OUTLINE GLOW */}
            <div
              className="
                absolute inset-0 rounded-full
                bg-gradient-to-br from-white/70 via-purple-500/70 to-blue-500/70
                blur-md opacity-80
              "
            />

            {/* OUTLINE BORDER */}
            <div
              className="
                absolute inset-0 rounded-full
                border-2 border-white/40
                group-hover:border-purple-400/90
                transition-all duration-500
              "
            />

            {/* IMAGE */}
            <div
              className="
                relative w-64 h-64 md:w-72 md:h-72 rounded-full
                overflow-hidden
                bg-slate-900
                shadow-[0_0_60px_rgba(168,85,247,0.45)]
                transition-transform duration-500
                group-hover:scale-105
              "
            >
              <img
                src={profileImg}
                alt="AA Kona"
                className="w-full h-full object-cover"
              />
            </div>

          </div>
        </motion.div>

        {/* TEXT */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-l tracking-[0.3em] text-blue-400 font-extrabold mb-4"
        >
          HELLO, I’M
        </motion.p>

<motion.h1
  initial={{ opacity: 0, y: 10 }}
  animate={{ opacity: 1, y: 0 }}
  className="text-4xl md:text-6xl font-bold mb-4 flex flex-wrap justify-center md:justify-start"
>
  <span
    className="
      bg-gradient-to-r from-white via-blue-300 to-purple-400
      bg-clip-text text-transparent
      drop-shadow-[0_0_18px_rgba(99,102,241,0.35)]
      mr-3
    "
  >
    Amana Akter
  </span>

  <span
    className="
      bg-gradient-to-r from-purple-400 via-indigo-500 to-pink-500 
      bg-clip-text text-transparent font-bold
      drop-shadow-[0_0_20px_rgba(168,85,247,0.6)]
    "
  >
    Kona
  </span>
</motion.h1>

<motion.h2
  initial={{ opacity: 0, y: 10 }}
  animate={{ opacity: 1, y: 0 }}
  className="
    text-2xl md:text-4xl font-semibold mb-6
    bg-gradient-to-r from-slate-200 via-cyan-300 to-sky-400
    bg-clip-text text-transparent
    tracking-wide
  "
>
  MERN Stack Web Developer
</motion.h2>

<motion.p
  initial={{ opacity: 0, y: 10 }}
  animate={{ opacity: 1, y: 0 }}
  className="max-w-xl text-base md:text-lg text-slate-300/90 mb-10 leading-relaxed"
>
  I build modern, scalable, and human-centered web applications
  with clean design and smooth user experience.
</motion.p>

{/* SOCIAL ICONS */}
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  className="flex gap-6 mb-10"
>
  <SocialIcon icon={<FaGithub />} link="https://github.com/AmanaAkterKona" />
  <SocialIcon icon={<FaLinkedin />} link="https://www.linkedin.com/in/amena-akter-kona/" />
  <SocialIcon icon={<HiMail />} link="mailto:proff.kona@gmail.com" />
</motion.div>

{/* BUTTON */}
{/* BUTTON */}
<motion.div>
  <a
    href="/resume.pdf"          // path to your PDF
    download                    // triggers download
    className="
      inline-flex items-center gap-3 px-8 py-4
      bg-gradient-to-r from-blue-500 to-purple-500
      text-white font-semibold rounded-xl
      shadow-[0_10px_40px_rgba(99,102,241,0.45)]
      hover:shadow-[0_15px_60px_rgba(168,85,247,0.6)]
      hover:scale-[1.03]
      transition-all duration-300
    "
  >
    <HiDownload className="text-xl" />
    Download Resume
  </a>
</motion.div>


</div>
</section>
);
};

const SocialIcon = ({ icon, link }) => (
<motion.a
  whileHover={{ y: -6, scale: 1.1 }}
  className="
    w-12 h-12 flex items-center justify-center
    rounded-full border border-white/20
    bg-white/5 text-slate-300
    hover:text-blue-400 hover:border-blue-400
    transition-all
  "
  href={link}
  target="_blank"
  rel="noopener noreferrer"
>
  {icon}
</motion.a>
);

export default Hero;
