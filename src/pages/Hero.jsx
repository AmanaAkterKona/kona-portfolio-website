import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import cloude from "../assets/cloude.png"
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
        <div className="absolute top-0 left-0 w-[600px] h-[500px] rounded-full opacity-20"
          style={{ background: "radial-gradient(circle, rgba(0,180,200,0.15) 0%, transparent 70%)" }} />
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "radial-gradient(rgba(255,255,255,0.7) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }} />
      </div>

      {/* Hero Content - Adjusted for image to sit at the bottom */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-16 flex flex-col lg:flex-row items-center gap-10 pt-32 lg:pt-40">
        
        {/* ── LEFT CONTENT ── */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          className="flex-1 text-left pb-20 lg:pb-32"
        >
          <motion.h1 className="text-5xl lg:text-7xl font-black text-white leading-tight mb-4 font-bold">
            Hey <span className="inline-block animate-wave">👋</span> I'm <span style={{ color: "#e8175d" }}>Amana Akter</span>
          </motion.h1>

          <div className="h-10 flex items-center mb-6">
            <span className="text-2xl md:text-3xl font-bold text-slate-300 border-b-2 border-[#e8175d] pb-1">
              {displayed}
              <span className="animate-blink ml-1">|</span>
            </span>
          </div>

          


          <motion.a
            href="/resume.pdf"
            whileHover={{ scale: 1.05 }}
            className="px-10 py-4 rounded-full text-white font-bold tracking-widest uppercase inline-block"
            style={{ background: "linear-gradient(90deg, #e8175d, #c0143c)", boxShadow: "0 10px 30px rgba(232,23,93,0.4)" }}
          >
            My Resume
          </motion.a>
        </motion.div>
{/* ── RIGHT IMAGE - Positioned at bottom ── */}
<motion.div
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
  className="flex-1 flex justify-center lg:justify-end items-end self-end relative"
>
  <div className="relative z-10 w-full max-w-[480px]">
    
    {/* ── Background Cloud/Color Image ── */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[10%] h-auto pointer-events-none z-0">
      <img 
        src={cloude} 
        alt="background-cloud" 
        className="w-full opacity-80 animate-pulse-slow" 
        style={{ filter: "brightness(1.2) contrast(1.1)" }}
      />
    </div>

    {/* Background Glow (Optional: Keep it for extra depth) */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[100%] pointer-events-none opacity-30 blur-[100px] z-0"
      style={{ background: "radial-gradient(circle, #e8175d 0%, #7c3aed 60%, transparent 80%)" }} />
    
    {/* Main Profile Image */}
    <img 
      src="https://i.ibb.co.com/JR5drsRZ/ks-I.png" 
      alt="Kona" 
      className="relative z-10 w-full object-contain block align-bottom" 
      style={{ marginBottom: "-2px" }} 
    />
    
    {/* Floating Badge */}
    <div className="absolute bottom-20 -left-5 bg-[#0a1628]/90 border border-[#e8175d]/30 backdrop-blur-md px-6 py-3 rounded-xl z-20 shadow-2xl">
       <p className="text-white font-bold text-sm">MERN Stack Developer</p>
    </div>
  </div>
</motion.div>
      </div>
{/* ── EXPERTISE SECTION ── */}
<div className="relative z-20 w-full flex justify-center mb-40"> 
  {/* w-[99%] এবং max-w-full ব্যবহার করলে এটি স্ক্রিনের প্রায় ১০০% জায়গা নিবে */}
  <div className="w-[99%] max-w-screen-2xl bg-[#081229] py-24 px-12 md:px-32 border border-white/5 shadow-[0_-20px_70px_rgba(0,0,0,0.7)] ">
    <div className="w-full text-center">
      <p className="text-[#e8175d] font-bold tracking-[0.4em] uppercase text-l mb-3">My Expertise</p>
      <h2 className="text-4xl md:text-5xl font-semibold font-black text-white mb-16">What I Do</h2> 
      
      {/* বড় স্ক্রিনে কন্টেন্টগুলো সুন্দরভাবে ছড়িয়ে দেওয়ার জন্য gap-16 ব্যবহার করা হয়েছে */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16 ">
        <ExpertiseCard 
            icon="https://cdn-icons-png.flaticon.com/512/1157/1157109.png" 
            title="Website Design"
            desc="I create beautiful, responsive, and user-friendly website designs that leave a lasting impression."
        />
        <ExpertiseCard 
            icon="https://cdn-icons-png.flaticon.com/512/711/711284.png" 
            title="App Development"
            desc="Building robust and scalable full-stack applications using the latest MERN stack technologies."
        />
        <ExpertiseCard 
            icon="https://cdn-icons-png.flaticon.com/512/1224/1224591.png" 
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
    className="bg-[#0b1a38] border border-white/5 p-10 rounded-3xl text-left transition-all hover:border-[#e8175d]/30 group"
  >
    <img src={icon} alt={title} className="w-14 h-14 mb-6 grayscale group-hover:grayscale-0 transition-all duration-500" />
    <h3 className="text-white text-2xl font-bold mb-4">{title}</h3>
    <p className="text-slate-400 leading-relaxed text-sm">{desc}</p>
  </motion.div>
);

export default Hero;