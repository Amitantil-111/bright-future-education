import React from 'react'

const studentImages = [
  '/students/student1.jpg',
  '/students/student2.jpg',
  '/students/student3.jpg',
  '/students/student4.jpg',
  '/students/student5.jpg',
  '/students/student6.jpg',
]

const Students = () => {
  return (
    <div className="p-8 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-10">Our Bright Students</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {studentImages.map((src, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
          >
            <img src={src} alt={`Student ${index + 1}`} className="w-full h-64 object-cover" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Students
