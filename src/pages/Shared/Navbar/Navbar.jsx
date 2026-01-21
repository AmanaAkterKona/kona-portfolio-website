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
          : "bg-gradient-to-r from-[#020617]/40 via-[#020617]/20 to-[#020617]/40"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo Section */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-md opacity-50 group-hover:opacity-80 transition-opacity"></div>
              <img
                src={logo}
                alt="AA Kona"
                className="relative h-12 w-12 rounded-full object-cover border-2 border-blue-400 group-hover:scale-110 transition-transform"
              />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                AA Kona
              </h1>
              <p className="text-xs text-gray-400">MERN Stack Developer</p>
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