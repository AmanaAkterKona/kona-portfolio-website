import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaMapMarkerAlt, FaHeadset } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", project: "" });
  const [sent, setSent] = useState(false);
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send(
      "service_qtilw4l",
      "template_kamdaxc",
      {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        message: formData.project,
      },
      "gHwV8SW9Bl7JvY-iv"
    ).then(() => {
      setSent(true);
      setLoading(false);
      setFormData({ name: "", email: "", phone: "", project: "" });
      setTimeout(() => setSent(false), 3000);
    }).catch((err) => {
      setLoading(false);
      console.error("Failed:", err);
      alert("Message send failed. Please try again.");
    });
  };

  const inputStyle = {
    width: "100%",
    padding: "13px 16px",
    borderRadius: "8px",
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.12)",
    color: "#fff",
    fontSize: "14px",
    outline: "none",
    transition: "border-color 0.3s ease",
  };

  const infoItems = [
    {
      icon: <MdEmail style={{ color: "#fff", fontSize: "24px" }} />,
      bg: "#00b4ff",
      shadow: "rgba(0,180,255,0.3)",
      label: "My Email",
      value: "proff.kona@gmail.com",
      sub: null,
    },
    {
      icon: <FaMapMarkerAlt style={{ color: "#fff", fontSize: "20px" }} />,
      bg: "#e8175d",
      shadow: "rgba(232,23,93,0.3)",
      label: "Address",
      value: "Shymoli, Dhaka, Bangladesh",
      sub: null,
    },
    {
      icon: <FaHeadset style={{ color: "#fff", fontSize: "22px" }} />,
      bg: "#f59e0b",
      shadow: "rgba(245,158,11,0.3)",
      label: "Phone",
      value: "+880 1796575129",
      sub: "Available: 9AM – 6PM BST",
    },
  ];

  return (
    <section
      className="relative w-full flex items-center"
      style={{ background: "linear-gradient(135deg, #0a2a3a 0%, #081525 30%, #0d1030 65%, #1a0828 100%)" }}
    >
      {/* CONTACT watermark */}
      <div className="absolute inset-0 flex items-center justify-end overflow-hidden pointer-events-none select-none pr-4 sm:pr-8">
        <span className="font-black text-white" style={{ fontSize: "clamp(80px, 18vw, 20vw)", opacity: 0.03, letterSpacing: "-0.05em" }}>
          CONTACT
        </span>
      </div>

      <div className="relative z-10 w-full px-4 sm:px-8 md:pl-[98px] lg:px-[6vw] py-16 sm:py-20 md:py-24">
        <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-[5vw] items-start">

          {/* ══ LEFT: Form ══ */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            style={{
              background: "rgba(8,18,37,0.6)",
              border: "1px solid rgba(255,255,255,0.07)",
              borderRadius: "16px",
              padding: "clamp(24px, 4vw, 52px)",
              backdropFilter: "blur(16px)",
            }}
          >
            <h2
              className="font-bold text-white"
              style={{ fontSize: "clamp(26px, 3.5vw, 44px)", fontFamily: "'Syne', sans-serif", lineHeight: 1.2, marginBottom: "12px" }}
            >
              Let's talk?
            </h2>
            <p style={{ color: "rgba(148,163,184,0.8)", fontSize: "13px", lineHeight: 1.8, marginBottom: "24px" }}>
              It's all about the humans behind a brand and those experiencing it.
              I'm right there, ready to bring your ideas to life.
            </p>

            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <input
                type="text" name="name" placeholder="Name" required
                value={formData.name} onChange={handleChange} style={inputStyle}
                onFocus={e => e.target.style.borderColor = "#e8175d"}
                onBlur={e => e.target.style.borderColor = "rgba(255,255,255,0.12)"}
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-[10px]">
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
                  type="submit"
                  disabled={loading}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  style={{
                    padding: "13px 36px",
                    borderRadius: "999px",
                    background: sent ? "rgba(34,197,94,0.9)" : loading ? "rgba(232,23,93,0.6)" : "#e8175d",
                    boxShadow: sent ? "0 8px 24px rgba(34,197,94,0.3)" : "0 8px 28px rgba(232,23,93,0.4)",
                    color: "#fff", fontWeight: 700, fontSize: "12px",
                    letterSpacing: "0.15em", textTransform: "uppercase",
                    border: "none", cursor: loading ? "not-allowed" : "pointer",
                  }}
                >
                  {sent ? "✓ Sent!" : loading ? "Sending..." : "Send Message"}
                </motion.button>
              </div>
            </form>
          </motion.div>

          {/* ══ RIGHT: Info ══ */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="flex flex-col"
          >
            {infoItems.map((item, i) => (
              <div key={i}>
                <div className="flex items-start gap-4 sm:gap-6 py-6 sm:py-7">
                  <div
                    className="flex-shrink-0 flex items-center justify-center rounded-xl"
                    style={{
                      width: "clamp(48px, 6vw, 60px)",
                      height: "clamp(48px, 6vw, 60px)",
                      background: item.bg,
                      boxShadow: `0 6px 20px ${item.shadow}`,
                    }}
                  >
                    {item.icon}
                  </div>
                  <div className="pt-1">
                    <p style={{ color: "rgba(148,163,184,0.6)", fontSize: "10px", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "6px" }}>
                      {item.label}
                    </p>
                    <p style={{ color: "#fff", fontSize: "clamp(13px, 2vw, 16px)", fontWeight: 500, lineHeight: 1.5 }}>
                      {item.value}
                    </p>
                    {item.sub && (
                      <p style={{ color: "rgba(148,163,184,0.55)", fontSize: "12px", marginTop: "3px" }}>
                        {item.sub}
                      </p>
                    )}
                  </div>
                </div>
                {i < infoItems.length - 1 && (
                  <div style={{ height: "1px", background: "rgba(255,255,255,0.07)" }} />
                )}
              </div>
            ))}

            <div style={{ height: "1px", background: "rgba(255,255,255,0.07)", marginBottom: "24px" }} />

            <div className="flex gap-3">
              {[
                { icon: <FaGithub size={17} />,   href: "https://github.com/AmanaAkterKona" },
                { icon: <FaLinkedin size={17} />, href: "https://www.linkedin.com/in/amena-akter-kona/" },
                { icon: <MdEmail size={19} />,    href: "mailto:proff.kona@gmail.com" },
              ].map((s, i) => (
                <motion.a
                  key={i} href={s.href} target="_blank" rel="noreferrer"
                  whileHover={{ y: -4, scale: 1.1 }}
                  className="flex items-center justify-center rounded-full transition-all duration-300"
                  style={{
                    width: "42px", height: "42px",
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    color: "rgba(148,163,184,0.7)",
                  }}
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
        <div className="fixed bottom-6 right-6 z-50 px-5 py-3 rounded-lg text-sm text-white font-semibold"
          style={{ background: "rgba(34,197,94,0.9)", backdropFilter: "blur(8px)" }}>
          ✓ Copied!
        </div>
      )}
    </section>
  );
};

export default Contact;