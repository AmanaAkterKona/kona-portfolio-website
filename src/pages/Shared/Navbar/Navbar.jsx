import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, NavLink } from "react-router-dom";
import {
  HiMenuAlt3,
  HiX,
  HiOutlineHome,
  HiOutlineUser,
  HiOutlineBadgeCheck,
  HiOutlineBriefcase,
  HiOutlineMail,
} from "react-icons/hi";
import logo from "../../../assets/konaImg.jpg";

/* ─── Colorful Code-Ring SVG Logo ─── */
const CodeRingLogo = () => (
  <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Outer dashed color arcs */}
    <circle cx="22" cy="22" r="19" stroke="none" fill="none" />

    {/* Arc segments – top */}
    <path d="M13 4.5 A19 19 0 0 1 22 3" stroke="#f97316" strokeWidth="3.2" strokeLinecap="round" fill="none"/>
    <path d="M22 3 A19 19 0 0 1 31 4.5" stroke="#facc15" strokeWidth="3.2" strokeLinecap="round" fill="none"/>
    <path d="M31 4.5 A19 19 0 0 1 39 11" stroke="#a855f7" strokeWidth="3.2" strokeLinecap="round" fill="none"/>

    {/* Arc segments – right */}
    <path d="M39.5 14 A19 19 0 0 1 41 22" stroke="#f97316" strokeWidth="3.2" strokeLinecap="round" fill="none"/>
    <path d="M41 22 A19 19 0 0 1 39.5 30" stroke="#22d3ee" strokeWidth="3.2" strokeLinecap="round" fill="none"/>

    {/* Arc segments – bottom */}
    <path d="M38 32 A19 19 0 0 1 31 39.5" stroke="#a855f7" strokeWidth="3.2" strokeLinecap="round" fill="none"/>
    <path d="M31 39.5 A19 19 0 0 1 22 41" stroke="#4ade80" strokeWidth="3.2" strokeLinecap="round" fill="none"/>
    <path d="M22 41 A19 19 0 0 1 13 39.5" stroke="#f97316" strokeWidth="3.2" strokeLinecap="round" fill="none"/>

    {/* Arc segments – left */}
    <path d="M6 32 A19 19 0 0 1 3 22" stroke="#facc15" strokeWidth="3.2" strokeLinecap="round" fill="none"/>
    <path d="M3 22 A19 19 0 0 1 6 12" stroke="#4ade80" strokeWidth="3.2" strokeLinecap="round" fill="none"/>
    <path d="M6 12 A19 19 0 0 1 13 4.5" stroke="#22d3ee" strokeWidth="3.2" strokeLinecap="round" fill="none"/>

    {/* Dots on arc joints */}
    <circle cx="22" cy="3"  r="1.8" fill="#facc15"/>
    <circle cx="41" cy="22" r="1.8" fill="#f97316"/>
    <circle cx="22" cy="41" r="1.8" fill="#4ade80"/>
    <circle cx="3"  cy="22" r="1.8" fill="#a855f7"/>

    {/* Center </> symbol */}
    {/* < */}
    <path d="M16 19 L12 22 L16 25" stroke="#4ade80" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    {/* > */}
    <path d="M28 19 L32 22 L28 25" stroke="#4ade80" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    {/* / */}
    <path d="M20.5 26 L23.5 18" stroke="#f97316" strokeWidth="2.4" strokeLinecap="round" fill="none"/>
  </svg>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home",     path: "/",         icon: <HiOutlineHome size={17} /> },
    { name: "About",    path: "/about",    icon: <HiOutlineUser size={17} /> },
    { name: "Skills",   path: "/skills",   icon: <HiOutlineBadgeCheck size={17} /> },
    { name: "Projects", path: "/projects", icon: <HiOutlineBriefcase size={17} /> },
    { name: "Contact",  path: "/contact",  icon: <HiOutlineMail size={17} /> },
  ];

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#060818]/85 backdrop-blur-2xl border-b border-white/[0.07] shadow-[0_4px_40px_rgba(0,0,0,0.6)]"
          : "bg-[#060818]/50 backdrop-blur-xl border-b border-white/[0.04]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-[70px]">

          {/* ── LEFT: Logo ── */}
          <Link to="/" className="flex items-center gap-3 group shrink-0">
            <motion.div whileHover={{ rotate: 20, scale: 1.1 }} transition={{ type: "spring", stiffness: 200 }}>
              <CodeRingLogo />
            </motion.div>

            <div className="flex flex-col leading-none">
              <span className="text-[17px] font-black tracking-tight text-white">
                Amana
                <span className="bg-gradient-to-r from-orange-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent ml-1">
                  A.
                </span>
              </span>
              <span className="text-[9px] uppercase tracking-[0.28em] text-slate-300 font-semibold mt-[3px]">
                MERN Developer
              </span>
            </div>
          </Link>

          {/* ── CENTER: Pill Nav ── */}
          <div className="hidden md:flex items-center">
            <div className="flex items-center gap-[3px] px-[6px] py-[6px] rounded-full bg-white/[0.03] border border-white/[0.07] backdrop-blur-md">
              {navLinks.map((link, i) => (
                <NavLink
                  key={i}
                  to={link.path}
                  className={({ isActive }) =>
                    `flex items-center gap-[7px] px-4 py-[7px] rounded-full text-[12.5px] font-semibold tracking-wide transition-all duration-300 ${
                      isActive
                        ? "bg-white/10 text-white border border-white/20"
                        : "text-slate-400 hover:text-white hover:bg-white/[0.05]"
                    }`
                  }
                >
                  {link.icon}
                  {link.name}
                </NavLink>
              ))}
            </div>
          </div>

          {/* ── RIGHT: Resume only ── */}
          <div className="hidden md:flex items-center shrink-0">
            <a
              href="/resume.pdf"
              download="Amana_Akter_Resume.pdf"
              className="relative px-6 py-[9px] rounded-full text-[11.5px] font-bold uppercase tracking-[0.18em] text-white overflow-hidden group"
            >
              {/* gradient border via pseudo */}
              <span className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-500 via-fuchsia-500 to-cyan-500 opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="absolute inset-[1.5px] rounded-full bg-[#060818]" />
              <span className="relative z-10 bg-gradient-to-r from-orange-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent group-hover:from-white group-hover:via-white group-hover:to-white transition-all duration-300">
                Resume
              </span>
            </a>
          </div>

          {/* ── Mobile hamburger ── */}
          <button
            className="md:hidden text-slate-400 hover:text-orange-400 transition-colors"
            onClick={() => setIsOpen(true)}
          >
            <HiMenuAlt3 size={26} />
          </button>
        </div>
      </div>

      {/* ── Mobile Sidebar ── */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.28 }}
              className="fixed top-0 right-0 h-full w-68 bg-[#060818] border-l border-white/[0.07] shadow-2xl z-50 p-8"
            >
              <button
                className="absolute top-6 right-6 text-slate-400 hover:text-orange-400 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <HiX size={24} />
              </button>

              {/* Mobile logo */}
              <div className="flex items-center gap-3 mb-10 mt-1">
                <CodeRingLogo />
                <div>
                  <p className="text-white font-black text-[15px]">
                    Amana <span className="bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent">A.</span>
                  </p>
                  <p className="text-[9px] text-slate-500 uppercase tracking-[0.25em]">MERN Developer</p>
                </div>
              </div>

              <div className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.name}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `flex items-center gap-3 px-4 py-3 rounded-xl text-[13px] font-semibold transition-all duration-300 ${
                        isActive
                          ? "bg-white/10 text-white border border-white/15"
                          : "text-slate-400 hover:text-white hover:bg-white/[0.04]"
                      }`
                    }
                  >
                    {link.icon}
                    {link.name}
                  </NavLink>
                ))}

                <a
                  href="/resume.pdf"
                  download="Amana_Akter_Resume.pdf"
                  className="mt-5 text-center px-6 py-3 rounded-full text-[12px] font-bold uppercase tracking-widest text-white relative overflow-hidden group"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-orange-500 via-fuchsia-500 to-cyan-500 opacity-90 group-hover:opacity-100 transition-opacity" />
                  <span className="relative z-10">Download CV</span>
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;