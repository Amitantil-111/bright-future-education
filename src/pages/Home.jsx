import React from 'react'
import { motion } from 'framer-motion'

const Home = () => {
  return (
    <div>

      {/* Hero Section */}
      <div className="bg-cover bg-center h-[80vh] text-white flex items-center justify-center px-4"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1607746882042-944635dfe10e')" }}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center bg-black bg-opacity-50 p-6 rounded-2xl"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Bright Future Education</h1>
          <p className="text-lg md:text-xl">Empowering students for a brighter tomorrow</p>
        </motion.div>
      </div>

      {/* About Preview */}
      <div className="py-12 px-6 text-center bg-gray-100">
        <h2 className="text-3xl font-bold mb-4">Who We Are</h2>
        <p className="max-w-3xl mx-auto text-gray-700">
          Bright Future Education is dedicated to providing quality education that empowers students to succeed in life.
          We focus on conceptual clarity, practical skills, and personal development.
        </p>
      </div>

      {/* Popular Courses Preview */}
      <div className="py-12 px-6 text-center">
        <h2 className="text-3xl font-bold mb-10">Popular Courses</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {['Mathematics', 'Science', 'English', 'Computer', 'General Knowledge', 'Hindi'].map(course => (
            <div key={course} className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">{course}</h3>
              <p className="text-gray-600">Comprehensive and engaging content for strong fundamentals.</p>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-12 px-6 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-10">What Students Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className="bg-white p-6 rounded-2xl shadow">
            <p className="text-gray-700 italic">"Best institute I’ve ever attended. Teachers are amazing!"</p>
            <p className="mt-4 font-semibold">– Priya Sharma</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow">
            <p className="text-gray-700 italic">"I improved a lot in maths and science, thanks to BFE."</p>
            <p className="mt-4 font-semibold">– Rajat Mehta</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow">
            <p className="text-gray-700 italic">"Highly recommend this place for all students!"</p>
            <p className="mt-4 font-semibold">– Simran Kaur</p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-blue-600 text-white text-center px-6">
        <h2 className="text-3xl font-bold mb-4">Join Bright Future Education Today!</h2>
        <p className="mb-6">Enroll now and start your journey toward academic excellence.</p>
        <a href="#/contact" className="bg-white text-blue-600 font-semibold py-2 px-6 rounded-full hover:bg-gray-200 transition">
          Contact Us
        </a>
      </div>

    </div>
  )
}

export default Home
