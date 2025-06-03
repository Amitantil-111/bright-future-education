import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-10">
      <div className="container mx-auto px-4 text-center">
        <p className="mb-2">&copy; {new Date().getFullYear()} Bright Future Education. All rights reserved.</p>
        <p>Designed & Developed by Amit Antil</p>
      </div>
    </footer>
  )
}

export default Footer
