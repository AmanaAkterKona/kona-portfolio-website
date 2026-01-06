import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, NavLink } from "react-router-dom";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import logo from "../../../assets/konaImg.jpg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#020617]/80 backdrop-blur-lg border-b border-white/10 py-3"
          : "bg-[#0a192f]/90 py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link to="/">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-4"
          >
            {/* Logo Image */}
            <img
              src={logo}
              alt="AA Kona Logo"
              className={`rounded-full object-cover border border-white/30
                shadow-[0_0_20px_rgba(124,58,237,0.55)]
                transition-all duration-300
                ${scrolled ? "w-9 h-9" : "w-11 h-11"}
              `}
            />

            {/* Name & Title */}
            <div className="leading-tight">
              <h1
                className="
                  text-2xl font-extrabold tracking-wide
                  bg-gradient-to-r from-white via-blue-400 to-purple-500
                  bg-clip-text text-transparent
                  drop-shadow-[0_0_14px_rgba(99,102,241,0.6)]
                "
              >
                AA Kona
              </h1>
              <p className="text-xs text-blue-300 tracking-wide">
                MERN Stack Developer
              </p>
            </div>
          </motion.div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, index) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `text-sm font-medium relative group transition-colors ${
                    isActive
                      ? "text-blue-400"
                      : "text-gray-300 hover:text-blue-400"
                  }`
                }
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full"></span>
              </NavLink>
            </motion.div>
          ))}

          {/* Resume Button (Desktop) */}
          <motion.a
            href="/resume.pdf"
            download // <- THIS makes it download
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-5 py-2 bg-blue-600/10 border border-blue-500/50 text-blue-400 rounded-lg text-sm font-semibold hover:bg-blue-600 hover:text-white transition-all"
          >
            Resume
          </motion.a>
        </div>

        {/* Mobile Menu Icon */}
        <div
          className="md:hidden text-3xl text-white cursor-pointer"
          onClick={() => setIsOpen(true)}
        >
          <HiMenuAlt3 />
        </div>
      </div>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 200, damping: 25 }}
            className="fixed top-0 right-0 h-screen w-[70%] bg-[#0f172a] z-50 p-10 flex flex-col gap-8 md:hidden"
          >
            <div className="flex justify-end">
              <HiX
                className="text-3xl text-gray-400 cursor-pointer"
                onClick={() => setIsOpen(false)}
              />
            </div>

            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `text-xl font-semibold transition-colors ${
                    isActive
                      ? "text-blue-400"
                      : "text-gray-300 hover:text-blue-400"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}

            {/* Resume Button (Mobile) */}
            <motion.a
              href="/resume.pdf"
              download // <- triggers download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-xl font-bold text-center"
            >
              Download CV
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
