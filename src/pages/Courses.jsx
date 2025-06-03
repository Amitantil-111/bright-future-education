import React from 'react'

const courses = [
  { title: 'Mathematics', description: 'Strengthen your basics and advance problem-solving skills.' },
  { title: 'Science', description: 'Explore Physics, Chemistry, and Biology with real-life applications.' },
  { title: 'English', description: 'Improve grammar, vocabulary, writing, and communication.' },
  { title: 'Hindi', description: 'Learn Hindi literature, grammar, and writing skills.' },
  { title: 'Computer Education', description: 'Learn essential computer skills and basic programming.' },
  { title: 'General Knowledge', description: 'Stay updated with current affairs and logical reasoning.' }
]

const Courses = () => {
  return (
    <div className="p-8 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-10">Our Courses</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300"
          >
            <h3 className="text-2xl font-semibold mb-2">{course.title}</h3>
            <p className="text-gray-600">{course.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Courses
