import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaExternalLinkAlt, FaGithub, FaTimes, FaUser, FaClock } from "react-icons/fa";
import project2Img from "../assets/Screenshot_108.png";
import project3Img from "../assets/Screenshot_107.png";
import project5Img from "../assets/Screenshot_111.png";
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
    <section
      className="min-h-screen text-slate-300 py-24 px-6 md:px-16 lg:px-24"
      style={{ background: "linear-gradient(135deg, #060e22 0%, #0a1628 50%, #0d1b38 100%)" }}
    >
      <div className="max-w-6xl mx-auto">

        {/* ── Header — reference style ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-bold tracking-[0.4em] uppercase text-xs mb-3">
            <span style={{ color: "#6ec6f5" }}>MY </span>
            <span style={{ color: "#e8175d" }}>PROJECTS</span>
          </p>
          <h1
            className="text-4xl md:text-5xl font-black text-white mb-5"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Featured Projects
          </h1>
          <div className="mx-auto" style={{ width: "44px", height: "3px", background: "#e8175d", borderRadius: "2px" }} />
        </motion.div>

        {/* ── Grid — reference blog card style ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="flex flex-col cursor-pointer group"
              onClick={() => setSelectedProject(project)}
            >
              {/* Image — large, rounded corners like reference */}
              <div
                className="relative overflow-hidden rounded-2xl mb-5"
                style={{ aspectRatio: "4/3" }}
              >
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  style={{ filter: "brightness(0.9)" }}
                />
                {/* Hover overlay with buttons */}
                <div
                  className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-2xl"
                  style={{ background: "rgba(6,14,34,0.82)" }}
                >
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noreferrer"
                    onClick={e => e.stopPropagation()}
                    className="px-5 py-2 rounded-full text-xs font-bold text-white transition-all"
                    style={{ background: "#e8175d" }}
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noreferrer"
                    onClick={e => e.stopPropagation()}
                    className="px-5 py-2 rounded-full text-xs font-bold text-white transition-all"
                    style={{ background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.25)" }}
                  >
                    GitHub
                  </a>
                </div>
              </div>

              {/* Text content — reference style: title bold, then meta row */}
              <h3
                className="text-white font-bold text-xl mb-3 leading-snug group-hover:transition-colors duration-300"
                style={{ fontFamily: "'Syne', sans-serif" }}
                onMouseEnter={e => e.currentTarget.style.color = "#e8175d"}
                onMouseLeave={e => e.currentTarget.style.color = "#fff"}
              >
                {project.name}
              </h3>

              {/* Meta row — like reference: user icon + role, clock icon + duration */}
              <div className="flex items-center gap-5 text-xs text-slate-500 mb-3">
                <span className="flex items-center gap-1.5">
                  <FaUser style={{ color: "#e8175d" }} />
                  {project.role}
                </span>
                <span className="flex items-center gap-1.5">
                  <FaClock style={{ color: "#6ec6f5" }} />
                  {project.duration}
                </span>
              </div>

              {/* Short description */}
              <p className="text-slate-400 text-sm leading-relaxed line-clamp-2 mb-4">
                {project.description}
              </p>

              {/* "View Case Study" link — subtle, reference style */}
              <span
                className="text-xs font-bold tracking-widest uppercase flex items-center gap-2 transition-colors duration-300"
                style={{ color: "#e8175d" }}
              >
                View Case Study <FaExternalLinkAlt size={10} />
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── Modal — all functionality preserved ── */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ background: "rgba(6,14,34,0.92)", backdropFilter: "blur(8px)" }}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.95, y: 20 }}
              className="w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl p-8 relative"
              style={{ background: "#0d1b35", border: "1px solid rgba(232,23,93,0.2)" }}
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 text-slate-500 hover:text-white transition-colors"
              >
                <FaTimes size={20} />
              </button>

              <h2 className="text-2xl font-black text-white mb-1" style={{ fontFamily: "'Syne', sans-serif" }}>
                {selectedProject.name}
              </h2>
              <div className="w-10 h-[3px] rounded-full mb-5" style={{ background: "#e8175d" }} />

              {/* Tech tags */}
              <div className="flex flex-wrap gap-2 mb-5">
                {selectedProject.techStack.map((tech, idx) => (
                  <span key={idx}
                    className="text-[10px] font-bold uppercase px-3 py-1 rounded-full tracking-widest"
                    style={{ background: "rgba(232,23,93,0.12)", color: "#e8175d", border: "1px solid rgba(232,23,93,0.2)" }}>
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-6 mb-6 text-sm">
                <p className="text-slate-400">Role: <span className="text-white font-semibold">{selectedProject.role}</span></p>
                <p className="text-slate-400">Duration: <span className="text-white font-semibold">{selectedProject.duration}</span></p>
              </div>

              <div className="space-y-5">
                {/* Features */}
                <div>
                  <h4 className="text-white font-black text-xs tracking-[0.2em] uppercase mb-3 flex items-center gap-2">
                    <span className="w-1 h-4 rounded-full inline-block" style={{ background: "#e8175d" }} />
                    Key Features
                  </h4>
                  <ul className="space-y-1">
                    {selectedProject.features.map((f, i) => (
                      <li key={i} className="text-slate-400 text-sm flex items-start gap-2">
                        <span className="mt-[5px] shrink-0" style={{ color: "#e8175d" }}>▸</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Challenges */}
                <div>
                  <h4 className="text-white font-black text-xs tracking-[0.2em] uppercase mb-2 flex items-center gap-2">
                    <span className="w-1 h-4 rounded-full inline-block" style={{ background: "#a855f7" }} />
                    Challenges
                  </h4>
                  <p className="text-slate-400 text-sm leading-relaxed">{selectedProject.challenges}</p>
                </div>

                {/* Future Plans */}
                <div>
                  <h4 className="text-white font-black text-xs tracking-[0.2em] uppercase mb-2 flex items-center gap-2">
                    <span className="w-1 h-4 rounded-full inline-block" style={{ background: "#38bdf8" }} />
                    Future Plans
                  </h4>
                  <p className="text-slate-400 text-sm leading-relaxed">{selectedProject.improvements}</p>
                </div>

                {/* Buttons */}
                <div className="flex gap-3 pt-2">
                  <a href={selectedProject.liveLink} target="_blank" rel="noreferrer"
                    className="flex-1 py-3 text-white text-sm font-bold text-center rounded-xl transition-all"
                    style={{ background: "linear-gradient(90deg, #e8175d, #c0143c)", boxShadow: "0 4px 20px rgba(232,23,93,0.3)" }}>
                    Live Demo
                  </a>
                  <a href={selectedProject.githubLink} target="_blank" rel="noreferrer"
                    className="flex-1 py-3 text-white text-sm font-bold text-center rounded-xl flex items-center justify-center gap-2 transition-all"
                    style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)" }}
                    onMouseEnter={e => e.currentTarget.style.borderColor = "rgba(232,23,93,0.4)"}
                    onMouseLeave={e => e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)"}
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