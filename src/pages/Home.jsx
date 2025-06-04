import React from "react";
import Hero from "../components/Hero";
import PopularCourses from "../components/PopularCourses";
import Testimonials from "../components/Testimonials";
import CTA from "../components/CTA";

const Home = () => {
  return (
    <div className="scroll-smooth">
      <Hero />
      <PopularCourses />
      <Testimonials />
      <CTA />
    </div>
  );
};

export default Home;
