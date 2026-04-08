import { useState } from "react";
import { projects } from "../data/projects";
import ProjectModal from "./ProjectModal";
import { motion } from "framer-motion";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState("All");

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900 px-4">
      
      {/* TITLE */}
      <h2 className="text-3xl font-bold text-center mb-6 text-gray-800 dark:text-white">
        Projects
      </h2>

      {/* FILTER BUTTONS */}
      <div className="flex justify-center gap-4 mb-10">
        {["All", "MERN", "Frontend"].map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 rounded ${
              filter === cat
                ? "bg-blue-600 text-white"
                : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {filteredProjects.map((p) => (
          <motion.div
            key={p.id}
            whileHover={{ scale: 1.05 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow overflow-hidden"
          >
            
            {/* IMAGE */}
            <img
            src={p.image}
            alt={p.title}
            className="w-full h-48 object-cover rounded"
            onError={(e) => {
            e.target.src = "https://via.placeholder.com/400x250?text=Project";
            }}
            />

            <div className="p-4 sm:p-6">
              
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                {p.title}
              </h3>

              <p className="text-sm text-gray-600 dark:text-gray-300 my-2">
                {p.description}
              </p>

              {/* TECH BADGES */}
              <div className="flex flex-wrap gap-2 mb-3">
                {p.tech.map((t, i) => (
                  <span
                    key={i}
                    className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* BUTTONS */}
              <div className="flex justify-between items-center">
                
                <button
                  onClick={() => setSelectedProject(p)}
                  className="text-blue-500 text-sm"
                >
                  View Details
                </button>

                <div className="flex gap-2">
                  <a
                    href={p.link}
                    target="_blank"
                    className="text-sm text-gray-600 dark:text-gray-300"
                  >
                    GitHub
                  </a>

                  <a
                    href={p.demo}
                    target="_blank"
                    className="text-sm text-green-500"
                  >
                    Live
                  </a>
                </div>

              </div>

            </div>
          </motion.div>
        ))}
      </div>

      {/* MODAL */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}