export default function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center bg-gray-100 dark:bg-gray-800 px-4">
      <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 dark:text-white mb-4">
        Hi, I'm Washim Akhtar
      </h2>

      <p className="text-gray-600 dark:text-gray-300 max-w-xl">
        MERN Stack Developer | React Developer | Problem Solver
      </p>

      <a
        href="#projects"
        className="mt-6 inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
      >
        View Projects
      </a>
    </section>
  );
}