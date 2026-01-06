import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaExternalLinkAlt, FaGithub, FaTimes } from "react-icons/fa";
import project1Img from "../assets/konaImg.jpg";
import project2Img from "../assets/Screenshot_19.png";
import project3Img from "../assets/Screenshot_20.png";
import project4Img from "../assets/Screenshot_21.png";

const projectsData = [
  {
    name: "Portfolio Website",
    image: project1Img,
    techStack: ["React", "TailwindCSS", "Framer Motion"],
    description: "A modern, responsive portfolio website showcasing my skills and projects.",
    liveLink: "",
    githubLink: "https://github.com/AmanaAkterKona/kona-portfolio-website.git",
    challenges: "Learning Framer Motion animations and managing complex state.",
    improvements: "Plan to integrate a Headless CMS.",
    duration: "2 Weeks",
    role: "Frontend Developer",
    features: [
      "Responsive design",
      "Smooth animations",
      "Dynamic project showcase"
    ]
  },
  {
    name: "Scholar Stream",
    image: project2Img,
    techStack: ["React", "Node.js", "MongoDB"],
    description: "Full-stack e-commerce web app with user authentication and cart system.",
    liveLink: "https://scholar-stream-3e2fc.web.app",
    githubLink: "https://github.com/AmanaAkterKona/scholar-stream-client.git",
    challenges: "Synchronizing real-time inventory updates.",
    improvements: "Implement AI-based recommendations.",
    duration: "1 Month",
    role: "Full Stack Developer",
    features: [
      "User authentication & roles",
      "Shopping cart & checkout",
      "Admin dashboard"
    ]
  },
  {
    name: "FinEase",
    image: project3Img,
    techStack: ["React", "Firebase", "TailwindCSS"],
    description: "A web app to manage tasks efficiently with cloud sync.",
    liveLink: "https://personal-finance-4dfd1.web.app/",
    githubLink: "https://github.com/AmanaAkterKona/personal-finance-management-client.git",
    challenges: "Handling real-time data persistence.",
    improvements: "Adding push notifications.",
    duration: "3 Weeks",
    role: "Frontend Developer",
    features: [
      "Task management with cloud sync",
      "User-friendly interface",
      "Data analytics charts"
    ]
  },
  {
    name: "Kids Toys",
    image: project4Img,
    techStack: ["React", "Firebase", "TailwindCSS"],
    description: "A playful e-commerce platform for kids toys.",
    liveLink: "https://kids-toys-cute-projects.web.app",
    githubLink: "https://github.com/AmanaAkterKona/kids-toys-cute-my-projects.git",
    challenges: "Handling real-time data persistence.",
    improvements: "Adding push notifications.",
    duration: "2 Weeks",
    role: "Full Stack Developer",
    features: [
      "Product catalog & cart system",
      "Firebase authentication",
      "Responsive for all devices"
    ]
  }
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-30 bg-[#0a192f] text-white min-h-screen px-6">
      <div className="max-w-6xl mx-auto">
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
              className="group bg-gradient-to-br from-[#112240] to-[#0f1c3f] border border-slate-800 rounded-3xl overflow-hidden hover:shadow-xl hover:shadow-blue-600/50 transition-all duration-300"
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
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

                <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-blue-400 transition-colors">
                  {project.name}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4 line-clamp-3">{project.description}</p>

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
              className="bg-[#112240] w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl p-8 border border-slate-700 relative"
            >
              <button onClick={() => setSelectedProject(null)} className="absolute top-6 right-6 text-slate-400 hover:text-white p-2">
                <FaTimes size={24} />
              </button>

              <h2 className="text-3xl font-bold mb-4 text-blue-400 uppercase tracking-tight">{selectedProject.name}</h2>

              <div className="flex flex-wrap gap-2 mb-4">
                {selectedProject.techStack.map((tech, idx) => (
                  <span key={idx} className="text-xs font-bold uppercase px-3 py-1 bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded">
                    {tech}
                  </span>
                ))}
              </div>

              <p className="text-slate-400 text-sm mb-4"><span className="font-bold text-slate-200">Role:</span> {selectedProject.role}</p>
              <p className="text-slate-400 text-sm mb-4"><span className="font-bold text-slate-200">Duration:</span> {selectedProject.duration}</p>

              <div className="space-y-4">
                <div>
                  <h4 className="text-slate-200 font-bold mb-2 uppercase text-xs tracking-widest border-l-2 border-blue-500 pl-2">Key Features</h4>
                  <ul className="list-disc list-inside text-slate-400 text-sm">
                    {selectedProject.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                </div>

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
