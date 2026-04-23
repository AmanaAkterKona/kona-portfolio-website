import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import Hero from "../pages/Hero";
import About from "../pages/About";
import Skills from "../pages/Skills";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";
import ProjectsCarousel from "../pages/ProjectsCarousel";
import FreelanceSection from "../pages/FreelanceSection";


const Home = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const socialLinks = [
    { icon: <FaGithub />,   label: "GitHub",   href: "https://github.com/AmanaAkterKona",            color: "hover:text-slate-100" },
    { icon: <FaLinkedin />, label: "LinkedIn", href: "https://www.linkedin.com/in/amena-akter-kona/", color: "hover:text-blue-500"  },
    { icon: <FaWhatsapp />, label: "WhatsApp", href: "https://wa.me/8801796575129",                   color: "hover:text-green-500" },
    { icon: <MdEmail />,    label: "Email",    href: "mailto:proff.kona@gmail.com",                   color: "hover:text-red-400"   },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setShowSidebar(window.scrollY > window.innerHeight * 0.8);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative bg-[#060e22] text-slate-300 overflow-hidden">

      {/* Floating social sidebar — RIGHT side */}
      <AnimatePresence>
        {showSidebar && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed bottom-8 left-1/2 -translate-x-1/2 lg:right-10 lg:left-auto lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-0 z-50"
          >
            <div className="flex lg:flex-col items-center gap-6">
              <div className="w-[1px] h-12 bg-slate-700 hidden lg:block" />
              <div className="flex flex-row lg:flex-col gap-6">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -3 }}
                    className={`text-slate-400 text-2xl transition-colors duration-300 ${social.color}`}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
              <div className="w-[1px] h-12 bg-slate-700 hidden lg:block" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Ambient orbs */}
      <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] animate-pulse pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-5%] w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10">
        <Hero />

        <section id="about"><About /></section>
        <section id="skills"><Skills /></section>
       
        <ProjectsCarousel />

        <section id="contact"><Contact /></section>
      </div>
    </div>
  );
};

export default Home;