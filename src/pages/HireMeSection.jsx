import React, { useState } from 'react';
import men from "../assets/men.png";
import line from "../assets/line2.png";

const HireMeSection = () => {
  const [hovered, setHovered] = useState(false);

  const phoneNumber = "8801796575129";
  const message = "Hi, I'm interested in your work. Can we talk?";

  const handleHireMe = () => {
    const encodedMsg = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMsg}`, "_blank");
  };

  const BtnStyle = {
    color: "white",
    fontWeight: "bold",
    borderRadius: "9999px",
    border: "none",
    cursor: "pointer",
    position: "relative",
    overflow: "hidden",
    background: hovered ? "linear-gradient(90deg, #0ea5e9, #38bdf8)" : "linear-gradient(90deg, #ff0055, #e8175d)",
    boxShadow: hovered ? "0 10px 40px rgba(14,165,233,0.6)" : "0 10px 35px rgba(232,23,93,0.5)",
    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
    transform: hovered ? "scale(1.07)" : "scale(1)",
  };

  return (
    <section
      className="w-full py-28 md:py-36 px-6 md:px-16 md:pl-[110px] lg:pl-24 relative"
      style={{
      background: "linear-gradient(135deg, #060e22 0%, #0a1628 40%, #0d1b38 70%, #1a0a2e 100%)",
        overflow: "hidden",
      }}
    >
      {/* dot grid */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.7) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
      <div className="absolute top-0 left-0 w-[600px] h-[400px] rounded-full opacity-20 pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(0,180,200,0.2) 0%, transparent 70%)" }} />
      <div className="absolute bottom-0 right-0 w-[600px] h-[400px] rounded-full opacity-20 pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(232,23,93,0.2) 0%, transparent 70%)" }} />

      <div className="max-w-[1520px] mx-auto w-full">
        <div className="relative" style={{ overflow: "visible" }}>

          {/* Line decoration */}
          <img src={line} alt="decoration"
            className="pointer-events-none opacity-90 hidden sm:block"
            style={{ position: "absolute", top: "-45px", right: "-70px", width: "280px", zIndex: 20 }}
          />

          {/* Card */}
          <div style={{
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.05)",
            backdropFilter: "blur(10px)",
            overflow: "visible",
            position: "relative",
            
          }}>

            {/* ── lg+ : original absolute layout ── */}
            <div className="hidden xl:block" style={{ minHeight: "560px" }}>
              {/* Men image */}
              <div className="absolute bottom-0 left-0 z-10"
                style={{ marginLeft: "-100px", marginBottom: "-55px" }}>
                <img src={men} alt="Men working on laptop" className="object-contain"
                  style={{ width: "650px", maxWidth: "100%" }} />
              </div>
              {/* Text + Button */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-20">
                <h1 className="font-semibold text-white leading-tight mb-12 tracking-tight"
                  style={{ fontSize: "clamp(22px, 4vw, 62px)" }}>
                  I'm{" "}
                  <span className="relative inline-block text-white">
                    Available
                    <span className="absolute left-0 w-full rounded-full"
                      style={{ bottom: "4px", height: "6px", background: "#E91E63" }} />
                  </span>
                  {" "}For<br />Development Work
                </h1>
                <button onClick={handleHireMe}
                  onMouseEnter={() => setHovered(true)}
                  onMouseLeave={() => setHovered(false)}
                  style={{ ...BtnStyle, padding: "20px 64px", fontSize: "clamp(16px, 2vw, 22px)" }}>
                  <span style={{
                    position: "absolute", inset: 0,
                    background: hovered ? "linear-gradient(120deg, transparent 30%, rgba(255,255,255,0.2) 50%, transparent 70%)" : "none",
                    transform: hovered ? "translateX(100%)" : "translateX(-100%)",
                    transition: "transform 0.6s ease", pointerEvents: "none",
                  }} />
                  Hire Me Now
                </button>
              </div>
            </div>

            {/* ── below lg : column layout — text top, image bottom ── */}
            <div className="flex xl:hidden flex-col items-center text-center z-20 py-12 px-6 gap-8">
              <h1 className="font-semibold text-white leading-tight tracking-tight"
                style={{ fontSize: "clamp(22px, 5vw, 44px)" }}>
                I'm{" "}
                <span className="relative inline-block text-white">
                  Available
                  <span className="absolute left-0 w-full rounded-full"
                    style={{ bottom: "3px", height: "5px", background: "#E91E63" }} />
                </span>
                {" "}For<br />Development Work
              </h1>
              <button onClick={handleHireMe}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                style={{ ...BtnStyle, padding: "16px 48px", fontSize: "clamp(14px, 2.5vw, 18px)" }}>
                Hire Me Now
              </button>
              <img src={men} alt="Men working on laptop" className="object-contain"
                style={{ width: "clamp(180px, 55vw, 360px)" }} />
            </div>

          </div>
        </div>
      </div>

      {/* <div className="h-24" /> */}
    </section>
  );
};

export default HireMeSection;