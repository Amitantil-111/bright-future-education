import React from 'react'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <div className="relative bg-cover bg-center h-[85vh] flex items-center justify-center text-white" style={{ backgroundImage: `url('/images/hero.jpg')` }}>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center px-6"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">Welcome to Bright Future Education</h1>
        <p className="text-lg md:text-2xl mb-6 drop-shadow">Empowering students for a brighter tomorrow</p>
        <motion.a
          whileHover={{ scale: 1.1 }}
          href="/courses"
          className="bg-yellow-400 hover:bg-yellow-300 text-black font-semibold py-3 px-6 rounded-full transition duration-300"
        >
          Explore Courses
        </motion.a>
      </motion.div>
    </div>
  )
}

export default Hero
