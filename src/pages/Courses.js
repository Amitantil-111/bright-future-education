import React from 'react';
import { motion } from 'framer-motion';

const courses = [
  {
    title: 'Mathematics',
    description: 'Learn basic to advanced math concepts.',
  },
  {
    title: 'Science',
    description: 'Explore physics, chemistry, and biology.',
  },
  {
    title: 'English',
    description: 'Improve grammar, vocabulary, and communication.',
  },
  {
    title: 'Computer Basics',
    description: 'Introduction to computers and internet.',
  },
  {
    title: 'General Knowledge',
    description: 'Boost your awareness of the world, history, politics, and current affairs.',
  },
];

const Courses = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 py-10 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2 
          initial={{ opacity: 0, y: -50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-blue-800 mb-10"
        >
          Our Courses
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border-t-4 border-blue-500"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <h3 className="text-xl font-semibold text-blue-700 mb-2">{course.title}</h3>
              <p className="text-gray-600">{course.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
