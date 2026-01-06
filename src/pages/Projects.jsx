import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaExternalLinkAlt, FaGithub, FaTimes } from "react-icons/fa";
import project1Img from "../assets/konaImg.jpg";
import project2Img from "../assets/WhatsApp Image 2025-12-30 at 11.59.32 PM.jpeg";
import project3Img from "../assets/WhatsApp_Image_2025-12-31_at_1.50.56_PM-removebg-preview (2).png";

const projectsData = [
  {
    name: "Portfolio Website",
    image: project1Img,
    techStack: ["React", "TailwindCSS", "Framer Motion"],
    description: "A modern, responsive portfolio website showcasing my skills and projects.",
    liveLink: "",
    githubLink: "https://github.com/AmanaAkterKona/personal-finance-management-client.git",
    challenges: "Learning Framer Motion animations and managing complex state.",
    improvements: "Plan to integrate a Headless CMS."
  },
  {
    name: "Scholar Stream",
    image: project2Img,
    techStack: ["React", "Node.js", "MongoDB"],
    description: "Full-stack e-commerce web app with user authentication and cart system.",
    liveLink: " https://scholar-stream-3e2fc.web.app",
    githubLink: "https://github.com/AmanaAkterKona/scholar-stream-client.git",
    challenges: "Synchronizing real-time inventory updates.",
    improvements: "Implement AI-based recommendations."
  },
  {
    name: "FinEase",
    image: project3Img,
    techStack: ["React", "Firebase", "TailwindCSS"],
    description: "A web app to manage tasks efficiently with cloud sync.",
    liveLink: "https://personal-finance-4dfd1.web.app/",
    githubLink: "https://github.com/AmanaAkterKona/personal-finance-management-client.git",
    challenges: "Handling real-time data persistence.",
    improvements: "Adding push notifications."
  }
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-20 bg-[#0a192f] text-white min-h-screen px-6">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12 text-center">
          <p className="text-blue-400 font-mono text-sm mb-2 tracking-widest uppercase">My Real Works</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Featured Projects</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-[#112240] border border-slate-800 rounded-3xl overflow-hidden hover:border-blue-500/50 transition-all duration-300"
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
                />
              </div>

              <div className="p-8">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech, idx) => (
                    <span key={idx} className="text-[10px] font-bold tracking-widest uppercase px-3 py-1 bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded">
                      {tech}
                    </span>
                  ))}
                </div>

                <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors">
                  {project.name}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-8 line-clamp-2">
                  {project.description}
                </p>

                <button 
                  onClick={() => setSelectedProject(project)}
                  className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg"
                >
                  View Case Study <FaExternalLinkAlt className="text-xs" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal Section */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 20 }}
              className="bg-[#112240] w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl p-8 border border-slate-700 relative"
            >
              <button onClick={() => setSelectedProject(null)} className="absolute top-6 right-6 text-slate-400 hover:text-white p-2">
                <FaTimes size={24} />
              </button>

              <h2 className="text-3xl font-bold mb-6 text-blue-400 uppercase tracking-tight">{selectedProject.name}</h2>
              <div className="space-y-6">
                <div>
                  <h4 className="text-slate-200 font-bold mb-2 uppercase text-xs tracking-widest border-l-2 border-blue-500 pl-2">Challenges</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">{selectedProject.challenges}</p>
                </div>

                <div>
                  <h4 className="text-slate-200 font-bold mb-2 uppercase text-xs tracking-widest border-l-2 border-blue-500 pl-2">Future Plans</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">{selectedProject.improvements}</p>
                </div>

                <div className="flex gap-4 pt-4">
                  <a href={selectedProject.liveLink} target="_blank" rel="noreferrer" className="flex-1 py-3 bg-blue-600 text-center rounded-lg font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-900/40">Live Demo</a>
                  <a href={selectedProject.githubLink} target="_blank" rel="noreferrer" className="flex-1 py-3 bg-slate-700 text-center rounded-lg font-bold hover:bg-slate-600 transition-all flex items-center justify-center gap-2"><FaGithub /> Repository</a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
