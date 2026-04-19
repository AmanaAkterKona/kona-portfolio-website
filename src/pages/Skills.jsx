import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
    FaCode, FaReact, FaJs, FaHtml5, FaCss3Alt, 
    FaNodeJs, FaGithub, FaFigma, FaPaperPlane, FaTools
} from 'react-icons/fa';
import { SiTailwindcss, SiMongodb } from "react-icons/si";

const Skills = () => {
    const [activeTab, setActiveTab] = useState('All');

    const categories = ['All', 'Frontend', 'Backend', 'Tools'];

    const skillsData = [
        { name: 'React',      level: '95%', desc: 'Hooks, Context, Redux',    icon: <FaReact />,    category: 'Frontend' },
        { name: 'Tailwind',   level: '90%', desc: 'Config, Plugins',           icon: <SiTailwindcss />, category: 'Frontend' },
        { name: 'JavaScript', level: '85%', desc: 'ES6+, Async/Await',         icon: <FaJs />,       category: 'Frontend' },
        { name: 'HTML/CSS',   level: '100%', desc: 'Semantic, Responsive',     icon: <div className="flex gap-1"><FaHtml5 /><FaCss3Alt /></div>, category: 'Frontend' },
        { name: 'Node.js',    level: '70%', desc: 'Express, REST API',         icon: <FaNodeJs />,   category: 'Backend' },
        { name: 'MongoDB',    level: '65%', desc: 'Mongoose, CRUD',            icon: <SiMongodb />,  category: 'Backend' },
    ];

    const tools = [
        { name: 'Git',      icon: <FaGithub />,      color: 'text-orange-400' },
        { name: 'Figma',    icon: <FaFigma />,        color: 'text-fuchsia-400' },
        { name: 'Editor',   icon: <FaCode />,         color: 'text-cyan-400' },
        { name: 'Postman',  icon: <FaPaperPlane />,   color: 'text-orange-400' },
        { name: 'Workflow', icon: <FaTools />,        color: 'text-fuchsia-400' },
    ];

    const filteredSkills = activeTab === 'All'
        ? skillsData
        : skillsData.filter(skill => skill.category === activeTab);

    return (
        <section id="skills" className="bg-[#060818] min-h-screen text-slate-300 py-24 px-6 md:px-16 lg:px-32">
            <div className="max-w-6xl mx-auto">

                {/* ── Header ── */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <p className="text-xs uppercase tracking-[0.3em] text-slate-400 mb-4 font-semibold">
                        What I work with
                    </p>
                    <h1 className="text-4xl md:text-5xl font-black font-semibold text-white mb-5 tracking-tight">
                        My{" "}
                        <span className="bg-gradient-to-r from-orange-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
                            Arsenal
                        </span>
                    </h1>
                    <div className="w-16 h-[2px] bg-gradient-to-r from-orange-400 via-fuchsia-400 to-cyan-400 mx-auto rounded-full mb-5" />
                    <p className="text-slate-400 text-[15px]">
                        Technologies I use to bring modern products to life.
                    </p>
                </motion.div>

                {/* ── Filter Tabs ── */}
                <div className="flex justify-center flex-wrap gap-1 mb-12">
                    <div className="flex items-center gap-[3px] px-[6px] py-[6px] rounded-full bg-white/[0.03] border border-white/[0.07]">
                        {categories.map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`relative px-5 py-[7px] rounded-full text-[12.5px] font-semibold tracking-wide transition-all duration-300 ${
                                    activeTab === tab
                                        ? 'bg-white/10 text-white border border-white/20'
                                        : 'text-slate-400 hover:text-white hover:bg-white/[0.05]'
                                }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                </div>

                {/* ── Skills Grid ── */}
                <div className="space-y-12">
                    {(activeTab === 'All' || activeTab === 'Frontend' || activeTab === 'Backend') && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {filteredSkills.map((skill, index) => (
                                <motion.div
                                    layout
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: index * 0.07 }}
                                    key={index}
                                    className="bg-white/[0.03] p-6 rounded-2xl border border-white/[0.07] hover:border-white/20 transition-all group"
                                >
                                    <div className="flex justify-between items-start mb-4">
                                        <div className="p-3 bg-white/[0.05] rounded-xl text-2xl text-fuchsia-400 group-hover:text-orange-400 group-hover:rotate-12 transition-all duration-300">
                                            {skill.icon}
                                        </div>
                                        <span className="text-slate-500 font-mono text-sm">{skill.level}</span>
                                    </div>
                                    <h3 className="text-base font-black text-white mb-1 tracking-tight">{skill.name}</h3>
                                    <p className="text-sm text-slate-500 mb-4">{skill.desc}</p>

                                    {/* Progress Bar */}
                                    <div className="h-[3px] w-full bg-white/[0.07] rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: skill.level }}
                                            transition={{ duration: 1, delay: 0.2 }}
                                            className="h-full rounded-full bg-gradient-to-r from-orange-400 via-fuchsia-400 to-cyan-400"
                                        />
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    )}

                    {/* ── Tools ── */}
                    {(activeTab === 'All' || activeTab === 'Tools') && (
                        <div className="pt-4">
                            <h3 className="text-xl font-black text-white mb-6 tracking-tight flex items-center gap-2">
                                <span className="text-cyan-400">🛠</span> Tools & Workflow
                            </h3>
                            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                                {tools.map((tool, index) => (
                                    <motion.div
                                        whileHover={{ scale: 1.06, y: -4 }}
                                        whileTap={{ scale: 0.95 }}
                                        key={index}
                                        className="bg-white/[0.03] p-6 rounded-2xl border border-white/[0.07] hover:border-white/20 flex flex-col items-center justify-center gap-3 transition-all"
                                    >
                                        <div className={`text-3xl ${tool.color}`}>
                                            {tool.icon}
                                        </div>
                                        <span className="text-xs font-semibold text-slate-400">{tool.name}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                {/* ── Footer Button ── */}
                <div className="mt-16 text-center">
                    <button className="text-slate-500 hover:text-white flex items-center gap-2 mx-auto uppercase tracking-[0.2em] text-xs font-bold transition-colors">
                        See Projects <span className="animate-bounce">↓</span>
                    </button>
                </div>

            </div>
        </section>
    );
};

export default Skills;