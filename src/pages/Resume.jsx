// src/pages/Resume.jsx
import React from "react";

const Resume = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6 md:p-12 font-sans text-gray-800">
      {/* Container */}
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-8 flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold">Amana Akter</h1>
            <p className="text-lg md:text-xl mt-1">MERN Stack Developer</p>
          </div>
          <div className="mt-4 md:mt-0">
            <a
              href="/resume.pdf"
              target="_blank"
              className="px-6 py-2 bg-white text-blue-600 font-semibold rounded-lg shadow-md hover:bg-gray-100 transition"
            >
              Download Resume
            </a>
          </div>
        </div>

        {/* Contact Info */}
        <div className="p-6 border-b border-gray-200 flex flex-col md:flex-row md:justify-between md:items-center">
          <div className="space-y-1">
            <p><span className="font-semibold">Email:</span> <a href="mailto:proff.kona@gmail.com" className="text-blue-500">proff.kona@gmail.com</a></p>
            <p><span className="font-semibold">Phone:</span> +8801796575129</p>
            <p><span className="font-semibold">WhatsApp:</span> +8801796575129</p>
          </div>
          <div className="mt-4 md:mt-0 flex gap-4">
            <a href="https://github.com/AmanaAkterKona" target="_blank" className="text-gray-800 hover:text-blue-600 font-semibold">GitHub</a>
            <a href="https://www.linkedin.com/in/amena-akter-kona/" target="_blank" className="text-gray-800 hover:text-blue-600 font-semibold">LinkedIn</a>
            <a href="#" className="text-gray-800 hover:text-blue-600 font-semibold">Twitter</a>
            <a href="#" className="text-gray-800 hover:text-blue-600 font-semibold">Facebook</a>
          </div>
        </div>

        {/* About Me */}
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-blue-600 mb-2">About Me</h2>
          <p>
            Hi! I am <strong>Amana Akter</strong>, a passionate MERN Stack Developer. I enjoy building scalable web applications and exploring modern web technologies.
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li><strong>Programming Journey:</strong> Started with HTML, CSS, JavaScript, then moved to React, Node.js, Express, MongoDB.</li>
            <li><strong>Work I Enjoy:</strong> Responsive websites, interactive UI components, full-stack apps.</li>
            <li><strong>Hobbies / Interests:</strong> Reading tech blogs, painting, solving coding challenges.</li>
            <li><strong>Personality:</strong> Creative, detail-oriented, eager to learn.</li>
          </ul>
        </div>

        {/* Skills */}
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-blue-600 mb-2">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <h3 className="font-semibold mb-1">Frontend</h3>
              <p>HTML5, CSS3, JavaScript (ES6+), React.js, Tailwind CSS, Framer Motion</p>
            </div>
            <div>
              <h3 className="font-semibold mb-1">Backend</h3>
              <p>Node.js, Express.js, MongoDB, REST APIs</p>
            </div>
            <div>
              <h3 className="font-semibold mb-1">Tools & Others</h3>
              <p>Git & GitHub, VS Code, Postman, Figma</p>
            </div>
          </div>
        </div>

        {/* Education */}
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-blue-600 mb-2">Education</h2>
          <ul className="list-disc list-inside space-y-1">
            <li><strong>HSC:</strong> Shafipur Ideal Public College</li>
            <li><strong>SSC:</strong> Mouchack Scout School and College</li>
          </ul>
        </div>

        {/* Projects */}
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-blue-600 mb-2">Projects</h2>
          {/* Project 1 */}
          <div className="mb-4">
            <h3 className="font-semibold text-lg">Portfolio Website</h3>
            <p className="text-sm text-gray-600">Tech Stack: React, TailwindCSS, Framer Motion</p>
            <p>A modern, responsive portfolio website showcasing skills and projects.</p>
            <p>GitHub: <a href="https://github.com/AmanaAkterKona/kona-portfolio-website.git" target="_blank" className="text-blue-600">View Repo</a></p>
            <p>Challenges: Learning Framer Motion animations and managing complex state.</p>
            <p>Improvements: Plan to integrate a Headless CMS.</p>
          </div>

          {/* Project 2 */}
          <div className="mb-4">
            <h3 className="font-semibold text-lg">E-commerce Website</h3>
            <p className="text-sm text-gray-600">Tech Stack: React.js, Node.js, Express.js, MongoDB</p>
            <p>Online store with product listing, cart, and checkout functionality.</p>
            <p>Live: <a href="https://kids-toys-cute-projects.web.app" target="_blank" className="text-blue-600">View</a></p>
            <p>GitHub: <a href="https://github.com/AmanaAkterKona/kids-toys-cute-my-projects.git" target="_blank" className="text-blue-600">View Repo</a></p>
            <p>Challenges: Payment integration and state management.</p>
            <p>Future Improvements: Add admin dashboard and order tracking.</p>
          </div>

          {/* Project 3 */}
          <div className="mb-4">
            <h3 className="font-semibold text-lg">Task Management App</h3>
            <p className="text-sm text-gray-600">Tech Stack: React.js, Node.js, Express.js, MongoDB</p>
            <p>CRUD application for tasks with user authentication.</p>
            <p>Live: <a href="https://personal-finance-4dfd1.web.app/" target="_blank" className="text-blue-600">View</a></p>
            <p>GitHub: <a href="https://github.com/AmanaAkterKona/personal-finance-management-client.git" target="_blank" className="text-blue-600">View Repo</a></p>
            <p>Challenges: Authentication and data security.</p>
            <p>Future Improvements: Mobile app version and notifications.</p>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 text-center text-gray-500">
          © 2026 Amana Akter | MERN Stack Developer
        </div>
      </div>
    </div>
  );
};

export default Resume;
