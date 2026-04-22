import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight, FaUser, FaClock, FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import project2Img from "../assets/Screenshot_108.png";
import project3Img from "../assets/Screenshot_107.png";
import project5Img from "../assets/Screenshot_111.png";
import projectGadgetTechImg from "../assets/Screenshot_35.png";

const projectsData = [
  {
    name: "Scholar Stream",
    image: project2Img,
    description: "A full-stack scholarship management system that enables students to discover and apply for scholarships while providing role-based dashboards for admins and moderators.",
    liveLink: "https://scholar-stream-3e2fc.web.app",
    githubLink: "https://github.com/AmanaAkterKona/scholar-stream-client.git",
    duration: "1 Month",
    role: "Full Stack Developer",
    techStack: ["React", "Tailwind", "Firebase", "Node.js", "MongoDB"],
  },
  {
    name: "FinEase",
    image: project3Img,
    description: "A full-stack personal finance management system that helps users track income, expenses, and overall financial health with real-time insights and interactive dashboards.",
    liveLink: "https://personal-finance-4dfd1.web.app/",
    githubLink: "https://github.com/AmanaAkterKona/personal-finance-management-client.git",
    duration: "3 Weeks",
    role: "Full Stack Developer",
    techStack: ["React", "Tailwind", "Firebase", "JWT", "MongoDB", "Recharts"],
  },
  {
    name: "SkillVoyager.AI",
    image: project5Img,
    description: "An AI-powered learning and career roadmap platform that analyzes user skills, identifies gaps, and generates personalized, adaptive learning paths with progress tracking.",
    liveLink: "https://skill-voyager-ai.vercel.app/",
    githubLink: "https://github.com/muhammadMilon/SkillVoyager.AI",
    duration: "8 Weeks",
    role: "Full Stack Developer",
    techStack: ["React 19", "TypeScript", "Tailwind", "Firebase", "Node.js"],
  },
  {
    name: "Gadget Tech",
    image: projectGadgetTechImg,
    description: "A modern full-featured e-commerce web application for gadgets with authentication, admin product management, and a smooth shopping experience.",
    liveLink: "https://gadget-tech-two.vercel.app/",
    githubLink: "https://github.com/AmanaAkterKona/gadget-tech.git",
    duration: "4 Weeks",
    role: "Full Stack Developer",
    techStack: ["Next.js 14", "React", "Tailwind", "REST API", "Vercel"],
  },
];

const ProjectsCarousel = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [paused, setPaused] = useState(false);

  const go = (dir) => {
    setDirection(dir);
    setCurrent((prev) => (prev + dir + projectsData.length) % projectsData.length);
  };

  // ── Auto-play: প্রতি 3.5 সেকেন্ডে next, hover করলে pause ──
  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % projectsData.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [paused, current]);

  const project = projectsData[current];

  return (
    <section
      className="w-full py-28 px-6 md:px-16 lg:px-28"
      style={{ background: "linear-gradient(135deg, #060e22 0%, #0a1628 50%, #0d1b38 100%)" }}
    >
      {/* Header */}
      <div className="text-center mb-16">
        <p className="font-bold tracking-[0.4em] uppercase text-xs mb-3">
          <span style={{ color: "#6ec6f5" }}>MY </span>
          <span style={{ color: "#e8175d" }}>PROJECTS</span>
        </p>
        <h2 className="text-4xl md:text-5xl font-black text-white mb-4"
          style={{ fontFamily: "'Syne', sans-serif" }}>
          Featured Projects
        </h2>
        <div className="mx-auto" style={{ width: "44px", height: "3px", background: "#e8175d", borderRadius: "2px" }} />
      </div>

      {/* Carousel */}
      <div className="max-w-6xl mx-auto">
        <div
          className="relative"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Main card */}
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              variants={{
                enter: (d) => ({ opacity: 0, x: d > 0 ? 100 : -100 }),
                center: { opacity: 1, x: 0 },
                exit:  (d) => ({ opacity: 0, x: d > 0 ? -100 : 100 }),
              }}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.45, ease: "easeInOut" }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden"
              style={{ border: "1px solid rgba(255,255,255,0.07)", minHeight: "460px" }}
            >
              {/* Image — left, taller */}
              <div className="relative overflow-hidden" style={{ minHeight: "420px" }}>
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover"
                  style={{ filter: "brightness(0.88)" }}
                />
                <div className="absolute inset-0 hidden lg:block"
                  style={{ background: "linear-gradient(90deg, transparent 55%, rgba(9,19,36,1) 100%)" }} />
              </div>

              {/* Content — right */}
              <div
                className="flex flex-col justify-center px-12 py-14"
                style={{ background: "linear-gradient(135deg, #0d1b35, #091324)" }}
              >
                {/* Number */}
                <p className="text-xs font-bold tracking-widest uppercase mb-4"
                  style={{ color: "#e8175d" }}>
                  {String(current + 1).padStart(2, "0")} / {String(projectsData.length).padStart(2, "0")}
                </p>

                {/* Title */}
                <h3 className="text-3xl md:text-4xl font-black text-white mb-5 leading-tight"
                  style={{ fontFamily: "'Syne', sans-serif" }}>
                  {project.name}
                </h3>

                {/* Meta */}
                <div className="flex items-center gap-5 text-xs text-slate-500 mb-5">
                  <span className="flex items-center gap-1.5">
                    <FaUser style={{ color: "#e8175d" }} /> {project.role}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <FaClock style={{ color: "#6ec6f5" }} /> {project.duration}
                  </span>
                </div>

                {/* Description */}
                <p className="text-slate-400 text-sm leading-relaxed mb-7">{project.description}</p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 mb-9">
                  {project.techStack.map((t, i) => (
                    <span key={i}
                      className="text-[10px] font-bold uppercase px-3 py-1 rounded-full tracking-widest"
                      style={{ background: "rgba(232,23,93,0.1)", color: "#e8175d", border: "1px solid rgba(232,23,93,0.2)" }}>
                      {t}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-3">
                  <a href={project.liveLink} target="_blank" rel="noreferrer"
                    className="flex items-center gap-2 px-7 py-3 rounded-full text-xs font-bold text-white tracking-widest uppercase transition-all"
                    style={{ background: "linear-gradient(90deg, #e8175d, #c0143c)", boxShadow: "0 4px 20px rgba(232,23,93,0.35)" }}>
                    <FaExternalLinkAlt size={10} /> Live Demo
                  </a>
                  <a href={project.githubLink} target="_blank" rel="noreferrer"
                    className="flex items-center gap-2 px-7 py-3 rounded-full text-xs font-bold text-slate-300 hover:text-white tracking-widest uppercase transition-all"
                    style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)" }}>
                    <FaGithub /> GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Arrow buttons */}
          <button onClick={() => { setPaused(true); go(-1); }}
            className="absolute -left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center text-white z-10 shadow-2xl transition-transform hover:scale-110"
            style={{ background: "linear-gradient(135deg, #e8175d, #c0143c)" }}>
            <FaChevronLeft size={15} />
          </button>
          <button onClick={() => { setPaused(true); go(1); }}
            className="absolute -right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center text-white z-10 shadow-2xl transition-transform hover:scale-110"
            style={{ background: "linear-gradient(135deg, #e8175d, #c0143c)" }}>
            <FaChevronRight size={15} />
          </button>
        </div>

        {/* Progress bar + dots */}
        <div className="flex flex-col items-center gap-4 mt-10">
          {/* Auto-play progress bar */}
          {!paused && (
            <div className="w-48 h-[3px] rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.1)" }}>
              <motion.div
                key={current}
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 3.5, ease: "linear" }}
                className="h-full rounded-full"
                style={{ background: "#e8175d" }}
              />
            </div>
          )}

          {/* Dot indicators */}
          <div className="flex justify-center gap-2">
            {projectsData.map((_, i) => (
              <button key={i}
                onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); setPaused(true); }}
                className="rounded-full transition-all duration-300"
                style={{
                  width: i === current ? "28px" : "8px",
                  height: "8px",
                  background: i === current ? "#e8175d" : "rgba(255,255,255,0.2)",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsCarousel;