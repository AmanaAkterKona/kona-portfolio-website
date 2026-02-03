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
  HiOutlineMail 
} from "react-icons/hi";
import logo from "../../../assets/konaImg.jpg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/", icon: <HiOutlineHome size={22} /> },
    { name: "About", path: "/about", icon: <HiOutlineUser size={22} /> },
    { name: "Skills", path: "/skills", icon: <HiOutlineBadgeCheck size={22} /> },
    { name: "Projects", path: "/projects", icon: <HiOutlineBriefcase size={22} /> },
    { name: "Contact", path: "/contact", icon: <HiOutlineMail size={22} /> },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      // Ageer background colors ekhane back kora hoyeche
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-gradient-to-r from-[#0f172a]/95 via-[#020617]/95 to-[#0b1220]/95 backdrop-blur-xl border-b border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.6)]"
          : "bg-gradient-to-r from-slate-800/90 via-slate-900/90 to-slate-800/90 backdrop-blur-xl border-b border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.4)]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo Section */}
       {/* --- Futuristic & Colorful Logo Section --- */}
          <Link to="/" className="flex items-center space-x-4 group">
            <div className="relative">
              {/* Neon Orbit Ring */}
              <div className="absolute inset-[-6px] rounded-full border border-white/10 group-hover:border-blue-500/50 transition-all duration-700"></div>
              <div className="absolute inset-[-6px] rounded-full border-t-2 border-b-2 border-purple-500 animate-spin-slow opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              
              {/* Glass Sphere / Image Container */}
              <div className="relative h-14 w-14 rounded-full p-[2px] bg-gradient-to-br from-[#ff2975] via-[#00d9ff] to-[#bc18ff] shadow-[0_0_20px_rgba(0,217,255,0.4)]">
                <div className="h-full w-full rounded-full overflow-hidden border-[3px] border-[#020617] relative">
                  <img
                    src={logo}
                    alt="AA Kona"
                    className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Glass Reflection Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-50"></div>
                </div>
              </div>

              {/* Status Indicator with Pulse */}
              <div className="absolute bottom-1 right-1 flex h-4 w-4">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-4 w-4 bg-green-500 border-2 border-[#020617]"></span>
              </div>
            </div>

            <div className="hidden sm:block">
              <div className="flex flex-col">
                <h1 className="text-3xl flex items-center leading-none group">
                  {/* AA - Minimalist Thin Style */}
                  <span className="font-light tracking-tighter text-white/90 group-hover:text-blue-400 transition-colors duration-500">
                    AA
                  </span>
                  
                  {/* Elegant Thin Slash instead of Dot */}
                  <span className="text-slate-500 font-thin mx-1 rotate-[20deg] h-8 w-[1px] bg-slate-700 block"></span>
                  
                  {/* Kona - Bold & Vibrant Gradient */}
                  <span className="font-black tracking-tight bg-gradient-to-br from-white via-blue-100 to-blue-500 bg-clip-text text-transparent drop-shadow-sm">
                    Kona
                  </span>
                </h1>

                {/* Tagline with Futuristic Accent */}
                <div className="flex items-center gap-2 mt-1">
                   <div className="h-[2px] w-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                   <p className="text-[10px] uppercase tracking-[0.25em] font-extrabold bg-gradient-to-r from-blue-300 to-slate-400 bg-clip-text text-transparent">
                    MERN Architect
                  </p>
                </div>
              </div>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <NavLink
                key={index}
                to={link.path}
                className={({ isActive }) =>
                  `text-[15px] font-medium tracking-wide flex items-center gap-2 transition-all duration-300 relative group ${
                    isActive ? "text-blue-400" : "text-gray-300 hover:text-blue-400"
                  }`
                }
              >
                {/* Fixed size 22 icons */}
                <span className="opacity-80 group-hover:scale-110 transition-transform">{link.icon}</span>
                {link.name}
                <span className="absolute left-0 bottom-[-4px] w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 group-hover:w-full transition-all duration-300"></span>
              </NavLink>
            ))}

            <a
              href="/resume.pdf"
              download="Amana_Akter_Resume.pdf"
              className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white font-semibold shadow-lg hover:shadow-2xl hover:scale-105 transition-all"
            >
              Resume
            </a>
          </div>

          {/* Mobile Menu Icon */}
          <button
            className="md:hidden text-gray-300 hover:text-blue-400 transition-colors"
            onClick={() => setIsOpen(true)}
          >
            <HiMenuAlt3 size={30} />
          </button>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed top-0 right-0 h-full w-72 bg-gradient-to-b from-[#020617] via-[#020617] to-[#0f172a] shadow-2xl z-50 p-8 border-l border-white/10"
            >
              <button
                className="absolute top-6 right-6 text-gray-300 hover:text-blue-400 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <HiX size={30} />
              </button>

              <div className="flex flex-col space-y-7 mt-16">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.name}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `text-lg font-semibold flex items-center gap-4 transition-colors ${
                        isActive ? "text-blue-400" : "text-gray-300 hover:text-blue-400"
                      }`
                    }
                  >
                    <span className={({ isActive }) => isActive ? "text-blue-400" : "text-gray-400"}>
                      {link.icon}
                    </span>
                    {link.name}
                  </NavLink>
                ))}

                <a
                  href="/resume.pdf"
                  download="Amana_Akter_Resume.pdf"
                  className="w-full text-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white font-semibold shadow-lg hover:shadow-2xl transition-all"
                >
                  Download CV
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