import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/home.jsx';
import AboutUs from '../pages/AboutUs.jsx';
import Contact from '../pages/Contact.jsx';
import NotFound from '../pages/NotFound.jsx';

const RouteViews = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/aboutus" element={<AboutUs />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default RouteViews;
