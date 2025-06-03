import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="bg-cover bg-center h-[90vh] relative" style={{ backgroundImage: `url('/assets/student-bg.jpg')` }}>
      <div className="bg-black bg-opacity-60 absolute inset-0"></div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-4"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Bright Future Education</h1>
        <p className="text-lg md:text-2xl mb-6 max-w-2xl">Empowering students through quality learning and modern teaching methods.</p>
        <Link to="/courses" className="bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-500 transition duration-300">
          Explore Courses
        </Link>
      </motion.div>
    </section>
  );
};

export default Hero;
