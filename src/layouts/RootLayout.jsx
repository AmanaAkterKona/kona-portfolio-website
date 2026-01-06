import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../pages/Shared/Navbar/Navbar';
import Footer from '../pages/Shared/Footer/Footer';
import CustomCursor from '../pages/CustomCursor';


const RootLayout = () => {
  return (
    <div className="relative">
      <CustomCursor />
      <Navbar /> {/* Navbar always on top */}

      <div>
        <Outlet /> {/* এখানে প্রতিটি section আলাদা load হবে */}
      </div>

      <Footer />
    </div>
  );
};

export default RootLayout;