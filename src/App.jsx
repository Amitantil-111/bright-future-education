// src/App.jsx

import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import About from "./pages/About";
import Courses from "./pages/Courses";
import Students from "./pages/Students";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/students" element={<Students />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
}

export default App;
