import React from "react";
import { motion } from "framer-motion";

const studentImages = [1, 2, 3, 4, 5, 6];

const Students = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-16 px-6">
      <motion.h1
        className="text-4xl font-bold text-center text-blue-700 mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Our Bright Students
      </motion.h1>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {studentImages.map((num, index) => (
          <motion.div
            key={num}
            className="overflow-hidden rounded-2xl shadow-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <img
              src={`/students/student${num}.jpg`}
              alt={`Student ${num}`}
              className="w-full h-72 object-cover hover:scale-105 transition-transform duration-300"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Students;
