import React from "react";
import { motion } from "framer-motion";

const courses = [
  {
    title: "Mathematics",
    description: "Strengthen your core concepts and problem-solving skills.",
  },
  {
    title: "Science",
    description: "Learn with experiments and real-world applications.",
  },
  {
    title: "English",
    description: "Improve grammar, vocabulary, and communication skills.",
  },
  {
    title: "Computer",
    description: "Master the basics of computing and digital literacy.",
  },
  {
    title: "General Knowledge",
    description: "Stay updated and improve awareness of the world.",
  },
  {
    title: "Hindi",
    description: "Enhance your command over language and literature.",
  },
];

const Courses = () => {
  return (
    <div className="bg-white min-h-screen py-16 px-6">
      <motion.h1
        className="text-4xl font-bold text-center text-blue-700 mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Our Courses
      </motion.h1>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {courses.map((course, index) => (
          <motion.div
            key={index}
            className="bg-blue-50 p-6 rounded-2xl shadow hover:shadow-lg transition"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-xl font-semibold text-blue-600 mb-2">{course.title}</h2>
            <p className="text-gray-700">{course.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
