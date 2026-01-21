import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { HiOutlineArrowNarrowRight, HiChevronRight, HiSparkles } from "react-icons/hi";
import { FaReact, FaNodeJs, FaCode } from "react-icons/fa";
import { SiMongodb, SiTailwindcss, SiJavascript, SiFramer } from "react-icons/si";

// Assets
import Hero from '../pages/Hero';
import profileo from "../assets/WhatsApp Image 2026-01-15 at 12.04.53 AM.jpeg";
import backImg from "../assets/back2.avif";

const Home = () => {
    // Premium Motion Variants
    const fadeInUp = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
    };

    const floatAnimation = {
        y: [0, -20, 0],
        transition: {
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
        }
    };

    return (
        <div className="relative bg-[#020617] text-slate-300 overflow-hidden">
            
            {/* --- Global Background Overlay --- */}
            <div className="fixed inset-0 z-0 opacity-10 pointer-events-none">
                <img src={backImg} alt="" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-b from-[#020617] via-transparent to-[#020617]" />
            </div>

            {/* --- Animated Ambient Orbs --- */}
            <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] animate-pulse" />
            <div className="absolute bottom-[10%] right-[-5%] w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[100px]" />

            <div className="relative z-10">
                {/* 1. Hero Section */}
                <Hero />

                {/* 2. Premium About Preview with Animated Background */}
                <section className="py-24 px-6 md:px-16 lg:px-32 relative overflow-hidden">
                    {/* Animated Gradient Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-purple-900/5 to-pink-900/10" />
                    <motion.div 
                        animate={{
                            backgroundPosition: ['0% 0%', '100% 100%'],
                        }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                            repeatType: 'reverse',
                        }}
                        className="absolute inset-0 opacity-30"
                        style={{
                            backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(168, 85, 247, 0.1) 0%, transparent 50%)',
                            backgroundSize: '200% 200%',
                        }}
                    />

                    <div className="max-w-6xl mx-auto relative z-10">
                        <motion.div 
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
                        >
                            <div className="lg:col-span-7">
                                <motion.div 
                                    className="flex items-center gap-3 mb-4"
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                >
                                    <motion.div 
                                        className="h-[2px] w-12 bg-gradient-to-r from-blue-500 to-purple-500"
                                        animate={{ width: [48, 60, 48] }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                    />
                                    <HiSparkles className="text-blue-400 animate-pulse" />
                                    <span className="text-blue-400 font-mono tracking-widest text-sm uppercase">Quick Intro</span>
                                </motion.div>

                                <motion.h2 
                                    className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                >
                                    Crafting Digital{" "}
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 animate-gradient">
                                        Experiences.
                                    </span>
                                </motion.h2>

                                <motion.p 
                                    className="text-lg text-slate-400 leading-relaxed mb-8 max-w-xl"
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 }}
                                >
                                    I specialize in building high-performance MERN stack applications. My focus is on creating seamless interfaces that bridge the gap between complex backend logic and user-centric design.
                                </motion.p>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 }}
                                >
                                    <Link to="/about" className="relative inline-flex items-center gap-3 px-8 py-4 bg-blue-600/10 border border-blue-500/30 text-blue-400 font-bold rounded-xl hover:bg-blue-600 hover:text-white transition-all duration-500 group overflow-hidden">
                                        <span className="relative z-10">Discover More</span>
                                        <HiChevronRight className="relative z-10 group-hover:translate-x-1 transition-transform" />
                                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500" />
                                    </Link>
                                </motion.div>
                            </div>

                            <div className="lg:col-span-5 flex justify-center">
                                <motion.div 
                                    className="relative group" 
                                    whileHover={{ scale: 1.02 }}
                                    animate={floatAnimation}
                                >
                                    <motion.div 
                                        className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 rounded-3xl blur-2xl opacity-20 group-hover:opacity-40 transition-opacity"
                                        animate={{
                                            scale: [1, 1.1, 1],
                                            rotate: [0, 5, -5, 0],
                                        }}
                                        transition={{
                                            duration: 5,
                                            repeat: Infinity,
                                            ease: "easeInOut"
                                        }}
                                    />
                                    <div className="relative w-80 h-96 md:w-100 md:h-130 rounded-3xl border border-white/10 overflow-hidden backdrop-blur-3xl p-2 bg-white/5">
                                        <img src={profileo} alt="Profile" className="w-full h-full object-cover rounded-2xl" />
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* 3. Tech Stack */}
                <section className="py-20 bg-white/[0.02] border-y border-white/5 backdrop-blur-md">
                    <div className="max-w-6xl mx-auto px-6">
                        <motion.div 
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="visible"
                            className="flex flex-wrap justify-center gap-12 md:gap-20"
                        >
                            {[
                                { icon: <FaReact />, name: "React", color: "hover:text-blue-400" },
                                { icon: <SiJavascript />, name: "JS", color: "hover:text-yellow-400" },
                                { icon: <FaNodeJs />, name: "Node", color: "hover:text-green-500" },
                                { icon: <SiTailwindcss />, name: "Tailwind", color: "hover:text-sky-400" },
                                { icon: <SiMongodb />, name: "MongoDB", color: "hover:text-green-400" },
                                { icon: <SiFramer />, name: "Framer", color: "hover:text-purple-400" },
                            ].map((skill, i) => (
                                <motion.div 
                                    key={i}
                                    variants={fadeInUp}
                                    whileHover={{ y: -10, scale: 1.1 }}
                                    className={`flex flex-col items-center gap-3 text-4xl text-slate-500 transition-all duration-300 ${skill.color}`}
                                >
                                    {skill.icon}
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-600">{skill.name}</span>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* 4. Featured Projects */}
                <section className="py-24 px-6 md:px-16 lg:px-32 relative overflow-hidden">
                    <div className="absolute inset-0 opacity-5">
                        <div className="absolute inset-0" style={{
                            backgroundImage: 'linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)',
                            backgroundSize: '50px 50px'
                        }} />
                    </div>

                    <div className="max-w-6xl mx-auto relative z-10">
                        <motion.div 
                            className="text-center mb-16"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-pink-500/10 to-purple-500/10 border border-pink-500/20 mb-6">
                                <span className="text-sm font-semibold text-pink-300">Portfolio</span>
                            </div>
                            <h2 className="text-4xl font-bold text-white mb-2 tracking-tight">Curated Projects</h2>
                            <motion.div 
                                className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"
                                animate={{ width: [80, 100, 80] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            />
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            {/* Card 1 - Blue Theme */}
                            <motion.div 
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -10 }}
                                className="group relative rounded-[2rem] p-8 border border-white/5 hover:border-blue-500/30 transition-all duration-500 overflow-hidden"
                            >
                                <motion.div 
                                    className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-cyan-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                    animate={{ backgroundPosition: ['0% 0%', '100% 100%'] }}
                                    transition={{ duration: 15, repeat: Infinity, repeatType: 'reverse' }}
                                />
                                <div className="absolute inset-0 bg-[#0a1628]/80 backdrop-blur-xl" />
                                <div className="relative z-10">
                                    <h4 className="text-blue-400 font-mono text-sm mb-4 tracking-tighter">FEATURED PROJECT</h4>
                                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">Scholar Stream</h3>
                                    <p className="text-slate-400 mb-6 line-clamp-2">A high-performance e-learning & e-commerce hybrid platform with complex role-based authentication.</p>
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {["React", "Node.js", "MongoDB"].map((tag, i) => (
                                            <span key={i} className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs">{tag}</span>
                                        ))}
                                    </div>
                                    <Link to="/projects" className="flex items-center gap-2 text-white font-bold text-sm group-hover:gap-4 transition-all">
                                        Explore Study Case <HiOutlineArrowNarrowRight className="text-blue-500" />
                                    </Link>
                                </div>
                            </motion.div>

                            {/* Card 2 - Purple Theme */}
                            <motion.div 
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -10 }}
                                className="group relative rounded-[2rem] p-8 border border-white/5 hover:border-purple-500/30 transition-all duration-500 overflow-hidden"
                            >
                                <motion.div 
                                    className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-pink-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                    animate={{ backgroundPosition: ['0% 0%', '100% 100%'] }}
                                    transition={{ duration: 15, repeat: Infinity, repeatType: 'reverse' }}
                                />
                                <div className="absolute inset-0 bg-[#1a0a28]/80 backdrop-blur-xl" />
                                <div className="relative z-10">
                                    <h4 className="text-purple-400 font-mono text-sm mb-4 tracking-tighter">FEATURED PROJECT</h4>
                                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors">Gadget Tech</h3>
                                    <p className="text-slate-400 mb-6 line-clamp-2">Next-gen gadget store featuring real-time inventory and seamless Next.js route handling.</p>
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {["Next.js", "Stripe", "PostgreSQL"].map((tag, i) => (
                                            <span key={i} className="px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs">{tag}</span>
                                        ))}
                                    </div>
                                    <Link to="/projects" className="flex items-center gap-2 text-white font-bold text-sm group-hover:gap-4 transition-all">
                                        Explore Study Case <HiOutlineArrowNarrowRight className="text-purple-500" />
                                    </Link>
                                </div>
                            </motion.div>
                        </div>

                        <motion.div className="text-center mt-12" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
                            <Link to="/projects">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 font-semibold text-white shadow-[0_0_50px_rgba(99,102,241,0.3)] hover:shadow-[0_0_80px_rgba(99,102,241,0.5)] transition-all"
                                >
                                    View All Projects
                                </motion.button>
                            </Link>
                        </motion.div>
                    </div>
                </section>

                {/* 5. Contact CTA */}
                <section className="py-28 relative overflow-hidden">
                    <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            className="relative p-12 rounded-[3rem] overflow-hidden bg-white/5 border border-white/10 backdrop-blur-sm"
                        >
                            <div className="relative z-10">
                                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Want to collaborate?</h2>
                                <p className="text-slate-400 text-lg mb-10 max-w-lg mx-auto">
                                    I'm currently available for freelance projects and full-time roles. Let's build your next big idea.
                                </p>
                                <Link to="/contact">
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="px-12 py-5 bg-white text-black font-black rounded-full shadow-[0_0_50px_rgba(255,255,255,0.3)]"
                                    >
                                        SAY HELLO
                                    </motion.button>
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Home;