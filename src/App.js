import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"; // ✅ Footer Import

import Home from "./pages/Home";
import About from "./pages/About";
import Courses from "./pages/Courses";
import Students from "./pages/Students";
import Contact from "./pages/Contact"; // ✅ Contact Page Import

function App() {
  return (
    <Router>
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/students" element={<Students />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer /> {/* ✅ Footer Added Here */}
      </>
    </Router>
  );
}

export default App;
