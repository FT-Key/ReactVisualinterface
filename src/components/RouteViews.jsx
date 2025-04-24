import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/home.jsx';
import AboutUs from '../pages/AboutUs.jsx';
import Contact from '../pages/Contact.jsx';
import NotFound from '../pages/NotFound.jsx';
import Footer from './Footer.jsx';
import OilExtractor from '../pages/OilExtractor.jsx';
import Navigationbar from './NavigationBar.jsx';

const RouteViews = () => {
  return (
    <>
      <Navigationbar />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/oilextractor" element={<OilExtractor />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default RouteViews;
