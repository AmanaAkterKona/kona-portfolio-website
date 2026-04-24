import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import cloude from "../assets/cloude.png";
import tools1 from "../assets/pencil.png"
import tools2 from "../assets/round.png"
import tools3 from "../assets/tools.png"
import line from "../assets/pechline.png"

const TYPING_TEXTS = [
  "MERN Stack Developer",
  "Web Developer",
  "Full Stack Engineer",
];

const Hero = () => {
  const [textIndex, setTextIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = TYPING_TEXTS[textIndex];
    let timeout;
    if (!isDeleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    } else if (!isDeleting && displayed.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 1800);
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 45);
    } else if (isDeleting && displayed.length === 0) {
      setIsDeleting(false);
      setTextIndex((prev) => (prev + 1) % TYPING_TEXTS.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, textIndex]);

  return (
    <section
      className="relative w-full min-h-screen overflow-hidden flex flex-col"
      style={{
        background: "linear-gradient(135deg, #060e22 0%, #0a1628 40%, #0d1b38 70%, #1a0a2e 100%)",
      }}
    >
      {/* ── Background Elements ── */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 left-0 w-[300px] h-[300px] md:w-[600px] md:h-[500px] rounded-full opacity-20"
          style={{ background: "radial-gradient(circle, rgba(0,180,200,0.15) 0%, transparent 70%)" }}
        />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "radial-gradient(rgba(255,255,255,0.7) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      {/* ── Hero Content ── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-8 md:px-16 md:pl-24 flex flex-col lg:flex-row items-center gap-6 lg:gap-10 pt-24 sm:pt-28 lg:pt-40">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          className="flex-1 text-left pb-8 sm:pb-12 lg:pb-32 w-full"
        >
          <motion.h1
            className="font-black text-white leading-tight mb-4"
            style={{ fontSize: "clamp(32px, 6vw, 72px)" }}
          >
            Hey <span className="inline-block animate-wave">👋</span> I'm{" "}
            <span style={{ color: "#e8175d" }}>Amana Akter</span>
          </motion.h1>

          <div className="h-10 flex items-center mb-6">
            <span
              className="font-bold text-slate-300 border-b-2 border-[#e8175d] pb-1"
              style={{ fontSize: "clamp(18px, 3vw, 30px)" }}
            >
              {displayed}
              <span className="animate-blink ml-1">|</span>
            </span>
          </div>

          <motion.a
            href="/resume.pdf"
            whileHover={{ scale: 1.05 }}
            className="px-8 sm:px-10 py-3 sm:py-4 rounded-full text-white font-bold tracking-widest uppercase inline-block text-sm sm:text-base"
            style={{
              background: "linear-gradient(90deg, #e8175d, #c0143c)",
              boxShadow: "0 10px 30px rgba(232,23,93,0.4)",
            }}
          >
            My Resume
          </motion.a>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex-1 flex justify-center lg:justify-end items-end self-end relative w-full"
        >
          <div className="relative z-10 w-full max-w-[280px] sm:max-w-[360px] md:max-w-[420px] lg:max-w-[480px] mx-auto lg:mx-0">

            {/* Cloud image */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[10%] h-auto pointer-events-none z-0">
              <img
                src={cloude}
                alt="background-cloud"
                className="w-full opacity-80"
                style={{ filter: "brightness(1.2) contrast(1.1)" }}
              />
            </div>

            {/* Glow */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none opacity-30 blur-[80px] z-0"
              style={{ background: "radial-gradient(circle, #e8175d 0%, #7c3aed 60%, transparent 80%)" }}
            />

            {/* Profile image */}
            <img
              src="https://i.ibb.co.com/JR5drsRZ/ks-I.png"
              alt="Kona"
              className="relative z-10 w-full object-contain block align-bottom"
              style={{ marginBottom: "-2px" }}
            />

            {/* Floating Badge */}
            <div
              className="absolute bottom-16 sm:bottom-20 -left-2 sm:-left-5 border border-[#e8175d]/30 backdrop-blur-md px-4 sm:px-6 py-2 sm:py-3 rounded-xl z-20 shadow-2xl"
              style={{ background: "rgba(10,22,40,0.9)" }}
            >
              <p className="text-white font-bold text-xs sm:text-sm">MERN Stack Developer</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* ── EXPERTISE SECTION ── */}
      <div className="relative z-20 w-full flex justify-center mb-20 sm:mb-32 md:mb-40 mt-8 lg:mt-0 md:pl-[78px]">
        <div
          className="relative w-full max-w-screen-2xl py-14 sm:py-20 px-4 sm:px-10 md:px-20 lg:px-32 border border-white/5 shadow-[0_-20px_70px_rgba(0,0,0,0.7)]"
          style={{ background: "#081229" }}
        >
          {/* ✅ Line decoration - bottom right corner */}
          <img
            src={line}
            alt="decoration"
            className="absolute bottom-0 right-0 w-40 sm:w-52 pointer-events-none opacity-80"
          />

          <div className="w-full text-center">
            <p className="text-[#e8175d] font-bold tracking-[0.4em] uppercase text-sm mb-3">
              My Expertise
            </p>
            <h2
              className="font-black text-white mb-10 sm:mb-16"
              style={{ fontSize: "clamp(28px, 5vw, 48px)" }}
            >
              What I Do
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10 lg:gap-16">
              <ExpertiseCard
                icon={tools1}
                title="Website Design"
                desc="I create beautiful, responsive, and user-friendly website designs that leave a lasting impression."
              />
              <ExpertiseCard
                icon={tools2}
                title="App Development"
                desc="Building robust and scalable full-stack applications using the latest MERN stack technologies."
              />
              <ExpertiseCard
                icon={tools3}
                title="UX/UI Design"
                desc="Focusing on user experience through clean interfaces, smooth animations, and logical workflows."
              />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes wave {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(-10deg); }
          75% { transform: rotate(10deg); }
        }
        .animate-wave { animation: wave 2s infinite; transform-origin: 70% 70%; }
        @keyframes blink { 50% { opacity: 0; } }
        .animate-blink { animation: blink 1s step-start infinite; color: #e8175d; }
      `}</style>
    </section>
  );
};

const ExpertiseCard = ({ icon, title, desc }) => (
  <motion.div
    whileHover={{ y: -10 }}
    className="border border-white/5 p-8 sm:p-10 rounded-3xl text-left transition-all hover:border-[#e8175d]/30 group"
    style={{ background: "#0b1a38" }}
  >
    <img
      src={icon}
      alt={title}
      className="w-36 h-32 sm:w-44 sm:h-36 mb-5 sm:mb-6 transition-all duration-500"
    />
    <h3 className="text-white text-xl sm:text-2xl font-bold mb-3 sm:mb-4">{title}</h3>
    <p className="text-slate-400 leading-relaxed text-sm">{desc}</p>
  </motion.div>
);

export default Hero;