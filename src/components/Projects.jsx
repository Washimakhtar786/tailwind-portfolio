import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900 px-4">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-800 dark:text-white">
        Projects
      </h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((p, i) => (
          <div key={i} className="bg-gray-100 dark:bg-gray-800 p-6 rounded shadow">
            <h3 className="text-lg font-semibold text-blue-600">{p.title}</h3>

            <p className="text-sm text-gray-700 dark:text-gray-300 my-2">
              {p.description}
            </p>

            <a
              href={p.link}
              target="_blank"
              rel="noreferrer"
              className="text-sm text-blue-500 hover:underline"
            >
              View Code
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}