import React from 'react'

const Contact = () => {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-10">Contact Us</h2>
      
      <div className="grid md:grid-cols-2 gap-10">
        
        {/* Contact Form */}
        <form className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Name</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Message</label>
            <textarea
              rows="4"
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Type your message"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>

        {/* Personal Details */}
        <div className="bg-gray-100 rounded-xl p-6 shadow-md">
          <h3 className="text-2xl font-semibold mb-4">Contact Details</h3>
          <p><strong>Name:</strong> Amit</p>
          <p><strong>Phone:</strong> 8053311343</p>
          <p><strong>Email:</strong> amitantil0098@gmail.com</p>
          <p><strong>Location:</strong> Sonipat, Haryana</p>
        </div>
      </div>
    </div>
  )
}

export default Contact
