import { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  HiOutlineHome,
  HiOutlineCog,
  HiOutlineBriefcase,
  HiOutlineUser,
  HiOutlineDocument,
  HiOutlineChatAlt2,
  HiMenuAlt3,
  HiX,
} from "react-icons/hi";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [tooltip, setTooltip] = useState(null);

  const navItems = [
    { icon: <HiOutlineHome size={20} />,      path: "/",        label: "Home"     },
    { icon: <HiOutlineCog size={20} />,       path: "/skills",  label: "Skills"   },
    { icon: <HiOutlineBriefcase size={20} />, path: "/projects",label: "Projects" },
    { icon: <HiOutlineUser size={20} />,      path: "/about",   label: "About"    },
    { icon: <HiOutlineDocument size={20} />,  path: "/resume",  label: "Resume"   },
    { icon: <HiOutlineChatAlt2 size={20} />,  path: "/contact", label: "Contact"  },
  ];

  return (
    <>
      {/* ── LEFT VERTICAL SIDEBAR (desktop) ── */}
      <aside className="fixed left-0 top-0 h-full w-[78px] z-50 hidden md:flex flex-col items-center"
        style={{ background: "linear-gradient(180deg, #0a1628 0%, #0d1b35 100%)", borderRight: "1px solid rgba(255,255,255,0.06)" }}
      >
        {/* Logo box */}
        <div className="w-full flex items-center justify-center h-[72px] shrink-0"
          style={{ background: "linear-gradient(135deg, #e8175d, #c0143c)", borderBottom: "1px solid rgba(255,255,255,0.1)" }}
        >
          <span className="text-white font-black text-2xl tracking-tight select-none">A</span>
        </div>

        {/* Nav icons */}
        <nav className="flex flex-col items-center gap-1 flex-1 py-6 w-full">
          {navItems.map((item, i) => (
            <div key={i} className="relative w-full flex justify-center"
              onMouseEnter={() => setTooltip(i)}
              onMouseLeave={() => setTooltip(null)}
            >
              <NavLink
                to={item.path}
                end={item.path === "/"}
                className={({ isActive }) =>
                  `w-11 h-11 flex items-center justify-center rounded-xl transition-all duration-300 ${
                    isActive
                      ? "text-white"
                      : "text-slate-500 hover:text-slate-200 hover:bg-white/[0.06]"
                  }`
                }
                style={({ isActive }) => isActive ? {
                  background: "linear-gradient(135deg, rgba(232,23,93,0.25), rgba(232,23,93,0.1))",
                  color: "#e8175d",
                } : {}}
              >
                {item.icon}
              </NavLink>

              {/* Tooltip */}
              <AnimatePresence>
                {tooltip === i && (
                  <motion.span
                    initial={{ opacity: 0, x: -4 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0 }}
                    className="absolute left-[58px] top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-lg text-xs font-semibold text-white pointer-events-none whitespace-nowrap z-50"
                    style={{ background: "#e8175d" }}
                  >
                    {item.label}
                    <span className="absolute left-[-4px] top-1/2 -translate-y-1/2 w-0 h-0 border-t-4 border-b-4 border-r-4 border-t-transparent border-b-transparent" style={{ borderRightColor: "#e8175d" }} />
                  </motion.span>
                )}
              </AnimatePresence>
            </div>
          ))}
        </nav>

        {/* Play button at bottom */}
        <div className="pb-6">
          <button className="w-10 h-10 rounded-full flex items-center justify-center text-white shadow-lg"
            style={{ background: "linear-gradient(135deg, #00c6ff, #0072ff)" }}
          >
            <svg width="12" height="14" viewBox="0 0 12 14" fill="white">
              <path d="M1 1l10 6-10 6V1z"/>
            </svg>
          </button>
        </div>
      </aside>

      {/* ── MOBILE TOP BAR ── */}
      <div className="md:hidden fixed top-0 left-0 w-full z-50 flex items-center justify-between px-5 h-[60px]"
        style={{ background: "#0a1628", borderBottom: "1px solid rgba(255,255,255,0.06)" }}
      >
        <div className="w-8 h-8 rounded flex items-center justify-center" style={{ background: "#e8175d" }}>
          <span className="text-white font-black text-sm">A</span>
        </div>
        <button onClick={() => setMobileOpen(true)} className="text-slate-400">
          <HiMenuAlt3 size={24} />
        </button>
      </div>

      {/* ── MOBILE DRAWER ── */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/70 z-50" onClick={() => setMobileOpen(false)} />
            <motion.div initial={{ x: "-100%" }} animate={{ x: 0 }} exit={{ x: "-100%" }}
              transition={{ type: "tween", duration: 0.26 }}
              className="fixed top-0 left-0 h-full w-64 z-50 flex flex-col"
              style={{ background: "#0a1628", borderRight: "1px solid rgba(255,255,255,0.06)" }}
            >
              <div className="flex items-center justify-between px-6 h-[60px]" style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                <div className="w-8 h-8 rounded flex items-center justify-center" style={{ background: "#e8175d" }}>
                  <span className="text-white font-black text-sm">A</span>
                </div>
                <button onClick={() => setMobileOpen(false)} className="text-slate-400"><HiX size={22} /></button>
              </div>
              <nav className="flex flex-col gap-1 p-4 flex-1">
                {navItems.map((item, i) => (
                  <NavLink key={i} to={item.path} end={item.path === "/"}
                    onClick={() => setMobileOpen(false)}
                    className={({ isActive }) =>
                      `flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                        isActive ? "text-white" : "text-slate-400 hover:text-white hover:bg-white/[0.05]"
                      }`
                    }
                    style={({ isActive }) => isActive ? { background: "rgba(232,23,93,0.2)", color: "#e8175d" } : {}}
                  >
                    {item.icon} {item.label}
                  </NavLink>
                ))}
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;