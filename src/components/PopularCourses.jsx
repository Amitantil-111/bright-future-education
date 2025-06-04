import React from "react";

const courses = [
  "Mathematics",
  "Science",
  "English",
  "Computer",
  "General Knowledge",
  "Social Studies"
];

const PopularCourses = () => {
  return (
    <section id="courses" className="py-20 bg-gray-100 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-blue-700">Our Popular Courses</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {courses.map((course, idx) => (
          <div key={idx} className="bg-white shadow-md p-6 rounded-lg hover:scale-105 transition">
            <h3 className="text-xl font-semibold text-gray-800">{course}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularCourses;
