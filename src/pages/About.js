// src/pages/About.jsx
import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.div
      className="p-8 max-w-4xl mx-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <h2 className="text-3xl font-bold mb-4 text-blue-800">About Us</h2>
      <p className="text-gray-700 text-lg leading-relaxed">
        Bright Future Education is dedicated to providing quality education to students from all walks of life. We focus on holistic development, combining academics with practical skills and personal growth.
      </p>
    </motion.div>
  );
}
