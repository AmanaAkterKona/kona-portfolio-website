import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
    FaCode, FaServer, FaReact, FaJs, FaHtml5, FaCss3Alt, 
    FaNodeJs, FaGithub, FaFigma, FaBriefcase, FaPaperPlane, FaTools
} from 'react-icons/fa';
import { SiTailwindcss, SiMongodb } from "react-icons/si";
import backImg from "../assets/backImg.avif";

const Skills = () => {
    const [activeTab, setActiveTab] = useState('All');

    const categories = ['All', 'Frontend', 'Backend', 'Tools'];

    const skillsData = [
        { name: 'React', level: '95%', desc: 'Hooks, Context, Redux', icon: <FaReact />, category: 'Frontend' },
        { name: 'Tailwind', level: '90%', desc: 'Config, Plugins', icon: <SiTailwindcss />, category: 'Frontend' },
        { name: 'JavaScript', level: '85%', desc: 'ES6+, Async/Await', icon: <FaJs />, category: 'Frontend' },
        { name: 'HTML/CSS', level: '100%', desc: 'Semantic, Responsive', icon: <div className="flex gap-1"><FaHtml5 /><FaCss3Alt /></div>, category: 'Frontend' },
        { name: 'Node.js', level: '70%', desc: 'Express, REST API', icon: <FaNodeJs />, category: 'Backend' },
        { name: 'MongoDB', level: '65%', desc: 'Mongoose, CRUD', icon: <SiMongodb />, category: 'Backend' },
    ];

    const tools = [
        { name: 'Git', icon: <FaGithub />, color: 'text-orange-500' },
        { name: 'Figma', icon: <FaFigma />, color: 'text-purple-500' },
        { name: 'Editor', icon: <FaCode />, color: 'text-blue-400' },
        { name: 'Postman', icon: <FaPaperPlane />, color: 'text-orange-400' },
        { name: 'Workflow', icon: <FaTools />, color: 'text-green-400' },
    ];

    const filteredSkills = activeTab === 'All' 
        ? skillsData 
        : skillsData.filter(skill => skill.category === activeTab);

    return (
        <section
            id="skills"
            className="py-30 text-white min-h-screen px-6 relative"
            style={{
                backgroundImage: `url(${backImg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
        >
            {/* Overlay for darker tint */}
            <div className="absolute inset-0 bg-black/50"></div>

            <div className="relative max-w-6xl mx-auto z-10">
                {/* Header */}
                <div className="mb-12 text-center">
                    <h2 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 mb-2">
                        My Arsenal
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mb-4 mx-auto rounded-full"></div>
                    <p className="text-slate-300">Technologies I use to bring modern products to life.</p>
                </div>

                {/* Filter Tabs */}
                <div className="flex justify-center flex-wrap gap-4 mb-12">
                    {categories.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className="relative px-6 py-2 font-medium text-slate-300 hover:text-white transition-colors"
                        >
                            {tab}
                            {activeTab === tab && (
                                <motion.div 
                                    layoutId="underline" 
                                    className="absolute left-0 bottom-0 w-full h-1 bg-blue-500 rounded-full"
                                />
                            )}
                        </button>
                    ))}
                </div>

                {/* Skills Grid */}
                <div className="space-y-12">
                    {(activeTab === 'All' || activeTab === 'Frontend' || activeTab === 'Backend') && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {filteredSkills.map((skill, index) => (
                                <motion.div
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    key={index}
                                    className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 hover:border-blue-500/50 transition-colors group shadow-lg shadow-blue-900/20"
                                >
                                    <div className="flex justify-between items-start mb-4">
                                        <div className="p-3 bg-white/20 rounded-lg text-2xl text-blue-400 group-hover:text-blue-500 group-hover:rotate-12 transition-all duration-300">
                                            {skill.icon}
                                        </div>
                                        <span className="text-slate-300 font-mono">{skill.level}</span>
                                    </div>
                                    <h3 className="text-xl font-bold mb-1">{skill.name}</h3>
                                    <p className="text-sm text-slate-300 mb-4">{skill.desc}</p>
                                    
                                    {/* Progress Bar */}
                                    <div className="h-1.5 w-full bg-white/20 rounded-full overflow-hidden">
                                        <motion.div 
                                            initial={{ width: 0 }}
                                            whileInView={{ width: skill.level }}
                                            transition={{ duration: 1, delay: 0.2 }}
                                            className="h-full rounded-full bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 shadow-md"
                                        ></motion.div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    )}

                    {/* Tools Section */}
                    {(activeTab === 'All' || activeTab === 'Tools') && (
                        <div className="pt-8">
                            <h3 className="text-xl font-semibold mb-8 flex items-center gap-2">
                                <span className="w-1 h-6 bg-blue-500 rounded-full"></span>
                                Tools & Workflow
                            </h3>
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                                {tools.map((tool, index) => (
                                    <motion.div
                                        whileHover={{ scale: 1.2, rotate: 15 }}
                                        whileTap={{ scale: 0.95 }}
                                        key={index}
                                        className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 flex flex-col items-center justify-center gap-3 shadow-lg shadow-blue-900/20"
                                    >
                                        <div className={`text-4xl ${tool.color}`}>
                                            {tool.icon}
                                        </div>
                                        <span className="text-sm font-medium text-slate-300">{tool.name}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                {/* Footer Button */}
                <div className="mt-16 text-center">
                    <button className="text-slate-300 hover:text-white flex items-center gap-2 mx-auto uppercase tracking-widest text-sm font-bold transition-colors">
                        See Projects <span className="animate-bounce">↓</span>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Skills;
