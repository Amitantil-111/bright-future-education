import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="bg-white min-h-screen py-16 px-6">
      <motion.h1
        className="text-4xl font-bold text-center text-blue-700 mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        About Bright Future Education
      </motion.h1>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Mission */}
        <motion.div
          className="bg-blue-50 p-8 rounded-2xl shadow"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">Our Mission</h2>
          <p className="text-gray-700 leading-relaxed">
            At Bright Future Education, our mission is to empower students with
            the knowledge and skills needed to succeed in academics and life.
            We believe in personalized teaching, interactive learning, and
            consistent support to build strong foundations for every student.
          </p>
        </motion.div>

        {/* Vision */}
        <motion.div
          className="bg-blue-50 p-8 rounded-2xl shadow"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">Our Vision</h2>
          <p className="text-gray-700 leading-relaxed">
            Our vision is to become a leading educational platform that
            transforms students into confident and capable individuals. We aim
            to nurture curiosity, promote critical thinking, and create a
            supportive environment that fosters academic and personal growth.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
