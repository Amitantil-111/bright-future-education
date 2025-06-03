import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-10 mt-20">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-xl font-bold mb-4">Bright Future Education</h2>
          <p className="text-sm">
            We provide quality education to build a brighter future for every student.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/courses">Courses</Link></li>
            <li><Link to="/students">Students</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
          <p className="text-sm">📍 City, India</p>
          <p className="text-sm">📞 +91-9876543210</p>
          <p className="text-sm">✉️ info@brightfuture.com</p>
        </div>
      </div>

      <div className="text-center text-sm mt-10 border-t border-blue-700 pt-6">
        © {new Date().getFullYear()} Bright Future Education. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
