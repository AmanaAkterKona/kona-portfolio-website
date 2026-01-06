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
      setTimeout(() => setClick(false), 160);
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
      {/* Outer Soft Ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        animate={{
          x: pos.x - 26,
          y: pos.y - 26,
          scale: hover ? 1.5 : click ? 1.8 : 1,
          opacity: 0.55,
        }}
        transition={{ type: "spring", stiffness: 160, damping: 22 }}
      >
        <div
          className="
            w-14 h-14 rounded-full
            bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500
            blur-xl
          "
        />
      </motion.div>

      {/* Inner Colorful Point */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[10000]"
        animate={{
          x: pos.x - 6,
          y: pos.y - 6,
          scale: click ? 0.7 : hover ? 1.4 : 1,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      >
        <div
          className="
            w-3 h-3 rounded-full
            bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600
            shadow-[0_0_12px_rgba(99,102,241,0.9)]
          "
        />
      </motion.div>
    </>
  );
};

export default CustomCursor;
