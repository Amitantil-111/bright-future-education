import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          Bright Future Education
        </Link>
        <div className="space-x-4">
          <Link to="/" className="hover:text-yellow-300">Home</Link>
          <Link to="/about" className="hover:text-yellow-300">About</Link>
          <Link to="/courses" className="hover:text-yellow-300">Courses</Link>
          <Link to="/students" className="hover:text-yellow-300">Students</Link>
          <Link to="/contact" className="hover:text-yellow-300">Contact</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
