import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaReact, FaNodeJs } from "react-icons/fa";
import { HiDownload, HiMail } from "react-icons/hi";
import { SiMongodb, SiTailwindcss, SiTypescript, SiNextdotjs, SiExpress } from "react-icons/si";
import { BiCodeAlt } from "react-icons/bi";
import profileImg from "../assets/WhatsApp Image 2025-12-30 at 11.59.32 PM.jpeg";

/* ── Floating Tech Icons — full page spread ── */
const floatingIcons = [
  { icon: <FaReact />,       label: "React",      color: "text-cyan-400",    top: "8%",  left: "8%",   delay: 0   },
  { icon: <SiMongodb />,     label: "MongoDB",    color: "text-emerald-400", top: "45%", left: "6%",   delay: 1.0 },
  { icon: <FaNodeJs />,      label: "Node.js",    color: "text-green-400",   top: "75%", left: "12%",  delay: 0.5 },
  { icon: <SiTailwindcss />, label: "Tailwind",   color: "text-cyan-300",    top: "88%", left: "35%",  delay: 1.5 },
  { icon: <BiCodeAlt />,     label: "MERN",       color: "text-fuchsia-400", top: "18%", left: "44%",  delay: 1.7 },
  { icon: <SiTypescript />,  label: "TypeScript", color: "text-blue-400",    top: "12%", right: "8%",  delay: 0.3 },
  { icon: <SiExpress />,     label: "Express",    color: "text-slate-300",   top: "50%", right: "5%",  delay: 1.2 },
  { icon: <SiNextdotjs />,   label: "Next.js",    color: "text-white",       top: "80%", right: "10%", delay: 0.8 },
];

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen overflow-hidden"
      style={{ background: "radial-gradient(ellipse at 20% 50%, #0f0728 0%, #08051a 40%, #020510 100%)" }}
    >
      {/* ── Subtle grid pattern ── */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* ── Glow Orbs ── */}
      <div className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-orange-600/[0.12] blur-[180px] rounded-full" />
      <div className="absolute top-10 right-0 w-[500px] h-[500px] bg-fuchsia-600/[0.14] blur-[180px] rounded-full" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[350px] bg-cyan-600/[0.10] blur-[160px] rounded-full" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-violet-700/[0.08] blur-[120px] rounded-full" />

      {/* ── Floating Tech Icons (desktop only) ── */}
      {floatingIcons.map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1, y: [0, -14, 0] }}
          transition={{
            opacity: { delay: item.delay + 0.6, duration: 0.5 },
            scale:   { delay: item.delay + 0.6, duration: 0.5 },
            y: { delay: item.delay, duration: 3.2 + i * 0.25, repeat: Infinity, ease: "easeInOut" },
          }}
          className="absolute z-10 flex-col items-center gap-1 hidden lg:flex"
          style={{ top: item.top, left: item.left || undefined, right: item.right || undefined }}
        >
          <div className="w-12 h-12 rounded-2xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center backdrop-blur-md shadow-[0_4px_24px_rgba(0,0,0,0.4)]">
            <span className={`text-2xl ${item.color}`}>{item.icon}</span>
          </div>
          <span className="text-[9px] text-slate-500 font-medium tracking-widest uppercase">{item.label}</span>
        </motion.div>
      ))}

      <div className="relative z-10 max-w-7xl mx-auto min-h-screen px-6 md:px-16 flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 w-full items-center">

          {/* ── LEFT CONTENT ── */}
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
              className="inline-block mb-6 px-5 py-2 rounded-full
              bg-white/[0.04] border border-white/[0.09]
              text-slate-400 tracking-[0.25em] text-xs font-semibold uppercase"
            >
              Hello, I'm
            </motion.span>

              {/* NAME */}
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="relative text-5xl md:text-7xl font-extrabold leading-tight mb-4"
            >
              <span className="relative inline-block bg-gradient-to-r from-white via-blue-300 to-purple-400 bg-clip-text text-transparent">
                Amana Akter
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shine" />
              </span>{" "}
              <span className="bg-gradient-to-r from-orange-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
    Kona
  </span>
            </motion.h1>

            {/* ROLE */}
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45 }}
              className="text-lg md:text-xl font-semibold mb-6 text-slate-400 tracking-wide"
            >
              MERN Stack Web Developer
            </motion.h2>

            {/* DESCRIPTION */}
            <motion.p
              initial={{ opacity: 0, filter: "blur(6px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              transition={{ delay: 0.55, duration: 0.8 }}
              className="max-w-md mx-auto lg:mx-0 text-slate-500 mb-10 leading-relaxed text-[15px]"
            >
              I build modern, scalable, and human-centered web applications
              with clean design and smooth user experience.
            </motion.p>

            {/* SOCIAL ICONS */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.65 }}
              className="flex justify-center lg:justify-start gap-4 mb-10"
            >
              <SocialIcon icon={<FaGithub />}  link="https://github.com/AmanaAkterKona" />
              <SocialIcon icon={<FaLinkedin />} link="https://www.linkedin.com/in/amena-akter-kona/" />
              <SocialIcon icon={<HiMail />}     link="mailto:proff.kona@gmail.com" />
            </motion.div>

            {/* DOWNLOAD BUTTON */}
            <motion.a
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              href="/resume.pdf"
              download="Amana_Akter_Resume.pdf"
              className="relative inline-flex items-center gap-3 px-8 py-4 rounded-2xl overflow-hidden group"
            >
              {/* gradient border */}
              <span className="absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-500 via-fuchsia-500 to-cyan-500 opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="absolute inset-[1.5px] rounded-2xl bg-[#08051a]" />
              <HiDownload className="relative z-10 text-xl text-white" />
              <span className="relative z-10 text-white font-bold tracking-wide">Download Resume</span>
            </motion.a>
          </motion.div>

          {/* ── RIGHT IMAGE ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Rotating Outer Ring */}
              <div className="absolute inset-[-8px] rounded-full border border-dashed border-fuchsia-500/25 animate-spin-slow" />
              <div className="absolute inset-[-20px] rounded-full border border-dashed border-orange-500/15 animate-spin-slow" style={{ animationDirection: "reverse", animationDuration: "15s" }} />

              {/* Glow */}
              <div className="absolute inset-[-15px] bg-fuchsia-600/25 blur-[50px] rounded-full animate-pulse" />
              <div className="absolute inset-[-3px] bg-gradient-to-br from-orange-500 via-fuchsia-500 to-cyan-500 rounded-full blur-[6px] opacity-50" />

              {/* Profile Image */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="relative w-80 h-80 md:w-96 md:h-96 lg:w-[420px] lg:h-[420px]
                  rounded-full overflow-hidden z-10
                  shadow-[0_0_80px_rgba(217,70,239,0.2)]"
              >
                <img
                  src={profileImg}
                  alt="Amana Akter Kona"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Floating Badge */}
              <motion.span
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-4 right-0 z-20 px-4 py-2 text-xs font-semibold rounded-full bg-white/[0.06] border border-white/[0.12] text-slate-300 backdrop-blur-md tracking-wide"
              >
                MERN Stack Developer
              </motion.span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

const SocialIcon = ({ icon, link }) => (
  <motion.a
    whileHover={{ y: -6, scale: 1.12 }}
    whileTap={{ scale: 0.95 }}
    className="
      w-11 h-11 flex items-center justify-center
      rounded-full border border-white/[0.1]
      bg-white/[0.04] text-slate-400
      hover:text-white hover:border-white/30
      hover:bg-white/[0.08]
      transition-all duration-300
    "
    href={link}
    target="_blank"
    rel="noopener noreferrer"
  >
    <span className="text-lg">{icon}</span>
  </motion.a>
);

export default Hero;