import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaMapMarkerAlt, FaHeadset } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", project: "" });
  const [sent, setSent] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setFormData({ name: "", email: "", phone: "", project: "" });
    setTimeout(() => setSent(false), 3000);
  };

  const inputStyle = {
    width: "100%",
    padding: "15px 18px",
    borderRadius: "8px",
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.12)",
    color: "#fff",
    fontSize: "15px",
    outline: "none",
    transition: "border-color 0.3s ease",
  };

  return (
    <section
      className="relative w-full min-h-screen flex items-center"
      style={{ background: "linear-gradient(135deg, #0a2a3a 0%, #081525 30%, #0d1030 65%, #1a0828 100%)" }}
    >
      {/* CONTACT watermark */}
      <div className="absolute inset-0 flex items-center justify-end overflow-hidden pointer-events-none select-none pr-8">
        <span className="font-black text-white" style={{ fontSize: "20vw", opacity: 0.03, letterSpacing: "-0.05em" }}>
          CONTACT
        </span>
      </div>

      <div className="relative z-10 w-full" style={{ padding: "80px 6vw" }}>
        <div
          className="w-full grid grid-cols-1 lg:grid-cols-2"
          style={{ gap: "5vw", alignItems: "start", maxWidth: "1300px", margin: "0 auto" }}
        >

          {/* ══ LEFT: Form — standalone, no card bg ══ */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            style={{
              background: "rgba(8,18,37,0.6)",
              border: "1px solid rgba(255,255,255,0.07)",
              borderRadius: "16px",
              padding: "clamp(32px, 4vw, 56px)",
              backdropFilter: "blur(16px)",
            }}
          >
            <h2
              className="font-bold text-white"
              style={{ fontSize: "clamp(30px, 3vw, 44px)", fontFamily: "'Syne', sans-serif", lineHeight: 1.2, marginBottom: "16px" }}
            >
              Let's talk?
            </h2>
            <p style={{ color: "rgba(148,163,184,0.8)", fontSize: "14px", lineHeight: 1.8, marginBottom: "28px" }}>
              It's all about the humans behind a brand and those experiencing it.
              I'm right there, ready to bring your ideas to life.
            </p>

            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <input
                type="text" name="name" placeholder="Name" required
                value={formData.name} onChange={handleChange} style={inputStyle}
                onFocus={e => e.target.style.borderColor = "#e8175d"}
                onBlur={e => e.target.style.borderColor = "rgba(255,255,255,0.12)"}
              />
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                <input
                  type="email" name="email" placeholder="Email*" required
                  value={formData.email} onChange={handleChange} style={inputStyle}
                  onFocus={e => e.target.style.borderColor = "#e8175d"}
                  onBlur={e => e.target.style.borderColor = "rgba(255,255,255,0.12)"}
                />
                <input
                  type="tel" name="phone" placeholder="Phone"
                  value={formData.phone} onChange={handleChange} style={inputStyle}
                  onFocus={e => e.target.style.borderColor = "#e8175d"}
                  onBlur={e => e.target.style.borderColor = "rgba(255,255,255,0.12)"}
                />
              </div>
              <textarea
                name="project" placeholder="Tell Us About Project *" required
                rows={5} value={formData.project} onChange={handleChange}
                style={{ ...inputStyle, resize: "none" }}
                onFocus={e => e.target.style.borderColor = "#e8175d"}
                onBlur={e => e.target.style.borderColor = "rgba(255,255,255,0.12)"}
              />
              <div style={{ paddingTop: "6px" }}>
                <motion.button
                  type="submit" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                  style={{
                    padding: "14px 40px",
                    borderRadius: "999px",
                    background: sent ? "rgba(34,197,94,0.9)" : "#e8175d",
                    boxShadow: sent ? "0 8px 24px rgba(34,197,94,0.3)" : "0 8px 28px rgba(232,23,93,0.4)",
                    color: "#fff", fontWeight: 700, fontSize: "13px",
                    letterSpacing: "0.15em", textTransform: "uppercase",
                    border: "none", cursor: "pointer",
                  }}
                >
                  {sent ? "✓ Sent!" : "Send Message"}
                </motion.button>
              </div>
            </form>
          </motion.div>

          {/* ══ RIGHT: Info — standalone, open layout ══ */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            style={{ display: "flex", flexDirection: "column", gap: "0", paddingTop: "8px" }}
          >
            {/* Email */}
            <div style={{ display: "flex", alignItems: "flex-start", gap: "22px", padding: "28px 0" }}>
              <div style={{ width: "60px", height: "60px", borderRadius: "12px", background: "#00b4ff", boxShadow: "0 6px 20px rgba(0,180,255,0.3)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <MdEmail style={{ color: "#fff", fontSize: "26px" }} />
              </div>
              <div style={{ paddingTop: "4px" }}>
                <p style={{ color: "rgba(148,163,184,0.6)", fontSize: "11px", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "8px" }}>My Email</p>
                <p style={{ color: "#fff", fontSize: "16px", fontWeight: 500 }}>proff.kona@gmail.com</p>
              </div>
            </div>

            <div style={{ height: "1px", background: "rgba(255,255,255,0.07)" }} />

            {/* Address */}
            <div style={{ display: "flex", alignItems: "flex-start", gap: "22px", padding: "28px 0" }}>
              <div style={{ width: "60px", height: "60px", borderRadius: "12px", background: "#e8175d", boxShadow: "0 6px 20px rgba(232,23,93,0.3)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <FaMapMarkerAlt style={{ color: "#fff", fontSize: "22px" }} />
              </div>
              <div style={{ paddingTop: "4px" }}>
                <p style={{ color: "rgba(148,163,184,0.6)", fontSize: "11px", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "8px" }}>Address</p>
                <p style={{ color: "#fff", fontSize: "16px", fontWeight: 500, lineHeight: 1.6 }}>
                  Shymoli, Dhaka,<br />Bangladesh
                </p>
              </div>
            </div>

            <div style={{ height: "1px", background: "rgba(255,255,255,0.07)" }} />

            {/* Phone */}
            <div style={{ display: "flex", alignItems: "flex-start", gap: "22px", padding: "28px 0" }}>
              <div style={{ width: "60px", height: "60px", borderRadius: "12px", background: "#f59e0b", boxShadow: "0 6px 20px rgba(245,158,11,0.3)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <FaHeadset style={{ color: "#fff", fontSize: "24px" }} />
              </div>
              <div style={{ paddingTop: "4px" }}>
                <p style={{ color: "rgba(148,163,184,0.6)", fontSize: "11px", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "8px" }}>Phone</p>
                <p style={{ color: "#fff", fontSize: "16px", fontWeight: 500 }}>+880 1796575129</p>
                <p style={{ color: "rgba(148,163,184,0.55)", fontSize: "13px", marginTop: "4px" }}>Available: 9AM – 6PM BST</p>
              </div>
            </div>

            <div style={{ height: "1px", background: "rgba(255,255,255,0.07)" }} />

            {/* Social */}
            <div style={{ display: "flex", gap: "12px", paddingTop: "28px" }}>
              {[
                { icon: <FaGithub size={17} />,   href: "https://github.com/AmanaAkterKona" },
                { icon: <FaLinkedin size={17} />, href: "https://www.linkedin.com/in/amena-akter-kona/" },
                { icon: <MdEmail size={19} />,    href: "mailto:proff.kona@gmail.com" },
              ].map((s, i) => (
                <motion.a key={i} href={s.href} target="_blank" rel="noreferrer"
                  whileHover={{ y: -4, scale: 1.1 }}
                  style={{ width: "44px", height: "44px", borderRadius: "50%", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "rgba(148,163,184,0.7)", transition: "all 0.3s" }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(232,23,93,0.5)"; e.currentTarget.style.color = "#fff"; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"; e.currentTarget.style.color = "rgba(148,163,184,0.7)"; }}
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

        </div>
      </div>

      {copied && (
        <div className="fixed bottom-10 right-10 z-50 px-6 py-3 rounded-lg text-sm text-white font-semibold"
          style={{ background: "rgba(34,197,94,0.9)", backdropFilter: "blur(8px)" }}>
          ✓ Copied!
        </div>
      )}
    </section>
  );
};

export default Contact;