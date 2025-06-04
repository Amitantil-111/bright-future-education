import React from 'react';

const students = [
  {
    name: "Anjali Sharma",
    image: "/images/students/student1.png",
    testimonial: "Bright Future Education ne meri life badal di. Excellent guidance!",
    award: "Top Scorer 2024"
  },
  {
    name: "Rahul Verma",
    image: "/images/students/student2.png",
    testimonial: "Yahaan ke teachers bohot cooperative hain. Thank you BFE!",
    award: "Best Science Project"
  },
  {
    name: "Priya Singh",
    image: "/images/students/student3.png",
    testimonial: "Yeh institute mere sapne sach kar raha hai!",
    award: "Outstanding Performance"
  },
  {
    name: "Karan Mehta",
    image: "/images/students/student4.png",
    testimonial: "Main IIT ke liye yahan prepare kar raha hoon. Faculty is superb.",
    award: "Math Wizard Award"
  },
  {
    name: "Neha Yadav",
    image: "/images/students/student5.png",
    testimonial: "Best learning environment and regular tests helped me a lot.",
    award: "Top Ranker (District Level)"
  },
  {
    name: "Amit Chaudhary",
    image: "/images/students/student6.png",
    testimonial: "BFE ki wajah se mujhe scholarship mili. Highly recommended!",
    award: "Scholarship Winner"
  }
];

const Students = () => {
  return (
    <div className="min-h-screen px-4 py-16 bg-gradient-to-br from-blue-100 to-purple-100">
      <h2 className="text-4xl font-bold text-center mb-10 text-blue-900">Our Star Students</h2>
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {students.map((student, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-2xl transition duration-300"
          >
            <img
              src={student.image}
              alt={student.name}
              className="w-full h-64 object-cover rounded-xl mb-4"
            />
            <h3 className="text-xl font-semibold text-blue-700">{student.name}</h3>
            <p className="text-sm text-gray-600 italic mt-2">"{student.testimonial}"</p>
            <div className="mt-4 text-sm font-medium text-green-700">
              🏆 {student.award}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Students;
