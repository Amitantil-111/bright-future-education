// src/pages/Contact.jsx
import React from "react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <motion.div
      className="p-8 max-w-xl mx-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <h2 className="text-3xl font-bold mb-4 text-red-600">Contact Us</h2>
      <form className="space-y-4">
        <input
          type="text"
          placeholder="Name"
          className="w-full px-4 py-2 border rounded"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full px-4 py-2 border rounded"
        />
        <textarea
          placeholder="Your Message"
          rows="4"
          className="w-full px-4 py-2 border rounded"
        />
        <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
          Send Message
        </button>
      </form>
    </motion.div>
  );
}
