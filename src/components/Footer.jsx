import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-10 px-6 mt-16">
      <motion.div
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Institute Info */}
        <div>
          <h2 className="text-2xl font-bold mb-2">Bright Future Education</h2>
          <p className="text-gray-300">
            Empowering students for a brighter tomorrow. Join the movement today!
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-gray-300">Home</Link></li>
            <li><Link to="/about" className="hover:text-gray-300">About</Link></li>
            <li><Link to="/courses" className="hover:text-gray-300">Courses</Link></li>
            <li><Link to="/contact" className="hover:text-gray-300">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Contact Us</h3>
          <p className="flex items-center gap-2 text-gray-300"><FaPhone /> 8053311343</p>
          <p className="flex items-center gap-2 text-gray-300"><FaEnvelope /> amitantil0098@gmail.com</p>
          <p className="flex items-center gap-2 text-gray-300"><FaMapMarkerAlt /> Sonipat, Haryana</p>
        </div>
      </motion.div>

      {/* Footer Bottom */}
      <div className="text-center text-gray-400 mt-10 text-sm">
        © {new Date().getFullYear()} Bright Future Education. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
