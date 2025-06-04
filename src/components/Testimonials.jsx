import React from "react";

const studentImages = [
  "/students/student1.jpg",
  "/students/student2.jpg",
  "/students/student3.jpg",
  "/students/student4.jpg",
  "/students/student5.jpg",
  "/students/student6.jpg",
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-white text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-blue-700">What Our Students Say</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {studentImages.map((src, idx) => (
          <div key={idx} className="bg-gray-100 p-4 rounded-lg shadow hover:scale-105 transition">
            <img
              src={src}
              alt={`Student ${idx + 1}`}
              className="w-full h-60 object-cover rounded-lg mb-4"
            />
            <p className="text-gray-700 text-sm">
              “Bright Future helped me grow and shine academically. Thank you!”
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
