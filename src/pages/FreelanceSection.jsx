import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// 3D sitting person with laptop SVG illustration
const SittingIllustration = () => (
  <svg viewBox="0 0 220 280" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    {/* Lightbulb glow */}
    <ellipse cx="155" cy="48" rx="22" ry="22" fill="#f7df1e" fillOpacity="0.15"/>
    <ellipse cx="155" cy="48" rx="14" ry="14" fill="#f7df1e" fillOpacity="0.25"/>
    {/* Lightbulb */}
    <path d="M155 34 C148 34 142 40 142 47 C142 52 145 56 148 58 L148 63 L162 63 L162 58 C165 56 168 52 168 47 C168 40 162 34 155 34Z" fill="#f7df1e"/>
    <rect x="149" y="63" width="12" height="4" rx="2" fill="#e5c100"/>
    <rect x="150" y="67" width="10" height="3" rx="1.5" fill="#e5c100"/>
    {/* Rays */}
    <line x1="155" y1="26" x2="155" y2="20" stroke="#f7df1e" strokeWidth="2" strokeLinecap="round"/>
    <line x1="169" y1="30" x2="174" y2="25" stroke="#f7df1e" strokeWidth="2" strokeLinecap="round"/>
    <line x1="174" y1="44" x2="180" y2="44" stroke="#f7df1e" strokeWidth="2" strokeLinecap="round"/>
    <line x1="141" y1="30" x2="136" y2="25" stroke="#f7df1e" strokeWidth="2" strokeLinecap="round"/>
    <line x1="136" y1="44" x2="130" y2="44" stroke="#f7df1e" strokeWidth="2" strokeLinecap="round"/>

    {/* Chair */}
    <rect x="40" y="185" width="120" height="12" rx="6" fill="#5a3e28"/>
    <rect x="48" y="197" width="8" height="55" rx="4" fill="#4a3020"/>
    <rect x="144" y="197" width="8" height="55" rx="4" fill="#4a3020"/>
    <rect x="30" y="185" width="16" height="80" rx="6" fill="#6b4c30"/>

    {/* Body */}
    <ellipse cx="100" cy="135" rx="30" ry="35" fill="#e8175d"/>
    {/* Neck */}
    <rect x="93" y="102" width="14" height="16" rx="7" fill="#f4c09a"/>
    {/* Head */}
    <ellipse cx="100" cy="92" rx="22" ry="24" fill="#f4c09a"/>
    {/* Hair */}
    <ellipse cx="100" cy="74" rx="22" ry="12" fill="#3d2b1f"/>
    <ellipse cx="82" cy="88" rx="6" ry="14" fill="#3d2b1f"/>
    {/* Face */}
    <ellipse cx="93" cy="94" rx="3" ry="3.5" fill="#fff" fillOpacity="0.9"/>
    <ellipse cx="107" cy="94" rx="3" ry="3.5" fill="#fff" fillOpacity="0.9"/>
    <ellipse cx="93" cy="95" rx="1.5" ry="2" fill="#3d2b1f"/>
    <ellipse cx="107" cy="95" rx="1.5" ry="2" fill="#3d2b1f"/>
    <path d="M93 104 Q100 109 107 104" stroke="#c0714a" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
    {/* Ears */}
    <ellipse cx="78" cy="93" rx="5" ry="7" fill="#f4c09a"/>
    <ellipse cx="122" cy="93" rx="5" ry="7" fill="#f4c09a"/>

    {/* Left arm */}
    <path d="M70 145 Q50 160 55 175" stroke="#e8175d" strokeWidth="18" strokeLinecap="round" fill="none"/>
    {/* Left hand */}
    <ellipse cx="56" cy="177" rx="9" ry="7" fill="#f4c09a"/>

    {/* Right arm */}
    <path d="M130 145 Q148 158 140 172" stroke="#e8175d" strokeWidth="18" strokeLinecap="round" fill="none"/>
    {/* Right hand */}
    <ellipse cx="138" cy="174" rx="9" ry="7" fill="#f4c09a"/>

    {/* Laptop */}
    <rect x="55" y="158" width="85" height="52" rx="5" fill="#1a1a2e"/>
    <rect x="58" y="161" width="79" height="44" rx="3" fill="#0d1b38"/>
    {/* Screen content */}
    <rect x="62" y="165" width="30" height="3" rx="1.5" fill="#e8175d" fillOpacity="0.8"/>
    <rect x="62" y="171" width="50" height="2" rx="1" fill="#38bdf8" fillOpacity="0.5"/>
    <rect x="62" y="176" width="40" height="2" rx="1" fill="#38bdf8" fillOpacity="0.3"/>
    <rect x="62" y="181" width="45" height="2" rx="1" fill="#38bdf8" fillOpacity="0.3"/>
    <rect x="62" y="186" width="35" height="2" rx="1" fill="#e8175d" fillOpacity="0.4"/>
    <rect x="62" y="191" width="55" height="2" rx="1" fill="#38bdf8" fillOpacity="0.25"/>
    {/* Laptop base */}
    <rect x="48" y="210" width="104" height="6" rx="3" fill="#1a1a2e"/>

    {/* Legs */}
    <path d="M80 185 L72 250" stroke="#4a5568" strokeWidth="16" strokeLinecap="round"/>
    <path d="M120 185 L128 250" stroke="#4a5568" strokeWidth="16" strokeLinecap="round"/>
    {/* Shoes */}
    <ellipse cx="68" cy="253" rx="14" ry="7" fill="#e8175d"/>
    <ellipse cx="132" cy="253" rx="14" ry="7" fill="#e8175d"/>
  </svg>
);

// Decorative swirl SVG (top right like reference)
const Swirl = () => (
  <svg width="90" height="90" viewBox="0 0 90 90" fill="none">
    <path d="M80 10 C80 10 60 5 40 25 C20 45 30 70 55 65 C75 60 70 40 50 42" 
      stroke="#e8175d" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
    <circle cx="50" cy="42" r="3" fill="#e8175d"/>
  </svg>
);

const FreelanceSection = () => {
  return (
    <section className="w-full px-4 py-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative w-full max-w-5xl mx-auto rounded-2xl overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #0d1b38 0%, #0a1628 40%, #1a0d2e 100%)",
          border: "1px solid rgba(255,255,255,0.07)",
          minHeight: "220px",
        }}
      >
        {/* Bottom purple glow */}
        <div className="absolute bottom-0 left-0 right-0 h-1/2 pointer-events-none"
          style={{ background: "linear-gradient(to top, rgba(120,40,180,0.35), transparent)" }} />

        {/* Grid texture overlay */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }} />

        {/* Top-right swirl */}
        <div className="absolute top-3 right-4 opacity-80">
          <Swirl />
        </div>

        {/* Content layout */}
        <div className="relative z-10 flex items-center h-full" style={{ minHeight: "220px" }}>

          {/* Left — 3D illustration */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex-shrink-0"
            style={{ width: "200px", height: "220px", paddingLeft: "24px" }}
          >
            <SittingIllustration />
          </motion.div>

          {/* Right — Text + Button */}
          <div className="flex-1 flex flex-col items-center justify-center text-center px-8 py-10">
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="font-black text-white leading-tight mb-6"
              style={{ fontSize: "clamp(28px, 4vw, 48px)" }}
            >
              I'm{" "}
              <span
                className="relative inline-block"
                style={{ color: "#e8175d" }}
              >
                Available
                {/* underline accent */}
                <svg className="absolute -bottom-1 left-0 w-full" height="4" viewBox="0 0 100 4">
                  <path d="M0 3 Q50 0 100 3" stroke="#e8175d" strokeWidth="2" fill="none" strokeOpacity="0.5"/>
                </svg>
              </span>{" "}
              For<br />Freelance Work
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.35 }}
            >
              <Link
                to="/contact"
                className="inline-block px-10 py-3 rounded-full font-black text-sm tracking-widest uppercase text-white transition-all duration-300"
                style={{
                  background: "linear-gradient(90deg, #e8175d, #c0143c)",
                  boxShadow: "0 4px 24px rgba(232,23,93,0.45)",
                }}
                onMouseEnter={e => e.currentTarget.style.boxShadow = "0 6px 32px rgba(232,23,93,0.65)"}
                onMouseLeave={e => e.currentTarget.style.boxShadow = "0 4px 24px rgba(232,23,93,0.45)"}
              >
                Hire Me Now
              </Link>
            </motion.div>
          </div>

        </div>
      </motion.div>
    </section>
  );
};

export default FreelanceSection;