import React from "react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white px-6">
      
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center text-center md:text-left">
        
        {/* LEFT CONTENT */}
        <div>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold ">
            Hi, I'm <span className="text-indigo-500">Washim Akhtar</span>
          </h1>

          <h2 className="text-lg sm:text-xl md:text-2xl">
            MERN Stack Developer
          </h2>

          <p className="text-sm sm:text-base md:text-lg">
            I build modern, responsive, and high-performance web applications 
            using React, Node.js, and Tailwind CSS. Passionate about clean UI, 
            scalable architecture, and real-world problem solving.
          </p>

          {/* BUTTONS */}
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="#projects"
              className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-xl font-medium transition"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="px-6 py-3 border border-gray-500 hover:border-indigo-500 rounded-xl font-medium transition"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center">
          <img
            src="/my pic.jpg"  //👈 replace with your image
            alt="Washim"
            className="w-48 h-48 sm:w-60 sm:h-60 md:w-80 md:h-80 object-cover rounded-2xl"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;