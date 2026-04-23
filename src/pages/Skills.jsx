import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaCode, FaReact, FaJs, FaHtml5,
  FaNodeJs, FaGithub, FaFigma, FaPaperPlane, FaTools, FaTrophy, FaExternalLinkAlt
} from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiTypescript, SiNextdotjs, SiExpress } from 'react-icons/si';
import { HiAcademicCap } from 'react-icons/hi';

const skillsData = [
  { name: 'React',      level: 92, icon: <FaReact />,       color: '#61dafb' },
  { name: 'Tailwind',   level: 90, icon: <SiTailwindcss />, color: '#38bdf8' },
  { name: 'JavaScript', level: 85, icon: <FaJs />,          color: '#f7df1e' },
  { name: 'TypeScript', level: 75, icon: <SiTypescript />,  color: '#3178c6' },
  { name: 'HTML / CSS', level: 98, icon: <FaHtml5 />,       color: '#f97316' },
  { name: 'Next.js',    level: 70, icon: <SiNextdotjs />,   color: '#ffffff' },
  { name: 'Node.js',    level: 72, icon: <FaNodeJs />,      color: '#6cc24a' },
  { name: 'MongoDB',    level: 68, icon: <SiMongodb />,     color: '#47a248' },
  { name: 'Express.js', level: 70, icon: <SiExpress />,     color: '#cccccc' },
];

const toolsData = [
  { name: 'Git & GitHub', icon: <FaGithub />,    color: '#ffffff' },
  { name: 'Figma',        icon: <FaFigma />,      color: '#e85c5c' },
  { name: 'VS Code',      icon: <FaCode />,       color: '#38bdf8' },
  { name: 'Postman',      icon: <FaPaperPlane />, color: '#f97316' },
  { name: 'Workflow',     icon: <FaTools />,      color: '#e8175d' },
];

const educationData = [
  {
    id: 1,
    title: 'HSC — Science',
    institution: 'Shafipur Ideal Public College',
    year: '2020 - 2022',
    description: 'Higher Secondary Certificate in Science group with a strong foundation in Physics, Chemistry and Mathematics.',
    certificateUrl: null,
    certificateLabel: 'View Certificate',
  },
  {
    id: 2,
    title: 'Complete Web Development',
    institution: 'Programming Hero',
    year: '6 Months · 2025',
    description: 'Intensive full-stack bootcamp covering React, Node.js, MongoDB, Express and modern frontend development.',
    certificateUrl: 'https://drive.google.com/file/d/102QoV_TtdP8ZUfTm-r5O56gBG1i1Coe4/view?usp=sharing',
    certificateLabel: 'View Certificate',
  },
  {
    id: 3,
    title: 'Recommendation Letter',
    institution: 'Programming Hero',
    year: 'End Game · Best Score',
    description: 'Earned a recommendation letter by achieving the best score in the End Game — the final milestone of the course.',
    certificateUrl: 'https://drive.google.com/file/d/1jimNuMYjH9KDlspop_uLxnYHFZ7yRI8B/view?usp=sharing',
    certificateLabel: 'View Letter',
  },
];

const CATS = [
  { label: 'Skills',    num: '01' },
  { label: 'Tools',     num: '02' },
  { label: 'Education', num: '03' },
];

const Skills = () => {
  const [active, setActive] = useState('Skills');
  const [toolHover, setToolHover] = useState(null);

  return (
    <section
      className="relative w-full min-h-screen flex flex-col items-center py-16 sm:py-20 px-3 sm:px-6 md:pl-[98px] overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #060e22 0%, #0a1628 50%, #0d1b38 100%)' }}
    >
      {/* bg glows */}
      <div className="absolute bottom-0 left-1/4 w-[300px] sm:w-[700px] h-[200px] sm:h-[400px] rounded-full pointer-events-none opacity-20"
        style={{ background: 'radial-gradient(ellipse, rgba(232,23,93,0.5) 0%, transparent 70%)' }} />
      <div className="absolute top-20 right-1/4 w-[200px] sm:w-[500px] h-[150px] sm:h-[300px] rounded-full pointer-events-none opacity-10"
        style={{ background: 'radial-gradient(ellipse, rgba(56,189,248,0.4) 0%, transparent 70%)' }} />

      <div className="w-full max-w-6xl flex flex-col items-center relative z-10">

        {/* ── Tab ── */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center rounded-full relative z-20"
          style={{
            background: 'rgba(8,16,34,0.98)',
            border: '1px solid rgba(255,255,255,0.1)',
            padding: '5px',
            marginBottom: '-22px',
            boxShadow: '0 4px 32px rgba(0,0,0,0.5)',
          }}
        >
          {CATS.map(({ label, num }) => (
            <button
              key={label}
              onClick={() => setActive(label)}
              className="flex items-center gap-1 sm:gap-3 px-3 sm:px-6 md:px-8 py-[9px] sm:py-[11px] rounded-full font-black tracking-[0.1em] sm:tracking-[0.2em] uppercase transition-all duration-300"
              style={{
                fontSize: 'clamp(10px, 2vw, 13px)',
                background: active === label ? 'linear-gradient(90deg, #e8175d, #c0143c)' : 'transparent',
                color: active === label ? '#fff' : 'rgba(148,163,184,0.55)',
              }}
            >
              <span>{label}</span>
              <span
                className="flex items-center justify-center w-5 h-5 sm:w-7 sm:h-7 rounded-full font-black"
                style={{
                  fontSize: 'clamp(9px, 1.5vw, 11px)',
                  background: active === label ? 'rgba(255,255,255,0.22)' : 'rgba(255,255,255,0.05)',
                  color: active === label ? '#fff' : 'rgba(148,163,184,0.4)',
                }}
              >
                {num}
              </span>
            </button>
          ))}
        </motion.div>

        {/* ── Card ── */}
        <div
          className="w-full rounded-2xl"
          style={{
            background: 'rgba(7,15,32,0.92)',
            border: '1px solid rgba(255,255,255,0.07)',
            boxShadow: '0 8px 48px rgba(0,0,0,0.4)',
          }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
              className="p-5 sm:p-8 md:p-14"
              style={{ paddingTop: 'clamp(40px, 6vw, 56px)' }}
            >

              {/* ── 01 Skills ── */}
              {active === 'Skills' && (
                <div className="flex flex-col gap-4 sm:gap-6">
                  <p className="text-[10px] font-black tracking-[0.35em] uppercase mb-1" style={{ color: '#e8175d' }}>
                    Skills
                  </p>
                  {skillsData.map((skill, i) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.055 }}
                      className="flex items-center gap-3 sm:gap-6"
                    >
                      {/* Icon */}
                      <div
                        className="w-9 h-9 sm:w-12 sm:h-12 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{
                          fontSize: 'clamp(14px, 2.5vw, 20px)',
                          background: `linear-gradient(135deg, ${skill.color}28, ${skill.color}0d)`,
                          border: `1.5px solid ${skill.color}44`,
                          color: skill.color,
                        }}
                      >
                        {skill.icon}
                      </div>

                      {/* Name */}
                      <span
                        className="font-black text-white flex-shrink-0"
                        style={{
                          fontSize: 'clamp(12px, 2vw, 16px)',
                          width: 'clamp(80px, 15vw, 145px)',
                          letterSpacing: '0.02em',
                        }}
                      >
                        {skill.name}
                      </span>

                      {/* % */}
                      <span
                        className="font-black flex-shrink-0 text-right hidden sm:block"
                        style={{ color: '#fff', fontSize: 'clamp(14px, 2.5vw, 19px)', fontFamily: 'monospace', width: '52px' }}
                      >
                        {skill.level}%
                      </span>

                      {/* Bar */}
                      <div className="flex-1 h-[5px] sm:h-[6px] rounded-full overflow-hidden"
                        style={{ background: 'rgba(255,255,255,0.06)' }}>
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1.1, delay: 0.1 + i * 0.055, ease: 'easeOut' }}
                          viewport={{ once: true }}
                          className="h-full rounded-full"
                          style={{
                            background: 'linear-gradient(90deg, #e8175d 55%, rgba(232,23,93,0.25) 100%)',
                            boxShadow: '0 0 10px rgba(232,23,93,0.45)',
                          }}
                        />
                      </div>

                      {/* % mobile only */}
                      <span
                        className="font-black flex-shrink-0 sm:hidden"
                        style={{ color: '#fff', fontSize: '12px', fontFamily: 'monospace', minWidth: '38px', textAlign: 'right' }}
                      >
                        {skill.level}%
                      </span>
                    </motion.div>
                  ))}
                </div>
              )}

              {/* ── 02 Tools ── */}
              {active === 'Tools' && (
                <div>
                  <p className="text-[10px] font-black tracking-[0.35em] uppercase mb-6 sm:mb-8" style={{ color: '#e8175d' }}>
                    Tools & Workflow
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                    {toolsData.map((tool, i) => (
                      <motion.div
                        key={tool.name}
                        initial={{ opacity: 0, y: 14 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.08 }}
                        onMouseEnter={() => setToolHover(i)}
                        onMouseLeave={() => setToolHover(null)}
                        className="flex items-center gap-3 sm:gap-4 px-4 sm:px-6 py-4 sm:py-5 rounded-xl transition-all duration-300 cursor-default"
                        style={{
                          background: toolHover === i
                            ? `linear-gradient(135deg, ${tool.color}12, rgba(7,15,32,0.9))`
                            : 'rgba(255,255,255,0.03)',
                          border: `1px solid ${toolHover === i ? tool.color + '44' : 'rgba(255,255,255,0.08)'}`,
                          transform: toolHover === i ? 'translateY(-3px)' : 'translateY(0)',
                          boxShadow: toolHover === i ? `0 8px 24px ${tool.color}18` : 'none',
                        }}
                      >
                        <div
                          className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center flex-shrink-0"
                          style={{
                            fontSize: 'clamp(16px, 2.5vw, 20px)',
                            background: `linear-gradient(135deg, ${tool.color}28, ${tool.color}0d)`,
                            border: `1.5px solid ${tool.color}55`,
                            color: tool.color,
                          }}
                        >
                          {tool.icon}
                        </div>
                        <span className="font-black text-white" style={{ fontSize: 'clamp(13px, 2vw, 16px)' }}>
                          {tool.name}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              {/* ── 03 Education ── */}
              {active === 'Education' && (
                <div>
                  <p className="text-[10px] font-black tracking-[0.35em] uppercase mb-6 sm:mb-8" style={{ color: '#e8175d' }}>
                    Education & Achievements
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8 sm:gap-y-10">
                    {educationData.map((item, i) => (
                      <motion.div
                        key={item.id}
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="flex gap-3 sm:gap-5"
                      >
                        {/* dot + line */}
                        <div className="flex flex-col items-center flex-shrink-0">
                          <div
                            className="w-3 h-3 sm:w-4 sm:h-4 rounded-full border-2 mt-1 flex-shrink-0"
                            style={{ borderColor: '#e8175d', background: 'transparent' }}
                          />
                          <div
                            className="flex-1 w-[2px] mt-2"
                            style={{ background: 'linear-gradient(180deg, rgba(232,23,93,0.4) 0%, transparent 100%)' }}
                          />
                        </div>

                        {/* content */}
                        <div className="flex flex-col gap-2 pb-2">
                          <h3 className="text-white font-black leading-tight"
                            style={{ fontSize: 'clamp(15px, 2.5vw, 19px)' }}>
                            {item.title}
                          </h3>
                          <p className="font-bold uppercase tracking-widest"
                            style={{ color: 'rgba(148,163,184,0.55)', fontSize: 'clamp(9px, 1.5vw, 11px)' }}>
                            {item.institution}
                          </p>
                          <span
                            className="self-start font-black px-2 sm:px-3 py-1 rounded-sm"
                            style={{ fontSize: 'clamp(11px, 1.8vw, 13px)', background: '#e8175d', color: '#fff' }}
                          >
                            {item.year}
                          </span>
                          <p style={{ color: 'rgba(148,163,184,0.55)', fontSize: 'clamp(12px, 1.8vw, 14px)', lineHeight: '1.75' }}>
                            {item.description}
                          </p>
                          <a
                            href={item.certificateUrl || '#'}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={e => !item.certificateUrl && e.preventDefault()}
                            className="self-start flex items-center gap-2 mt-1 px-3 sm:px-4 py-2 rounded-lg font-black tracking-widest uppercase transition-all duration-300"
                            style={{
                              fontSize: 'clamp(9px, 1.5vw, 11px)',
                              background: item.certificateUrl ? 'rgba(232,23,93,0.15)' : 'rgba(255,255,255,0.03)',
                              border: `1px solid ${item.certificateUrl ? 'rgba(232,23,93,0.4)' : 'rgba(255,255,255,0.08)'}`,
                              color: item.certificateUrl ? '#e8175d' : 'rgba(148,163,184,0.25)',
                              cursor: item.certificateUrl ? 'pointer' : 'not-allowed',
                            }}
                          >
                            <FaExternalLinkAlt style={{ fontSize: '9px' }} />
                            {item.certificateUrl ? item.certificateLabel : 'Coming Soon'}
                          </a>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Skills;