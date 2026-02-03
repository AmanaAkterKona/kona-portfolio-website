import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CustomCursor = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hover, setHover] = useState(false);
  const [click, setClick] = useState(false);

  useEffect(() => {
    const move = (e) => setPos({ x: e.clientX, y: e.clientY });
    const down = () => {
      setClick(true);
      setTimeout(() => setClick(false), 120);
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mousedown", down);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousedown", down);
    };
  }, []);

  useEffect(() => {
    const enter = () => setHover(true);
    const leave = () => setHover(false);

    document.querySelectorAll("a, button").forEach((el) => {
      el.addEventListener("mouseenter", enter);
      el.addEventListener("mouseleave", leave);
    });

    return () => {
      document.querySelectorAll("a, button").forEach((el) => {
        el.removeEventListener("mouseenter", enter);
        el.removeEventListener("mouseleave", leave);
      });
    };
  }, []);

  return (
    <>
      {/* Animated Gradient Ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        animate={{
          x: pos.x - 20,
          y: pos.y - 20,
          scale: hover ? 1.8 : click ? 0.9 : 1,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <div className="relative w-10 h-10">
          <div
            className="
              absolute inset-0 rounded-full
              bg-gradient-to-tr from-violet-500 via-fuchsia-500 to-orange-400
              opacity-40 blur-md
              animate-pulse
            "
          />
          <div
            className="
              absolute inset-[2px] rounded-full
              border-2 border-transparent
              bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600
              bg-clip-border
              opacity-60
            "
            style={{
              WebkitMask:
                "linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)",
              WebkitMaskComposite: "destination-out",
              maskComposite: "exclude",
            }}
          />
        </div>
      </motion.div>

      {/* Core Dot with Glow */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[10000]"
        animate={{
          x: pos.x - 4,
          y: pos.y - 4,
          scale: click ? 0.5 : hover ? 1.6 : 1,
        }}
        transition={{ type: "spring", stiffness: 600, damping: 25 }}
      >
        <div className="relative">
          <div
            className="
              w-2 h-2 rounded-full
              bg-gradient-to-br from-white via-cyan-300 to-blue-500
              shadow-[0_0_16px_rgba(34,211,238,0.8),0_0_8px_rgba(59,130,246,0.6)]
            "
          />
          <div
            className="
              absolute inset-0 rounded-full
              bg-white opacity-90 blur-[1px]
            "
          />
        </div>
      </motion.div>

      {/* Trailing Particles */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998]"
        animate={{
          x: pos.x - 1,
          y: pos.y - 1,
        }}
        transition={{ type: "spring", stiffness: 80, damping: 15 }}
      >
        <div
          className="
            w-0.5 h-0.5 rounded-full
            bg-gradient-to-r from-pink-400 to-purple-500
            opacity-70 blur-[2px]
          "
        />
      </motion.div>

      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998]"
        animate={{
          x: pos.x - 1.5,
          y: pos.y - 1.5,
        }}
        transition={{ type: "spring", stiffness: 60, damping: 12 }}
      >
        <div
          className="
            w-1 h-1 rounded-full
            bg-gradient-to-r from-blue-400 to-cyan-500
            opacity-50 blur-[3px]
          "
        />
      </motion.div>
    </>
  );
};

export default CustomCursor;