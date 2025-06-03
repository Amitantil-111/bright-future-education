import React from "react";
import studentBg from "../assets/student-bg.jpg";

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section
        className="h-[90vh] bg-cover bg-center flex items-center justify-center text-white"
        style={{ backgroundImage: `url(${studentBg})` }}
      >
        <div className="bg-black bg-opacity-50 p-10 rounded-2xl text-center max-w-2xl animate__animated animate__fadeInDown">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Welcome to Bright Future Education
          </h1>
          <p className="text-lg md:text-xl">
            Your trusted partner in education for every student’s brighter tomorrow.
          </p>
        </div>
      </section>

      {/* Popular Courses Section */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8 text-blue-900">
            Popular Courses
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "General Knowledge",
                desc: "Boost your awareness with daily facts and quizzes.",
              },
              {
                title: "Spoken English",
                desc: "Improve your communication skills with expert-led sessions.",
              },
              {
                title: "Computer Basics",
                desc: "Hands-on learning with computers, MS Office, Internet, and more.",
              },
            ].map((course, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition"
              >
                <h3 className="text-xl font-bold text-blue-700 mb-2">
                  {course.title}
                </h3>
                <p className="text-gray-600">{course.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-8">
            What Our Students Say
          </h2>
          <div className="grid md:grid-cols-2 gap-10">
            {[
              {
                quote:
                  "Bright Future changed my life! The courses and mentors were amazing.",
                name: "Ravi Sharma",
              },
              {
                quote:
                  "I learned so much about computers and English here. Highly recommend!",
                name: "Pooja Yadav",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-blue-50 p-6 rounded-xl shadow-md"
              >
                <p className="italic text-gray-700 mb-4">
                  “{testimonial.quote}”
                </p>
                <h4 className="text-blue-900 font-semibold">
                  — {testimonial.name}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-blue-900 text-white py-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Start Your Learning Journey Today!</h2>
        <p className="mb-6">Join Bright Future Education and unlock endless opportunities.</p>
        <a
          href="/contact"
          className="bg-yellow-400 text-blue-900 font-bold px-6 py-3 rounded-xl hover:bg-yellow-300 transition"
        >
          Contact Us
        </a>
      </section>
    </>
  );
};

export default Home;
