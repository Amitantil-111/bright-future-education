import React from 'react'
import { motion } from 'framer-motion'

const testimonials = [
  {
    name: "Riya Sharma",
    text: "This institute changed my life! The teachers are amazing.",
  },
  {
    name: "Aman Verma",
    text: "Highly recommend Bright Future Education for serious learners.",
  },
  {
    name: "Pooja Singh",
    text: "The learning environment is excellent!",
  },
]

const Testimonials = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          className="text-3xl font-bold mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          What Our Students Say
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
            >
              <p className="text-gray-700 italic mb-4">"{t.text}"</p>
              <h4 className="text-lg font-semibold">{t.name}</h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
