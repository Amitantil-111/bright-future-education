import React from 'react';
import heroBg from '../assets/hero-bg.png';

const Hero = () => {
  return (
    <section
      className="bg-cover bg-center h-[600px] flex items-center justify-center text-white"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Bright Future Education</h1>
        <p className="text-lg md:text-2xl">Empowering Students for a Brighter Tomorrow</p>
      </div>
    </section>
  );
};

export default Hero;
