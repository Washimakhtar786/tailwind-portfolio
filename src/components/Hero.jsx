import React from "react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white px-6">
      
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 items-center">
        
        {/* LEFT CONTENT */}
        <div>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Hi, I'm <span className="text-indigo-500">Washim Akhtar</span>
          </h1>

          <h2 className="mt-4 text-2xl md:text-3xl font-semibold text-gray-300">
            MERN Stack Developer
          </h2>

          <p className="mt-6 text-gray-400 text-lg leading-relaxed">
            I build modern, responsive, and high-performance web applications 
            using React, Node.js, and Tailwind CSS. Passionate about clean UI, 
            scalable architecture, and real-world problem solving.
          </p>

          {/* BUTTONS */}
          <div className="mt-8 flex gap-4">
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
            className="w-72 h-72 md:w-96 md:h-96 object-cover rounded-2xl shadow-2xl border-4 border-indigo-500"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;