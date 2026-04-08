import { motion } from "framer-motion";

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-white dark:bg-gray-900 p-6 rounded-xl max-w-md w-full shadow-lg"
      >
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
          {project.title}
        </h2>

        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {project.details}
        </p>

        <a
          href={project.link}
          target="_blank"
          className="text-blue-500 underline"
        >
          View Code
        </a>

        <button
          onClick={onClose}
          className="mt-4 block w-full bg-red-500 text-white py-2 rounded"
        >
          Close
        </button>
      </motion.div>
    </div>
  );
}