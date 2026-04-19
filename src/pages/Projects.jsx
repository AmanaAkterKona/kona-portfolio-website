import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaExternalLinkAlt, FaGithub, FaTimes } from "react-icons/fa";
import project1Img from "../assets/konaImg.jpg";
import project2Img from "../assets/Screenshot_108.png";
import project3Img from "../assets/Screenshot_107.png";
import project4Img from "../assets/Screenshot_110.png";
import project5Img from "../assets/Screenshot_111.png";
import portfolioImg from "../assets/Screenshot_22.png";
import projectGadgetTechImg from "../assets/Screenshot_35.png";

const projectsData = [
  
  {
    name: "Scholar Stream",
    image: project2Img,
    techStack: ["React (Vite)", "Tailwind CSS", "DaisyUI", "Firebase Auth", "React Router v7", "Context API", "TanStack Query", "Axios", "Node.js", "Express.js", "MongoDB"],
    description: "A full-stack scholarship management system that enables students to discover and apply for scholarships while providing role-based dashboards for admins and moderators.",
    liveLink: "https://scholar-stream-3e2fc.web.app",
    githubLink: "https://github.com/AmanaAkterKona/scholar-stream-client.git",
    challenges: "Managing complex role-based routing, ensuring secure access control across multiple dashboards, and handling asynchronous data efficiently.",
    improvements: "Adding AI-based scholarship recommendations, email notifications, advanced admin analytics dashboard, mobile app version, and multi-language support.",
    duration: "1 Month",
    role: "Full Stack Developer",
    features: [
      "Role-based access control for Admin, Moderator, and Student",
      "Secure authentication using Firebase with protected routes",
      "Separate dashboards with dynamic UI based on user roles",
      "Scholarship browsing, searching, and detailed view system",
      "Application system with status tracking",
      "Secure payment integration for application fees",
      "Advanced search and filtering by category, university, and keywords",
      "Responsive and user-friendly interface across all devices",
    ],
  },
  {
    name: "FinEase",
    image: project3Img,
    techStack: ["React", "Tailwind CSS", "Firebase Auth", "JWT", "Node.js", "Express.js", "MongoDB", "TanStack Query", "Recharts", "REST API"],
    description: "A full-stack personal finance management system that helps users track income, expenses, and overall financial health with real-time insights and interactive dashboards.",
    liveLink: "https://personal-finance-4dfd1.web.app/",
    githubLink: "https://github.com/AmanaAkterKona/personal-finance-management-client.git",
    challenges: "Implementing secure authentication using Firebase and JWT, managing real-time dashboard state updates, and designing a clean UI for complex financial data.",
    improvements: "Adding AI-based expense prediction, downloadable financial reports (PDF), budget planning with alerts, multi-user finance sharing, and dark mode support.",
    duration: "3 Weeks",
    role: "Full Stack Developer",
    features: [
      "Secure authentication system with Firebase and JWT",
      "Real-time financial dashboard with balance, income, and expense insights",
      "Interactive data visualization using charts",
      "Add, edit, and delete transactions easily",
      "Search and filter transactions by category and date",
      "Organized transaction history management",
      "Responsive design for mobile, tablet, and desktop",
      "Clean and user-friendly dashboard interface",
    ],
  },
  {
    name: "SkillVoyager.AI",
    image: project5Img,
    techStack: ["React 19", "Vite 7", "Tailwind CSS 4", "TypeScript", "Firebase Auth", "Context API", "Node.js", "Express.js", "REST API", "MongoDB (Planned)", "Gemini API (Planned)"],
    description: "An AI-powered learning and career roadmap platform that analyzes user skills, identifies gaps, and generates personalized, adaptive learning paths with progress tracking.",
    liveLink: "https://skill-voyager-ai.vercel.app/",
    githubLink: "https://github.com/muhammadMilon/SkillVoyager.AI",
    challenges: "Designing scalable roadmap generation logic, managing real-time progress tracking, and structuring onboarding data flow for dynamic personalization.",
    improvements: "Integrating Gemini API for AI-driven roadmap generation, adaptive learning updates, AI-based quizzes and feedback system, and enhanced analytics.",
    duration: "8 Weeks",
    role: "Full Stack Developer",
    features: [
      "AI-powered personalized learning roadmap generation (planned)",
      "Skill gap analysis and adaptive roadmap updates (planned)",
      "Progress tracking dashboard with milestones and completion insights",
      "Learning tips & resources with bookmark functionality",
      "Multi-step onboarding flow for skills, goals, and career setup",
      "Courses page with curated learning materials and recommendations",
      "Firebase authentication (email/password + Google sign-in)",
      "Trending skills and leaderboard for learners",
    ],
  },
  {
    name: "Gadget Tech",
    image: projectGadgetTechImg,
    techStack: ["Next.js 14", "React", "JavaScript", "Tailwind CSS", "Context API", "REST API", "Vercel"],
    description: "A modern full-featured e-commerce web application for gadgets with authentication, admin product management, and a smooth shopping experience.",
    liveLink: "https://gadget-tech-two.vercel.app/",
    githubLink: "https://github.com/AmanaAkterKona/gadget-tech.git",
    challenges: "Implementing cookie-based authentication with protected routes and managing global product state efficiently.",
    improvements: "Adding payment gateway integration, user profiles, order history, and wishlist functionality.",
    duration: "4 Weeks",
    role: "Full Stack Developer",
    features: [
      "Secure authentication with cookie-based sessions",
      "Protected routes using Next.js middleware",
      "Product listing with category filtering & search",
      "Add, edit & delete products (admin only)",
      "Responsive modern UI with animations",
      "Shopping cart with quantity management",
      "Toast notifications & loading skeletons",
      "REST API with Next.js Route Handlers",
    ],
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="bg-[#060818] min-h-screen text-slate-300 py-24 px-6 md:px-16 lg:px-32">
      <div className="max-w-6xl mx-auto">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-slate-400 mb-4 font-semibold">
            My Real Works
          </p>
          <h1 className="text-4xl md:text-5xl font-black font-semibold text-white mb-5 tracking-tight">
            Featured{" "}
            <span className="bg-gradient-to-r from-orange-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h1>
          <div className="w-16 h-[2px] bg-gradient-to-r from-orange-400 via-fuchsia-400 to-cyan-400 mx-auto rounded-full" />
        </motion.div>

        {/* ── Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="group bg-white/[0.03] border border-white/[0.07] rounded-2xl overflow-hidden hover:border-white/20 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
                />
              </div>

              {/* Content */}
              <div className="p-7">
                <div className="flex flex-wrap gap-[6px] mb-4">
                  {project.techStack.slice(0, 4).map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] font-bold tracking-widest uppercase px-3 py-1 bg-white/[0.05] text-slate-400 border border-white/[0.08] rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 4 && (
                    <span className="text-[10px] font-bold tracking-widest uppercase px-3 py-1 bg-white/[0.05] text-slate-500 border border-white/[0.08] rounded-full">
                      +{project.techStack.length - 4} more
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-black text-white mb-2 tracking-tight group-hover:text-orange-300 transition-colors">
                  {project.name}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-5 line-clamp-3">
                  {project.description}
                </p>

                <button
                  onClick={() => setSelectedProject(project)}
                  className="w-full py-3 bg-white/[0.05] hover:bg-white/[0.09] border border-white/[0.1] hover:border-white/25 text-white text-sm font-bold rounded-xl flex items-center justify-center gap-2 transition-all"
                >
                  View Case Study <FaExternalLinkAlt className="text-xs text-orange-400" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── Modal ── */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.95, y: 20 }}
              className="bg-[#0d0f1f] w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl p-8 border border-white/[0.08] relative"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 text-slate-500 hover:text-white transition-colors p-1"
              >
                <FaTimes size={20} />
              </button>

              {/* Modal Header */}
              <h2 className="text-2xl font-black text-white mb-1 tracking-tight">
                {selectedProject.name}
              </h2>
              <div className="w-10 h-[2px] bg-gradient-to-r from-orange-400 via-fuchsia-400 to-cyan-400 rounded-full mb-5" />

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-[6px] mb-5">
                {selectedProject.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="text-[10px] font-bold uppercase px-3 py-1 bg-white/[0.05] text-slate-400 border border-white/[0.08] rounded-full tracking-widest"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-6 mb-6 text-sm">
                <p className="text-slate-500">
                  Role: <span className="text-slate-200 font-semibold">{selectedProject.role}</span>
                </p>
                <p className="text-slate-500">
                  Duration: <span className="text-slate-200 font-semibold">{selectedProject.duration}</span>
                </p>
              </div>

              <div className="space-y-5">
                {/* Features */}
                <div>
                  <h4 className="text-white font-black text-xs tracking-[0.2em] uppercase mb-3 flex items-center gap-2">
                    <span className="w-1 h-4 bg-orange-400 rounded-full inline-block" />
                    Key Features
                  </h4>
                  <ul className="space-y-1">
                    {selectedProject.features.map((feature, i) => (
                      <li key={i} className="text-slate-400 text-sm flex items-start gap-2">
                        <span className="text-fuchsia-400 mt-[5px] shrink-0">▸</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Challenges */}
                <div>
                  <h4 className="text-white font-black text-xs tracking-[0.2em] uppercase mb-2 flex items-center gap-2">
                    <span className="w-1 h-4 bg-fuchsia-400 rounded-full inline-block" />
                    Challenges
                  </h4>
                  <p className="text-slate-400 text-sm leading-relaxed">{selectedProject.challenges}</p>
                </div>

                {/* Future Plans */}
                <div>
                  <h4 className="text-white font-black text-xs tracking-[0.2em] uppercase mb-2 flex items-center gap-2">
                    <span className="w-1 h-4 bg-cyan-400 rounded-full inline-block" />
                    Future Plans
                  </h4>
                  <p className="text-slate-400 text-sm leading-relaxed">{selectedProject.improvements}</p>
                </div>

                {/* Buttons */}
                <div className="flex gap-3 pt-2">
                  <a
                    href={selectedProject.liveLink}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 py-3 bg-white/[0.06] hover:bg-white/[0.1] border border-white/[0.1] hover:border-orange-400/40 text-white text-sm font-bold text-center rounded-xl transition-all"
                  >
                    Live Demo
                  </a>
                  <a
                    href={selectedProject.githubLink}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 py-3 bg-white/[0.06] hover:bg-white/[0.1] border border-white/[0.1] hover:border-fuchsia-400/40 text-white text-sm font-bold text-center rounded-xl transition-all flex items-center justify-center gap-2"
                  >
                    <FaGithub /> Repository
                  </a>
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