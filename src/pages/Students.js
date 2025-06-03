// src/pages/Students.jsx
import React from "react";
import { motion } from "framer-motion";

const students = [
  "/students/1.jpg",
  "/students/2.jpg",
  "/students/3.jpg",
  "/students/4.jpg",
  "/students/5.jpg",
  "/students/6.jpg",
];

export default function Students() {
  return (
    <motion.div
      className="p-8 max-w-6xl mx-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <h2 className="text-3xl font-bold mb-6 text-purple-700">Our Students</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {students.map((img, idx) => (
          <motion.img
            key={idx}
            src={img}
            alt={`Student ${idx + 1}`}
            className="rounded-lg shadow-md"
            whileHover={{ scale: 1.05 }}
          />
        ))}
      </div>
    </motion.div>
  );
}
