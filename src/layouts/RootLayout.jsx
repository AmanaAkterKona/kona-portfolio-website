import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../pages/Shared/Navbar/Navbar';
import Footer from '../pages/Shared/Footer/Footer';
import CustomCursor from '../pages/CustomCursor';
import About from '../pages/About';
import Skills from '../pages/Skills';
import Projects from '../pages/Projects';
import Contact from '../pages/Contact';

//service_03te4mi
const RootLayout = () => {
  return (
    <div className="relative">
      <CustomCursor />
      <Navbar /> {/* Navbar always on top */}

      <div>
        <Outlet /> {/* এখানে প্রতিটি section আলাদা load হবে */}
      </div>
         <section id="about">
          <About />
        </section>
          <section id="skills">
          <Skills />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="contact">
          <Contact />
        </section>
      <Footer />
    </div>
  );
};

export default RootLayout;