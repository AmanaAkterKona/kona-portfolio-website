import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../pages/Shared/Navbar/Navbar';
import Footer from '../pages/Shared/Footer/Footer';
//import CustomCursor from '../pages/CustomCursor';
import About from '../pages/About';
import Skills from '../pages/Skills';
import Projects from '../pages/Projects';
import Contact from '../pages/Contact';

const RootLayout = () => {
  return (
    <div className="relative bg-[#060e22]"> {/* এখানে bg যোগ করুন */}
      
      <Navbar /> 

      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default RootLayout;